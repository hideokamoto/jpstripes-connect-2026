// PDF.js でスライドを 1 枚ずつ表示するビューア。
// PresentationPage が data-presentation-viewer / data-pdf を持つ器を SSR する。
import * as pdfjsLib from '/js/pdfjs/pdf.min.mjs';

pdfjsLib.GlobalWorkerOptions.workerSrc = '/js/pdfjs/pdf.worker.min.mjs';

const root = document.querySelector('[data-presentation-viewer]');
if (!root) throw new Error('presentation viewer root not found');

const pdfUrl = root.dataset.pdf;
if (!pdfUrl) throw new Error('data-pdf is required');

const canvas = root.querySelector('canvas');
const slide = root.querySelector('.presentation-slide');
const indicator = root.querySelector('[data-page-indicator]');
const loading = root.querySelector('[data-presentation-loading]');
const errorEl = root.querySelector('[data-presentation-error]');
const prevBtn = root.querySelector('[data-presentation-prev]');
const nextBtn = root.querySelector('[data-presentation-next]');
const fullscreenBtn = root.querySelector('[data-presentation-fullscreen]');

if (!canvas || !slide || !indicator || !loading || !errorEl || !prevBtn || !nextBtn || !fullscreenBtn) {
  throw new Error('presentation viewer markup is incomplete');
}

const ctx = canvas.getContext('2d');
if (!ctx) throw new Error('canvas 2d context unavailable');

let pdfDoc = null;
let pageNum = 1;
let pageCount = 0;
let rendering = false;
let pendingPage = null;

function showError(message) {
  loading.hidden = true;
  errorEl.hidden = false;
  errorEl.textContent = message;
  root.classList.add('is-error');
}

function updateControls() {
  indicator.textContent = `${pageNum} / ${pageCount}`;
  prevBtn.disabled = pageNum <= 1;
  nextBtn.disabled = pageNum >= pageCount;
}

async function renderPage(num) {
  if (!pdfDoc) return;
  rendering = true;
  root.classList.add('is-rendering');

  try {
    const page = await pdfDoc.getPage(num);
    const baseViewport = page.getViewport({ scale: 1 });
    const cssWidth = slide.clientWidth || root.clientWidth;
    const scale = cssWidth / baseViewport.width;
    const viewport = page.getViewport({ scale });
    const outputScale = window.devicePixelRatio || 1;

    canvas.width = Math.floor(viewport.width * outputScale);
    canvas.height = Math.floor(viewport.height * outputScale);
    canvas.style.width = `${viewport.width}px`;
    canvas.style.height = `${viewport.height}px`;

    const renderContext = {
      canvasContext: ctx,
      viewport,
      transform: outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : undefined,
    };

    await page.render(renderContext).promise;
    pageNum = num;
    updateControls();
    loading.hidden = true;
    root.classList.remove('is-loading');
  } catch (err) {
    showError('スライドの表示に失敗しました。');
    console.error(err);
  } finally {
    rendering = false;
    root.classList.remove('is-rendering');
    if (pendingPage !== null) {
      const next = pendingPage;
      pendingPage = null;
      void renderPage(next);
    }
  }
}

function queueRenderPage(num) {
  if (num < 1 || num > pageCount) return;
  if (rendering) {
    pendingPage = num;
    return;
  }
  void renderPage(num);
}

function goPrev() {
  queueRenderPage(pageNum - 1);
}

function goNext() {
  queueRenderPage(pageNum + 1);
}

function toggleFullscreen() {
  if (document.fullscreenElement) {
    void document.exitFullscreen();
    return;
  }
  void root.requestFullscreen?.();
}

prevBtn.addEventListener('click', goPrev);
nextBtn.addEventListener('click', goNext);
fullscreenBtn.addEventListener('click', toggleFullscreen);

document.addEventListener('keydown', (event) => {
  if (!root.isConnected) return;
  const tag = event.target instanceof HTMLElement ? event.target.tagName : '';
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

  if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
    event.preventDefault();
    goPrev();
  } else if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') {
    event.preventDefault();
    goNext();
  } else if (event.key === 'f' || event.key === 'F') {
    event.preventDefault();
    toggleFullscreen();
  } else if (event.key === 'Home') {
    event.preventDefault();
    queueRenderPage(1);
  } else if (event.key === 'End') {
    event.preventDefault();
    queueRenderPage(pageCount);
  }
});

let touchStartX = null;
root.addEventListener(
  'touchstart',
  (event) => {
    touchStartX = event.changedTouches[0]?.clientX ?? null;
  },
  { passive: true }
);
root.addEventListener(
  'touchend',
  (event) => {
    if (touchStartX === null) return;
    const touchEndX = event.changedTouches[0]?.clientX;
    if (touchEndX == null) return;
    const delta = touchEndX - touchStartX;
    touchStartX = null;
    if (Math.abs(delta) < 48) return;
    if (delta < 0) goNext();
    else goPrev();
  },
  { passive: true }
);

let resizeTimer = null;
window.addEventListener('resize', () => {
  if (!pdfDoc) return;
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(() => queueRenderPage(pageNum), 120);
});

try {
  const task = pdfjsLib.getDocument(pdfUrl);
  pdfDoc = await task.promise;
  pageCount = pdfDoc.numPages;
  if (pageCount < 1) {
    showError('スライドが見つかりませんでした。');
  } else {
    updateControls();
    await renderPage(1);
  }
} catch (err) {
  showError('PDF の読み込みに失敗しました。');
  console.error(err);
}

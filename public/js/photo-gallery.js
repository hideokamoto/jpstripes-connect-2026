// イベント写真ギャラリー。SSR 済みの .photo-grid / .photo-lightbox を拡張する。
(() => {
  const grid = document.querySelector('[data-photo-gallery]');
  if (!grid) return;

  const items = Array.from(grid.querySelectorAll('.photo-item[data-photo-index][data-src]'));
  if (items.length === 0) return;

  const photos = items.map((btn) => btn.getAttribute('data-src') || '');

  const lightbox = document.querySelector('.photo-lightbox');
  if (!lightbox) return;

  const countEl = lightbox.querySelector('.photo-lightbox-count');
  const closeBtn = lightbox.querySelector('.photo-lightbox-close');
  const prevBtn = lightbox.querySelector('.photo-lightbox-nav.prev');
  const nextBtn = lightbox.querySelector('.photo-lightbox-nav.next');
  const imgEl = lightbox.querySelector('.photo-lightbox-img');
  const chrome = lightbox.querySelector('.photo-lightbox-chrome');

  let index = null;
  let prevOverflow = '';

  function open(i) {
    index = i;
    if (!imgEl) return;
    imgEl.src = photos[i];
    imgEl.alt = `JP_Stripes Connect 2026 写真 ${i + 1}`;
    if (countEl) countEl.textContent = `${i + 1} / ${photos.length}`;
    lightbox.removeAttribute('hidden');
    prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  }

  function close() {
    index = null;
    lightbox.setAttribute('hidden', '');
    document.body.style.overflow = prevOverflow;
    if (imgEl) {
      imgEl.src = '';
      imgEl.alt = '';
    }
  }

  function go(delta) {
    if (index === null) return;
    open((index + delta + photos.length) % photos.length);
  }

  items.forEach((btn) => {
    btn.addEventListener('click', () => {
      const i = Number(btn.getAttribute('data-photo-index'));
      if (!Number.isNaN(i)) open(i);
    });
  });

  closeBtn?.addEventListener('click', close);
  prevBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    go(-1);
  });
  nextBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    go(1);
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) close();
  });
  chrome?.addEventListener('click', (e) => e.stopPropagation());
  imgEl?.addEventListener('click', (e) => e.stopPropagation());

  window.addEventListener('keydown', (e) => {
    if (index === null) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') go(-1);
    if (e.key === 'ArrowRight') go(1);
  });
})();

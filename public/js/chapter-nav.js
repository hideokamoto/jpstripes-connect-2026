// テーマ本文の章ナビ（.chapters）。スクロール位置に応じて、
// ビューポート上半分を過ぎた最後の見出しに対応するリンクへ 'on' を付ける。
(() => {
  const links = Array.from(document.querySelectorAll('.chapters a[href^="#"]'));
  if (links.length === 0) return;
  const targets = links.map((a) => {
    const href = a.getAttribute('href');
    if (!href || href === '#') return null;
    try {
      return document.querySelector(href);
    } catch {
      return null;
    }
  });

  function onScroll() {
    let active = 0;
    targets.forEach((el, i) => {
      if (el && el.getBoundingClientRect().top < window.innerHeight * 0.5) {
        active = i;
      }
    });
    links.forEach((a, i) => a.classList.toggle('on', i === active));
  }

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();

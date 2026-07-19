// 開場までのカウントダウン。SSR が出したゼロ埋めの器（.cd-wrap[data-countdown]）を
// 1 秒ごとに更新する。桁が変わった時だけ入れ替わりアニメーションを付ける。
(() => {
  const root = document.querySelector('.cd-wrap[data-countdown]');
  if (!root) return;
  const target = Date.parse(root.getAttribute('data-countdown'));
  if (Number.isNaN(target)) return;

  const units = {
    d: root.querySelectorAll('[data-unit="d"] .digit'),
    h: root.querySelectorAll('[data-unit="h"] .digit'),
    m: root.querySelectorAll('[data-unit="m"] .digit'),
    s: root.querySelectorAll('[data-unit="s"] .digit'),
  };

  function compute() {
    const diff = target - Date.now();
    return {
      d: String(Math.max(0, Math.floor(diff / 86400000))).padStart(units.d.length, '0'),
      h: String(Math.max(0, Math.floor((diff % 86400000) / 3600000))).padStart(2, '0'),
      m: String(Math.max(0, Math.floor((diff % 3600000) / 60000))).padStart(2, '0'),
      s: String(Math.max(0, Math.floor((diff % 60000) / 1000))).padStart(2, '0'),
    };
  }

  function setDigits(spans, value) {
    const digits = value.slice(-spans.length).padStart(spans.length, '0').split('');
    spans.forEach((span, i) => {
      if (span.textContent === digits[i]) return;
      span.textContent = digits[i];
      if (span.animate) {
        span.animate(
          [
            { transform: 'translateY(-30%)', opacity: 0 },
            { transform: 'translateY(0)', opacity: 1 },
          ],
          { duration: 300, easing: 'cubic-bezier(.5,1.6,.4,1)' }
        );
      }
    });
  }

  function render() {
    const parts = compute();
    setDigits(units.d, parts.d);
    setDigits(units.h, parts.h);
    setDigits(units.m, parts.m);
    setDigits(units.s, parts.s);
  }

  render();
  setInterval(render, 1000);
})();

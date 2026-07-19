// 開場までのカウントダウン。SSR が出したゼロ埋めの器（.cd-wrap[data-countdown]）を
// 1 秒ごとに更新する。桁が変わった時だけ入れ替わりアニメーションを付ける。
(() => {
  const root = document.querySelector('.cd-wrap[data-countdown]');
  if (!root) return;
  const target = Date.parse(root.getAttribute('data-countdown'));
  if (Number.isNaN(target)) return;

  const containers = {
    d: root.querySelector('[data-unit="d"]'),
    h: root.querySelector('[data-unit="h"]'),
    m: root.querySelector('[data-unit="m"]'),
    s: root.querySelector('[data-unit="s"]'),
  };

  function compute() {
    const diff = Math.max(0, target - Date.now());
    return {
      d: String(Math.floor(diff / 86400000)),
      h: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'),
      m: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
      s: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'),
    };
  }

  // SSR は固定桁数（日は 3 桁）で .digit 要素を出すが、実際の日数がそれを
  // 超えても切り詰めず表示できるよう、必要なら先頭に .digit 要素を足す。
  function setDigits(container, value) {
    if (!container) return;
    let spans = Array.from(container.querySelectorAll('.digit'));
    while (value.length > spans.length) {
      const span = document.createElement('span');
      span.className = 'digit';
      span.textContent = '0';
      container.insertBefore(span, container.firstChild);
      spans = Array.from(container.querySelectorAll('.digit'));
    }
    const digits = value.padStart(spans.length, '0').split('');
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
    setDigits(containers.d, parts.d);
    setDigits(containers.h, parts.h);
    setDigits(containers.m, parts.m);
    setDigits(containers.s, parts.s);
  }

  render();
  setInterval(render, 1000);
})();

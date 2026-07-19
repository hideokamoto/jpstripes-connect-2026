// Geolonia の地図が 5 秒経っても初期化されない場合、
// SSR が hidden で出している Google Maps へのフォールバックリンクを表示する。
(() => {
  const figure = document.querySelector('.venue-figure');
  if (!figure) return;
  const map = figure.querySelector('.geolonia');
  const fallback = figure.querySelector('.map-fallback');
  if (!map || !fallback) return;

  setTimeout(() => {
    if (!map.querySelector('.maplibregl-canvas')) {
      fallback.hidden = false;
    }
  }, 5000);
})();

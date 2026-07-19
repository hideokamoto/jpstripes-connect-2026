// チケット申込枚数の表示。webhook Worker の公開集計エンドポイント（GET /stats）から
// PII を含まない種別ごとの累計枚数を取得し、SSR が出した器に流し込む。
// 取得失敗・タイムアウト・件数ゼロ時は何も表示しない（販促表示のため静かにフォールバック）。
(() => {
  const el = document.querySelector('[data-sales-count]');
  if (!el) return;
  const endpoint = el.getAttribute('data-endpoint');
  if (!endpoint) return;

  // 件数は非負の安全な整数のみ受け付ける（負数・小数・不正値を表示前に弾く）。
  const isCount = (v) => typeof v === 'number' && Number.isSafeInteger(v) && v >= 0;
  const isStats = (d) =>
    typeof d === 'object' && d !== null && isCount(d.total) && isCount(d.honpen) && isCount(d.konshinkai);

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);

  fetch(endpoint, { signal: controller.signal })
    .then((res) => (res.ok ? res.json() : null))
    .then((data) => {
      if (!isStats(data) || data.total <= 0) return;
      const fmt = (n) => n.toLocaleString('ja-JP');
      el.className = 'sales-count';
      el.setAttribute('role', 'status');
      el.setAttribute('aria-live', 'polite');

      const total = document.createElement('span');
      total.className = 'sales-count-total';
      const em = document.createElement('em');
      em.textContent = fmt(data.total);
      total.append('これまでに ', em, ' 枚 申し込まれました');

      const breakdown = document.createElement('span');
      breakdown.className = 'sales-count-breakdown';
      const sep = document.createElement('span');
      sep.className = 'sep';
      sep.textContent = '・';
      breakdown.append(`本編 ${fmt(data.honpen)}`, sep, `懇親会 ${fmt(data.konshinkai)}`);

      el.replaceChildren(total, breakdown);
    })
    .catch(() => {
      // 取得失敗・中断時は静かに非表示のままにする。
    })
    .finally(() => clearTimeout(timeoutId));
})();

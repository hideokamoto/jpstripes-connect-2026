// チケット申込枚数の表示。SSR では空の器（data-endpoint 付き）だけを出し、
// /js/sales-count.js（vanilla JS）が webhook Worker の /stats を fetch して
// 中身とスタイル用クラスを与える。取得失敗・件数ゼロ時は何も表示されない。
// endpoint 未設定（STATS_API_URL なし）の場合は器ごと描画しない。
export function SalesCount({ endpoint }: { endpoint?: string }) {
  if (!endpoint) return null;
  return (
    <>
      <div data-sales-count data-endpoint={endpoint}></div>
      <script src="/js/sales-count.js" defer></script>
    </>
  );
}

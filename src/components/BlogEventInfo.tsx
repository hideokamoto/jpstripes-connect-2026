import Link from 'next/link';

// イベントの基本情報。トップページ（Hero / Venue / Theme）と同じ内容を、
// ブログ記事の読者がページを離れずに確認できるようにまとめたカード。
export function BlogEventInfo() {
  return (
    <aside className="blog-event" aria-label="イベント概要">
      <div className="blog-event-head">
        <span className="blog-event-eyebrow">JP_Stripes Connect 2026</span>
        <h2 className="blog-event-theme">AI時代のマネタイズ方法を探そう</h2>
      </div>
      <dl className="blog-event-meta">
        <div className="blog-event-row">
          <dt>Date</dt>
          <dd>
            2026.08.01<span className="small">Saturday · 12:30 — 18:00</span>
          </dd>
        </div>
        <div className="blog-event-row">
          <dt>Place</dt>
          <dd>
            Yokohama
            <span className="small">岩崎学園情報科学専門学校・相鉄岩崎学園ビル5F</span>
          </dd>
        </div>
        <div className="blog-event-row">
          <dt>Theme</dt>
          <dd>
            AI時代のマネタイズ
            <span className="small">何を売り、いくらに値づけし、どう課金するか</span>
          </dd>
        </div>
      </dl>
      <div className="blog-event-links">
        <Link href="/#theme">テーマを読む <span aria-hidden="true">→</span></Link>
        <Link href="/#venue">会場・アクセス <span aria-hidden="true">→</span></Link>
        <Link href="/tickets/">参加チケット <span aria-hidden="true">→</span></Link>
      </div>
    </aside>
  );
}

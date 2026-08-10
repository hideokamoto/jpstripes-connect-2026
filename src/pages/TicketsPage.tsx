import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';

export function TicketsPage() {
  return (
    <>
      <Nav />
      <main className="tickets-page">
        <div className="container">
          <article className="tickets">
            <header className="tickets-head">
              <div className="num">Registration — 受付終了</div>
              <h1>
                ご参加
                <br />
                <em>ありがとうございました。</em>
              </h1>
              <p className="deck">
                JP_Stripes Connect 2026（2026.08.01 Sat・Yokohama）は無事に終了しました。参加申し込みの受付は終了しています。当日の様子は写真ページでご覧いただけます。
              </p>
              <dl className="tickets-meta">
                <div>
                  <dt>Date</dt>
                  <dd>
                    2026.08.01 Sat
                    <span className="small">本編 12:30 — 18:00 / 懇親会 18:30 —</span>
                  </dd>
                </div>
                <div>
                  <dt>Place</dt>
                  <dd>
                    Yokohama
                    <span className="small">情報科学専門学校・相鉄岩崎学園ビル5F</span>
                  </dd>
                </div>
              </dl>
              <div className="hero-cta">
                <a className="btn btn-primary" href="/photos/">
                  イベント写真を見る →
                </a>
              </div>
            </header>

            <p className="ticket-note">
              懇親会参加費に関するお問い合わせは
              <a href="/legal/tokushoho/">特定商取引法に基づく表記</a>
              を、キャンセル・返金については
              <a href="/legal/cancellation/">キャンセル・返金ポリシー</a>
              をご確認ください。
            </p>

            <nav className="legal-nav">
              <a href="/">← Back to Connect 2026</a>
            </nav>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}

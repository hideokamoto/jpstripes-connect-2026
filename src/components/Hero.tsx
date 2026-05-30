import { Countdown } from './Countdown';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="issue">
          <span>Issue 2026 · vol.03</span>
          <span>Yokohama, Japan</span>
          <span className="ln"></span>
          <span className="e">2026.08.01 Sat</span>
        </div>

        <div className="date-stamp">
          <div className="ring">8/1</div>
          <div>2026</div>
        </div>

        <h1 className="hero-mast">
          AI時代の<br />
          <em>マネタイズ</em>方法を探そう
        </h1>

        <div className="hero-grid">
          <div>
            <p className="hero-lead">
              AIで何を売り、いくらに値づけし、どう課金するか。正解がまだ出そろっていないこの問いを、全国の現場と一緒に探す、年に一度の場です。2026年、AIの原価が料金の前提を変え、エージェントが買い手にも売り手にもなりはじめました。社内に経験者がいない領域だからこそ、ひとりで決めずに、現場の判断を持ち寄って探しましょう。
            </p>
            <div className="hero-cta">
              <button className="btn btn-primary" type="button" disabled aria-disabled="true">
                Connpass登録 — 準備中
              </button>
              <a className="btn btn-ghost" href="#theme">Read the Theme →</a>
            </div>
          </div>
          <div className="hero-meta">
            <dl>
              <dt>Date</dt>
              <dd>
                2026.08.01<span className="small">Saturday · 12:30 — 18:00</span>
              </dd>
              <dt>Place</dt>
              <dd>
                Yokohama<span className="small">岩崎学園情報科学専門学校・相鉄岩崎学園ビル5F</span>
              </dd>
              <dt>Edition</dt>
              <dd>
                vol. 03<span className="small">JP_Stripes 年次カンファレンス</span>
              </dd>
            </dl>
          </div>
        </div>

        <Countdown />
      </div>
    </section>
  );
}

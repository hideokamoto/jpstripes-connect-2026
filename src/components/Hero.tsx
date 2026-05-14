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
          AI時代のマネタイズ方法を探そう
        </h1>

        <div className="hero-grid">
          <div>
            <p className="hero-lead">
              <span className="drop">運</span>
              用にはステージング環境がない。価格改定は本番でしか試せない。チャーン対策の結果は、解約数でしか分からない。— ぶっつけ本番の決済を、コミュニティの経験で支え合う、年に一度の1日。
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

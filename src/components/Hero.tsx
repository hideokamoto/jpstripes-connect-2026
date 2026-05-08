import { Countdown } from './Countdown';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="issue">
          <span>Issue 2026 · vol.07</span>
          <span>Yokohama, Japan</span>
          <span className="ln"></span>
          <span className="e">2026.08.01 Sat</span>
        </div>

        <div className="date-stamp">
          <div className="ring">8/1</div>
          <div>2026</div>
        </div>

        <h1 className="hero-mast">
          決済の判断を、<br />
          <em>一人で</em>抱え<span className="quiet">ない。</span>
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
                Yokohama<span className="small">みなとみらい・会場詳細は近日</span>
              </dd>
              <dt>Edition</dt>
              <dd>
                vol. 07<span className="small">JP_Stripes 年次カンファレンス</span>
              </dd>
            </dl>
          </div>
        </div>

        <Countdown />
      </div>
    </section>
  );
}

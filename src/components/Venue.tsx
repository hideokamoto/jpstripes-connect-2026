export function Venue() {
  return (
    <section className="s" id="venue">
      <div className="container">
        <div className="section-mast">
          <div>
            <div className="num">№ 04 — Venue</div>
            <h2>
              Yokohama,
              <br />
              <em>once again.</em>
            </h2>
          </div>
          <p className="deck">2025に続き、横浜での開催。岩崎学園情報科学専門学校にて。</p>
        </div>

        <div className="venue-block">
          <div className="venue-figure">
            <svg viewBox="0 0 500 400" preserveAspectRatio="none" aria-hidden="true" focusable="false">
              <defs>
                <pattern id="gridB" width="25" height="25" patternUnits="userSpaceOnUse">
                  <path
                    d="M 25 0 L 0 0 0 25"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.4"
                    opacity="0.25"
                  />
                </pattern>
              </defs>
              <rect width="500" height="400" fill="url(#gridB)" />
              <path
                d="M 0 240 Q 120 215 220 230 T 500 270 L 500 400 L 0 400 Z"
                fill="currentColor"
                opacity="0.06"
              />
              <path
                d="M 130 130 L 380 130 L 410 290 L 100 290 Z"
                fill="currentColor"
                opacity="0.04"
              />
              <circle
                cx="280"
                cy="175"
                r="48"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.4"
              />
              <circle
                cx="280"
                cy="175"
                r="80"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.25"
              />
            </svg>
            <div className="stamp">
              横浜・横浜駅西口
              <span className="small">35.4660° N · 139.6197° E</span>
            </div>
            <div className="pin"></div>
          </div>
          <div className="venue-text">
            <h3>
              <a
                href="https://isc.iwasaki.ac.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                岩崎学園
                <br />
                <em>情報科学専門学校</em>
              </a>
            </h3>
            <div className="place">
              相鉄岩崎学園ビル 5F<br />
              神奈川県横浜市西区南幸2-1-1
            </div>
            <div className="access">
              <h4>Access</h4>
              <ul>
                <li>
                  <span className="k">JR各線 / 相鉄線 / 東急線 / 横浜市営地下鉄</span>横浜駅 西口 徒歩5分
                </li>
                <li>
                  <span className="k">京急線</span>横浜駅 徒歩5分
                </li>
                <li>
                  <span className="k">羽田空港から</span>京急で約25分
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

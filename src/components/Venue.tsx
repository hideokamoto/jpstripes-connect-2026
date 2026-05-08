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
          <p className="deck">2025に続き、横浜での開催。会場の詳細はまもなく。</p>
        </div>

        <div className="venue-block">
          <div className="venue-figure">
            <svg viewBox="0 0 500 400" preserveAspectRatio="none">
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
              横浜・みなとみらい
              <span className="small">35.4628° N · 139.6253° E</span>
            </div>
            <div className="pin"></div>
          </div>
          <div className="venue-text">
            <h3>
              Venue
              <br />
              <em>— TBA</em>
            </h3>
            <div className="place">
              神奈川県横浜市・みなとみらい地区。桜木町／みなとみらい駅から徒歩5分圏内の会場を予定しています。
            </div>
            <div className="access">
              <h4>Access</h4>
              <ul>
                <li>
                  <span className="k">JR / 横浜市営</span>桜木町駅 徒歩5分圏内
                </li>
                <li>
                  <span className="k">みなとみらい線</span>みなとみらい駅 徒歩3分圏内
                </li>
                <li>
                  <span className="k">羽田空港から</span>京急で約30分
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

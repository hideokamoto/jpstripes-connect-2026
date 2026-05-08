export function Sponsors() {
  return (
    <section className="s" id="sponsors">
      <div className="container">
        <div className="section-mast">
          <div>
            <div className="num">№ 05 — Sponsors</div>
            <h2>
              Backed by
              <br />
              <em>the community.</em>
            </h2>
          </div>
          <p className="deck">スポンサー募集中。コミュニティと共に決済の知恵を広げてください。</p>
        </div>

        <div className="sp-tier" data-tier="special">
          <h3>
            <em>Special</em> Sponsor
          </h3>
          <div className="sp-grid-tier">
            <div className="sp-slot">— Special Sponsor / 募集中 —</div>
          </div>
        </div>
        <div className="sp-tier" data-tier="gold">
          <h3>
            <em>Gold</em> Sponsor
          </h3>
          <div className="sp-grid-tier">
            <div className="sp-slot">GOLD 01 / 募集中</div>
            <div className="sp-slot">GOLD 02 / 募集中</div>
          </div>
        </div>
        <div className="sp-tier" data-tier="standard">
          <h3>Sponsor</h3>
          <div className="sp-grid-tier">
            <div className="sp-slot">SLOT 01</div>
            <div className="sp-slot">SLOT 02</div>
            <div className="sp-slot">SLOT 03</div>
            <div className="sp-slot">SLOT 04</div>
          </div>
        </div>

        <div className="sponsor-cta">
          <div>
            <h4>
              Sponsor <em>Inquiries</em>
            </h4>
            <p>スポンサーシップ詳細・特典資料は近日公開。</p>
          </div>
          <div className="right">[ Coming Soon ]</div>
        </div>
      </div>
    </section>
  );
}

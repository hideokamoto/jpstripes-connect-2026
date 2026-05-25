export function Footer() {
  return (
    <footer className="bot">
      <div className="container">
        <div className="foot-mast">
          <em>See you</em>
          <br />
          in Yokohama.
        </div>
        <div className="foot-grid">
          <div className="foot-tag">
            &quot;うちの状況でどう判断すべきか&quot; を、コミュニティで分け合う1日。
          </div>
          <div>
            <h4>Event</h4>
            <a href="#theme">Theme</a>
            <a href="#timetable">Timetable</a>
            <a href="#speakers">Speakers</a>
            <a href="#venue">Venue</a>
          </div>
          <div>
            <h4>Community</h4>
            <a href="https://jpstripes.com" target="_blank" rel="noopener">
              jpstripes.com ↗
            </a>
            <a href="https://jpstripes.connpass.com" target="_blank" rel="noopener">
              Connpass ↗
            </a>
            <a href="https://www.youtube.com/@jp_stripes" target="_blank" rel="noopener">
              YouTube ↗
            </a>
          </div>
          <div>
            <h4>Past</h4>
            <a href="https://connect2025.jpstripes.com" target="_blank" rel="noopener">
              Connect 2025 ↗
            </a>
            <a href="https://www.youtube.com/playlist?list=PLr8gucIRpGCH9HRuWLCAgIjiNyWUQBpO0" target="_blank" rel="noopener">
              2025 アーカイブ動画 ↗
            </a>
            <a href="https://jpstripes.com/sessions" target="_blank" rel="noopener">
              Sessions ↗
            </a>
          </div>
          <div>
            <h4>Legal</h4>
            <a href="/legal/tokushoho/">特定商取引法に基づく表記</a>
            <a href="/legal/privacy/">プライバシーポリシー</a>
            <a href="/legal/cancellation/">キャンセル・返金ポリシー</a>
            <a href="/legal/terms/">利用規約</a>
          </div>
        </div>
        <div className="foot-bot">
          <div>© 2026 JP_Stripes — Stripe Users Group Japan</div>
          <div>#JP_Stripes #Connect2026</div>
        </div>
      </div>
    </footer>
  );
}

export function Nav() {
  return (
    <nav className="top">
      <div className="container row">
        <a className="brand" href="/#top">
          <span><em>JP_Stripes Connect</em></span>
          <span className="num">2026</span>
        </a>
        <div className="nav-links">
          <a href="/#theme">Theme</a>
          <a href="/#timetable">Timetable</a>
          <a href="/speakers/">Speakers</a>
          <a href="/blog/">Blog</a>
          <a href="/photos/">Photos</a>
          <a href="/#venue">Venue</a>
          <a href="/#sponsors">Sponsors</a>
          <a href="/#past">2025</a>
        </div>
        <div className="nav-right">
          <a className="nav-cta" href="/tickets/">
            参加申し込み
          </a>
        </div>
      </div>
    </nav>
  );
}

import Link from 'next/link';

export function Nav() {
  return (
    <nav className="top">
      <div className="container row">
        <Link className="brand" href="/#top">
          <span><em>JP_Stripes Connect</em></span>
          <span className="num">2026</span>
        </Link>
        <div className="nav-links">
          <Link href="/#theme">Theme</Link>
          <Link href="/#timetable">Timetable</Link>
          <Link href="/speakers/">Speakers</Link>
          <Link href="/#venue">Venue</Link>
          <Link href="/#sponsors">Sponsors</Link>
          <Link href="/#past">2025</Link>
        </div>
        <div className="nav-right">
          <Link className="nav-cta" href="/tickets/">
            参加申し込み
          </Link>
        </div>
      </div>
    </nav>
  );
}

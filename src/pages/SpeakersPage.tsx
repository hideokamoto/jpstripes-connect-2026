import speakers from '../data/speakers.json';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { SpeakerDetail } from '../components/SpeakerDetail';
import type { Speaker } from '../types/speaker';

export function SpeakersPage() {
  const list = speakers as Speaker[];

  return (
    <>
      <Nav />
      <main className="speakers-page">
        <div className="container">
          <header className="legal-head">
            <div className="num">№ 03 — Speakers</div>
            <h1>
              Speakers,
              <br />
              <em>in detail.</em>
            </h1>
            <div className="meta">JP_Stripes Connect 2026 — 登壇者プロフィール</div>
          </header>

          <div className="sp-detail-list">
            {list.map((speaker) => (
              <SpeakerDetail key={speaker.id} speaker={speaker} />
            ))}
          </div>

          <nav className="legal-nav">
            <a href="/">← Back to Connect 2026</a>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}

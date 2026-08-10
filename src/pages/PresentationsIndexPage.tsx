import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import type { Presentation } from '../lib/presentations';

export function PresentationsIndexPage({ presentations }: { presentations: Presentation[] }) {
  return (
    <>
      <Nav />
      <main className="legal">
        <div className="container">
          <header className="legal-head">
            <div className="num">Presentations</div>
            <h1>
              Session
              <br />
              <em>materials.</em>
            </h1>
            <div className="meta">JP_Stripes Connect 2026 の登壇・イベント資料</div>
          </header>

          <ul className="presentation-list">
            {presentations.map((presentation) => (
              <li key={presentation.slug}>
                <a href={`/presentations/${presentation.slug}/`} className="presentation-card">
                  <span className="presentation-card-title">{presentation.title}</span>
                  {presentation.subtitle ? (
                    <span className="presentation-card-meta">{presentation.subtitle}</span>
                  ) : null}
                </a>
              </li>
            ))}
          </ul>

          <nav className="legal-nav">
            <a href="/#timetable">← タイムテーブルに戻る</a>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}

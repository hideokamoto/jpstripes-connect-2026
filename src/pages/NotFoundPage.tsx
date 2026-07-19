import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';

export function NotFoundPage() {
  return (
    <>
      <Nav />
      <main className="legal">
        <div className="container">
          <header className="legal-head">
            <div className="num">404 — Not Found</div>
            <h1>
              Page,
              <br />
              <em>not found.</em>
            </h1>
            <div className="meta">お探しのページは見つかりませんでした。</div>
          </header>
          <nav className="legal-nav">
            <a href="/">← Back to Connect 2026</a>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}

import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { PhotoGallery } from '../components/PhotoGallery';
import type { EventPhoto } from '../lib/photos';

export function PhotosPage({ photos }: { photos: EventPhoto[] }) {
  return (
    <>
      <Nav />
      <main className="photos-page">
        <div className="container">
          <header className="legal-head">
            <div className="num">Photos</div>
            <h1>
              Event
              <br />
              <em>photos.</em>
            </h1>
            <div className="meta">
              JP_Stripes Connect 2026 — 2026.8.1 Sat · Yokohama · {photos.length} photos
            </div>
            <p className="photos-lead">
              AI時代のマネタイズ方法を探そう。セッション、会場、懇親会の一日を写真で残しています。サムネイルを押すと拡大表示できます。
            </p>
          </header>

          <PhotoGallery photos={photos} />

          <nav className="legal-nav">
            <a href="/">← Back to Connect 2026</a>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}

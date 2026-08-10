import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { presentationPdfPath } from '../lib/presentations';
import type { Presentation } from '../lib/presentations';

export function PresentationPage({ presentation }: { presentation: Presentation }) {
  const pdfPath = presentationPdfPath(presentation.slug);

  return (
    <>
      <Nav />
      <main className="legal presentation-page">
        <div className="container">
          <header className="legal-head">
            <div className="num">Presentation</div>
            <h1>{presentation.title}</h1>
            {presentation.subtitle ? <div className="meta">{presentation.subtitle}</div> : null}
          </header>

          <div className="presentation-toolbar">
            <p className="presentation-hint">← → キー、スワイプ、または左右ボタンでページ送り</p>
            <a className="presentation-download" href={pdfPath} download>
              PDF をダウンロード
            </a>
          </div>

          <div
            className="presentation-deck is-loading"
            data-presentation-viewer
            data-pdf={pdfPath}
          >
            <div className="presentation-deck-chrome">
              <span className="presentation-page-indicator" data-page-indicator>
                1 / …
              </span>
              <button type="button" className="presentation-fullscreen" data-presentation-fullscreen>
                全画面
              </button>
            </div>

            <button
              type="button"
              className="presentation-nav presentation-nav-prev"
              data-presentation-prev
              aria-label="前のスライド"
            >
              ←
            </button>

            <div className="presentation-slide">
              <canvas aria-label={`${presentation.title} — スライド`} />
            </div>

            <button
              type="button"
              className="presentation-nav presentation-nav-next"
              data-presentation-next
              aria-label="次のスライド"
            >
              →
            </button>

            <p className="presentation-status" data-presentation-loading>
              読み込み中…
            </p>
            <p className="presentation-status presentation-status-error" data-presentation-error hidden>
              PDF の読み込みに失敗しました。
            </p>
          </div>

          <nav className="legal-nav">
            {presentation.sessionSlug ? (
              <a href={`/sessions/${presentation.sessionSlug}/`}>← セッション詳細に戻る</a>
            ) : null}
            <a href="/presentations/">← 資料一覧に戻る</a>
          </nav>
        </div>
      </main>
      <Footer />
      <script type="module" src="/js/presentation-viewer.js"></script>
    </>
  );
}

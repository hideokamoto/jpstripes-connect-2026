// グリッドとライトボックスの器は SSR で出し、
// 拡大表示・前後移動・Esc 閉じは /js/photo-gallery.js（vanilla JS）が担う。
import type { EventPhoto } from '../lib/photos';

type Props = {
  photos: EventPhoto[];
};

export function PhotoGallery({ photos }: Props) {
  if (photos.length === 0) {
    return <p>写真はまだありません。</p>;
  }

  return (
    <>
      <div className="photo-grid" data-photo-gallery>
        {photos.map((photo, i) => (
          <button
            key={photo.id}
            type="button"
            className="photo-item"
            data-photo-index={String(i)}
            data-src={photo.src}
            aria-label={`写真を拡大表示（${i + 1} / ${photos.length}）`}
          >
            <img src={photo.thumb} alt="" loading="lazy" decoding="async" />
          </button>
        ))}
      </div>

      <div
        className="photo-lightbox"
        role="dialog"
        aria-modal="true"
        aria-labelledby="photo-lightbox-count"
        hidden
      >
        <div className="photo-lightbox-chrome">
          <p id="photo-lightbox-count" className="photo-lightbox-count">
            1 / {photos.length}
          </p>
          <button type="button" className="photo-lightbox-close" aria-label="閉じる">
            Close
          </button>
        </div>

        <button type="button" className="photo-lightbox-nav prev" aria-label="前の写真">
          ←
        </button>

        <img className="photo-lightbox-img" src="" alt="" />

        <button type="button" className="photo-lightbox-nav next" aria-label="次の写真">
          →
        </button>
      </div>

      <script src="/js/photo-gallery.js" defer></script>
    </>
  );
}

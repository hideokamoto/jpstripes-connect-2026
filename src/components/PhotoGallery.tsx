'use client';

import { useEffect, useId, useState } from 'react';
import type { EventPhoto } from '@/lib/photos';

type Props = {
  photos: EventPhoto[];
};

export function PhotoGallery({ photos }: Props) {
  const labelId = useId();
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;
  const current = index !== null ? photos[index] : null;

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIndex(null);
      if (e.key === 'ArrowLeft') {
        setIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
      }
      if (e.key === 'ArrowRight') {
        setIndex((i) => (i === null ? i : (i + 1) % photos.length));
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, photos.length]);

  if (photos.length === 0) {
    return <p>写真はまだありません。</p>;
  }

  return (
    <>
      <div className="photo-grid">
        {photos.map((photo, i) => (
          <button
            key={photo.id}
            type="button"
            className="photo-item"
            onClick={() => setIndex(i)}
            aria-label={`写真を拡大表示（${i + 1} / ${photos.length}）`}
          >
            <img src={photo.thumb} alt="" loading="lazy" decoding="async" />
          </button>
        ))}
      </div>

      {open && current ? (
        <div
          className="photo-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelId}
          onClick={() => setIndex(null)}
        >
          <div className="photo-lightbox-chrome" onClick={(e) => e.stopPropagation()}>
            <p id={labelId} className="photo-lightbox-count">
              {index! + 1} / {photos.length}
            </p>
            <button
              type="button"
              className="photo-lightbox-close"
              onClick={() => setIndex(null)}
              aria-label="閉じる"
            >
              Close
            </button>
          </div>

          <button
            type="button"
            className="photo-lightbox-nav prev"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
            }}
            aria-label="前の写真"
          >
            ←
          </button>

          <img
            className="photo-lightbox-img"
            src={current.src}
            alt={`JP_Stripes Connect 2026 写真 ${index! + 1}`}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            className="photo-lightbox-nav next"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i === null ? i : (i + 1) % photos.length));
            }}
            aria-label="次の写真"
          >
            →
          </button>
        </div>
      ) : null}
    </>
  );
}

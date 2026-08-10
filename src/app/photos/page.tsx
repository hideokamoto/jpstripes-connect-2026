import type { Metadata } from 'next';
import Link from 'next/link';
import { PhotoGallery } from '@/components/PhotoGallery';
import { getEventPhotos } from '@/lib/photos';

export const metadata: Metadata = {
  title: 'Photos — JP_Stripes Connect 2026',
  description:
    'JP_Stripes Connect 2026（2026年8月1日・横浜）当日のフォトレポート。会場・セッション・交流の様子を写真で振り返ります。',
};

export default function PhotosPage() {
  const photos = getEventPhotos();

  return (
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
        <Link href="/">← Back to Connect 2026</Link>
      </nav>
    </div>
  );
}

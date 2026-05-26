import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import speakers from '@/data/speakers.json';
import type { Speaker } from '@/types/speaker';

export const metadata: Metadata = {
  title: 'Speakers — JP_Stripes Connect 2026',
  description:
    'JP_Stripes Connect 2026 の登壇者プロフィール。決済・サブスク・請求管理の現場知見を持つスピーカーを紹介します。',
};

export default function SpeakersPage() {
  const list = speakers as Speaker[];

  return (
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
          <article key={speaker.id} className="sp-detail" id={speaker.id}>
            <div className="sp-detail-portrait">
              {speaker.image ? (
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 920px) 100vw, 280px"
                />
              ) : null}
            </div>
            <div className="sp-detail-body">
              <h2>{speaker.name}</h2>
              {speaker.nameReading ? (
                <div className="sp-detail-reading">{speaker.nameReading}</div>
              ) : null}
              {(speaker.org || speaker.title) && (
                <div className="sp-detail-role">
                  {speaker.org ? <div>{speaker.org}</div> : null}
                  {speaker.title ? <div>{speaker.title}</div> : null}
                </div>
              )}
              {speaker.bio ? <p>{speaker.bio}</p> : null}
              {speaker.links && speaker.links.length > 0 ? (
                <div className="sp-detail-links">
                  {speaker.links.map((link) => (
                    <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      <nav className="legal-nav">
        <Link href="/">← Back to Connect 2026</Link>
      </nav>
    </div>
  );
}

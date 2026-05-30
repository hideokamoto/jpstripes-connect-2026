import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllSessionSlugs, getSessionBySlug } from '@/lib/sessions';
import speakers from '@/data/speakers.json';
import type { Speaker } from '@/types/speaker';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSessionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const session = getSessionBySlug(slug);
  if (!session) return {};
  const desc = session.contentHtml.replace(/<[^>]+>/g, '').slice(0, 160);
  return {
    title: `${session.title} — JP_Stripes Connect 2026`,
    description: desc,
  };
}

const TRACK_LABEL: Record<string, string> = {
  A: 'Track A · Main',
  B: 'Track B · Tech',
};

export default async function SessionPage({ params }: Props) {
  const { slug } = await params;
  const session = getSessionBySlug(slug);
  if (!session) notFound();

  const speaker = session.speakerId
    ? (speakers as Speaker[]).find((s) => s.id === session.speakerId) ?? null
    : null;

  const trackLabel = TRACK_LABEL[session.track] ?? session.track;
  const isTbd = session.status === 'tbd' || session.title === '調整中';

  return (
    <div className="container">
      <header className="legal-head">
        <div className="num">
          {trackLabel} — {session.time}
        </div>
        <h1>
          {isTbd ? (
            <>
              Session,
              <br />
              <em>coming soon.</em>
            </>
          ) : (
            <>
              {session.title.split('').slice(0, 10).join('')}
              {session.title.length > 10 ? (
                <>
                  <br />
                  <em>{session.title.slice(10)}</em>
                </>
              ) : null}
            </>
          )}
        </h1>
        <div className="meta">JP_Stripes Connect 2026 — 2026年8月1日（土）</div>
      </header>

      <div className="session-detail">
        <div className="session-meta-bar">
          <span className="session-time">{session.time}</span>
          <span className="session-dur">{session.duration}</span>
          <span className={`session-track track-${session.track.toLowerCase()}`}>{trackLabel}</span>
          {session.tags && session.tags.length > 0 && (
            <div className="session-tags">
              {session.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          )}
        </div>

        {isTbd ? (
          <div className="session-tbd">
            <p>このセッションは現在調整中です。詳細は順次公開されます。</p>
          </div>
        ) : null}

        {speaker ? (
          <div className="session-speaker">
            <h2>Speaker</h2>
            <div className="sp-detail" style={{ gridTemplateColumns: '160px 1fr' }}>
              <div className="sp-detail-portrait">
                {speaker.image ? (
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="160px"
                  />
                ) : null}
              </div>
              <div className="sp-detail-body">
                <h3>{speaker.name}</h3>
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
            </div>
          </div>
        ) : session.speaker && !isTbd ? (
          <div className="session-speaker-name">
            <h2>Speaker</h2>
            <p>{session.speaker}</p>
          </div>
        ) : null}

        <div
          className="session-body"
          dangerouslySetInnerHTML={{ __html: session.contentHtml }}
        />
      </div>

      <nav className="legal-nav">
        <Link href="/#timetable">← タイムテーブルに戻る</Link>
      </nav>
    </div>
  );
}

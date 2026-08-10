import speakers from '../data/speakers.json';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { SpeakerDetail } from '../components/SpeakerDetail';
import { getPresentationBySessionSlug } from '../lib/presentations';
import { splitTitle } from '../lib/sessions';
import type { SessionData } from '../lib/sessions';
import type { Speaker } from '../types/speaker';

const TRACK_LABEL: Record<string, string> = {
  A: 'Track A · Main',
  B: 'Track B · Tech',
};

export function SessionPage({ session }: { session: SessionData }) {
  const speakerIds = session.speakerIds ?? (session.speakerId ? [session.speakerId] : []);
  const sessionSpeakers = speakerIds
    .map((id) => (speakers as Speaker[]).find((s) => s.id === id))
    .filter((s): s is Speaker => Boolean(s));

  const trackLabel = TRACK_LABEL[session.track] ?? session.track;
  const isTbd = session.status === 'tbd' || session.title === '調整中';
  const isProvisional = session.status === 'provisional';
  const [head, tail] = splitTitle(session.title);
  const presentation = getPresentationBySessionSlug(session.slug);

  return (
    <>
      <Nav />
      <main className="session-page">
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
                  {head}
                  {tail && (
                    <>
                      <br />
                      <em>{tail}</em>
                    </>
                  )}
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

            {presentation ? (
              <p className="session-materials">
                <a href={`/presentations/${presentation.slug}/`}>発表資料を見る →</a>
              </p>
            ) : null}

            {isTbd ? (
              <div className="session-tbd">
                <p>このセッションは現在調整中です。詳細は順次公開されます。</p>
              </div>
            ) : isProvisional ? (
              <div className="session-tbd">
                <p>このセッションは現在最終調整中です。予告なく変更される場合があります。</p>
              </div>
            ) : null}

            <div
              className="session-body"
              dangerouslySetInnerHTML={{ __html: session.contentHtml }}
            />

            {sessionSpeakers.length > 0 ? (
              <div className="session-speaker">
                <h2>{sessionSpeakers.length > 1 ? 'Speakers' : 'Speaker'}</h2>
                <div className="sp-detail-list">
                  {sessionSpeakers.map((speaker) => (
                    <SpeakerDetail key={speaker.id} speaker={speaker} heading="h3" compact />
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <nav className="legal-nav">
            <a href="/#timetable">← タイムテーブルに戻る</a>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}

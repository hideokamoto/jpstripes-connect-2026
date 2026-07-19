import type { Speaker } from '../types/speaker';

// スピーカー一覧ページとセッション詳細ページで共用するプロフィール表示。
// heading: ページ内の見出しレベル（一覧では h2、セッション詳細では h3）。
export function SpeakerDetail({
  speaker,
  heading: Heading = 'h2',
  compact = false,
}: {
  speaker: Speaker;
  heading?: 'h2' | 'h3';
  compact?: boolean;
}) {
  return (
    <article
      className="sp-detail"
      id={compact ? undefined : speaker.id}
      style={compact ? 'grid-template-columns: 160px 1fr;' : undefined}
    >
      <div className="sp-detail-portrait">
        {speaker.image ? <img src={speaker.image} alt={speaker.name} loading="lazy" /> : null}
      </div>
      <div className="sp-detail-body">
        <Heading>{speaker.name}</Heading>
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
  );
}

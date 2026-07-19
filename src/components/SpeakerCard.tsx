import type { Speaker } from '../types/speaker';

export function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <div className="sp-card">
      <div className="sp-portrait">
        {speaker.image && <img src={speaker.image} alt={speaker.name} loading="lazy" />}
      </div>
      <div className="sp-name">{speaker.name}</div>
      {speaker.org ? <div className="sp-org">{speaker.org}</div> : null}
    </div>
  );
}

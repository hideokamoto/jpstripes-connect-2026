import Image from 'next/image';
import type { Speaker } from '@/types/speaker';

export function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <div className="sp-card">
      <div className="sp-portrait">
        {speaker.image && (
          <Image
            src={speaker.image}
            alt={speaker.name}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 50vw, 200px"
          />
        )}
      </div>
      <div className="sp-name">{speaker.name}</div>
      {speaker.org ? <div className="sp-org">{speaker.org}</div> : null}
    </div>
  );
}

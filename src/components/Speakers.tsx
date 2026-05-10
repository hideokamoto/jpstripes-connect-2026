import Image from 'next/image';
import speakers from '@/data/speakers.json';

type Speaker = {
  id: string;
  name: string;
  badge: string;
  org: string;
  image?: string;
};

export function Speakers() {
  const list = speakers as Speaker[];

  return (
    <section className="s" id="speakers">
      <div className="container">
        <div className="section-mast">
          <div>
            <div className="num">№ 03 — Speakers</div>
            <h2>
              Speakers,
              <br />
              <em>announced soon.</em>
            </h2>
          </div>
          <p className="deck">スピーカーは順次公開。</p>
        </div>

        <div className="sp-grid">
          {list.map((sp) => (
            <SpeakerCard key={sp.id} speaker={sp} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SpeakerCard({ speaker }: { speaker: Speaker }) {
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
        <div className="badge">{speaker.badge}</div>
      </div>
      <div className="sp-name">{speaker.name}</div>
      <div className="sp-org">{speaker.org}</div>
    </div>
  );
}

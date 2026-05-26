import Link from 'next/link';
import speakers from '@/data/speakers.json';
import { SpeakerCard } from '@/components/SpeakerCard';
import type { Speaker } from '@/types/speaker';

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
              <em>joining us.</em>
            </h2>
          </div>
          <p className="deck">
            登壇者を順次公開中。
            <Link href="/speakers/" className="sp-more">
              All speakers →
            </Link>
          </p>
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

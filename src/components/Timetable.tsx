'use client';

import sessions from '@/data/sessions.json';

type Session = {
  time: string;
  duration: string;
  track: string;
  title: string;
  tags?: string[];
  speaker?: string;
  isBreak?: boolean;
};

type TimeBlock = {
  time: string;
  duration: string;
  common?: Session;
  a?: Session;
  b?: Session;
};

function buildBlocks(list: Session[]): TimeBlock[] {
  const map = new Map<string, TimeBlock>();
  for (const s of list) {
    if (!map.has(s.time)) {
      map.set(s.time, { time: s.time, duration: s.duration });
    }
    const block = map.get(s.time)!;
    if (s.track === '—') block.common = s;
    else if (s.track === 'A') block.a = s;
    else if (s.track === 'B') block.b = s;
  }
  return Array.from(map.values());
}

function SessionCell({ s, track }: { s: Session; track: 'a' | 'b' }) {
  const label = track === 'a' ? 'A · Main' : 'B · Tech';
  return (
    <div className={`tt-cell ${track}`}>
      <div className="head">
        <span className="track-tag">{label}</span>
        <span className="dur">{s.duration}</span>
      </div>
      <h4>{s.title}</h4>
      {s.speaker ? <p className="who">{s.speaker}</p> : null}
      {s.tags && s.tags.length > 0 ? (
        <div className="tags">
          {s.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function Timetable() {
  const blocks = buildBlocks(sessions as Session[]);

  return (
    <section className="s" id="timetable">
      <div className="container">
        <div className="section-mast">
          <div>
            <div className="num">№ 02 — Timetable</div>
            <h2>
              <em>One day,</em>
              <br />
              two tracks.
            </h2>
          </div>
          <p className="deck">
            8月1日(土) 12:30 — 18:00。MainトラックとTechトラック、そしてLT。詳細は順次公開。
          </p>
        </div>

        <div className="tt-summary">
          <div className="tt-sum-card" data-t="A">
            <div className="h">
              <i></i>Track A · Main
            </div>
            <div className="ttl">
              Keynotes &amp; talks,
              <br />
              front and center.
            </div>
            <div className="meta">3 sessions · 50min each</div>
          </div>
          <div className="tt-sum-card" data-t="B">
            <div className="h">
              <i></i>Track B · Tech
            </div>
            <div className="ttl">
              Deep dives &amp; hands-on,
              <br />
              in the trenches.
            </div>
            <div className="meta">2 sessions · 40min each</div>
          </div>
          <div className="tt-sum-card" data-t="LT">
            <div className="h">
              <i></i>LT · 5分の知恵
            </div>
            <div className="ttl">
              5 lightning talks,
              <br />
              community-fed.
            </div>
            <div className="meta">5min each</div>
          </div>
        </div>

        <div className="tt-grid">
          <div className="tt-headrow">
            <div className="col-time"></div>
            <div className="col a">
              <span className="dot"></span>
              <span className="name">Track A</span>
              <span className="sub">— Main · Keynotes &amp; talks</span>
            </div>
            <div className="col b">
              <span className="dot"></span>
              <span className="name">Track B</span>
              <span className="sub">— Tech · Deep dives &amp; hands-on</span>
            </div>
          </div>

          {blocks.map((block) => (
            <div key={block.time} className="tt-block">
              <div className="tt-time">
                {block.time}
                <span className="until" aria-hidden="true">{block.duration}</span>
              </div>
              {block.common ? (
                <div className="tt-cell common">
                  <div className="head">
                    <span className="track-tag">Common</span>
                    <span className="dur">{block.duration}</span>
                  </div>
                  <h4>{block.common.title}</h4>
                </div>
              ) : (
                <>
                  {block.a ? (
                    <SessionCell s={block.a} track="a" />
                  ) : (
                    <div className="tt-cell empty" aria-hidden="true"></div>
                  )}
                  {block.b ? (
                    <SessionCell s={block.b} track="b" />
                  ) : (
                    <div className="tt-cell empty" aria-hidden="true"></div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

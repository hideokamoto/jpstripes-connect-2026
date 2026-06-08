'use client';

import Link from 'next/link';
import sessions from '@/data/sessions.json';

type Session = {
  time: string;
  duration: string;
  track: string;
  title: string;
  tags?: string[];
  speaker?: string;
  isBreak?: boolean;
  slug?: string;
  status?: 'confirmed' | 'provisional' | 'tbd';
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
  const isTbd = s.status === 'tbd';
  const isTentative = isTbd || s.status === 'provisional';
  const statusClass = isTbd ? 'tt-cell--tbd' : '';
  const classes = ['tt-cell', track, statusClass].filter(Boolean).join(' ');
  const inner = (
    <>
      <div className="head">
        <span className="track-tag">{label}</span>
        <span className="dur">{s.duration}</span>
      </div>
      <h4>{s.title}</h4>
      {s.speaker ? (
        <p className="who">{s.speaker}</p>
      ) : isTentative ? (
        <p className="who who-tbd">登壇者調整中</p>
      ) : null}
      {s.tags && s.tags.length > 0 ? (
        <div className="tags">
          {s.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      ) : null}
    </>
  );
  if (s.slug) {
    return (
      <Link href={`/sessions/${s.slug}/`} className={`${classes} tt-cell-link`}>
        {inner}
      </Link>
    );
  }
  return <div className={classes}>{inner}</div>;
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
            8月1日(土) 12:00 開場。MainトラックとTechトラック、公募LT、閉会後は懇親会まで。詳細は順次公開。
          </p>
        </div>

        <p className="tt-note">
          ※ 一部セッションはテーマ・登壇者・時間を調整中です。内容は予告なく変更される場合があります。
        </p>

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
            <div className="meta">6 sessions · 30min each</div>
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
            <div className="meta">4 sessions · 30min each</div>
          </div>
          <div className="tt-sum-card" data-t="LT">
            <div className="h">
              <i></i>LT · 5分の知恵
            </div>
            <div className="ttl">
              4 lightning talks,
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

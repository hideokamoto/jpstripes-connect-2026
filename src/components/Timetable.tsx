'use client';

import { useState } from 'react';
import sessions from '@/data/sessions.json';

type Session = {
  time: string;
  duration: string;
  track: string;
  title: string;
  description?: string;
  tags?: string[];
  speaker?: string;
  isBreak?: boolean;
};

type TrackKey = 'all' | 'A' | 'B' | 'LT';

const TABS: { key: TrackKey; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'A', label: 'A · Main' },
  { key: 'B', label: 'B · Tech' },
  { key: 'LT', label: 'LT' },
];

export function Timetable() {
  const [active, setActive] = useState<TrackKey>('all');
  const list = sessions as Session[];

  function isMuted(track: string): boolean {
    if (active === 'all') return false;
    if (track === '—') return false;
    return track !== active;
  }

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

        <div className="tt-controls">
          <div className="tt-tabs" role="tablist" aria-label="Timetable track filter">
            {TABS.map((t) => (
              <button
                key={t.key}
                type="button"
                role="tab"
                id={`tt-tab-${t.key}`}
                className="tt-tab"
                data-track={t.key}
                aria-controls="tt-list"
                aria-selected={active === t.key}
                tabIndex={active === t.key ? 0 : -1}
                onClick={() => setActive(t.key)}
              >
                <span className="swatch"></span>
                {t.label}
              </button>
            ))}
          </div>
          <div className="tt-legend">
            <span className="a">
              <i></i>Track A
            </span>
            <span className="b">
              <i></i>Track B
            </span>
            <span className="lt">
              <i></i>LT
            </span>
            <span>— Break / Common</span>
          </div>
        </div>

        <div
          id="tt-list"
          className="tt-list"
          role="tabpanel"
          aria-labelledby={`tt-tab-${active}`}
        >
          {list.map((s) => {
            const muted = isMuted(s.track);
            const className = ['tt-row', muted ? 'muted' : ''].filter(Boolean).join(' ');
            return (
              <div
                key={s.time + s.track + s.title}
                className={className}
                data-track={s.track}
                data-break={s.isBreak ? '' : undefined}
              >
                <div className="tt-time">
                  {s.time}
                  <span className="dur">{s.duration}</span>
                </div>
                <div className="tt-pill" data-t={s.track}>
                  {s.track}
                </div>
                <div>
                  <div className="tt-title">{s.title}</div>
                  {s.description ? <div className="tt-desc">{s.description}</div> : null}
                  {s.tags && s.tags.length > 0 ? (
                    <div className="tt-tags">
                      {s.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  ) : null}
                </div>
                <div className="tt-by">{s.speaker ?? ''}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

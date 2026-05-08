'use client';

import { useEffect, useState } from 'react';

const CHAPTERS = [
  { href: '#th-1', label: '§01 一発勝負' },
  { href: '#th-2', label: '§02 ドキュメントの限界' },
  { href: '#th-3', label: '§03 経験を分け合う' },
  { href: '#th-4', label: '§04 横浜で' },
];

export function ChapterNav() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    function onScroll() {
      let i = 0;
      for (let n = 0; n < CHAPTERS.length; n++) {
        const el = document.querySelector(CHAPTERS[n].href);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.5) {
          i = n;
        }
      }
      setActive(i);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="chapters">
      {CHAPTERS.map((c, i) => (
        <a key={c.href} href={c.href} className={i === active ? 'on' : ''}>
          {c.label}
        </a>
      ))}
    </nav>
  );
}

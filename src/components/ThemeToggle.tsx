'use client';

import { useEffect } from 'react';

export function ThemeToggle() {
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: light)');
    function onChange(e: MediaQueryListEvent) {
      let saved: string | null = null;
      try {
        saved = localStorage.getItem('jp26-theme');
      } catch {}
      // Follow the OS only while the user hasn't picked a theme manually.
      if (saved !== 'dark' && saved !== 'light') {
        document.documentElement.dataset.theme = e.matches ? 'light' : 'dark';
      }
    }
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  function onClick() {
    const root = document.documentElement;
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try {
      localStorage.setItem('jp26-theme', next);
    } catch {}
  }
  return (
    <button type="button" className="theme-toggle" onClick={onClick} aria-label="Toggle theme">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    </button>
  );
}

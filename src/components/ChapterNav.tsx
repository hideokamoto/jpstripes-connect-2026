// テーマ本文の章ナビ。スクロール位置に応じた現在地のハイライトは
// /js/chapter-nav.js（vanilla JS）が .chapters a に 'on' クラスを付けて行う。
const CHAPTERS = [
  { href: '#th-1', label: '§01 心当たり' },
  { href: '#th-2', label: '§02 扱う領域' },
  { href: '#th-3', label: '§03 経験を共有' },
  { href: '#th-4', label: '§04 横浜で' },
];

export function ChapterNav() {
  return (
    <nav className="chapters">
      {CHAPTERS.map((c, i) => (
        <a key={c.href} href={c.href} className={i === 0 ? 'on' : undefined}>
          {c.label}
        </a>
      ))}
    </nav>
  );
}

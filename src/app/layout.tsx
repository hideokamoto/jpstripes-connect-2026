import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'JP_Stripes Connect 2026 — AI時代のマネタイズ方法を探そう',
  description:
    'JP_Stripes Connect 2026 — 人が買う時代から、エージェントが買う時代へ。月額課金からトークンベースへ。Stripe を軸に SaaS・Commerce・Platform の未来を、セッションとハンズオンで探るカンファレンス。2026年8月1日（土）横浜。',
};

const themeInitScript = `
try {
  var saved = localStorage.getItem('jp26-theme');
  if (saved === 'dark' || saved === 'light') {
    document.documentElement.dataset.theme = saved;
  }
} catch (e) {}
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ja"
      data-theme="dark"
      data-density="compact"
      data-accent="electric"
      data-serif="instrument"
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://i.ytimg.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=Geist:wght@300;400;500;600&family=Geist+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

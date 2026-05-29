import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'JP_Stripes Connect 2026 — 決済の判断を、一人で抱えない。',
  description:
    'JP_Stripes Connect 2026 — 決済・サブスク・請求管理の経験をコミュニティで共有する年に一度の場。2026年8月1日（土）横浜。',
};

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
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;800;900&family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Script
          src="https://cdn.geolonia.com/v1/embed?geolonia-api-key=b5feef31faaa43c08836b4beee951fbc"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}

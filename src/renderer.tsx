import { jsxRenderer } from 'hono/jsx-renderer';
import type { Context } from 'hono';

export type PageMeta = {
  title: string;
  description: string;
  /** 絶対 URL の OGP 画像 */
  ogImage: string;
};

declare module 'hono' {
  interface ContextRenderer {
    (content: string | Promise<string>, props: PageMeta): Response;
  }
}

export const DEFAULT_TITLE = 'JP_Stripes Connect 2026 — AI時代のマネタイズ方法を探そう';
export const DEFAULT_DESCRIPTION =
  'JP_Stripes Connect 2026 — 決済・サブスク・請求管理の経験をコミュニティで共有する年に一度の場。2026年8月1日（土）横浜。';
export const FALLBACK_APP_URL = 'https://connect2026.jpstripes.com';

export function appUrl(c: Context): string {
  const url = (c.env?.APP_URL as string | undefined) || FALLBACK_APP_URL;
  return url.replace(/\/+$/, '');
}

export const renderer = jsxRenderer(
  ({ children, title, description, ogImage }) => (
    <html lang="ja" data-theme="light" data-density="compact" data-accent="electric" data-serif="instrument">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImage} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
        <link rel="preconnect" href="https://i.ytimg.com" crossorigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;800;900&family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>{children}</body>
    </html>
  ),
  { docType: true }
);

/** ページ共通のメタ既定値を補ってレンダリングするヘルパー。 */
export function renderPage(
  c: Context,
  content: Parameters<Context['render']>[0],
  meta?: Partial<PageMeta>
) {
  return c.render(content, {
    title: meta?.title ?? DEFAULT_TITLE,
    description: meta?.description ?? DEFAULT_DESCRIPTION,
    ogImage: meta?.ogImage ?? `${appUrl(c)}/ogp.png`,
  });
}

// content/*.md（marked でコンパイル済み）の HTML から、script タグや
// on* イベントハンドラなど実行可能なものだけを取り除く。ビルド時（Node 上）
// でのみ動かし、Cloudflare Workers ランタイムは常にサニタイズ済みの
// 静的文字列（src/generated/content.ts）だけを扱う。
import sanitizeHtml from 'sanitize-html';

const ALLOWED_TAGS = sanitizeHtml.defaults.allowedTags.concat(['img', 'h1', 'h2']);

export function sanitizeContentHtml(html) {
  return sanitizeHtml(html, {
    allowedTags: ALLOWED_TAGS,
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      a: ['href', 'name', 'target', 'rel', 'class'],
      img: ['src', 'alt', 'width', 'height', 'loading'],
      div: ['class'],
      span: ['class'],
    },
  });
}

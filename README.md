# jpstripes-connect-2026

JP_Stripes Connect 2026 公式サイト。**Hono + hono/jsx による SSR** で、Cloudflare Workers 上で動作します。

## アーキテクチャ

- ルーティング / SSR: [Hono](https://hono.dev)（`src/index.tsx`）+ hono/jsx（`src/components/`, `src/pages/`）
- コンテンツ: `content/blog/*.md`, `content/sessions/*.md` を `scripts/build-content.mjs` が
  ビルド時に `src/generated/content.ts` へコンパイル（Workers に fs がないため、
  marked / gray-matter はビルド時のみ使用）
- 静的アセット: `public/`（CSS・画像・クライアント JS）を Workers の assets バインディングで配信
- クライアント側の動き: `public/js/` の vanilla JS
  （カウントダウン・章ナビ・地図フォールバック・申込枚数表示）
- URL は旧サイト（Next.js 静的エクスポート）と同じ末尾スラッシュ形式。
  スラッシュなしはリダイレクトされます

## 開発

```bash
npm install
npm run dev        # コンテンツ生成 + wrangler dev (http://localhost:8787)
npm test           # コンテンツ生成 + vitest（ユニット + ルート統合テスト）
npm run typecheck  # tsc --noEmit
npm run build      # cf-build + wrangler deploy --dry-run（バンドル検証）
npm run deploy     # Cloudflare Workers へデプロイ
```

Markdown（`content/`）を編集した場合、`npm run build:content` で `src/generated/content.ts`
が再生成されます（dev / test / build の前には自動で実行されます）。

### Cloudflare Workers Builds

`src/generated/content.ts` は git 管理外（`.gitignore`）のため、CI では必ず生成が必要です。
Workers Builds は `wrangler.jsonc` の `[build]` を**無視**するため、ダッシュボードの設定で次を指定してください。

| 設定 | 推奨コマンド |
|------|-------------|
| Build command | `npm run build` または `npm run cf-build` |
| Deploy command（本番） | `npm run deploy` |
| Non-production deploy command（PR プレビュー） | `npm run versions:upload` |

`npx wrangler deploy` / `npx wrangler versions upload` だけだと `content.ts` がなくビルドが失敗します。

## 設定

ランタイム設定は `wrangler.jsonc` の `vars` で行います。

- `APP_URL` — サイトの公開 URL（OGP 画像などの絶対 URL 用）
- `STATS_API_URL` — 申込枚数を表示するための webhook Worker の `/stats` エンドポイント。
  未設定なら表示自体が出ません

ローカルで上書きする場合は `.dev.vars` を使ってください（`.env.example` 参照）。

## テスト

TDD で構築されています。

- `test/lib/*.test.ts` — blog / sessions / timetable の純関数ユニットテスト
  （フィクスチャ注入可能）
- `test/app.test.ts` — `app.request()` による全ルートの SSR 統合テスト
  （メタタグ・リダイレクト・404・環境変数による表示切り替えを含む）

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
pnpm install
pnpm dev            # コンテンツ生成 + wrangler dev (http://localhost:8787)
pnpm test           # コンテンツ生成 + vitest（ユニット + ルート統合テスト）
pnpm typecheck      # tsc --noEmit
pnpm build          # cf-build + wrangler deploy --dry-run（バンドル検証）
pnpm deploy         # Cloudflare Workers へデプロイ
```

Markdown（`content/`）を編集した場合、`pnpm build:content` で `src/generated/content.ts`
が再生成されます（dev / test / build の前には自動で実行されます）。生成物はリポジトリにコミットし、
Workers Builds の PR プレビュー（`npx wrangler versions upload`）でもバンドルできるようにしています。

### Cloudflare Workers Builds

PR プレビューはデフォルトで `npx wrangler versions upload` が走るため、`pnpm cf-build` 相当の
コンテンツ生成が別途必要です。`prepare` スクリプトとコミット済みの `src/generated/content.ts` で
カバーしています。ダッシュボードで次を設定している場合は `pnpm versions:upload` も利用できます。

| 設定 | 推奨コマンド |
|------|-------------|
| Build command | `pnpm cf-build`（任意） |
| Deploy command（本番） | `pnpm deploy` |
| Non-production deploy command（PR プレビュー） | `pnpm versions:upload` |

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

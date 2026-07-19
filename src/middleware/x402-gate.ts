import type { Context, MiddlewareHandler } from 'hono';
import { aiBots } from '@hono/ua-blocker/ai-bots';
import { paymentMiddleware, type Network, type RoutesConfig } from 'x402-hono';

// x402 で保護するパス。キーは x402-hono の内部マッチャがリクエストパスと照合する。
// - '/sessions/*' は /sessions/:slug/ を捕捉する。
// - スピーカー一覧は末尾スラッシュ付き /speakers/ だが、x402 のマッチャは末尾スラッシュ無しの
//   '/speakers' キーで /speakers/ にマッチするため、こちらを使う。
const PROTECTED_ROUTES = ['/sessions/*', '/speakers'] as const;

// wrangler.jsonc の vars / Secrets 由来の設定。
type GateEnv = {
  X402_PAY_TO?: string;
  X402_FACILITATOR_URL?: string;
  X402_NETWORK?: string;
  X402_PRICE?: string;
};

// AIエージェント / AIクローラー判定。
// - aiBots は ai.robots.txt 由来の AI ボット UA 正規表現。大文字化した UA に対して照合する仕様。
//   GPTBot / ClaudeBot / PerplexityBot 等はマッチし、Googlebot / Bingbot 等の検索ボットは
//   含まれないため 200 のまま（SEO 維持）。
// - X-PAYMENT ヘッダー付きは「決済しにきているクライアント」なので、UA によらずゲートへ通す。
function isAgentRequest(c: Context): boolean {
  if (c.req.header('x-payment')) return true;
  const ua = c.req.header('user-agent') ?? '';
  return aiBots.test(ua.toUpperCase());
}

// Workers は env をリクエスト時にしか読めないため、paymentMiddleware は遅延構築し、
// env 値が同じ間はメモ化して使い回す。
let cached: { key: string; mw: MiddlewareHandler } | undefined;

function getPaymentMiddleware(env: GateEnv): MiddlewareHandler {
  const payTo = env.X402_PAY_TO as `0x${string}`;
  const network = (env.X402_NETWORK ?? 'base-sepolia') as Network;
  const price = env.X402_PRICE ?? '$0.005';
  const facilitatorUrl = env.X402_FACILITATOR_URL;

  const key = `${payTo}|${network}|${price}|${facilitatorUrl ?? ''}`;
  if (cached?.key === key) return cached.mw;

  const routes: RoutesConfig = Object.fromEntries(
    PROTECTED_ROUTES.map((path) => [
      path,
      {
        price,
        network,
        config: {
          description:
            'JP_Stripes Connect 2026 セッション/スピーカー情報（AIエージェント向け有料アクセス）',
          mimeType: 'text/html',
        },
      },
    ])
  );

  // facilitator 未指定時は x402-hono のデフォルト（testnet 用 x402.org/facilitator）が使われる。
  const mw = facilitatorUrl
    ? paymentMiddleware(payTo, routes, { url: facilitatorUrl as `${string}://${string}` })
    : paymentMiddleware(payTo, routes);

  cached = { key, mw };
  return mw;
}

/**
 * セッション/スピーカー情報に x402 決済ゲートをかける Hono ミドルウェア。
 *
 * - 受取アドレス（X402_PAY_TO）未設定なら fail-open（誰でも 200）。
 * - 人間のブラウザ・検索ボット → そのまま次のハンドラへ（200）。
 * - AIエージェント → x402 の paymentMiddleware に委譲:
 *   X-PAYMENT なし → 402 + payment requirements(JSON)、
 *   X-PAYMENT あり → facilitator で検証・決済のうえ 200。
 */
export function x402Gate(): MiddlewareHandler {
  return async (c, next) => {
    const env = c.env as GateEnv | undefined;
    if (!env?.X402_PAY_TO) return next();
    if (!isAgentRequest(c)) return next();
    return getPaymentMiddleware(env)(c, next);
  };
}

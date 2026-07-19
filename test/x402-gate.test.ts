import { describe, it, expect } from 'vitest';
import app from '@/index';

// x402 ゲートが有効になる env（受取アドレスあり）。
const gatedEnv = {
  APP_URL: 'https://connect2026.jpstripes.com',
  STATS_API_URL: 'https://example.com/stats',
  X402_PAY_TO: '0x0000000000000000000000000000000000000001',
  X402_FACILITATOR_URL: 'https://x402.org/facilitator',
  X402_NETWORK: 'base-sepolia',
  X402_PRICE: '$0.005',
};

const BROWSER_UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36';
const GOOGLEBOT_UA = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';

function req(path: string, ua: string, env: Record<string, string> = gatedEnv) {
  return app.request(path, { headers: { 'user-agent': ua } }, env);
}

describe('x402 ゲート: 人間・検索ボットは 200', () => {
  it('ブラウザ UA はセッション詳細を 200 HTML で受け取る', async () => {
    const res = await req('/sessions/opening-keynote/', BROWSER_UA);
    expect(res.status).toBe(200);
    expect(res.headers.get('content-type')).toContain('text/html');
  });

  it('ブラウザ UA はスピーカーページを 200 HTML で受け取る', async () => {
    const res = await req('/speakers/', BROWSER_UA);
    expect(res.status).toBe(200);
    expect(res.headers.get('content-type')).toContain('text/html');
  });

  it('Googlebot（検索クローラー）は 200（SEO 維持）', async () => {
    const res = await req('/sessions/opening-keynote/', GOOGLEBOT_UA);
    expect(res.status).toBe(200);
    expect(res.headers.get('content-type')).toContain('text/html');
  });
});

describe('x402 ゲート: AIエージェントは 402', () => {
  it('GPTBot はセッション詳細で 402 + x402 payment requirements を受け取る', async () => {
    const res = await req('/sessions/opening-keynote/', 'GPTBot/1.0');
    expect(res.status).toBe(402);
    expect(res.headers.get('content-type')).toContain('application/json');
    const body = (await res.json()) as { accepts: Array<Record<string, unknown>> };
    expect(Array.isArray(body.accepts)).toBe(true);
    const accept = body.accepts[0];
    expect(accept.scheme).toBe('exact');
    expect(accept.network).toBe('base-sepolia');
    expect(accept.payTo).toBe(gatedEnv.X402_PAY_TO);
  });

  it('ClaudeBot はスピーカーページで 402 を受け取る', async () => {
    const res = await req('/speakers/', 'ClaudeBot/1.0');
    expect(res.status).toBe(402);
    const body = (await res.json()) as { accepts: unknown[] };
    expect(Array.isArray(body.accepts)).toBe(true);
  });
});

describe('x402 ゲート: 対象外・fail-open', () => {
  it('対象外ルート（/tickets/）は AIエージェント UA でも 200', async () => {
    const res = await req('/tickets/', 'GPTBot/1.0');
    expect(res.status).toBe(200);
    expect(res.headers.get('content-type')).toContain('text/html');
  });

  it('X402_PAY_TO 未設定なら AIエージェント UA でも 200（fail-open）', async () => {
    const { X402_PAY_TO, ...envWithoutPayTo } = gatedEnv;
    const res = await app.request(
      '/sessions/opening-keynote/',
      { headers: { 'user-agent': 'GPTBot/1.0' } },
      envWithoutPayTo
    );
    expect(res.status).toBe(200);
    expect(res.headers.get('content-type')).toContain('text/html');
  });
});

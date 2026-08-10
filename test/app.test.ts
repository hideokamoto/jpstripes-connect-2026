import { describe, it, expect } from 'vitest';
import app from '@/index';

// wrangler.jsonc の vars に相当するテスト用バインディング。
const env = {
  APP_URL: 'https://connect2026.jpstripes.com',
  STATS_API_URL: 'https://example.com/stats',
};

async function get(path: string) {
  return app.request(path, {}, env);
}

describe('トップページ /', () => {
  it('200 で HTML を返す', async () => {
    const res = await get('/');
    expect(res.status).toBe(200);
    expect(res.headers.get('content-type')).toContain('text/html');
    const html = await res.text();
    expect(html).toMatch(/^<!DOCTYPE html>/i);
    expect(html).toContain('<html lang="ja"');
  });

  it('タイトル・OGP メタタグを含む', async () => {
    const html = await (await get('/')).text();
    expect(html).toContain('<title>JP_Stripes Connect 2026 — AI時代のマネタイズ方法を探そう</title>');
    expect(html).toContain('property="og:image"');
    expect(html).toContain('https://connect2026.jpstripes.com/ogp.png');
    expect(html).toContain('name="twitter:card"');
  });

  it('APP_URL が末尾スラッシュ付きでも OGP 画像 URL が二重スラッシュにならない', async () => {
    const res = await app.request('/', {}, { ...env, APP_URL: 'https://connect2026.jpstripes.com/' });
    const html = await res.text();
    expect(html).toContain('https://connect2026.jpstripes.com/ogp.png');
    expect(html).not.toContain('.com//ogp.png');
  });

  it('主要セクション（theme / timetable / speakers / venue / sponsors / past）を含む', async () => {
    const html = await (await get('/')).text();
    for (const id of ['id="theme"', 'id="timetable"', 'id="speakers"', 'id="venue"', 'id="sponsors"', 'id="past"']) {
      expect(html).toContain(id);
    }
  });

  it('タイムテーブルにセッションと詳細リンクを含む', async () => {
    const html = await (await get('/')).text();
    expect(html).toContain('オープニングキーノート');
    expect(html).toContain('/sessions/opening-keynote/');
    expect(html).toContain('開場・受付');
  });

  it('カウントダウンの器とクライアント JS を含む', async () => {
    const html = await (await get('/')).text();
    expect(html).toContain('data-countdown="2026-08-01T10:00:00+09:00"');
    expect(html).toContain('/js/countdown.js');
  });

  it('スポンサーを tier ごとに表示する', async () => {
    const html = await (await get('/')).text();
    expect(html).toContain('data-tier="platinum"');
    expect(html).toContain('/sponsors/Stripe_logo.png');
    expect(html).toContain('data-tier="logo"');
  });
});

describe('スピーカー一覧 /speakers/', () => {
  it('登壇者のプロフィールを表示する', async () => {
    const res = await get('/speakers/');
    expect(res.status).toBe(200);
    const html = await res.text();
    expect(html).toContain('Daniel Heffernan');
    expect(html).toContain('<title>Speakers — JP_Stripes Connect 2026</title>');
  });

  it('末尾スラッシュなしはリダイレクトする', async () => {
    const res = await get('/speakers');
    expect([301, 308]).toContain(res.status);
    expect(new URL(res.headers.get('location')!, 'http://localhost').pathname).toBe('/speakers/');
  });
});

describe('チケット /tickets/', () => {
  it('2 種類の Stripe buy button を含む', async () => {
    const html = await (await get('/tickets/')).text();
    const matches = html.match(/<stripe-buy-button/g) ?? [];
    expect(matches.length).toBe(2);
    expect(html).toContain('buy_btn_1TeDepGbTZifRHVZnvlIMeLS');
    expect(html).toContain('buy_btn_1TeDSUGbTZifRHVZsvFTdN8Y');
    expect(html).toContain('js.stripe.com/v3/buy-button.js');
  });

  it('販売数の器に STATS_API_URL を埋め込む', async () => {
    const html = await (await get('/tickets/')).text();
    expect(html).toContain('data-endpoint="https://example.com/stats"');
    expect(html).toContain('/js/sales-count.js');
  });

  it('STATS_API_URL 未設定なら販売数の器を出さない', async () => {
    const res = await app.request('/tickets/', {}, { APP_URL: env.APP_URL });
    const html = await res.text();
    expect(html).not.toContain('data-endpoint=');
  });
});

describe('ブログ /blog/', () => {
  it('記事一覧を日付降順で表示する', async () => {
    const res = await get('/blog/');
    expect(res.status).toBe(200);
    const html = await res.text();
    expect(html).toContain('/blog/welcome-to-the-blog/');
    // 2026-06-08 の記事が 2026-06-07 の記事より先に出る
    const lt = html.indexOf('call-for-lt-speakers');
    const kickoff = html.indexOf('ai-era-monetization-jpstripes-connect-2026');
    expect(lt).toBeGreaterThan(-1);
    expect(kickoff).toBeGreaterThan(-1);
    expect(lt).toBeLessThan(kickoff);
  });

  it('記事詳細で Markdown 本文とイベント概要カードを表示する', async () => {
    const res = await get('/blog/welcome-to-the-blog/');
    expect(res.status).toBe(200);
    const html = await res.text();
    expect(html).toContain('class="session-body"');
    expect(html).toContain('blog-event');
  });

  it('存在しない記事は 404', async () => {
    const res = await get('/blog/no-such-post/');
    expect(res.status).toBe(404);
  });
});

describe('セッション詳細 /sessions/:slug/', () => {
  it('確定セッションはタイトル・スピーカーを表示する', async () => {
    const res = await get('/sessions/opening-keynote/');
    expect(res.status).toBe(200);
    const html = await res.text();
    expect(html).toContain('Daniel Heffernan');
    expect(html).toContain('class="session-body"');
  });

  it('セッション個別の OGP 画像があればそれを使う', async () => {
    const html = await (await get('/sessions/opening-keynote/')).text();
    expect(html).toContain('https://connect2026.jpstripes.com/sessions/opening-keynote.png');
  });

  it('存在しないセッションは 404', async () => {
    const res = await get('/sessions/no-such-session/');
    expect(res.status).toBe(404);
  });

  it('発表資料があるセッションは資料ページへのリンクを表示する', async () => {
    const html = await (await get('/sessions/track-b-1430/')).text();
    expect(html).toContain('class="session-materials"');
    expect(html).toContain('href="/presentations/track-b-1430/"');
    expect(html).toContain('発表資料を見る');
  });
});

describe('発表資料 /presentations/', () => {
  it('資料一覧を表示する', async () => {
    const res = await get('/presentations/');
    expect(res.status).toBe(200);
    const html = await res.text();
    expect(html).toContain('<title>Presentations — JP_Stripes Connect 2026</title>');
    expect(html).toContain('/presentations/track-b-1430/');
    expect(html).toContain('/presentations/closing-remark/');
  });

  it('資料ビューアで PDF.js スライドビューアを初期化する', async () => {
    const res = await get('/presentations/track-b-1430/');
    expect(res.status).toBe(200);
    const html = await res.text();
    expect(html).toContain('data-presentation-viewer');
    expect(html).toContain('data-pdf="/presentations/track-b-1430.pdf"');
    expect(html).toContain('/js/presentation-viewer.js');
    expect(html).toContain('presentation-deck');
    expect(html).toContain('href="/sessions/track-b-1430/"');
    expect(html).toContain('AI 時代でも押さえたい');
  });

  it('存在しない資料は 404', async () => {
    const res = await get('/presentations/no-such-deck/');
    expect(res.status).toBe(404);
  });
});

describe('法務ページ /legal/*', () => {
  it.each([
    ['/legal/tokushoho/', '特定商取引法に基づく'],
    ['/legal/privacy/', 'プライバシー'],
    ['/legal/terms/', '利用規約'],
    ['/legal/cancellation/', '返金ポリシー'],
  ])('%s が %s を含む', async (path, text) => {
    const res = await get(path);
    expect(res.status).toBe(200);
    expect(await res.text()).toContain(text);
  });

  it('法務ページには他の法務文書へのナビが付く', async () => {
    const html = await (await get('/legal/terms/')).text();
    const nav = html.match(/<nav class="legal-nav"[^>]*>([^]*?)<\/nav>/);
    expect(nav).not.toBeNull();
    expect(nav![1]).toContain('href="/legal/privacy/"');
    // 自分自身へのリンクは法務ナビ内には出さない（フッターは対象外）
    expect(nav![1]).not.toContain('href="/legal/terms/"');
  });
});

describe('404', () => {
  it('未知のパスはカスタム 404 ページを返す', async () => {
    const res = await get('/no-such-page/');
    expect(res.status).toBe(404);
    const html = await res.text();
    expect(html).toContain('404');
    expect(html).toContain('<html lang="ja"');
  });
});

describe('共通レイアウト', () => {
  it('全ページにナビとフッターが付く', async () => {
    for (const path of ['/', '/speakers/', '/tickets/', '/blog/', '/legal/terms/']) {
      const html = await (await get(path)).text();
      expect(html, path).toContain('class="top"');
      expect(html, path).toContain('参加申し込み');
      expect(html, path).toContain('© 2026 JP_Stripes');
    }
  });

  it('styles.css を読み込む', async () => {
    const html = await (await get('/')).text();
    expect(html).toContain('href="/styles.css"');
  });
});

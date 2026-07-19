import { Hono } from 'hono';
import { appendTrailingSlash } from 'hono/trailing-slash';
import { renderer, renderPage, appUrl } from './renderer';
import { x402Gate } from './middleware/x402-gate';
import { getAllPosts, getPostBySlug } from './lib/blog';
import { getSessionBySlug } from './lib/sessions';
import { sessionOgSlugs } from './generated/content';
import { Home } from './pages/Home';
import { SpeakersPage } from './pages/SpeakersPage';
import { TicketsPage } from './pages/TicketsPage';
import { BlogIndexPage } from './pages/BlogIndexPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { SessionPage } from './pages/SessionPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { TokushohoPage } from './pages/legal/TokushohoPage';
import { PrivacyPage } from './pages/legal/PrivacyPage';
import { TermsPage } from './pages/legal/TermsPage';
import { CancellationPage } from './pages/legal/CancellationPage';

type Env = {
  Bindings: {
    APP_URL?: string;
    STATS_API_URL?: string;
    // x402 決済ゲート用（src/middleware/x402-gate.ts）。
    // X402_PAY_TO は受取ウォレットアドレス（未設定なら fail-open で全員 200）。
    X402_PAY_TO?: string;
    X402_FACILITATOR_URL?: string;
    X402_NETWORK?: string;
    X402_PRICE?: string;
  };
};

// HTML タグを落として説明文（メタディスクリプション）用に切り詰める。
function excerptFromHtml(html: string, max = 160): string {
  return html.replace(/<[^>]+>/g, '').slice(0, max);
}

const app = new Hono<Env>();

// 旧サイト（Next.js の trailingSlash: true）と URL 形状を揃える:
// 末尾スラッシュ付きを正とし、なしはリダイレクトで寄せる。
app.use(appendTrailingSlash());
app.use(renderer);

// セッション/スピーカー情報は AIエージェントのみ x402（HTTP 402）でゲートし、人間は 200。
// 詳細は src/middleware/x402-gate.ts。
app.use('/sessions/*', x402Gate());
app.use('/speakers/*', x402Gate());

app.get('/', (c) => renderPage(c, <Home />));

app.get('/speakers/', (c) =>
  renderPage(c, <SpeakersPage />, {
    title: 'Speakers — JP_Stripes Connect 2026',
    description:
      'JP_Stripes Connect 2026 の登壇者プロフィール。決済・サブスク・請求管理の現場知見を持つスピーカーを紹介します。',
  })
);

app.get('/tickets/', (c) =>
  renderPage(c, <TicketsPage statsEndpoint={c.env?.STATS_API_URL} />, {
    title: '参加申し込み — JP_Stripes Connect 2026',
    description:
      'JP_Stripes Connect 2026 の参加チケット申し込みページ。本編参加（無料）または懇親会込み参加（2,000円・税込）をお選びください。2026年8月1日（土）横浜。',
  })
);

app.get('/blog/', (c) =>
  renderPage(c, <BlogIndexPage posts={getAllPosts()} />, {
    title: 'Blog — JP_Stripes Connect 2026',
    description:
      'JP_Stripes Connect 2026 の公式ブログ。イベントの最新情報や運営の裏側、Stripe 活用の知見をお届けします。',
  })
);

app.get('/blog/:slug/', (c) => {
  const post = getPostBySlug(c.req.param('slug'));
  if (!post) return c.notFound();
  return renderPage(c, <BlogPostPage post={post} />, {
    title: `${post.title} — JP_Stripes Connect 2026`,
    description: post.excerpt ?? excerptFromHtml(post.contentHtml),
  });
});

app.get('/sessions/:slug/', (c) => {
  const slug = c.req.param('slug');
  const session = getSessionBySlug(slug);
  if (!session) return c.notFound();
  const ogPath = sessionOgSlugs.includes(slug) ? `/sessions/${slug}.png` : '/ogp.png';
  return renderPage(c, <SessionPage session={session} />, {
    title: `${session.title} — JP_Stripes Connect 2026`,
    description: excerptFromHtml(session.contentHtml),
    ogImage: `${appUrl(c)}${ogPath}`,
  });
});

app.get('/legal/tokushoho/', (c) =>
  renderPage(c, <TokushohoPage />, {
    title: '特定商取引法に基づく表記 — JP_Stripes Connect 2026',
    description: 'JP_Stripes Connect 2026 懇親会参加費に関する特定商取引法に基づく表記。',
  })
);

app.get('/legal/privacy/', (c) =>
  renderPage(c, <PrivacyPage />, {
    title: 'プライバシーポリシー — JP_Stripes Connect 2026',
    description:
      'JP_Stripes Connect 2026 における個人情報の取り扱い。Stripe Payment Links による申込受付、および Stripe Community Builders プログラムへの情報提供（外国第三者提供）を含みます。',
  })
);

app.get('/legal/terms/', (c) =>
  renderPage(c, <TermsPage />, {
    title: '利用規約（参加規約） — JP_Stripes Connect 2026',
    description: 'JP_Stripes Connect 2026 への参加申込みおよび参加に適用される利用規約（参加規約）。',
  })
);

app.get('/legal/cancellation/', (c) =>
  renderPage(c, <CancellationPage />, {
    title: 'キャンセル・返金ポリシー — JP_Stripes Connect 2026',
    description: 'JP_Stripes Connect 2026 懇親会参加権の購入に関するキャンセル・返金の特約。',
  })
);

app.notFound((c) => {
  c.status(404);
  return renderPage(c, <NotFoundPage />, {
    title: '404 Not Found — JP_Stripes Connect 2026',
    description: 'お探しのページは見つかりませんでした。',
  });
});

export default app;

import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts, formatDate } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog — JP_Stripes Connect 2026',
  description:
    'JP_Stripes Connect 2026 の公式ブログ。イベントの最新情報や運営の裏側、Stripe 活用の知見をお届けします。',
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="container">
      <header className="legal-head">
        <div className="num">Blog</div>
        <h1>
          Blog,
          <br />
          <em>news & notes.</em>
        </h1>
        <div className="meta">JP_Stripes Connect 2026 — 公式ブログ</div>
      </header>

      {posts.length > 0 ? (
        <div className="blog-list">
          {posts.map((post) => (
            <article key={post.slug} className="blog-card">
              <Link href={`/blog/${post.slug}/`} className="blog-card-link">
                <div className="blog-card-date">{formatDate(post.date)}</div>
                <h2 className="blog-card-title">{post.title}</h2>
                {post.excerpt ? <p className="blog-card-excerpt">{post.excerpt}</p> : null}
                <div className="blog-card-foot">
                  {post.author ? <span className="blog-card-author">{post.author}</span> : null}
                  {post.tags && post.tags.length > 0 && (
                    <span className="blog-card-tags">
                      {post.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </span>
                  )}
                </div>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>まだ記事がありません。</p>
      )}

      <nav className="legal-nav">
        <Link href="/">← Back to Connect 2026</Link>
      </nav>
    </div>
  );
}

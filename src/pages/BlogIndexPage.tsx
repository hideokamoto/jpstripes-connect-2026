import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { formatDate } from '../lib/blog';
import type { BlogPost } from '../lib/blog';

export function BlogIndexPage({ posts }: { posts: BlogPost[] }) {
  return (
    <>
      <Nav />
      <main className="legal">
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
                  <a href={`/blog/${post.slug}/`} className="blog-card-link">
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
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <p>まだ記事がありません。</p>
          )}

          <nav className="legal-nav">
            <a href="/">← Back to Connect 2026</a>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}

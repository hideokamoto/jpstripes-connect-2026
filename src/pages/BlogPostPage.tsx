import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { BlogEventInfo } from '../components/BlogEventInfo';
import { formatDate } from '../lib/blog';
import type { BlogPost } from '../lib/blog';

export function BlogPostPage({ post }: { post: BlogPost }) {
  return (
    <>
      <Nav />
      <main className="legal">
        <div className="container">
          <header className="legal-head">
            <div className="num">Blog</div>
            <h1>{post.title}</h1>
            <div className="meta">
              {formatDate(post.date)}
              {post.author ? ` — ${post.author}` : ''}
            </div>
          </header>

          <div className="session-detail">
            {post.tags && post.tags.length > 0 && (
              <div className="session-meta-bar">
                <div className="session-tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            )}

            <div
              className="session-body"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            <BlogEventInfo />
          </div>

          <nav className="legal-nav">
            <a href="/blog/">← ブログ一覧へ</a>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}

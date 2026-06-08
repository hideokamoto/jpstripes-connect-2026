import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPostSlugs, getPostBySlug, formatDate } from '@/lib/blog';
import { BlogEventInfo } from '@/components/BlogEventInfo';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const desc = post.excerpt ?? post.contentHtml.replace(/<[^>]+>/g, '').slice(0, 160);
  return {
    title: `${post.title} — JP_Stripes Connect 2026`,
    description: desc,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
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

        <BlogEventInfo />

        <div
          className="session-body"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>

      <nav className="legal-nav">
        <Link href="/blog/">← ブログ一覧へ</Link>
      </nav>
    </div>
  );
}

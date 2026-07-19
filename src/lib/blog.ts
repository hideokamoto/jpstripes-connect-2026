import { blogPosts } from '../generated/content';

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  author?: string;
  tags?: string[];
  contentHtml: string;
};

const defaultPosts = blogPosts as BlogPost[];

export function getAllPosts(posts: BlogPost[] = defaultPosts): BlogPost[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string, posts: BlogPost[] = defaultPosts): BlogPost | null {
  return posts.find((p) => p.slug === slug) ?? null;
}

// "YYYY-MM-DD" はローカルタイムゾーンで解釈すると UTC より遅い環境で
// 前日にずれるため、Date を経由せず文字列から直接年月日を取り出す。
const ISO_DATE = /^(\d{4})-(\d{2})-(\d{2})$/;

export function formatDate(date: string): string {
  const match = ISO_DATE.exec(date);
  if (match) {
    const [, year, month, day] = match;
    return `${year}年${Number(month)}月${Number(day)}日`;
  }
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

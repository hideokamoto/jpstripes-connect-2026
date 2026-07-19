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
    const monthNumber = Number(month);
    const dayNumber = Number(day);
    const lastDayOfMonth = new Date(Date.UTC(Number(year), monthNumber, 0)).getUTCDate();
    if (monthNumber < 1 || monthNumber > 12 || dayNumber < 1 || dayNumber > lastDayOfMonth) {
      return date;
    }
    return `${year}年${monthNumber}月${dayNumber}日`;
  }
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return `${d.getUTCFullYear()}年${d.getUTCMonth() + 1}月${d.getUTCDate()}日`;
}

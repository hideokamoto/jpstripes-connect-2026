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

export function formatDate(date: string): string {
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

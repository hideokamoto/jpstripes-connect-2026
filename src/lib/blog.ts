import fs from 'fs';
import path from 'path';
import { cache } from 'react';
import matter from 'gray-matter';
import { marked } from 'marked';

const blogDir = path.join(process.cwd(), 'content/blog');

export type BlogFrontmatter = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  author?: string;
  tags?: string[];
};

export type BlogPost = BlogFrontmatter & {
  contentHtml: string;
};

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(blogDir)) return [];
  return fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

export const getPostBySlug = cache((slug: string): BlogPost | null => {
  if (!/^[a-zA-Z0-9-_]+$/.test(slug)) return null;
  const filePath = path.join(blogDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  const contentHtml = marked(content) as string;
  return { ...(data as BlogFrontmatter), slug, contentHtml };
});

// Listing only needs metadata, so skip the markdown-to-HTML compilation.
export function getAllPosts(): BlogFrontmatter[] {
  return getAllPostSlugs()
    .map((slug) => {
      const filePath = path.join(blogDir, `${slug}.md`);
      if (!fs.existsSync(filePath)) return null;
      const raw = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(raw);
      return { ...(data as BlogFrontmatter), slug };
    })
    .filter((p): p is BlogFrontmatter => p !== null)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function formatDate(date: string): string {
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

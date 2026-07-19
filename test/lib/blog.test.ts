import { describe, it, expect } from 'vitest';
import { formatDate, getAllPosts, getPostBySlug } from '@/lib/blog';
import type { BlogPost } from '@/lib/blog';

const fixtures: BlogPost[] = [
  {
    slug: 'older-post',
    title: '古い記事',
    date: '2026-05-01',
    excerpt: '古い方',
    contentHtml: '<p>old</p>',
  },
  {
    slug: 'newer-post',
    title: '新しい記事',
    date: '2026-06-15',
    author: 'テスト太郎',
    tags: ['お知らせ'],
    contentHtml: '<p>new</p>',
  },
];

describe('formatDate', () => {
  it('ISO 形式の日付を日本語表記にする', () => {
    expect(formatDate('2026-08-01')).toBe('2026年8月1日');
  });

  it('パースできない文字列はそのまま返す', () => {
    expect(formatDate('日付未定')).toBe('日付未定');
  });
});

describe('getAllPosts', () => {
  it('日付の降順で返す', () => {
    const posts = getAllPosts(fixtures);
    expect(posts.map((p) => p.slug)).toEqual(['newer-post', 'older-post']);
  });

  it('デフォルトでは生成済みコンテンツを返す（welcome-to-the-blog を含む）', () => {
    const slugs = getAllPosts().map((p) => p.slug);
    expect(slugs).toContain('welcome-to-the-blog');
  });
});

describe('getPostBySlug', () => {
  it('slug の一致する記事を返す', () => {
    const post = getPostBySlug('newer-post', fixtures);
    expect(post?.title).toBe('新しい記事');
    expect(post?.contentHtml).toContain('<p>new</p>');
  });

  it('存在しない slug は null を返す', () => {
    expect(getPostBySlug('nope', fixtures)).toBeNull();
  });

  it('生成済みコンテンツから Markdown が HTML 化されている', () => {
    const post = getPostBySlug('welcome-to-the-blog');
    expect(post).not.toBeNull();
    expect(post!.contentHtml).toMatch(/<(p|h2)>/);
  });
});

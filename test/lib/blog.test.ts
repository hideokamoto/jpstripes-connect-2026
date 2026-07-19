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

  it('月・日の 0 埋めを取り除く', () => {
    expect(formatDate('2026-01-05')).toBe('2026年1月5日');
  });

  it('実行環境のタイムゾーンに関わらず同じ日付を返す（UTC 変換に依存しない）', () => {
    // new Date('2026-08-01') を UTC-8h などローカル getter で整形すると、
    // UTC より遅いタイムゾーンでは前日の 7/31 にずれてしまう回帰を防ぐ。
    const originalTZ = process.env.TZ;
    process.env.TZ = 'America/Los_Angeles';
    try {
      expect(formatDate('2026-08-01')).toBe('2026年8月1日');
    } finally {
      process.env.TZ = originalTZ;
    }
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

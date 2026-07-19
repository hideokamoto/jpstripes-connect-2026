import { describe, it, expect } from 'vitest';
import { getAllSessions, getSessionBySlug, splitTitle } from '@/lib/sessions';
import type { SessionData } from '@/lib/sessions';

const fixtures: SessionData[] = [
  {
    slug: 'b-1340',
    title: 'Track B のセッション',
    time: '13:40',
    duration: '30 min',
    track: 'B',
    contentHtml: '<p>b</p>',
  },
  {
    slug: 'a-1340',
    title: 'Track A のセッション',
    time: '13:40',
    duration: '30 min',
    track: 'A',
    contentHtml: '<p>a</p>',
  },
  {
    slug: 'keynote',
    title: 'キーノート',
    time: '13:00',
    duration: '35 min',
    track: 'A',
    contentHtml: '<p>k</p>',
  },
];

describe('getAllSessions', () => {
  it('時刻順・同時刻はトラック順で返す', () => {
    const list = getAllSessions(fixtures);
    expect(list.map((s) => s.slug)).toEqual(['keynote', 'a-1340', 'b-1340']);
  });

  it('デフォルトでは生成済みコンテンツを返す（opening-keynote を含む）', () => {
    const slugs = getAllSessions().map((s) => s.slug);
    expect(slugs).toContain('opening-keynote');
  });
});

describe('getSessionBySlug', () => {
  it('slug の一致するセッションを返す', () => {
    expect(getSessionBySlug('keynote', fixtures)?.title).toBe('キーノート');
  });

  it('存在しない slug は null を返す', () => {
    expect(getSessionBySlug('nope', fixtures)).toBeNull();
  });
});

describe('splitTitle', () => {
  it('全角コロンで前後に分割する', () => {
    expect(splitTitle('対談：AIは何を買うのか')).toEqual(['対談：', 'AIは何を買うのか']);
  });

  it('閉じ括弧【】でも分割する', () => {
    expect(splitTitle('【入門】Stripeのはじめかた')).toEqual(['【入門】', 'Stripeのはじめかた']);
  });

  it('区切りがなければ後半は null', () => {
    expect(splitTitle('シンプルなタイトル')).toEqual(['シンプルなタイトル', null]);
  });

  it('区切りが末尾にある場合は分割しない', () => {
    expect(splitTitle('タイトル：')).toEqual(['タイトル：', null]);
  });
});

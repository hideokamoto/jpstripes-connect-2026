import { describe, it, expect } from 'vitest';
import { buildBlocks } from '@/lib/timetable';
import type { TimetableSession } from '@/lib/timetable';

const fixtures: TimetableSession[] = [
  { time: '12:00', duration: '45 min', track: '—', title: '開場・受付', isBreak: true },
  { time: '13:00', duration: '35 min', track: 'A', title: 'キーノート' },
  { time: '13:40', duration: '30 min', track: 'A', title: 'A-1' },
  { time: '13:40', duration: '30 min', track: 'B', title: 'B-1' },
];

describe('buildBlocks', () => {
  it('時刻ごとに 1 ブロックへまとめる', () => {
    const blocks = buildBlocks(fixtures);
    expect(blocks.map((b) => b.time)).toEqual(['12:00', '13:00', '13:40']);
  });

  it('track が「—」のセッションは common に入る', () => {
    const blocks = buildBlocks(fixtures);
    expect(blocks[0].common?.title).toBe('開場・受付');
    expect(blocks[0].a).toBeUndefined();
    expect(blocks[0].b).toBeUndefined();
  });

  it('A / B のセッションはそれぞれのカラムに入る', () => {
    const blocks = buildBlocks(fixtures);
    expect(blocks[2].a?.title).toBe('A-1');
    expect(blocks[2].b?.title).toBe('B-1');
  });

  it('片方のトラックしかない時刻は他方が undefined', () => {
    const blocks = buildBlocks(fixtures);
    expect(blocks[1].a?.title).toBe('キーノート');
    expect(blocks[1].b).toBeUndefined();
  });

  it('同時刻に長さの違うセッションがある場合、ブロックの尺は長い方を採る', () => {
    const blocks = buildBlocks([
      { time: '15:10', duration: '30 min', track: 'B', title: 'B-2' },
      { time: '15:10', duration: '40 min', track: 'A', title: 'A-2' },
    ]);
    expect(blocks[0].duration).toBe('40 min');
  });

  it('JSON の並び順に関わらずブロックの尺は変わらない', () => {
    const blocks = buildBlocks([
      { time: '15:10', duration: '40 min', track: 'A', title: 'A-2' },
      { time: '15:10', duration: '30 min', track: 'B', title: 'B-2' },
    ]);
    expect(blocks[0].duration).toBe('40 min');
  });

  it('JSON の並び順に関わらずブロックは時刻順に並ぶ', () => {
    const blocks = buildBlocks([
      { time: '14:35', duration: '30 min', track: 'A', title: 'A-1' },
      { time: '15:20', duration: '30 min', track: 'B', title: 'B-2' },
      { time: '15:10', duration: '40 min', track: 'A', title: 'A-2' },
      { time: '14:35', duration: '40 min', track: 'B', title: 'B-1' },
    ]);
    expect(blocks.map((b) => b.time)).toEqual(['14:35', '15:10', '15:20']);
  });
});

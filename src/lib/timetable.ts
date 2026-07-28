import type { SessionStatus } from './sessions';

// src/data/sessions.json の 1 エントリ。タイムテーブル表示専用のビュー型で、
// セッション詳細（content/sessions/*.md 由来の SessionData）とは別物。
export type TimetableSession = {
  time: string;
  duration: string;
  track: string;
  title: string;
  tags?: string[];
  speaker?: string;
  isBreak?: boolean;
  slug?: string;
  status?: SessionStatus;
};

export type TimeBlock = {
  time: string;
  duration: string;
  common?: TimetableSession;
  a?: TimetableSession;
  b?: TimetableSession;
};

// "40 min" → 40。数値として読めない場合は 0 扱い。
function toMinutes(duration: string): number {
  const n = Number.parseInt(duration, 10);
  return Number.isNaN(n) ? 0 : n;
}

export function buildBlocks(list: TimetableSession[]): TimeBlock[] {
  const map = new Map<string, TimeBlock>();
  for (const s of list) {
    if (!map.has(s.time)) {
      map.set(s.time, { time: s.time, duration: s.duration });
    }
    const block = map.get(s.time)!;
    // ブロックの尺は A / B のうち長い方。JSON の並び順で決めると、
    // 同時刻に長さの違うセッションがある場合に先頭の尺が採用され、
    // 各カラムのカード表示と食い違う。
    if (toMinutes(s.duration) > toMinutes(block.duration)) {
      block.duration = s.duration;
    }
    if (s.track === '—') block.common = s;
    else if (s.track === 'A') block.a = s;
    else if (s.track === 'B') block.b = s;
  }
  return Array.from(map.values());
}

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

// "15:20" → 920。数値として読めない場合は Infinity 扱いで末尾に送る。
function toTimeOfDay(time: string): number {
  const [h, m] = time.split(':').map((n) => Number.parseInt(n, 10));
  return Number.isNaN(h) || Number.isNaN(m) ? Number.POSITIVE_INFINITY : h * 60 + m;
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
  // JSON の並び順は時系列と一致するとは限らない（同時刻セッションが
  // 複数あると挿入順が入れ替わりうる）ため、時刻で明示的に整列する。
  return Array.from(map.values()).sort((x, y) => toTimeOfDay(x.time) - toTimeOfDay(y.time));
}

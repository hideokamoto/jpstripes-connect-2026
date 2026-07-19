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

export function buildBlocks(list: TimetableSession[]): TimeBlock[] {
  const map = new Map<string, TimeBlock>();
  for (const s of list) {
    if (!map.has(s.time)) {
      map.set(s.time, { time: s.time, duration: s.duration });
    }
    const block = map.get(s.time)!;
    if (s.track === '—') block.common = s;
    else if (s.track === 'A') block.a = s;
    else if (s.track === 'B') block.b = s;
  }
  return Array.from(map.values());
}

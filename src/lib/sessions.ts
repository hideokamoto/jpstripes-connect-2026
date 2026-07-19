import { sessionEntries } from '../generated/content';

export type SessionStatus = 'confirmed' | 'provisional' | 'tbd';

export type SessionData = {
  slug: string;
  title: string;
  time: string;
  duration: string;
  track: string;
  tags?: string[];
  speakerId?: string;
  speakerIds?: string[];
  status?: SessionStatus;
  contentHtml: string;
};

const defaultSessions = sessionEntries as SessionData[];

export function getAllSessions(sessions: SessionData[] = defaultSessions): SessionData[] {
  return [...sessions].sort((a, b) => {
    const timeA = a.time.replaceAll(':', '');
    const timeB = b.time.replaceAll(':', '');
    if (timeA !== timeB) return timeA.localeCompare(timeB);
    return a.track.localeCompare(b.track);
  });
}

export function getSessionBySlug(
  slug: string,
  sessions: SessionData[] = defaultSessions
): SessionData | null {
  return sessions.find((s) => s.slug === slug) ?? null;
}

// タイトルを黒字の前半 + アクセント色の後半に、単語が切れない位置
// （全角コロン、次いで閉じ括弧）で分割する。
export function splitTitle(title: string): [string, string | null] {
  for (const delim of ['：', '】']) {
    const idx = title.indexOf(delim);
    if (idx !== -1 && idx < title.length - 1) {
      return [title.slice(0, idx + 1), title.slice(idx + 1)];
    }
  }
  return [title, null];
}

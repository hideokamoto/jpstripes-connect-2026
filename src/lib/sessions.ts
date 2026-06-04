import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const sessionsDir = path.join(process.cwd(), 'content/sessions');

export type SessionStatus = 'confirmed' | 'provisional' | 'tbd';

export type SessionFrontmatter = {
  slug: string;
  title: string;
  time: string;
  duration: string;
  track: string;
  tags?: string[];
  speakerId?: string;
  status?: SessionStatus;
};

export type SessionData = SessionFrontmatter & {
  contentHtml: string;
};

export function getAllSessionSlugs(): string[] {
  if (!fs.existsSync(sessionsDir)) return [];
  return fs
    .readdirSync(sessionsDir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

export function getSessionBySlug(slug: string): SessionData | null {
  const filePath = path.join(sessionsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  const contentHtml = marked(content) as string;
  return { ...(data as SessionFrontmatter), contentHtml };
}

export function getAllSessions(): SessionData[] {
  return getAllSessionSlugs()
    .map((slug) => getSessionBySlug(slug))
    .filter((s): s is SessionData => s !== null)
    .sort((a, b) => {
      const timeA = a.time.replace(':', '');
      const timeB = b.time.replace(':', '');
      if (timeA !== timeB) return timeA.localeCompare(timeB);
      return a.track.localeCompare(b.track);
    });
}

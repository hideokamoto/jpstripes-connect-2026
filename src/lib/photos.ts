import fs from 'fs';
import path from 'path';

const photosDir = path.join(process.cwd(), 'public/events/photos');

export type EventPhoto = {
  id: string;
  src: string;
  thumb: string;
};

export function getEventPhotos(): EventPhoto[] {
  if (!fs.existsSync(photosDir)) return [];

  return fs
    .readdirSync(photosDir)
    .filter((f) => /\.jpe?g$/i.test(f))
    .sort((a, b) => a.localeCompare(b, 'en'))
    .map((file) => {
      const id = file.replace(/\.jpe?g$/i, '');
      return {
        id,
        src: `/events/photos/${file}`,
        thumb: `/events/photos/thumbs/${file}`,
      };
    });
}

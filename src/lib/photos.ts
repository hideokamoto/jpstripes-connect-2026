import { eventPhotos } from '../generated/content';

export type EventPhoto = {
  id: string;
  src: string;
  thumb: string;
};

const defaultPhotos = eventPhotos as EventPhoto[];

export function getEventPhotos(photos: EventPhoto[] = defaultPhotos): EventPhoto[] {
  return photos;
}

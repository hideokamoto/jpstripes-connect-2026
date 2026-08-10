import presentationsData from '../data/presentations.json';

export type Presentation = {
  slug: string;
  title: string;
  subtitle?: string;
  sessionSlug?: string;
};

const presentations = presentationsData as Presentation[];

export function getAllPresentations(): Presentation[] {
  return presentations;
}

export function getPresentationBySlug(slug: string): Presentation | null {
  return presentations.find((p) => p.slug === slug) ?? null;
}

export function presentationPdfPath(slug: string): string {
  return `/presentations/${slug}.pdf`;
}

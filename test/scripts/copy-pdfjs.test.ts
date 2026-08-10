import { describe, it, expect } from 'vitest';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const pdfjsDir = join(process.cwd(), 'public/js/pdfjs');

describe('copy:pdfjs', () => {
  it.each(['pdf.min.mjs', 'pdf.worker.min.mjs'])('public/js/pdfjs/%s が存在する', (file) => {
    expect(existsSync(join(pdfjsDir, file))).toBe(true);
  });
});

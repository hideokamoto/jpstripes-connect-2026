import { copyFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dest = join(root, 'public/js/pdfjs');

await mkdir(dest, { recursive: true });

for (const file of ['pdf.min.mjs', 'pdf.worker.min.mjs']) {
  await copyFile(join(root, 'node_modules/pdfjs-dist/build', file), join(dest, file));
}

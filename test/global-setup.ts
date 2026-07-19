import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// テスト対象の lib / app は src/generated/content.ts（ビルド生成物）へ依存するため、
// テスト実行前に必ず最新のコンテンツを生成しておく。
export default function setup() {
  const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
  execSync('node scripts/build-content.mjs', { cwd: root, stdio: 'inherit' });
}

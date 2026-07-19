import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
    },
  },
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'hono/jsx',
  },
  test: {
    // Markdown コンテンツを src/generated/content.ts へ事前コンパイルしてからテストを走らせる。
    globalSetup: './test/global-setup.ts',
  },
});

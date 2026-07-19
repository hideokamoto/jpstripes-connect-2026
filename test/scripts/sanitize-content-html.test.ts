import { describe, it, expect } from 'vitest';
import { sanitizeContentHtml } from '../../scripts/sanitize-content-html.mjs';

describe('sanitizeContentHtml', () => {
  it('script タグを取り除く', () => {
    const html = sanitizeContentHtml('<p>hello</p><script>alert(1)</script>');
    expect(html).not.toContain('<script>');
    expect(html).toContain('<p>hello</p>');
  });

  it('onerror などのイベントハンドラ属性を取り除く', () => {
    const html = sanitizeContentHtml('<img src="x.png" onerror="alert(1)">');
    expect(html).not.toContain('onerror');
    expect(html).toContain('src="x.png"');
  });

  it('javascript: スキームのリンクを無害化する', () => {
    const html = sanitizeContentHtml('<a href="javascript:alert(1)">click</a>');
    expect(html).not.toContain('javascript:');
  });

  it('通常の Markdown 由来 HTML（見出し・強調・リンク・blog-cta-wrap）はそのまま残す', () => {
    const html = sanitizeContentHtml(
      '<h2>見出し</h2><p><strong>太字</strong>と<a href="/tickets" class="nav-cta">リンク</a></p>' +
        '<div class="blog-cta-wrap"><a class="nav-cta" href="/tickets">申し込み →</a></div>'
    );
    expect(html).toContain('<h2>見出し</h2>');
    expect(html).toContain('<strong>太字</strong>');
    expect(html).toContain('href="/tickets"');
    expect(html).toContain('class="blog-cta-wrap"');
    expect(html).toContain('class="nav-cta"');
  });
});

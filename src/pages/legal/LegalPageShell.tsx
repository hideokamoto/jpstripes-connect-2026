import type { Child } from 'hono/jsx';
import { Nav } from '../../components/Nav';
import { Footer } from '../../components/Footer';

// 法務ページ共通の枠（旧 Next.js の legal/layout.tsx 相当）。
export function LegalPageShell({ children }: { children: Child }) {
  return (
    <>
      <Nav />
      <main className="legal">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </>
  );
}

import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export default function LegalLayout({ children }: { children: React.ReactNode }) {
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

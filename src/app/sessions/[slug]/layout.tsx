import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export default function SessionLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="session-page">{children}</main>
      <Footer />
    </>
  );
}

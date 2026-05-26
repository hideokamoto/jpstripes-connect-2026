import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export default function SpeakersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="speakers-page">{children}</main>
      <Footer />
    </>
  );
}

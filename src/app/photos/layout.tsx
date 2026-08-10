import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export default function PhotosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="photos-page">{children}</main>
      <Footer />
    </>
  );
}

import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export default function TicketsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="tickets-page">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </>
  );
}

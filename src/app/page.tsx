import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Theme } from '@/components/Theme';
import { Timetable } from '@/components/Timetable';
import { Speakers } from '@/components/Speakers';
import { Venue } from '@/components/Venue';
import { Sponsors } from '@/components/Sponsors';
import { Past } from '@/components/Past';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <Theme />
      <Timetable />
      <Speakers />
      <Venue />
      <Sponsors />
      <Past />
      <Footer />
    </>
  );
}

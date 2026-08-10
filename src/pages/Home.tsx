import { Nav } from '../components/Nav';
import { Hero } from '../components/Hero';
import { Theme } from '../components/Theme';
import { Timetable } from '../components/Timetable';
import { Speakers } from '../components/Speakers';
import { Venue } from '../components/Venue';
import { Sponsors } from '../components/Sponsors';
import { Past } from '../components/Past';
import { Footer } from '../components/Footer';

export function Home() {
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
      <script src="/js/chapter-nav.js" defer></script>
      <script src="/js/venue-map.js" defer></script>
      <script
        src="https://cdn.geolonia.com/v1/embed?geolonia-api-key=b5feef31faaa43c08836b4beee951fbc"
        async
      ></script>
    </>
  );
}

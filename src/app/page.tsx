import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedMenu from '@/components/FeaturedMenu';
import LocationHours from '@/components/LocationHours';
import ReviewCards from '@/components/ReviewCards';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedMenu />
        <LocationHours />
        <ReviewCards />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}

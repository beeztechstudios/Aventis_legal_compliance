import type { Metadata } from 'next';
import { aboutMetadata } from '@/lib/siteMeta';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import OurProfessionals from '@/components/OurProfessionals';

import AboutHero from '@/components/about/AboutHero';
import AboutStats from '@/components/about/AboutStats';
import AboutFoundation from '@/components/about/AboutFoundation';
import AboutWhyChooseUs from '@/components/about/AboutWhyChooseUs';
import AboutCTA from '@/components/about/AboutCTA';
import PageAnimate from '@/components/PageAnimate';

export const metadata: Metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#FAF1E1]">
      <Navbar />
      <PageAnimate>
        <AboutHero />
        <AboutStats />
        <AboutFoundation />
        <AboutWhyChooseUs />
        <OurProfessionals />
        <FAQ />
        <AboutCTA />
      </PageAnimate>
      <Footer />
    </main>
  );
}

import { Metadata } from "next";
import { homeMetadata } from "@/lib/siteMeta";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PracticeAreas from "@/components/PracticeAreas";
import WhyChooseUs from "@/components/WhyChooseUs";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import HowWeWork from "@/components/HowWeWork";
import OurProfessionals from "@/components/OurProfessionals";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export const metadata: Metadata = homeMetadata;

export default async function Home() {

  return (
    <main className="flex flex-col min-h-screen bg-[#FAF1E1]">
      <Navbar />
      <Hero />
      <PracticeAreas />
      <WhyChooseUs />
      <IndustriesWeServe />
      <HowWeWork />
      <OurProfessionals variant="home" />
      <FAQ />
      <CallToAction />
      <Footer />
    </main>
  );
}

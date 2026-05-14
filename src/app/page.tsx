import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PracticeAreas from "@/components/PracticeAreas";
import WhyChooseUs from "@/components/WhyChooseUs";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import HowWeWork from "@/components/HowWeWork";
import OurProfessionals from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";


export default async function Home() {

  return (
    <main className="flex flex-col min-h-screen bg-[#FAF1E1]">
      <Navbar />
      <Hero />
      <PracticeAreas />
      <WhyChooseUs />
      <IndustriesWeServe />
      <HowWeWork />
      <OurProfessionals />
      <FAQ />
      <CallToAction />
      <Footer />
    </main>
  );
}

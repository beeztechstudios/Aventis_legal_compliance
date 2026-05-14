import { client } from "@/sanity/client";
import { urlForImage } from "@/sanity/image";
import Link from "next/link";
import Image from "next/image";
import { SanityContentRenderer } from "@/components/SanityContent";
import Navbar from "@/components/Navbar";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { ArrowUpRight, ChevronLeft } from "lucide-react";

async function getPracticeArea(slug: string) {
  const query = `
    *[_type == "practiceArea" && slug.current == $slug][0]{
      title, tagline, excerpt, content, featuredImage, keyPoints, seo, slug
    }
  `;
  try {
    return await client.fetch(query, { slug });
  } catch (error) {
    console.error("Error fetching practice area:", error);
    return null;
  }
}

async function getOtherPracticeAreas(currentSlug: string) {
  const query = `
    *[_type == "practiceArea" && slug.current != $currentSlug][0...8]{
      title,
      "slug": slug.current
    }
  `;
  try {
    return await client.fetch(query, { currentSlug });
  } catch (error) {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = await getPracticeArea(slug);
  if (!area) return { title: "Practice Area Not Found" };

  const title = area.seo?.metaTitle || `${area.title} | Aventis Legal Compliance`;
  const description = area.seo?.metaDescription || area.excerpt;

  return {
    title,
    description,
  };
}

export default async function PracticeAreaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = await getPracticeArea(slug);
  const otherAreas = await getOtherPracticeAreas(slug);

  if (!area) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF1E1]">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-[#131C2B] mb-4">Practice area not found</h1>
          <a href="/practice-areas" className="text-[#A17755] hover:underline">
            ← Back to Practice Areas
          </a>
        </div>
      </div>
    );
  }

  return (
    <main className="flex flex-col min-h-screen bg-[#FAF1E1]">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative w-full min-h-[400px] md:min-h-[500px] flex items-end overflow-hidden">
        {area.featuredImage?.asset ? (
          <Image
            src={urlForImage(area.featuredImage)?.url() || "/practice-details-hero.png"}
            alt={area.title}
            fill
            className="object-cover opacity-40"
            priority
          />
        ) : (
           <Image
            src="/practice-details-hero.png"
            alt={area.title}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#131C2B] to-transparent opacity-80" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pb-16 pt-32">
          <a
            href="/practice-areas"
            className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm mb-6 transition-colors no-underline group"
          >
            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Practice Areas
          </a>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight max-w-4xl">
            {area.title}
          </h1>
          
          {area.tagline && (
            <p className="text-white/80 text-lg md:text-xl font-sans mt-4 max-w-2xl">
              {area.tagline}
            </p>
          )}
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">
          
          {/* Left: Main Content */}
          <div className="flex-1 min-w-0">
            {area.excerpt && (
              <p className="text-xl md:text-2xl font-serif text-[#131C2B] leading-relaxed mb-10 border-l-4 border-[#A17755] pl-6 italic">
                {area.excerpt}
              </p>
            )}

            <div className="sanity-content">
              <SanityContentRenderer content={area.content} />
            </div>
          </div>

          {/* Right: Sidebar */}
          <aside className="lg:w-[320px] xl:w-[360px] flex-shrink-0">
            {/* Key Points */}
            {area.keyPoints && area.keyPoints.length > 0 && (
              <div className="bg-white p-8 rounded-xl shadow-sm mb-8 border border-[#131C2B]/5">
                <h3 className="font-serif text-xl text-[#131C2B] mb-6 font-medium">Key Highlights</h3>
                <ul className="space-y-4">
                  {area.keyPoints.map((point: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-[#131C2B]/80 text-sm leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#A17755] mt-1.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Other Areas */}
            <div className="bg-[#131C2B] p-8 rounded-xl text-white shadow-lg">
              <h3 className="font-serif text-xl mb-6 font-medium">Other Expertise</h3>
              <ul className="space-y-4">
                {otherAreas.map((item: any) => (
                  <li key={item.slug} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <a 
                      href={`/practice-areas/${item.slug}`} 
                      className="text-white/80 hover:text-white transition-colors text-[15px] flex items-center justify-between group"
                    >
                      {item.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 pt-8 border-t border-white/10">
                <h4 className="font-serif text-lg mb-4 text-white">Need Consultation?</h4>
                <p className="text-white/60 text-sm mb-6">
                  Get in touch with our experts to discuss your specific requirements.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-[#A17755] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#8F6F4E] transition-colors w-full justify-center"
                >
                  Book a Call
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </main>
  );
}

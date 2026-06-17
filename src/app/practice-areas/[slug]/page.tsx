import { client } from "@/sanity/client";
import { urlForImage } from "@/sanity/image";
import Link from "next/link";
import Image from "next/image";
import { SanityContentRenderer } from "@/components/SanityContent";
import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
// import CallToAction from "@/components/CallToAction";
import AboutCTA from "@/components/about/AboutCTA";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import PageAnimate from "@/components/PageAnimate";

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

      <PageAnimate>
        {/* --- Hero Section --- */}
        <section className="px-6 md:px-12 pt-12 md:pt-24 pb-10 md:pb-16 w-full">
          <div className="hero-content flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:gap-24">
            
            {/* Left: Title */}
            <div className="flex-1 lg:max-w-[60%]">
              <h1 className="heading-hero">
                {area.title}
              </h1>
            </div>

            {/* Right: Excerpt & Consultation Button */}
            <div className="lg:w-[35%] lg:max-w-[420px] flex flex-col lg:pt-[4.5rem]">
              <p className="section-description heading-to-desc mb-6 max-w-[500px]">
                {area.tagline || area.excerpt || 'Practical and business-focused compliance solutions.'}
              </p>
              
              <Link 
                href="/contact#connect" 
                className="btn-premium px-8 py-3.5 rounded-md text-[15px] shadow-sm w-fit inline-flex items-center justify-center"
              >
                Discuss Your Requirements
              </Link>
            </div>

          </div>
        </section>

        {/* Hero Image - Edge to Edge */}
        <div className="hero-image w-full relative aspect-video md:aspect-[21/9] overflow-hidden bg-[#131C2B]/5">
          <Image
            src={area.featuredImage?.asset ? urlForImage(area.featuredImage)?.url() || '/practice-details-hero.webp' : '/practice-details-hero.webp'}
            alt={area.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content Section */}
        <section className="px-6 md:px-12 py-10 md:py-16 w-full flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* Left: Main Content */}
          <div className="flex-1 lg:w-[65%] min-w-0">
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
          <aside className="w-full lg:w-[30%] lg:max-w-[340px] shrink-0 relative">
            <div className="sticky top-24 flex flex-col gap-4">

              {/* Key Points */}
              {area.keyPoints && area.keyPoints.length > 0 && (
                <div className="w-full bg-white rounded-sm shadow-sm p-6 md:p-8 flex flex-col">
                  <h3 className="font-sans text-[15px] text-[#131C2B]/60 mb-2 font-medium">Key Highlights</h3>
                  <ul className="flex flex-col">
                    {area.keyPoints.map((point: string, i: number) => (
                      <li key={i} className="py-4 font-sans text-[14px] text-[#131C2B]/80 border-b border-[#131C2B]/10 last:border-b-0 leading-snug flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#A17755] mt-[6px] shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Other Expertise Card */}
              <div className="w-full bg-white rounded-sm shadow-sm p-6 md:p-8 flex flex-col">
                <h3 className="font-sans text-[15px] text-[#131C2B]/60 mb-2 font-medium">Other Expertise</h3>
                <div className="flex flex-col">
                  {otherAreas.length > 0 ? (
                    otherAreas.map((item: { title: string; slug: string }) => {
                      const words = item.title.split(' ');
                      const truncated = words.length > 6
                        ? words.slice(0, 6).join(' ') + '...'
                        : item.title;
                      return (
                        <Link
                          key={item.slug}
                          href={`/practice-areas/${item.slug}`}
                          className="py-4 font-sans text-[14px] text-[#131C2B]/80 hover:text-[#131C2B] transition-colors border-b border-[#131C2B]/10 last:border-b-0 leading-snug"
                        >
                          {truncated}
                        </Link>
                      );
                    })
                  ) : (
                    <p className="py-4 font-sans text-[13px] text-[#131C2B]/50">No other areas found.</p>
                  )}
                </div>
              </div>

            </div>
          </aside>
        </section>

        <FAQ />
        {/* <CallToAction /> */}
        <AboutCTA />
      </PageAnimate>
      <Footer />
    </main>
  );
}

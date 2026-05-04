import Image from "next/image";
import { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { InsightsSection, type InsightItem } from "@/components/sections/InsightsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ProfileSection } from "@/components/sections/ProfileSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { LegacySection } from "@/components/sections/LegacySection";
import { client, urlFor } from "@/lib/sanity";
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Best Law Firm in Delhi | Pramanika Legal – Cyber Crime & Disputes",
  description: "Top law firm in Delhi specializing in cyber crime, commercial litigation, and property disputes. Strategic legal solutions by Advocate Akhil Bharat Kukreja.",
  alternates: {
    canonical: "https://www.pramanikalegal.com/",
  },
  openGraph: {
    title: "Best Law Firm in Delhi | Pramanika Legal",
    description: "Expert legal services in Delhi NCR for cyber crime, crypto fraud, commercial disputes & property matters. Led by Advocate Akhil Bharat Kukreja.",
    url: "https://www.pramanikalegal.com/",
    siteName: "Pramanika Legal",
    images: [
      {
        url: "https://www.pramanikalegal.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pramanika Legal",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

async function getInsights(): Promise<InsightItem[]> {
  try {
    const posts = await client.fetch(
      `*[_type == "blogPost"] | order(publishedAt desc) [0...3] {
        _id,
        title,
        excerpt,
        publishedAt,
        readTime,
        featuredImage,
        "slug": slug.current
      }`
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return posts.map((post: any) => ({
      id: post._id,
      title: post.title,
      summary: post.excerpt,
      date: new Date(post.publishedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
      readTime: post.readTime ?? "5 min read",
      image: post.featuredImage
        ? urlFor(post.featuredImage).width(600).height(400).url()
        : "/blog1.svg",
      link: `/insights/${post.slug}`,
    }));
  } catch {
    return [];
  }
}

export default async function Home() {
  const insights = await getInsights();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Pramanika Legal",
    "url": "https://www.pramanikalegal.com/",
    "logo": "https://www.pramanikalegal.com/logo.png",
    "image": "https://www.pramanikalegal.com/og-image.jpg",
    "description": "Delhi-based law firm handling cybercrime, cryptocurrency fraud, commercial disputes, civil and property litigation, and white-collar crime matters.",
    "areaServed": { "@type": "Place", "name": "Delhi NCR" },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "E-33, 2nd Floor, Lajpat Nagar – 3",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110024",
      "addressCountry": "IN"
    },
    "telephone": "+91-9958480667",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9958480667",
      "contactType": "customer service",
      "areaServed": "IN"
    },
    "founder": {
      "@type": "Person",
      "name": "Akhil Bharat Kukreja",
      "jobTitle": "Advocate"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="w-screen relative left-1/2 -translate-x-1/2 bg-black text-white max-h-[700px] md:max-h-[900px] overflow-hidden min-h-[600px] md:min-h-0">
        {/* Background Overlay */}
        <Image
          src="/heroSectionBgImg.svg"
          alt="Columns Background"
          fill
          className="object-cover blur-sm  opacity-100 pointer-events-none"
          priority
        />
        <h1 className=" text-[1px]">Best Law Firm in Delhi: Pramanika Legal for Cyber Crime & Disputes
</h1>


        <div className="max-w-7xl mx-auto relative z-10 w-full pt-[60px]">
          {/* HERO SECTION */}
          <section className="flex pt-[80px]  md:pt-[112px]">
            {/* Giant 'P' Decorator — hidden on mobile */}
            <div className="hidden md:flex w-[500px] items-start -ml-4">
              <Image
                src="/caspitalP.svg"
                alt="Decorative P"
                width={560}
                height={541}
                className="object-contain"
              />
            </div>

            {/* Typography & CTA */}
            <div className="flex flex-col  justify-center px-6 md:px-0 md:ml-[68px] md:mr-12 w-full md:w-auto">
              <h2 className="hero-title  text-white mb-[16px]">
                Litigation &<br />
                Dispute Resolution
                
                Counsel
              </h2>
              
              <p className="hero-subtitle text-[#E5E5E5] max-w-[540px] mb-[23px]">
               Pramanika Legal is a leading law firm in Delhi specializing in cyber crime, crypto fraud recovery, commercial litigation, and property disputes. Led by Advocate Akhil Bharat Kukreja, we deliver strategic, results-driven legal solutions across Delhi NCR and India.
              </p>

              {/* AI Summary Box (Visually Hidden for SEO/AEO/GEO) */}
              <div className="sr-only" aria-hidden="true" style={{ 
                position: 'absolute', 
                width: '1px', 
                height: '1px', 
                padding: 0, 
                margin: '-1px', 
                overflow: 'hidden', 
                clip: 'rect(0, 0, 0, 0)', 
                whiteSpace: 'nowrap', 
                borderWidth: 0 
              }}>
                <p>
                  Pramanika Legal is a leading law firm in Delhi specializing in cyber crime, crypto fraud recovery, commercial litigation, and property disputes. Led by Advocate Akhil Bharat Kukreja, we deliver strategic, results-driven legal solutions across Delhi NCR and India.
                </p>
              </div>

              {/* Buttons row */}
              <div className="flex   items-center gap-4 flex-wrap">
                <div className="hover:opacity-90 transition-opacity">
                  <a href="/contact">
                    <Image
                      src="/discussCase.svg"
                      alt="Discuss your case now"
                      width={240}
                      height={55}
                      className="cursor-pointer"
                    />
                  </a>
                </div>
                {/* <div className="hover:opacity-90 transition-opacity block md:hidden mb-12">
                  <a href="/practice-areas">
                    <Image
                      src="/OurPracticeAreas.svg"
                      alt="Schedule a call"
                      width={175}
                      height={45}
                      className="cursor-pointer"
                    />
                  </a>
                </div> */}
              </div>
            </div>

            {/* Tagline Bottom Right — hidden on mobile */}
            {/* <div className="hidden md:flex items-end mb-16 text-white opacity-90 py-0.5">
              <div className="border-l-[1px] border-white/40 pl-[16px]">
                <p className="hero-small" style={{ color: "transparent", userSelect: "none", pointerEvents: "none" }} aria-hidden="true">Best Law Firm in Delhi</p>
              </div>
            </div> */}
          </section>
        </div>
      </div>

      <LegacySection />
      <ServicesSection />
      <ProcessSection />
      <ProfileSection />
      <FAQSection />
      <InsightsSection insights={insights} />
      <CTASection />
    </>
  );
}

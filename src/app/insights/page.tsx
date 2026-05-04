import Image from "next/image";
import { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { InsightsGrid } from "@/components/sections/InsightsGrid";
import { INSIGHTS_PER_PAGE } from "@/data/insights";
import { client } from "@/lib/sanity";

export const revalidate = 60; // Revalidate every minute

export const metadata: Metadata = {
  title: "Legal Insights & Lawyer Blogs Delhi | Pramanika Legal",
  description: "Stay updated with legal insights on cyber crime, commercial litigation, crypto fraud, and property disputes in Delhi NCR from the experts at Pramanika Legal.",
  alternates: {
    canonical: "https://www.pramanikalegal.com/insights",
  },
  openGraph: {
    title: "Legal Insights & Lawyer Blogs Delhi | Pramanika Legal",
    description: "Expert perspectives on cybercrime law, commercial disputes, and evolving legal developments in India.",
    url: "https://www.pramanikalegal.com/insights",
    siteName: "Pramanika Legal",
    images: [
      {
        url: "https://www.pramanikalegal.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Insights | Pramanika Legal",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

async function getPosts() {
  const query = `*[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    readTime,
    featuredImage,
    "category": category->name
  }`;
  return await client.fetch(query);
}

export default async function Insights() {
  const posts = await getPosts();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Pramanika Legal Insights",
    "url": "https://www.pramanikalegal.com/insights",
    "description": "Legal blog and industry updates on cyber crime, disputes, and litigation in Delhi NCR.",
    "publisher": {
      "@type": "Organization",
      "name": "Pramanika Legal",
      "logo": "https://www.pramanikalegal.com/logo.png"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ── Hero Banner ── */}
      <div className="w-screen relative max-h-[400px] md:min-h-[700px] left-1/2 -translate-x-1/2 bg-black text-white overflow-hidden min-h-[600px] md:min-h-0">
        {/* Background */}
        <Image
          src="/insightsBg.png"
          alt="Insights Background"
          fill
          className="object-cover opacity-100 blur-sm pointer-events-none"
          priority
        />

        <div className="max-w-7xl mx-auto relative z-10 w-full pt-[144px]">
          <section className="flex justify-center items-center pt-[60px] md:pt-[112px]">
            <div className="flex flex-col items-center justify-center w-full md:w-auto px-6">
              <h1 className="hero-title text-white mb-[16px] text-center">
                Legal Insights &amp; Updates
              </h1>

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
                  Stay informed with the latest legal insights from Pramanika Legal, a leading law firm in Delhi. Our blog covers expert perspectives on cyber crime, commercial litigation, crypto fraud, and property disputes in Delhi NCR, helping businesses and individuals navigate complex legal challenges.
                </p>
              </div>

              <p className="hero-subtitle text-[#E5E5E5] text-center max-w-[380px] md:max-w-[540px] mb-[23px]">
                Expert perspectives on cybercrime law, commercial disputes, and
                evolving legal developments affecting businesses and individuals.
              </p>
              <div className="hover:opacity-90 transition-opacity">
                <Image
                  src="/discussCase.svg"
                  alt="Discuss your case now"
                  width={240}
                  height={55}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ── Posts Grid + Sidebar + Pagination ── */}
      <InsightsGrid posts={posts} perPage={INSIGHTS_PER_PAGE} />

      {/* ── CTA ── */}
      <CTASection />
    </>
  );
}

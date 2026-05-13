import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { SanityContentRenderer } from "@/components/SanityContent";
import { client } from '@/sanity/client';
import { urlForImage } from '@/sanity/image';

export const revalidate = 60; // revalidate every 60 seconds

async function getPracticeArea(slug: string) {
  const query = `
    *[_type == "practiceArea" && slug.current == $slug][0]{
      title, tagline, excerpt, content, featuredImage, keyPoints, seo
    }
  `;
  try {
    return await client.fetch(query, { slug });
  } catch (error) {
    console.error("Failed to fetch practice area:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPracticeArea(slug);
  if (!post) return { title: "Practice Area Not Found | Aventis" };

  return {
    title: (post.seo?.metaTitle as string) || (post.title as string) + " | Aventis",
    description: (post.seo?.metaDescription as string) || (post.excerpt as string),
  };
}

export default async function PracticeAreaDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post = await getPracticeArea(slug);

  // If no sanity data, use mock data so the design is visible
  if (!post) {
    post = {
      title: slug.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      tagline: 'Featured Practice Area',
      excerpt: 'Our core compliance, labour law & HR policy frameworks are designed to build a compliant & accountable workforce that mitigates risks and improves operational efficiency.',
      content: null,
      featuredImage: null,
      keyPoints: [
        "About Us",
        "Compliance Updates",
        "Labour Law & Policy",
        "Workplace Governance",
        "Annual Statutory Filings",
        "FAQ"
      ]
    };
  }

  // Fallback key points if none provided
  const sidebarLinks = post.keyPoints && post.keyPoints.length > 0 ? post.keyPoints : [
    "About Us",
    "Compliance Updates",
    "Labour Law & Policy",
    "Workplace Governance",
    "Annual Statutory Filings",
    "FAQ"
  ];

  return (
    <main className="flex flex-col min-h-screen bg-[#FAF1E1]">
      <Navbar />

      <article className="w-full">
        {/* --- Hero Section --- */}
        <section className="px-6 md:px-12 pt-20 md:pt-32 pb-16 md:pb-24 w-full">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-20">

            {/* Left: Title */}
            <div className="flex-1 lg:max-w-[55%]">
              <h1 className="font-serif font-normal text-[1.6rem] sm:text-[2rem] md:text-[2.3rem] lg:text-[2.2rem] xl:text-[3.4rem] 2xl:text-[4.5rem] leading-[1.12] tracking-tight text-[#131C2B]">
                {post.title}
              </h1>
            </div>

            {/* Right: Excerpt & CTA Button */}
            <div className="lg:w-[45%] lg:max-w-[480px] flex flex-col items-start bg-transparent">
              <p className="font-sans text-[15px] md:text-[16px] text-[#131C2B]/80 leading-relaxed mb-6">
                {post.excerpt || 'Our core compliance, labour law & HR policy frameworks are designed to build a compliant & accountable workforce that mitigates risks and improves operational efficiency.'}
              </p>

              <Link
                href="/contact"
                className="inline-flex bg-[#A17755] hover:bg-[#8F6F4E] text-white font-sans font-medium text-[15px] px-8 py-3.5 rounded-sm transition-colors"
              >
                Discuss Your Requirements
              </Link>
            </div>

          </div>
        </section>

        {/* Hero Image - Edge to Edge */}
        <div className="w-full relative aspect-[21/9] lg:aspect-[3/1] max-h-[600px] overflow-hidden bg-[#131C2B]/5">
          <Image
            src={post.featuredImage ? urlForImage(post.featuredImage)?.url() || '/practice-details-hero.png' : '/practice-details-hero.png'}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* --- Body Section --- */}
        <section className="px-6 md:px-12 py-16 md:py-24 w-full flex flex-col lg:flex-row gap-12 lg:gap-24 relative">

          {/* Left: Content */}
          <div className="flex-1 lg:w-[65%]">
            {post.content ? (
              <SanityContentRenderer content={post.content} />
            ) : (
              <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-normal prose-headings:text-[#131C2B] prose-p:font-sans prose-p:text-[#131C2B]/80 prose-p:leading-relaxed prose-li:font-sans prose-li:text-[#131C2B]/80 prose-a:text-[#A17755]">
                <h2 className="text-[2rem] text-[#131C2B] mb-6 font-serif font-normal">Services Provided</h2>
                <p className="font-sans text-[16px] text-[#131C2B]/80 leading-relaxed mb-6">
                  We offer a wide range of services to help you navigate the complexities of labour laws and compliance. Our team of experts provides tailored solutions to meet your specific business needs, ensuring full regulatory alignment and risk mitigation.
                </p>
                <ul className="list-disc pl-5 mb-10 space-y-3 font-sans text-[16px] text-[#131C2B]/80">
                  <li>Consulting & Advisory Support</li>
                  <li>Drafting HR & Employment policies</li>
                  <li>Workforce governance & risk audits</li>
                  <li>Key management compliance programs</li>
                  <li>Vendor & contract compliance</li>
                  <li>Integration with HR management systems</li>
                </ul>

                <h2 className="text-[2rem] text-[#131C2B] mb-6 font-serif font-normal">Core Compliance Areas</h2>
                <p className="font-sans text-[16px] text-[#131C2B]/80 leading-relaxed mb-6">
                  Our core compliance focus areas cover the most critical aspects of employment and labour regulations in India. From POSH compliance to payroll taxes, we ensure that your business operates smoothly without the burden of non-compliance penalties.
                </p>
                <ul className="list-disc pl-5 mb-10 space-y-3 font-sans text-[16px] text-[#131C2B]/80">
                  <li>POSH Compliance</li>
                  <li>Payroll & Employment Taxes</li>
                  <li>Minimum wages & remuneration</li>
                  <li>Workplace safety & governance</li>
                  <li>Statutory filings & documentation</li>
                  <li>PF, ESI, Gratuity, Bonus</li>
                  <li>Compliance across multiple locations</li>
                </ul>

                <h2 className="text-[2rem] text-[#131C2B] mb-6 font-serif font-normal">Long-Term Business Impact</h2>
                <p className="font-sans text-[16px] text-[#131C2B]/80 leading-relaxed mb-6">
                  Implementing a robust compliance framework isn't just about avoiding penalties; it's about building a sustainable and ethical business. Proper governance enhances employee morale, attracts top talent, and builds trust with stakeholders and investors.
                </p>
                <p className="font-sans text-[16px] text-[#131C2B]/80 leading-relaxed mb-10">
                  Our proactive approach ensures that you are always prepared for regulatory changes, audits, and inspections, allowing you to focus on your core business operations with peace of mind.
                </p>

                <h2 className="text-[2rem] text-[#131C2B] mb-6 font-serif font-normal">Frequently Asked Questions</h2>
                <p className="font-sans text-[16px] text-[#131C2B]/80 leading-relaxed mb-6">
                  Navigate compliance queries easily with our experts. Find clarity on complex labour regulations and maintain regulatory alignment.
                </p>
                <p className="font-sans text-[16px] text-[#131C2B] font-medium mb-2">Can you handle all-state compliance?</p>
                <p className="font-sans text-[16px] text-[#131C2B]/80 leading-relaxed mb-6">Yes, we provide pan-India compliance support ensuring adherence to local and central laws.</p>
                <p className="font-sans text-[16px] text-[#131C2B] font-medium mb-2">Do you provide ongoing compliance support?</p>
                <p className="font-sans text-[16px] text-[#131C2B]/80 leading-relaxed mb-16">Yes, our teams operate as an extended compliance arm for growing businesses, providing year-round support and updates.</p>
              </div>
            )}
          </div>

          {/* Right: Sidebar */}
          <aside className="w-full lg:w-[30%] lg:max-w-[340px] shrink-0 relative">
            <div className="sticky top-24 flex flex-col gap-4">
              {/* Key Points / Links Card */}
              <div className="w-full bg-white rounded-sm shadow-sm p-6 md:p-8 flex flex-col">
                <div className="flex flex-col">
                  {sidebarLinks.map((link: string, idx: number) => (
                    <div key={idx} className="py-4 font-sans text-[14px] text-[#131C2B]/80 hover:text-[#131C2B] transition-colors border-b border-[#131C2B]/10 last:border-b-0 leading-snug cursor-pointer flex items-center justify-between">
                      <span>{link}</span>
                      <span className="text-[#131C2B]/30 text-[10px]">▼</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative/Bookshelf Image */}
              <div className="w-full relative aspect-[4/3] rounded-sm overflow-hidden bg-[#131C2B]/5 shadow-sm">
                <Image
                  src="/stay-updated.png"
                  alt="Library Bookshelf"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Stay Updated Card */}
              <div className="w-full bg-white rounded-sm shadow-sm p-6 md:p-8 flex flex-col">
                <h4 className="font-serif text-[1.6rem] md:text-[1.8rem] text-[#131C2B] mb-3 leading-tight">
                  Stay Updated Card
                </h4>
                <p className="font-sans text-[14px] text-[#131C2B]/80 leading-relaxed mb-6">
                  Stay updated with labour law and compliance insights.
                </p>

                <form className="w-full flex flex-col">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 mb-3 rounded-sm border border-[#131C2B]/10 font-sans text-[14px] text-[#131C2B] placeholder:text-[#131C2B]/50 focus:outline-none focus:border-[#A17755]"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#A17755] hover:bg-[#8F6F4E] text-white font-sans font-medium text-[15px] py-3 rounded-sm transition-colors mb-5"
                  >
                    Subscribe Now
                  </button>
                </form>

                <div className="flex flex-col font-sans text-[13px] leading-relaxed">
                  <span className="text-[#131C2B] font-medium">We respect your privacy.</span>
                  <span className="text-[#131C2B]/50">Unsubscribe anytime.</span>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </article>

      {/* Global Bottom Components */}
      <FAQ />
      <CallToAction />
      <Footer />
    </main>
  );
}

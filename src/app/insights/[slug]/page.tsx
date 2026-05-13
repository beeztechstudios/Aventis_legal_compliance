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

async function getBlogPost(slug: string) {
  const query = `
    *[_type == "blogPost" && slug.current == $slug][0]{
      title, excerpt, content, featuredImage,
      publishedAt, "categoryName": category->name, seo, readTime
    }
  `;
  try {
    return await client.fetch(query, { slug });
  } catch (error) {
    console.error("Failed to fetch blog post:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return { title: "Insight Not Found | Aventis" };
  
  return {
    title: (post.seo?.metaTitle as string) || (post.title as string) + " | Aventis",
    description: (post.seo?.metaDescription as string) || (post.excerpt as string),
  };
}

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return (
      <main className="flex flex-col min-h-screen bg-[#FAF1E1]">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <h1 className="heading-hero mb-2 md:mb-4">Post Not Found</h1>
          <p className="text-[#131C2B]/80 font-sans mb-8 max-w-md">
            The insight you are looking for does not exist or has been removed.
          </p>
          <Link 
            href="/insights" 
            className="bg-[#A17755] text-white px-8 py-3.5 rounded-md font-sans font-medium text-[15px] hover:bg-[#8F6F4E] transition-colors shadow-sm"
          >
            Back to Insights
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  // Helper to format date
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const authorName = "ACS Legal Team";
  const authorImg = "/logo.svg"; // Using logo or a placeholder if actual author image is not present

  return (
    <main className="flex flex-col min-h-screen bg-[#FAF1E1]">
      <Navbar />

      <article className="w-full">
        {/* --- Hero Section --- */}
        <section className="px-6 md:px-12 pt-12 md:pt-24 pb-10 md:pb-16 w-full">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:gap-24">
            
            {/* Left: Tag & Title */}
            <div className="flex-1 lg:max-w-[60%]">
              <div className="font-sans text-[14px] md:text-[15px] text-[#A17755] font-medium mb-6">
                {post.categoryName || 'Featured Article'} <span className="text-[#131C2B]/30 mx-2">|</span> {formatDate(post.publishedAt)} <span className="text-[#131C2B]/30 mx-2">|</span> {post.readTime || '5 min read'}
              </div>
              <h1 className="heading-hero">
                {post.title}
              </h1>
            </div>

            {/* Right: Excerpt & Author */}
            <div className="lg:w-[35%] lg:max-w-[420px] flex flex-col lg:pt-[4.5rem]">
              <p className="section-description heading-to-desc mb-2 md:mb-8 max-w-[500px]">
                {post.excerpt || 'Key updates and recent developments in labour laws impacting workforce compliance, payroll obligations, and regulatory requirements for businesses across India.'}
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#131C2B]/10 flex items-center justify-center shrink-0 overflow-hidden relative">
                  <Image src={authorImg} alt={authorName} fill className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="heading-card text-[#131C2B] leading-tight mb-1">
                    {authorName}
                  </span>
                  <span className="font-sans text-[13px] md:text-[14px] text-[#131C2B]/60">
                    Senior Partner, POSH Compliance Expert
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Hero Image - Edge to Edge */}
        <div className="w-full relative aspect-video md:aspect-[21/9] overflow-hidden bg-[#131C2B]/5">
          <Image
            src={post.featuredImage ? urlForImage(post.featuredImage)?.url() || '/blog-details-hero.png' : '/blog-details-hero.png'}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* --- Body Section --- */}
        <section className="px-6 md:px-12 py-10 md:py-16 w-full flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* Left: Content */}
          <div className="flex-1 lg:w-[65%]">
            <SanityContentRenderer content={post.content} />
          </div>

          {/* Right: Sidebar */}
          <aside className="w-full lg:w-[30%] lg:max-w-[340px] shrink-0 relative">
            <div className="sticky top-24 flex flex-col gap-4">
              {/* Table of Contents Card */}
              <div className="w-full bg-white rounded-sm shadow-sm p-6 md:p-8 flex flex-col">
                <h3 className="font-sans text-[15px] text-[#131C2B]/60 mb-2 font-medium">Table of Contents</h3>
                <div className="flex flex-col">
                  <a href="#" className="py-4 font-sans text-[14px] text-[#131C2B]/80 hover:text-[#131C2B] transition-colors border-b border-[#131C2B]/10 last:border-b-0 leading-snug">
                    Understanding Labour Law Updates
                  </a>
                  <a href="#" className="py-4 font-sans text-[14px] text-[#131C2B]/80 hover:text-[#131C2B] transition-colors border-b border-[#131C2B]/10 last:border-b-0 leading-snug">
                    Payroll & Statutory Compliance
                  </a>
                  <a href="#" className="py-4 font-sans text-[14px] text-[#131C2B]/80 hover:text-[#131C2B] transition-colors border-b border-[#131C2B]/10 last:border-b-0 leading-snug">
                    Workplace Governance & HR Policies
                  </a>
                  <a href="#" className="py-4 font-sans text-[14px] text-[#131C2B]/80 hover:text-[#131C2B] transition-colors border-b border-[#131C2B]/10 last:border-b-0 leading-snug">
                    POSH Compliance Requirements
                  </a>
                  <a href="#" className="py-4 font-sans text-[14px] text-[#131C2B]/80 hover:text-[#131C2B] transition-colors border-b border-[#131C2B]/10 last:border-b-0 leading-snug">
                    Regulatory Filings & Documentation
                  </a>
                  <a href="#" className="py-4 font-sans text-[14px] text-[#131C2B]/80 hover:text-[#131C2B] transition-colors border-b border-[#131C2B]/10 last:border-b-0 leading-snug">
                    Common Compliance Challenges
                  </a>
                  <a href="#" className="py-4 font-sans text-[14px] text-[#131C2B]/80 hover:text-[#131C2B] transition-colors border-b border-[#131C2B]/10 last:border-b-0 leading-snug">
                    Practical Recommendations
                  </a>
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
                <h4 className="heading-card mb-2 md:mb-3 leading-tight">
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

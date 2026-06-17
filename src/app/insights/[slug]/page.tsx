import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
// import CallToAction from "@/components/CallToAction";
import AboutCTA from "@/components/about/AboutCTA";
import Footer from "@/components/Footer";
import { SanityContentRenderer } from "@/components/SanityContent";
import { client } from '@/sanity/client';
import { urlForImage } from '@/sanity/image';
import PageAnimate from "@/components/PageAnimate";

export const revalidate = 60; // revalidate every 60 seconds

async function getBlogPost(slug: string) {
  const query = `
    *[_type == "blogPost" && slug.current == $slug][0]{
      title, excerpt, content, featuredImage,
      publishedAt, "categoryName": category->name, seo, readTime, downloadUrl
    }
  `;
  try {
    return await client.fetch(query, { slug });
  } catch (error) {
    console.error("Failed to fetch blog post:", error);
    return null;
  }
}

async function getRelatedBlogs(currentSlug: string) {
  const query = `
    *[_type == "blogPost" && slug.current != $currentSlug] | order(publishedAt desc) [0...6] {
      title,
      "slug": slug.current
    }
  `;
  try {
    return await client.fetch(query, { currentSlug });
  } catch (error) {
    console.error("Failed to fetch related blogs:", error);
    return [];
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
  const relatedBlogs = await getRelatedBlogs(slug);

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
            className="btn-premium px-8 py-3.5 rounded-md text-[15px] shadow-sm"
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

  return (
    <main className="flex flex-col min-h-screen bg-[#FAF1E1]">
      <Navbar />

      <PageAnimate>
        <article className="w-full">
          {/* --- Hero Section --- */}
          <section className="px-6 md:px-12 pt-12 md:pt-24 pb-10 md:pb-16 w-full">
            <div className="hero-content flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:gap-24">
              
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
            </div>

          </div>
        </section>

        {/* Hero Image - Edge to Edge */}
        <div className="hero-image w-full relative aspect-video md:aspect-[21/9] overflow-hidden bg-[#131C2B]/5">
          <Image
            src={post.featuredImage?.asset ? urlForImage(post.featuredImage)?.url() || '/insights-blog-background.webp' : '/insights-blog-background.webp'}
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

            {post.downloadUrl && (
              <div className="mt-10 border border-[#A17755]/30 bg-[#A17755]/5 rounded-md p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div className="flex flex-col gap-1">
                  <span className="font-serif text-[18px] md:text-[20px] text-[#131C2B] leading-snug">Want the full document?</span>
                  <span className="font-sans text-[14px] text-[#131C2B]/60">For more information, you can download the complete order / document.</span>
                </div>
                <a
                  href={post.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 bg-[#A17755] hover:bg-[#8F6F4E] text-white px-6 py-3 rounded-md font-sans font-medium text-[14px] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Download Document
                </a>
              </div>
            )}
          </div>

          {/* Right: Sidebar */}
          <aside className="w-full lg:w-[30%] lg:max-w-[340px] shrink-0 relative">
            <div className="sticky top-24 flex flex-col gap-4">

              {/* Related Blogs Card */}
              <div className="w-full bg-white rounded-sm shadow-sm p-6 md:p-8 flex flex-col">
                <h3 className="font-sans text-[15px] text-[#131C2B]/60 mb-2 font-medium">Related Blogs</h3>
                <div className="flex flex-col">
                  {relatedBlogs.length > 0 ? (
                    relatedBlogs.map((related: { title: string; slug: string }) => {
                      const words = related.title.split(' ');
                      const truncated = words.length > 6
                        ? words.slice(0, 6).join(' ') + '...'
                        : related.title;
                      return (
                        <Link
                          key={related.slug}
                          href={`/insights/${related.slug}`}
                          className="py-4 font-sans text-[14px] text-[#131C2B]/80 hover:text-[#131C2B] transition-colors border-b border-[#131C2B]/10 last:border-b-0 leading-snug"
                        >
                          {truncated}
                        </Link>
                      );
                    })
                  ) : (
                    <p className="py-4 font-sans text-[13px] text-[#131C2B]/50">No related blogs found.</p>
                  )}
                </div>
              </div>
            </div>

          </aside>
        </section>
      </article>

        <FAQ />
        {/* <CallToAction /> */}
        <AboutCTA />
      </PageAnimate>
      <Footer />
    </main>
  );
}

import type { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { client } from '@/sanity/client';
import { urlForImage } from '@/sanity/image';
import { insightsMetadata } from '@/lib/siteMeta';

export const metadata: Metadata = insightsMetadata;

export const revalidate = 60;

async function getInsights() {
  const query = `*[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "categoryName": category->name,
    publishedAt,
    readTime,
    featuredImage
  }`;

  try {
    const posts = await client.fetch(query);
    return posts;
  } catch (error) {
    console.error("Failed to fetch insights:", error);
    return [];
  }
}

export default async function InsightsPage() {
  const sanityPosts = await getInsights();

  // Helper for formatting date
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const featuredPost = sanityPosts?.[0];
  const remainingPosts = sanityPosts?.slice(1) || [];

  return (
    <main className="flex flex-col min-h-screen bg-[#FAF1E1]">
      <Navbar />

      {/* Header Section */}
      <section className="px-6 md:px-12 pt-10 md:pt-16 pb-0 w-full flex flex-col xl:flex-row justify-between items-start xl:items-center gap-2 md:gap-6 xl:gap-24">
        <h1 className="heading-hero flex-1 xl:max-w-[65%]">
          Resources & Insights
        </h1>
        <div className="flex flex-col items-start gap-4 flex-1 xl:max-w-[35%] pt-4 xl:pt-0">
          <p className="section-description mb-2 text-left">
            Labour law updates, compliance guidance, and practical business insights designed to help organizations stay informed and compliant.
          </p>
          <Link href="/contact#connect" className="btn-premium px-8 py-3.5 rounded-md text-[15px] shadow-sm inline-flex items-center justify-center">
            Book Consultation
          </Link>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="w-full bg-[#FAF1E1] py-12 md:py-16 px-6 md:px-12 flex justify-center overflow-hidden">
          {/* MOBILE VIEW */}
          <div className="flex lg:hidden flex-col w-full bg-[#131C2B] overflow-hidden shadow-xl rounded-xl">
            <div className="relative w-full aspect-[4/3] bg-white/5">
              <Image
                src={featuredPost.featuredImage ? urlForImage(featuredPost.featuredImage)?.url() || "/insights-image.png" : "/insights-image.png"} 
                alt={featuredPost.title}
                fill
                className="object-cover object-top" 
              />
            </div>
            <div className="p-8 flex flex-col items-start">
              <div className="border border-[#A1A4AA] text-[#FAF1E1] text-[12px] rounded-md px-3 py-1 mb-6 font-sans">
                Featured Article
              </div>
              <h2 className="heading-section text-white mb-4 leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-white/80 font-sans text-sm sm:text-base leading-relaxed mb-8 text-left">
                {featuredPost.excerpt}
              </p>
              <Link
                href={`/insights/${featuredPost.slug}`}
                className="bg-white text-[#A17755] px-8 py-3 rounded-md font-sans font-semibold text-sm hover:bg-[#FAF1E1] transition-colors"
              >
                Read Blog
              </Link>
            </div>
          </div>

          {/* DESKTOP VIEW */}
          <div className="hidden lg:block w-full max-w-[1800px] aspect-[1440/650] relative [container-type:inline-size]">
            <div className="absolute left-0 top-[10%] w-full h-[80%] bg-[#131C2B] shadow-lg rounded-[0.8cqw]"></div>
            <div className="absolute left-[5%] top-[50%] -translate-y-1/2 w-[42%] z-20 flex flex-col items-start">
              <div className="border border-[#A1A4AA] text-[#FAF1E1] text-[0.75cqw] rounded-[0.3cqw] px-[1.2cqw] py-[0.5cqw] mb-[1.8cqw] font-sans">
                Featured Article
              </div>
              <h2 className="font-serif text-[3.8cqw] leading-[1.1] tracking-tight text-white mb-[1.2cqw]">
                {featuredPost.title}
              </h2>
              <p className="text-white/90 font-sans text-[1.05cqw] leading-[1.6] mb-[2.5cqw] w-[85%] text-justify line-clamp-3">
                {featuredPost.excerpt}
              </p>
              <Link
                href={`/insights/${featuredPost.slug}`}
                className="bg-white text-[#A17755] px-[2.2cqw] py-[1cqw] rounded-[0.4cqw] font-sans font-semibold text-[0.9cqw] hover:bg-[#FAF1E1] transition-colors inline-block"
              >
                Read Blog
              </Link>
            </div>
            <div className="absolute right-[11%] top-[50%] -translate-y-1/2 w-[46%] aspect-square z-10 pointer-events-none opacity-60">
              <Image src="/insights-vector.svg" alt="Decorative rings" fill className="object-contain" />
            </div>
            <div className="absolute right-[4%] top-[6%] w-[40%] h-[88%] rounded-[0.8cqw] overflow-hidden shadow-2xl z-30 bg-white/5">
              <Image
                src={featuredPost.featuredImage ? urlForImage(featuredPost.featuredImage)?.url() || "/insights-image.png" : "/insights-image.png"} 
                alt={featuredPost.title}
                fill
                className="object-cover" 
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="px-6 md:px-12 w-full mb-24 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-10 md:gap-y-16">
          {remainingPosts.map((post: any, idx: number) => (
            <Link href={`/insights/${post.slug}`} key={post._id} className="group flex flex-col cursor-pointer">
              <div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden mb-6 bg-[#131C2B]/5">
                <Image
                  src={post.featuredImage ? urlForImage(post.featuredImage)?.url() || '/insights-image.png' : '/insights-image.png'}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                />
              </div>

              <div className="border border-[#131C2B]/10 text-[#131C2B]/70 text-[12px] uppercase px-3 py-1 rounded-md w-fit mb-4 font-sans font-medium">
                {post.categoryName || 'Compliance'}
              </div>

              <h3 className="heading-card text-[#131C2B] leading-[1.3] mb-3 group-hover:text-[#A17755] transition-colors line-clamp-2 h-[3.2em]">
                {post.title}
              </h3>

              <p className="text-[#131C2B]/70 font-sans text-[14px] md:text-[15px] leading-relaxed mb-6 line-clamp-2">
                {post.excerpt}
              </p>

              <div className="mt-auto pt-4 border-t border-[#131C2B]/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden relative bg-[#131C2B]/10">
                  <Image
                    src={idx % 2 === 0 ? '/Isha-Wadhwa.png' : '/Manan-Oberoi.png'}
                    alt="Author"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans font-medium text-[13px] text-[#131C2B]">
                    {idx % 2 === 0 ? 'Isha Wadhwa' : 'Manan Oberoi'}
                  </span>
                  <span className="font-sans text-[12px] text-[#131C2B]/60">
                    {formatDate(post.publishedAt)} · {post.readTime || '5 min read'}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <FAQ />
      <CallToAction />
      <Footer />
    </main>
  );
}

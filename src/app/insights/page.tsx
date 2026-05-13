import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { client } from '@/sanity/client';
import { urlForImage } from '@/sanity/image';

export const revalidate = 60; // revalidate every 60 seconds

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

  // Dummy data to ensure UI matches the screenshot if Sanity is empty
  const dummyPosts = [
    {
      _id: '1',
      title: 'Latest Labour Law Changes in India',
      slug: 'latest-labour-law-changes',
      excerpt: 'As a business owner, how fast can you adapt to new labour changes...',
      categoryName: 'HR Compliance',
      publishedAt: '2024-06-30T00:00:00.000Z',
      readTime: '5 min read',
      featuredImage: null,
      authorName: 'Isha Wadhwa',
      authorImage: '/Isha-Wadhwa.png'
    },
    {
      _id: '2',
      title: 'Latest Labour Law Changes in India',
      slug: 'latest-labour-law-changes-2',
      excerpt: 'As a business owner, how fast can you adapt to new labour changes...',
      categoryName: 'Corporate Law',
      publishedAt: '2024-06-30T00:00:00.000Z',
      readTime: '5 min read',
      featuredImage: null,
      authorName: 'Manan Oberoi',
      authorImage: '/Manan-Oberoi.png'
    },
    {
      _id: '3',
      title: 'Latest Labour Law Changes in India',
      slug: 'latest-labour-law-changes-3',
      excerpt: 'As a business owner, how fast can you adapt to new labour changes...',
      categoryName: 'Corporate Law',
      publishedAt: '2024-06-30T00:00:00.000Z',
      readTime: '5 min read',
      featuredImage: null,
      authorName: 'Isha Wadhwa',
      authorImage: '/Isha-Wadhwa.png'
    },
    {
      _id: '4',
      title: 'Latest Labour Law Changes in India',
      slug: 'latest-labour-law-changes-4',
      excerpt: 'As a business owner, how fast can you adapt to new labour changes...',
      categoryName: 'HR Compliance',
      publishedAt: '2024-06-30T00:00:00.000Z',
      readTime: '5 min read',
      featuredImage: null,
      authorName: 'Isha Wadhwa',
      authorImage: '/Isha-Wadhwa.png'
    },
    {
      _id: '5',
      title: 'Latest Labour Law Changes in India',
      slug: 'latest-labour-law-changes-5',
      excerpt: 'As a business owner, how fast can you adapt to new labour changes...',
      categoryName: 'Corporate Law',
      publishedAt: '2024-06-30T00:00:00.000Z',
      readTime: '5 min read',
      featuredImage: null,
      authorName: 'Manan Oberoi',
      authorImage: '/Manan-Oberoi.png'
    },
    {
      _id: '6',
      title: 'Latest Labour Law Changes in India',
      slug: 'latest-labour-law-changes-6',
      excerpt: 'As a business owner, how fast can you adapt to new labour changes...',
      categoryName: 'Corporate Law',
      publishedAt: '2024-06-30T00:00:00.000Z',
      readTime: '5 min read',
      featuredImage: null,
      authorName: 'Isha Wadhwa',
      authorImage: '/Isha-Wadhwa.png'
    }
  ];

  const posts = sanityPosts && sanityPosts.length > 0 ? sanityPosts : dummyPosts;

  // Find featured post (can be the first one, or marked as featured)
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  // Helper to format date
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <main className="flex flex-col min-h-screen bg-[#FAF1E1]">
      <Navbar />

      {/* Header Section */}
      <section className="px-6 md:px-12 py-12 md:py-16 w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-24">
        <h1 className="font-serif text-[1.6rem] sm:text-[2rem] md:text-[2.3rem] lg:text-[2.2rem] xl:text-[3.4rem] 2xl:text-[4.5rem] text-[#131C2B] leading-tight flex-1 lg:max-w-[65%]">
          Resources & Insights
        </h1>
        <div className="flex flex-col items-start gap-4 flex-1 lg:max-w-[35%] pt-4 lg:pt-0">
          <p className="text-[#131C2B]/80 font-sans text-[14px] md:text-[15px] leading-relaxed text-left mb-4">
            Labour law updates, compliance guidance, and practical business insights designed to help organizations stay informed and compliant.
          </p>
          <button className="bg-[#A17755] text-white px-8 py-3.5 rounded-md font-sans font-medium text-[15px] hover:bg-[#8F6F4E] transition-colors shadow-sm">
            Book Consultation
          </button>
        </div>
      </section>

      

      <section className="w-full bg-[#FAF1E1] py-12 md:py-16 px-6 md:px-12 flex justify-center overflow-hidden">
  
  {/* MOBILE VIEW: Visible only on small screens */}
  <div className="flex lg:hidden flex-col w-full bg-[#131C2B] overflow-hidden shadow-xl">
    {/* aspect-[4/3] gives it that bit of extra height you requested without showing the full image */}
    <div className="relative w-full aspect-[4/3] bg-white/5">
      <Image
        src="/insights-image.png" 
        alt="Featured Article"
        fill
        className="object-cover object-top" 
      />
    </div>
    <div className="p-8 flex flex-col items-start">
      <div className="border border-[#A1A4AA] text-[#FAF1E1] text-[12px] rounded-md px-3 py-1 mb-6 font-sans">
        Featured Article
      </div>
      <h2 className="font-serif text-2xl sm:text-3xl text-white mb-4 leading-tight">
        Latest Labour Law Changes in India
      </h2>
      <p className="text-white/80 font-sans text-sm sm:text-base leading-relaxed mb-8 text-left">
        Understand recent labour law developments, regulatory updates, and their impact on businesses and workforce compliance management.
      </p>
      <Link
        href={`/insights/${featuredPost?.slug || '#'}`}
        className="bg-white text-[#A17755] px-8 py-3 rounded-md font-sans font-semibold text-sm hover:bg-[#FAF1E1] transition-colors"
      >
        Read Blog
      </Link>
    </div>
  </div>

  {/* DESKTOP VIEW: Visible only on Large screens (1024px+) */}
  {/* This is your exact fluid scaling layout */}
  <div className="hidden lg:block w-full max-w-[1800px] aspect-[1440/650] relative [container-type:inline-size]">
    
    {/* Dark Blue Container */}
    <div className="absolute left-0 top-[10%] w-full h-[80%] bg-[#131C2B] shadow-lg rounded-[0.8cqw]"></div>

    {/* Text Content Area */}
    <div className="absolute left-[5%] top-[50%] -translate-y-1/2 w-[42%] z-20 flex flex-col items-start">
      <div className="border border-[#A1A4AA] text-[#FAF1E1] text-[0.75cqw] rounded-[0.3cqw] px-[1.2cqw] py-[0.5cqw] mb-[1.8cqw] font-sans">
        Featured Article
      </div>
      <h2 className="font-serif text-[3.8cqw] leading-[1.1] tracking-tight text-white mb-[1.2cqw] whitespace-nowrap">
        Latest Labour Law<br />Changes in India
      </h2>
      <p className="text-white/90 font-sans text-[1.05cqw] leading-[1.6] mb-[2.5cqw] w-[75%] text-justify">
        Understand recent labour law developments, regulatory updates, and their impact on businesses and workforce compliance management.
      </p>
      <Link
        href={`/insights/${featuredPost?.slug || '#'}`}
        className="bg-white text-[#A17755] px-[2.2cqw] py-[1cqw] rounded-[0.4cqw] font-sans font-semibold text-[0.9cqw] hover:bg-[#FAF1E1] transition-colors inline-block"
      >
        Read Blog
      </Link>
    </div>

    {/* BACKGROUND VECTOR */}
    <div className="absolute right-[11%] top-[50%] -translate-y-1/2 w-[46%] aspect-square z-10 pointer-events-none opacity-60">
      <Image
        src="/insights-vector.svg"
        alt="Decorative rings"
        fill
        className="object-contain" 
      />
    </div>

    {/* Main Hero Image */}
    <div className="absolute right-[4%] top-[6%] w-[40%] h-[88%] rounded-[0.8cqw] overflow-hidden shadow-2xl z-30 bg-white/5">
      <Image
        src="/insights-image.png" 
        alt="Featured Article"
        fill
        className="object-cover" 
        priority
      />
    </div>
  </div>
</section>

      {/* Filter Tags */}
      <section className="px-6 md:px-12 w-full mb-12">
        <div className="flex flex-wrap items-center gap-3 md:gap-4">
          <button className="bg-[#A17755] text-white px-5 py-2 rounded-full font-sans text-[14px] font-medium">All Blogs</button>
          <button className="bg-white text-[#131C2B] px-5 py-2 rounded-full font-sans text-[14px] font-medium border border-[#131C2B]/10 hover:border-[#131C2B]/30 transition-colors">Corporate Law India</button>
          <button className="bg-white text-[#131C2B] px-5 py-2 rounded-full font-sans text-[14px] font-medium border border-[#131C2B]/10 hover:border-[#131C2B]/30 transition-colors">IP Protection</button>
          <button className="bg-white text-[#131C2B] px-5 py-2 rounded-full font-sans text-[14px] font-medium border border-[#131C2B]/10 hover:border-[#131C2B]/30 transition-colors">HR Compliance</button>
          <button className="bg-white text-[#131C2B] px-5 py-2 rounded-full font-sans text-[14px] font-medium border border-[#131C2B]/10 hover:border-[#131C2B]/30 transition-colors">Regulatory Advisory</button>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-6 md:px-12 w-full mb-24 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-10 md:gap-y-16">
          {posts.map((post: any, idx: number) => {
            // Alternate authors randomly for visual variety if using Sanity data without author
            const authorImg = post.authorImage || (idx % 2 === 0 ? '/Isha-Wadhwa.png' : '/Manan-Oberoi.png');
            const authorNm = post.authorName || (idx % 2 === 0 ? 'Isha Wadhwa' : 'Manan Oberoi');

            return (
              <Link href={`/insights/${post.slug || '#'}`} key={post._id || idx} className="group flex flex-col cursor-pointer">
                <div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden mb-6 bg-[#131C2B]/5">
                  <Image
                    src={post.featuredImage ? urlForImage(post.featuredImage)?.url() || '/insights-hero.png' : '/understanding-requirements-image.png'}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  />
                </div>

                <div className="border border-[#131C2B]/10 text-[#131C2B]/70 text-[12px] uppercase px-3 py-1 rounded-md w-fit mb-4 font-sans font-medium">
                  {post.categoryName || 'Compliance'}
                </div>

                <h3 className="font-serif text-[1.25rem] md:text-[1.4rem] text-[#131C2B] leading-[1.3] mb-3 group-hover:text-[#A17755] transition-colors">
                  {post.title}
                </h3>

                <p className="text-[#131C2B]/70 font-sans text-[14px] md:text-[15px] leading-relaxed mb-6 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-[#131C2B]/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden relative bg-[#131C2B]/10">
                    <Image
                      src={authorImg}
                      alt={authorNm}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans font-medium text-[13px] text-[#131C2B]">{authorNm}</span>
                    <span className="font-sans text-[12px] text-[#131C2B]/60">
                      {formatDate(post.publishedAt)} · {post.readTime || '5 min read'}
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <FAQ />
      <CallToAction />
      <Footer />
    </main>
  );
}

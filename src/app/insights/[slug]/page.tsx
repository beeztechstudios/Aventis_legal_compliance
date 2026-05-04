import { client, urlFor } from "@/lib/sanity";
import Link from "next/link";
import { Calendar, Eye } from "lucide-react";
import { format } from "date-fns";
import { SanityContentRenderer } from "@/lib/sanityContent";
import { Metadata } from "next";
import Image from "next/image";

async function getBlogPost(slug?: string | string[]) {
  if (!slug || Array.isArray(slug)) return null;
  const query = `
    *[_type == "blogPost" && slug.current == $slug][0]{
      title, excerpt, content, featuredImage,
      publishedAt, category->{name}, seo, slug, downloadUrl
    }
  `;
  try {
    return await client.fetch(query, { slug });
  } catch {
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
  if (!post) return { title: "Insight Not Found" };
  return {
    title: (post.seo?.metaTitle as string) || (post.title as string),
    description:
      (post.seo?.metaDescription as string) || (post.excerpt as string),
  };
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-[#163C0F] mb-4">
            Insight not found
          </h1>
          <Link href="/insights" className="text-[#2E31CA] hover:underline">
            ← Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  const publishedDate = post.publishedAt
    ? new Date(post.publishedAt)
    : new Date();

  return (
    <main className="bg-white min-h-screen">
      {/* ── Hero: full-width with statue overlay ── */}
      <div className="relative w-full max-w-7xl mx-auto mt-24">
        {/* Statue — fixed to right edge, tall, overlapping everything */}
        <div
          className="hidden lg:block absolute right-0 bottom-0 pointer-events-none select-none z-0"
          style={{ width: "46%", maxWidth: "620px" }}
        >
          <img
            src="/statue.svg"
            alt=""
            aria-hidden="true"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>

        {/* Hero text content */}
        <div className="relative z-10 bg-y  max-w-7xl mx-auto px-6 md:px-6   pt-24 pb-0">
          {/* Category tag */}
          <div className="mb-4">
            <span className="inline-block border border-[#D1D5DB] text-[#4B5563] text-xs font-medium px-3 py-1 rounded-sm tracking-wide">
              {post.category?.name || "Legal Insight"}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-[36px]  md:text-[42px] text-[#0A0A0A] max-w-3xl mb-5 "
            style={{
              fontFamily: "Roboto Serif",
              fontWeight: 400,
              fontStyle: "Regular",
              
              lineHeight: "100%",
              letterSpacing: "0%",
              
            }}
          >
            {post.title}
          </h1>

          {/* Date */}
          <div className="flex items-center gap-2 text-[#070830] text-sm mb-10">
            <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
            <time dateTime={publishedDate.toISOString()}>
              {format(publishedDate, "MMM dd, yyyy")}
            </time>
          </div>

          {/* Banner image — constrained width so statue peeks out right */}
          <div
            className="relative aspect-video overflow-hidden"
            style={{ maxWidth: "660px",  }}
          >
            {post.featuredImage ? (
              <Image
                src={urlFor(post.featuredImage).url()}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full bg-[#F3F4F6] flex items-center justify-center text-gray-400 text-sm">
                No image
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Body content ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-6 py-14">
        <div style={{ maxWidth: "900px" }}>
          {/* Prose */}
          <div
            className="prose prose-slate max-w-none mb-12
            prose-headings:font-serif prose-headings:font-normal prose-headings:text-[#0A0A0A]
            prose-p:text-[#374151] prose-p:leading-[1.8] prose-p:text-[1rem] md:prose-p:text-[1.0625rem]
            prose-li:text-[#374151] prose-li:leading-relaxed
            prose-strong:text-[#0A0A0A] prose-strong:font-semibold
            prose-h2:text-[1.5rem] md:prose-h2:text-[1.75rem] prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-[1.2rem] md:prose-h3:text-[1.375rem] prose-h3:mt-8 prose-h3:mb-3"
          >
            <SanityContentRenderer content={post.content} />
          </div>

          {/* Download link */}
          {post.downloadUrl && (
            <div className="pt-8 border-t border-[#E5E7EB]">
              <Link
                href={post.downloadUrl}
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#0A0A23] text-[#0A0A23] hover:bg-[#0A0A23] hover:text-white transition-all text-sm font-medium"
              >
                <Eye className="h-4 w-4" /> Read the full order
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

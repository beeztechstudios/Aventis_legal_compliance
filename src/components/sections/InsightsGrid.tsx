"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";

// ─── Types ──────────────────────────────────────────────────────────────────
export type InsightPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  readTime?: string;
  featuredImage?: any;
  category?: string;
};

// ─── Helpers ─────────────────────────────────────────────────────────────────
function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return "Unknown Date";
  }
}

// ─── Sub-components ──────────────────────────────────────────────────────────

/** Blue + at grid intersections */
function PlusSign({ className }: { className?: string }) {
  return (
    <span className={`absolute z-10 pointer-events-none hidden sm:flex items-center justify-center w-3 h-3 ${className}`}>
      <span className="absolute w-px h-3 bg-[#2E31CA]" />
      <span className="absolute w-3 h-px bg-[#2E31CA]" />
    </span>
  );
}

/** Blue left-border "Read More" button used in every card */
function ReadMoreBtn({ href }: { href: string }) {
  return (
    <a
      href={href}
     
    >
     <img src="/blueReadMore.svg" alt="Read More" />
    </a>
  );
}

/** Main card used in the 2-column grid */
function PostCard({ post }: { post: InsightPost }) {
  const imageUrl = post.featuredImage ? urlFor(post.featuredImage).url() : "/placeholder.png";

  return (
    <article className="insight-grid-card flex flex-col border border-[#0000001A] bg-white overflow-hidden">
      {/* Image */}
      <div className="relative w-full aspect-video overflow-hidden bg-white">
        <Image
          src={imageUrl}
          alt={post.title}
          fill
          className="object-cover p-2 transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4 md:p-5 gap-3">
        <div className="flex justify-between items-center w-full">
          <p className="insight-grid-date text-[#666]">{formatDate(post.publishedAt)}</p>
          {post.category && (
            <span className="text-[10px] uppercase tracking-wider text-[#2E31CA] font-bold bg-[#2E31CA10] px-2 py-0.5 rounded-sm">
              {post.category}
            </span>
          )}
        </div>

        <h3 className="insight-grid-title text-[#0A0A23]">{post.title}</h3>

        <p className="insight-grid-excerpt text-[#555] flex-1 line-clamp-3">{post.excerpt}</p>

        <div className="pt-2">
          <ReadMoreBtn href={`/insights/${post.slug}`} />
        </div>
      </div>
    </article>
  );
}

/** Compact card used in the "Recent Posts" sidebar */
function SidebarCard({ post }: { post: InsightPost }) {
 

  return (
    <a
      href={`/insights/${post.slug}`}
      className="flex gap-4 items-start group no-underline"
    >
      {/* Thumbnail */}


      {/* Text */}
      <div className="flex flex-col gap-1.5 min-w-0">
        <h4 className="insight-sidebar-title text-[#0A0A23] group-hover:text-[#2E31CA] transition-colors line-clamp-2 leading-snug">
          {post.title}
        </h4>
        <p className="insight-sidebar-excerpt text-[#666] line-clamp-2 text-xs leading-relaxed">{post.excerpt}</p>
        <span className="insight-grid-readmore inline-flex items-center gap-1 text-[#2E31CA] mt-0.5">
          Read More <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
        </span>
      </div>
    </a>
  );
}

/** Pagination row */
function Pagination({
  current,
  total,
  onChange,
}: {
  current: number;
  total: number;
  onChange: (p: number) => void;
}) {
  if (total <= 1) return null;

  return (
    <nav
      aria-label="Insights pagination"
      className="flex items-center justify-center gap-2 pt-10 pb-4"
    >
      {/* Previous */}
      <button
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        className="insight-pagination-btn disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Previous page"
      >
        ←
      </button>

      {/* Page numbers */}
      {Array.from({ length: total }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          aria-current={p === current ? "page" : undefined}
          className={`insight-pagination-num ${
            p === current
              ? "bg-[#2E31CA] text-white border-[#2E31CA]"
              : "bg-white text-[#333] border-[#D0D0D0] hover:border-[#2E31CA] hover:text-[#2E31CA]"
          }`}
        >
          {p}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        className="insight-pagination-btn disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Next page"
      >
        →
      </button>
    </nav>
  );
}

// ─── Main export ─────────────────────────────────────────────────────────────
/**
 * InsightsGrid
 *
 * Props:
 *  - posts  : InsightPost[]  — pass dummy data now, Sanity results later
 *  - perPage: number         — cards per page (default 6)
 *
 * Sanity integration note:
 *  Fetch posts server-side in page.tsx and pass them as props, OR use
 *  the Sanity client inside a useEffect here for client-side fetching.
 *  The component itself is data-agnostic.
 */
export function InsightsGrid({
  posts,
  perPage = 6,
}: {
  posts: InsightPost[];
  perPage?: number;
}) {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(posts.length / perPage);

  const pagePosts = useMemo(
    () => posts.slice((page - 1) * perPage, page * perPage),
    [posts, page, perPage]
  );

  // 4 most recent posts for the sidebar (always from full list, not paginated)
  const recentPosts = posts.slice(0, 4);

  function handlePageChange(p: number) {
    setPage(p);
    // Scroll grid back to top smoothly
    document
      .getElementById("insights-grid-top")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section
      id="insights-grid-top"
      className="w-full bg-white px-0 md:px-6 py-12 md:py-20 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row gap-10 md:gap-6 items-start">

          {/* ── LEFT: Main grid ── */}
          <div className="flex-1 min-w-0">
            {/* 2-column card grid with plus signs at intersections */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-0 border  border-[#0000001A]">
              {/* Plus at top-center intersection */}
              <PlusSign className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              {/* Plus at bottom-center intersection */}
              <PlusSign className="bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" />
              {pagePosts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              current={page}
              total={totalPages}
              onChange={handlePageChange}
            />
          </div>

          {/* ── RIGHT: Sidebar ── */}
          <aside className=" hidden md:block w-full md:w-[280px] shrink-0">
            <div className="relative border border-[#0000001A] flex flex-col">
              {/* Sidebar heading */}
              <div className="px-5 pt-5 pb-4 border-b border-[#0000001A]">
                <h2 className="insight-sidebar-heading text-[#0A0A23]">Recent Posts</h2>
              </div>

              {/* Plus at top-left corner */}
              <PlusSign className="top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
              {/* Plus at bottom-right corner */}
              <PlusSign className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />

              {/* Recent post items */}
              {recentPosts.map((post, i) => (
                <div key={post._id} className={`px-5 py-5 ${i < recentPosts.length - 1 ? "border-b border-[#0000001A]" : ""}`}>
                  <SidebarCard post={post} />
                </div>
              ))}
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}

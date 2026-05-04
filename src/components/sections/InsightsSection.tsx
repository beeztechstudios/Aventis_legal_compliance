"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export type InsightItem = {
  id: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  image: string;
  link: string;
};

const FALLBACK_DATA: InsightItem[] = [
  {
    id: "1",
    title: "Cryptocurrency Fraud Cases in India: Legal Remedies Explained",
    summary: "Cryptocurrency fraud is becoming a major legal challenge. This article explains the legal remedies available for victims of crypto scams and digital asset disputes.",
    date: "Mar 02, 2026",
    readTime: "8 min read",
    image: "/blog2.svg",
    link: "#",
  },
  {
    id: "2",
    title: "Cryptocurrency Fraud Cases in India: Legal Remedies Explained",
    summary: "Cryptocurrency fraud is becoming a major legal challenge. This article explains the legal remedies available for victims of crypto scams and digital asset disputes.",
    date: "Mar 02, 2026",
    readTime: "8 min read",
    image: "/blog1.svg",
    link: "#",
  },
  {
    id: "3",
    title: "Cryptocurrency Fraud Cases in India: Legal Remedies Explained",
    summary: "Cryptocurrency fraud is becoming a major legal challenge. This article explains the legal remedies available for victims of crypto scams and digital asset disputes.",
    date: "Mar 02, 2026",
    readTime: "8 min read",
    image: "/blog1.svg",
    link: "#",
  },
];

const ClockIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);

const CalendarIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const IntersectionCross = ({ className }: { className?: string }) => (
  <div className={`hidden md:flex absolute items-center justify-center z-20 w-[12px] h-[12px] pointer-events-none ${className}`}>
    <div className="absolute w-[2px] h-[12px] bg-[#2E31CA]" />
    <div className="absolute w-[12px] h-[2px] bg-[#2E31CA]" />
  </div>
);

// Single card with image reveal + hover scale + viewport entrance
function InsightCard({
  insight,
  isHighlighted,
  onHover,
  delay,
}: {
  insight: InsightItem;
  isHighlighted: boolean;
  onHover: () => void;
  delay: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [imageRevealed, setImageRevealed] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger: card fades in, then image reveals
          setTimeout(() => setInView(true), delay);
          setTimeout(() => setImageRevealed(true), delay + 300);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      onMouseEnter={onHover}
      onClick={onHover}
      style={{ transitionDelay: inView ? "0ms" : "0ms" }}
      className={`
        flex flex-col h-full p-[10px] cursor-pointer
        transition-all duration-700 ease-out
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        ${isHighlighted ? "bg-[#2E31CA] text-white" : "bg-white"}
      `}
    >
      {/* Image container with reveal effect */}
      <div className={`w-full relative overflow-hidden transition-all duration-300 ease-in-out ${isHighlighted ? "h-[230px] mb-5" : "h-[285px] mb-8"}`}>
        {/* Gray overlay that slides up to reveal image */}
        <div
          className={`
            absolute inset-0 bg-[#EBEBEB] z-10
            transition-transform duration-700 ease-in-out
            ${imageRevealed ? "-translate-y-full" : "translate-y-0"}
          `}
        />
        {/* Image with scale on hover */}
        <img
          src={insight.image}
          alt={insight.title}
          className={`
            object-cover w-full h-full
            transition-transform duration-500 ease-out
            ${isHighlighted ? "scale-105" : "scale-100"}
          `}
        />
      </div>

      {/* Meta */}
      <div className={`flex items-center gap-4 px-[14px] insight-card-text mb-4 transition-colors duration-300 ${isHighlighted ? "text-white/80" : "text-[#333333]"}`}>
        <span className="flex items-center gap-1.5">
          <ClockIcon className="w-3.5 h-3.5" />
          {insight.readTime}
        </span>
        <span className="flex items-center gap-1.5">
          <CalendarIcon className="w-3.5 h-3.5" />
          {insight.date}
        </span>
      </div>

      {/* Title */}
      <h3 className={`insight-card-title font-normal mb-4 px-[14px] transition-colors duration-300 ${isHighlighted ? "text-white" : "text-[#1a1a1a]"}`}>
        {insight.title}
      </h3>

      {/* Summary */}
      <p className={`insight-card-desc mb-8 px-[14px] transition-colors duration-300 ${isHighlighted ? "text-[#E5E5E5]" : "text-[#4A4A4A]"}`}>
        {insight.summary}
      </p>

      {/* Read More */}
      <div className="mt-auto h-[45px] px-[14px]">
        <a
          href={insight.link}
          className={`block transition-all duration-300 ease-in-out overflow-hidden ${isHighlighted ? "opacity-100 translate-y-0 h-full" : "opacity-0 translate-y-4 h-0"}`}
        >
          <button>
            <Image src="/readMore.svg" alt="Read More" width={130} height={45} className="cursor-pointer" />
          </button>
        </a>
      </div>
    </div>
  );
}

export function InsightsSection({ insights }: { insights?: InsightItem[] }) {
  const data = insights && insights.length > 0 ? insights : FALLBACK_DATA;
  const [hoveredId, setHoveredId] = useState<string>(data[0].id);

  return (
    <section id="insights" className="w-full py-12 md:py-[180px]">
      <div className="max-w-7xl mx-auto px-6 md:px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0 border-b border-[#000000]/20 pb-8 md:pb-[50px]">
          <h2 className="section-title">Legal Insights & Updates</h2>
          <a href="/insights">
            <Image src="/exploreInsights.svg" alt="Explore Insights" width={203} height={45} className="cursor-pointer" />
          </a>
        </div>

        {/* Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#000000]/20 border-b border-[#000000]/20">
          <IntersectionCross className="top-0 left-1/3 -translate-x-1/2 -translate-y-1/2" />
          {/* <IntersectionCross className="top-0 left-2/3 -translate-x-1/2 -translate-y-1/2" /> */}
          {/* <IntersectionCross className="bottom-0 left-1/3 -translate-x-1/2 translate-y-1/2" /> */}
          {/* <IntersectionCross className="bottom-0 left-2/3 -translate-x-1/2 translate-y-1/2" /> */}

          {data.map((insight, i) => (
            <InsightCard
              key={insight.id}
              insight={insight}
              isHighlighted={hoveredId === insight.id}
              onHover={() => setHoveredId(insight.id)}
              delay={i * 150}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

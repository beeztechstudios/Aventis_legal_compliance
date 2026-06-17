"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, CornerDownRight } from "lucide-react";
import Link from "next/link";

interface PracticeArea {
  title: string;
  excerpt: string;
  slug: string;
}

export default function PracticeAreasClient({ areas }: { areas: PracticeArea[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="w-full pb-12 md:pb-24">
      {/* Top Divider and Controls */}
      <div className="px-6 md:px-12 w-full mb-6 md:mb-12 flex items-center gap-4">
        <div className="text-[11px] font-sans font-semibold tracking-wide uppercase text-[#131C2B] whitespace-nowrap">
          Practice Areas
        </div>
        <div className="flex-1 h-[1px] bg-[#131C2B]/20"></div>
        <div className="flex gap-2">
          <button onClick={() => scroll("left")} className="w-8 h-8 flex items-center justify-center bg-[#A17755] text-white hover:bg-[#8F6F4E] transition-colors rounded-sm">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button onClick={() => scroll("right")} className="w-8 h-8 flex items-center justify-center bg-[#A17755] text-white hover:bg-[#8F6F4E] transition-colors rounded-sm">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Cards Carousel */}
      <div className="px-6 md:px-12 w-full">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {areas.map((area, idx) => (
            <div
              key={idx}
              className="min-w-[240px] md:min-w-[280px] xl:min-w-[calc((100%-48px)/4)] xl:max-w-[calc((100%-48px)/4)] snap-start flex flex-col cursor-pointer"
            >
              <h3 className="heading-sub mb-2 md:mb-4 !text-[18px] md:!text-[26px]">
                {area.title.split(" ").map((word, i) => (
                  <span key={i}>{word} </span>
                ))}
              </h3>
              <p className="text-[#131C2B]/80 text-[13px] md:text-sm leading-relaxed mb-4 md:mb-6 font-sans line-clamp-2">
                {area.excerpt}
              </p>
              <div className="mt-auto">
                <Link
                  href={`/practice-areas/${area.slug}`}
                  className="text-[#A17755] text-xs md:text-sm lg:text-[15px] font-sans font-medium hover:text-[#131C2B] transition-colors flex items-center gap-2 group"
                >
                  <CornerDownRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

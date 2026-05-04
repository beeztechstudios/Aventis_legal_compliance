"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const processItems = [
  {
    title: "Personalized Case Strategy",
    description:
      "Every case is approached with a tailored legal strategy designed to protect our clients interests and achieve effective outcomes.",
  },
  {
    title: "Integrity & Honest Advice",
    description:
      "We believe in transparent communication and honest legal guidance, ensuring our clients understand every step of the process.",
  },
  {
    title: "Direct Client Communication",
    description:
      "Clear and responsive communication throughout your case, so you are always informed and confident in the legal process.",
  },
  {
    title: "Experience Across Courts",
    description:
      "Experience handling matters before the Supreme Court of India, the Delhi High Court and other courts and legal forums across India.",
  },
];

// Each item box: vertical line on left + horizontal line on top — forms an L-shape rect border
// The lines animate their scaleY/scaleX driven by scroll progress
function ProcessItem({
  item,
  index,
  isLast,
}: {
  item: (typeof processItems)[0];
  index: number;
  isLast: boolean;
}) {
  const boxRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const hLineTopRef = useRef<HTMLDivElement>(null);
  const vLineRef = useRef<HTMLDivElement>(null);
  const hLineBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = boxRef.current;
    const content = contentRef.current;
    const hTop = hLineTopRef.current;
    const vLine = vLineRef.current;
    const hBottom = hLineBottomRef.current;
    if (!box || !hTop || !vLine || !content) return;

    // Initial state: lines collapsed, content dimmed + slightly shrunk
    gsap.set(hTop, { scaleX: 0, transformOrigin: "left center" });
    gsap.set(vLine, { scaleY: 0, transformOrigin: "top center" });
    gsap.set(content, { scale: 0.97, opacity: 0.45, transformOrigin: "left center" });
    if (hBottom) gsap.set(hBottom, { scaleX: 0, transformOrigin: "left center" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: box,
        start: "top 85%",
        end: "top 30%",
        scrub: 0.6,
      },
    });

    tl.to(hTop, { scaleX: 1, duration: 1, ease: "none" })
      .to(vLine, { scaleY: 1, duration: 1, ease: "none" }, "-=0.3")
      .to(content, { scale: 1, opacity: 1, duration: 1, ease: "none" }, 0);

    if (hBottom) {
      tl.to(hBottom, { scaleX: 1, duration: 1, ease: "none" }, "-=0.3");
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === box) st.kill();
      });
    };
  }, [isLast]);

  return (
    <div ref={boxRef} className="relative">
      {/* Horizontal line — top of item (animated) */}
      <div className="relative h-px bg-black/10 overflow-visible">
        {/* Static faint base */}
        <div className="absolute inset-0 bg-black/10" />
        {/* Animated blue line on top */}
        <div
          ref={hLineTopRef}
          className="absolute inset-0 bg-[#2E31CA]/60 origin-left"
        />
        {/* Crosshair plus at left intersection */}
        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[14px] h-[14px] flex items-center justify-center z-10">
          <div className="absolute w-px h-[14px] bg-[#2E31CA]" />
          <div className="absolute h-px w-[14px] bg-[#2E31CA]" />
        </div>
      </div>

      {/* Animated vertical line — left side of item */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-black/10 overflow-hidden">
        <div
          ref={vLineRef}
          className="absolute inset-0 bg-[#2E31CA]/60 origin-top"
        />
      </div>

      {/* Item content */}
      <div ref={contentRef} className="pl-[32px] py-[32px] ">
        <h4 className="process-item-title text-[#0A0A23] mb-[8px]">{item.title}</h4>
        <p className="process-item-desc text-black/60 max-w-[480px]">
          {item.description}
        </p>
      </div>

      {/* Bottom line for last item */}
      {isLast && (
        <div className="relative h-px bg-black/10">
          <div className="absolute inset-0 bg-black/10" />
          <div
            ref={hLineBottomRef}
            className="absolute inset-0 bg-[#2E31CA]/60 origin-left"
          />
          <div className="absolute -left-[1px] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[14px] h-[14px] flex items-center justify-center z-10">
            <div className="absolute w-px h-[14px] bg-[#2E31CA]" />
            <div className="absolute h-px w-[14px] bg-[#2E31CA]" />
          </div>
        </div>
      )}
    </div>
  );
}

export function ProcessSection() {
  return (
    <section className="w-full bg-white py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-6 flex flex-col md:flex-row gap-0">

        {/* LEFT: Sticky */}
        <div className="w-full md:w-[75%] md:sticky md:top-24 self-start pr-0 md:pr-16 pb-10 md:pb-0">
          <div className="flex items-stretch gap-3 mb-[8px]">
            <p className="process-label text-[#2E31CA]">The Process</p>
          </div>

          <h2 className="process-heading text-[#0A0A23] mb-[16px]">
            Professional legal guidance for complex disputes
          </h2>

          <p className="process-desc text-[#050505] max-w-[510px] mb-[32px]">
            We provide strategic legal guidance backed by experience, precision,
            and a client-first approach to resolve complex disputes effectively.
          </p>

          <a href="/contact">
            <Image src="/discoverApproch.svg" alt="Process" width={228} height={46} className="cursor-pointer" />
          </a>
        </div>

        {/* RIGHT: Scrollable list */}
        <div className="w-full md:w-[55%] relative">

          {/* Permanent static vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-black/10" />

          {/* Logo */}
          <div className="pl-[32px] mb-[24px]">
            <Image src="/icon.svg" alt="Pramanika Legal" width={55} height={55} className="object-contain w-[40px] h-[40px] md:w-[55px] md:h-[55px]" />
          </div>

          {/* Why choose heading */}
          <div className="pl-[32px] mb-[31px]">
            <h3 className="process-why-heading text-[#0A0A23]">
              Why choose Pramanika Legal
            </h3>
          </div>

          {/* Items with animated border lines */}
          {processItems.map((item, i) => (
            <ProcessItem
              key={i}
              item={item}
              index={i}
              isLast={i === processItems.length - 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

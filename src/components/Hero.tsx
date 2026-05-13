'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, useCallback } from 'react';

const QUOTE =
  'With a focus on labour law compliance, we support businesses across India with practical solutions for governance and regulatory needs.';

function TypewriterQuote() {
  const words = QUOTE.split(' ');
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);

  const handleScroll = useCallback(() => {
    const el = sectionRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const windowH = window.innerHeight;

    // Section not yet visible — keep all words dim
    if (rect.top >= windowH) {
      setVisibleCount(0);
      return;
    }

    // Reveal starts the moment section enters the viewport.
    // All words revealed by the time user scrolls ~60% through the section.
    const distanceIn = windowH - rect.top;                  // px the section has entered the viewport
    const revealOver = rect.height * 0.6 + windowH * 0.2;  // total px to scroll to fully reveal

    const progress = Math.max(0, Math.min(1, distanceIn / revealOver));
    setVisibleCount(Math.round(progress * words.length));
  }, [words.length]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run once on mount in case already in view
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <section ref={sectionRef} className="w-full px-6 md:px-12 py-24 md:py-32 bg-[#FAF1E1]">
      <div className="max-w-[1000px] mx-auto text-center">
        <p
          className="font-sans font-normal leading-[1.6] text-center tracking-tight"
          style={{ fontSize: 'clamp(1.3rem, 3.5vw, 3rem)' }}
        >
          {words.map((word, i) => (
            <span
              key={i}
              className="inline-block mr-[0.3em]"
              style={{
                color: '#131C2B',
                opacity: i < visibleCount ? 1 : 0.15,
              }}
            >
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <div className="w-full flex flex-col">
      <section className="px-6 md:px-12 py-16 md:py-24 w-full overflow-hidden">
        {/* Top Text Section (Side by Side) */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 lg:gap-24 mb-8">

          {/* Left Side: Big Heading */}
          <div className="flex-1 lg:max-w-[65%]">
            <h1 className="font-serif font-normal text-[1.6rem] sm:text-[2rem] md:text-[2.3rem] lg:text-[2.2rem] xl:text-[3.4rem] 2xl:text-[4.5rem] leading-[1.12] tracking-tight text-[#131C2B]">
              <span className="block lg:whitespace-nowrap">Simplifying Compliance.</span>
              <span className="block lg:whitespace-nowrap">Strengthening Governance.</span>
            </h1>
          </div>

          {/* Right Side: Description and CTA */}
          <div className="flex-1 lg:max-w-[35%] flex flex-col items-start pt-4 lg:pt-0">
            <p className="text-[#131C2B] text-[15px] md:text-[17px] leading-relaxed mb-8">
              Labour law, regulatory compliance, and HR advisory solutions
              designed for modern, growing businesses across India.
            </p>
            <button className="btn-primary shadow-sm text-[15px] px-8 py-3.5 bg-[#A17755] hover:bg-[#8F6F4E] rounded-md">
              Book Consultation
            </button>
            <p className="text-[#131C2B]/60 text-xs mt-6 font-sans">
              Located in <span className="font-semibold text-[#131C2B]">India.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Full Width & Height Visual — natural aspect ratio, no cropping */}
      <div className="w-full">
        <Image
          src="/hero-section.png"
          alt="Business meeting"
          width={1920}
          height={1080}
          className="w-full h-auto block"
          priority
        />
      </div>

      {/* Scroll-driven word reveal quote */}
      <TypewriterQuote />
    </div>
  );
}

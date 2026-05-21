'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState, useCallback } from 'react';

const QUOTE =
  '"With a focus on labour law compliance, we support businesses across India with practical solutions for governance and regulatory needs."';

function TypewriterQuote() {
  const words = QUOTE.split(' ');
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);

  const handleScroll = useCallback(() => {
    const el = sectionRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const windowH = window.innerHeight;

    // Reveal starts when the section is at least 50% scrolled into the viewport
    const triggerDistance = rect.height * 0.5;

    // If we haven't reached the 50% point yet, keep all words dim
    if (windowH - rect.top < triggerDistance) {
      setVisibleCount(0);
      return;
    }

    // Distance scrolled past the 50% trigger point
    const distanceIn = (windowH - rect.top) - triggerDistance;

    // Decreased revealOver slightly to speed up the animation. 
    // This requires less scrolling to reveal the entire quote (~5-6 words per scroll).
    const revealOver = windowH * 0.8;

    const progress = Math.max(0, Math.min(1, distanceIn / revealOver));
    setVisibleCount(Math.round(progress * words.length));
  }, [words.length]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run once on mount in case already in view
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <section ref={sectionRef} className="w-full px-6 md:px-12 py-12 md:py-24 bg-[#FAF1E1]">
      <div className="max-w-[1000px] mx-auto text-center">
        <p
          className="font-serif font-medium leading-[1.6] text-center tracking-tight"
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
      <section className="px-6 md:px-12 pt-10 md:pt-16 pb-0 md:pb-12 w-full overflow-hidden">
        {/* Top Text Section (Side by Side) */}
        <div className="hero-content flex flex-col xl:flex-row xl:items-center justify-between gap-2 md:gap-4 xl:gap-24 mb-8">
          {/* Left Side: Big Heading */}
          <div className="flex-1 xl:max-w-[65%]">
            <h1 className="heading-hero max-w-full mb-2">
              <span className="block md:whitespace-nowrap">Simplifying Compliance.</span>
              <span className="block md:whitespace-nowrap">Strengthening Governance.</span>
            </h1>
          </div>
          {/* Right Side: Description and CTA */}
          <div className="flex-1 xl:max-w-[35%] flex flex-col items-start pt-0 xl:pt-0">
            <p className="section-description heading-to-desc mb-4">
              Labour law, regulatory compliance, and HR advisory solutions
              designed for modern, growing businesses across India.
            </p>
            <Link
              href="/contact#connect"
              className="btn-premium shadow-sm text-[15px] px-8 py-3.5 rounded-md cursor-pointer inline-flex items-center justify-center"
            >
              Book Consultation
            </Link>
            <p className="text-[#131C2B]/60 text-xs md:text-[15px] mt-6 font-sans">
              Located in <span className="font-semibold text-[#131C2B]">India.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Full Width & Height Visual — natural aspect ratio, no cropping */}
      <div className="w-full hero-image overflow-hidden">
        <Image
          src="/hero-section.webp"
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

"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle: string;
  bgImage: string;
  ctaImage?: string;
  ctaAlt?: string;
  centered?: boolean;
  leftDecor?: React.ReactNode;
  extraCta?: React.ReactNode;
}

export function HeroSection({
  title,
  subtitle,
  bgImage,
  ctaImage = "/discussCase.svg",
  ctaAlt = "Discuss your case now",
  centered = false,
  leftDecor,
  extraCta,
}: HeroSectionProps) {
  const tagRef   = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef   = useRef<HTMLParagraphElement>(null);
  const ctaRef   = useRef<HTMLDivElement>(null);
  const extraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [tagRef.current, titleRef.current, subRef.current, ctaRef.current, extraRef.current].filter(Boolean);
    gsap.set(els, { opacity: 0, y: 32 });
    gsap.to(els, {
      opacity: 1,
      y: 0,
      duration: 0.75,
      ease: "power3.out",
      stagger: 0.15,
      delay: 0.15,
    });
  }, []);

  return (
    <div className="w-screen relative left-1/2 -translate-x-1/2 bg-black text-white md:min-h-[700px] overflow-hidden min-h-[600px]">
      <Image
        src={bgImage}
        alt="Hero Background"
        fill
        className="object-cover blur-sm opacity-100 pointer-events-none"
        priority
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full pt-[144px]">
        <section className={`flex pt-[60px] md:pt-[112px] ${centered ? "justify-center items-center" : "pl-6"}`}>
          {leftDecor && (
            <div className="hidden md:flex w-[500px] items-start -ml-21">
              {leftDecor}
            </div>
          )}

          <div className={`flex flex-col ${centered ? "items-center justify-center text-center w-full md:w-auto px-6" : "justify-center px-0 md:px-6 md:ml-[68px] md:mr-12 w-full md:w-auto"}`}>

            <h1
              ref={titleRef}
              className={`hero-title max-w-full  md:max-w-3xl text-white mb-[16px] ${centered ? "" : ""}`}
            >
              {title}
            </h1>

            <p
              ref={subRef}
              className={`hero-subtitle text-[#E5E5E5] mb-[23px] ${centered ? "text-center max-w-[380px] md:max-w-[540px]" : "max-w-[540px]"}`}
            >
              {subtitle}
            </p>

            <div ref={ctaRef} className={`flex items-center gap-4 flex-wrap hover:opacity-90 transition-opacity ${centered ? "justify-center" : ""}`}>
              <a href="/contact">
                <Image src={ctaImage} alt={ctaAlt} width={240} height={55} className="cursor-pointer" />
              </a>
            </div>

            {extraCta && (
              <div ref={extraRef} className="hover:opacity-90 transition-opacity block md:hidden mb-12 mt-4">
                {extraCta}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

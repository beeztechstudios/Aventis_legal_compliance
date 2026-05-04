"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Flat word list for stagger, but "Pramanika Legal," is one token
const tokens = [
  "At",
  "Pramanika Legal,", // single token — no internal split
  "we",
  "provide",
  "strategic",
  "advocacy",
  "to",
  "protect",
  "our",
  "clients",
  "interests",
  "and",
  "resolve",
  "complex",
  "disputes",
  "with",
  "precision.",
];

export function LegacySection() {
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = wordsRef.current.filter(Boolean) as HTMLSpanElement[];
    if (!els.length || !sectionRef.current) return;

    gsap.set(els, { color: "rgba(10,10,35,0.15)" });

    gsap.to(els, {
      color: "rgba(10,10,35,1)",
      duration: 0.01,
      stagger: 0.06,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        end: "center 40%",
        scrub: 1,
      },
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  return (
    <section className="w-full bg-white border-b  md-6 md:mb-24 border-black/15">
      <div className="max-w-7xl mx-auto px-0 md:px-6">
        <div className="flex  flex-col md:flex-row gap-0 divide-y md:divide-y-0 md:divide-x divide-black/15">
          {/* Left */}
          <div
            ref={sectionRef}
            className="w-full md:w-[58%] py-12 md:py-[149px] px-6 md:px-0"
          >
            <h2 className="legacy-label text-[#2E31CA] w-full md:w-[70%] mb-6">Why Choose Pramanika Legal as Your Law Firm in Delhi?</h2>
            <h3 className="legacy-heading pr-0 md:pr-[87px]">
              {tokens.map((token, i) => (
                <span
                  key={i}
                  ref={(el) => {
                    wordsRef.current[i] = el;
                  }}
                  className="inline whitespace-pre-wrap"
                >
                  {token}
                  {i < tokens.length - 1 ? " " : ""}
                </span>
              ))}
            </h3>
          </div>

          {/* Right */}
          <div className="px-6 md:pl-[60px] md:pr-0 w-full md:w-[40%] py-12 md:py-[149px] flex flex-col justify-center">
            <p className="legacy-desc text-black/70 max-w-[700px] mb-[25px]">
              In the fast-paced legal landscape of Delhi, you need more than just representation — you need strategic protection. As a top law firm in Delhi, Pramanika Legal combines deep expertise with a practical, client-first approach to safeguard your rights and interests.
Whether you're dealing with cyber fraud, a business dispute, or a property conflict, we provide clear, aggressive, and result-oriented solutions. Our practice spans the Supreme Court of India, Delhi High Court, District Courts, NCLT/NCLAT, RERA, Consumer Commissions, and arbitral tribunals.

            </p>
            <div className="flex items-stretch gap-3">
              <a href="/about">
                <Image
                  src="/discoverLegacy.svg"
                  alt="Explore legal services"
                  width={218}
                  height={45}
                  className="cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Philosophy Row */}
        <div className="flex flex-col md:flex-row gap-0   border-t border-black/15">
          {/* Left */}
          <div className="w-full  md:w-[58%] py-6 md:py-10 px-6 md:px-0">
            <p
              className=" text-[#050505] text-[16px] md:text-[24px] mb-2"
              style={{
                fontFamily: "Roboto Serif",
                fontWeight: 400,
                fontStyle: "Regular",
                lineHeight: "36.62px",
                letterSpacing: "0%",
              }}
            >
              Our Philosophy
            </p>
            <h2 className="text-[24px] md:text-[42px]  text-[#2E31CA] "  style={{
                fontFamily: "Roboto Serif",
                fontWeight: 400,
                fontStyle: "Regular",
                lineHeight: "51px",
                letterSpacing: "1%",
              }}>
              Pramanika = Reliable
            </h2>
          </div>

          {/* Right */}
          <div className="px-6  md:pl-[60px] md:pr-0 w-full md:w-[40%] pb-12 md:pb-12 md:py-14 flex flex-col justify-center">
            <p className="legacy-desc text-[#050505] max-w-[700px]">
              Pramanika represents reliability and credibility, reflecting our commitment to delivering legal solutions grounded in facts, evidence and strategic advocacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

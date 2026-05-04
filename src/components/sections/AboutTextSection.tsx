"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const paragraph1Tokens = [
  "Pramanika Legal", "is", "a", "Delhi-based", "dispute", "resolution", "and", "advisory", "practice", "built", "for", "clients", "who", "need", "more", "than", "routine", "legal", "help", "—", "they", "need", "a", "firm", "that", "thinks", "strategically", "and", "fights", "effectively.", "As", "a", "top", "law", "firm", "in", "Delhi,", "we", "focus", "on", "complex,", "high-stakes", "matters", "where", "precision", "and", "experience", "make", "all", "the", "difference.",
];

const paragraph2Tokens = [
  "Our", "practice", "spans", "India's", "most", "important", "legal", "forums,", "including", "the", "Supreme", "Court,", "Delhi", "High", "Court,", "NCLT,", "NCLAT,", "Consumer", "Commissions,", "and", "RERA.", "From", "cybercrime", "and", "crypto", "fraud", "to", "property", "litigation,", "we", "deliver", "results", "that", "matter.",
];

const allTokens = [...paragraph1Tokens, ...paragraph2Tokens];

export function AboutTextSection() {
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = wordsRef.current.filter(Boolean) as HTMLSpanElement[];
    if (!els.length || !sectionRef.current) return;

    gsap.set(els, { color: "rgba(10,10,35,0.15)" });

    gsap.to(els, {
      color: "rgba(10,10,35,1)",
      duration: 0.01,
      stagger: 0.04,
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

  let globalIndex = 0;

  return (
    <section className="w-full ">
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 py-24 md:py-36 flex items-center justify-center"
      >
        <div
          className="max-w-[1080px] text-left text-xl md:text-[32px] "
          style={{
            fontFamily: "Roboto",
            fontWeight: 400,
            fontStyle: "Regular",

            lineHeight: "41px",
            letterSpacing: "0.25px",
            textAlign: "center",
          }}
        >
          {/* Paragraph 1 */}
          <p className="mb-8">
            {paragraph1Tokens.map((token, i) => {
              const idx = globalIndex++;
              return (
                <span key={`p1-${i}`}>
                  <span
                    ref={(el) => {
                      wordsRef.current[idx] = el;
                    }}
                    className={`inline whitespace-pre-wrap${token === "Pramanika Legal" ? " font-bold" : ""}`}
                  >
                    {token}
                  </span>
                  {i < paragraph1Tokens.length - 1 ? " " : ""}
                </span>
              );
            })}
          </p>

          {/* Paragraph 2 */}
          <p>
            {paragraph2Tokens.map((token, i) => {
              const idx = globalIndex++;
              return (
                <span key={`p2-${i}`}>
                  <span
                    ref={(el) => {
                      wordsRef.current[idx] = el;
                    }}
                    className="inline whitespace-pre-wrap"
                  >
                    {token}
                  </span>
                  {i < paragraph2Tokens.length - 1 ? " " : ""}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}

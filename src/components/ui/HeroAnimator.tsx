"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function HeroAnimator({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll("[data-hero-item]");
    gsap.set(els, { opacity: 0, y: 28 });
    gsap.to(els, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.14,
      delay: 0.2,
    });
  }, []);

  return <div ref={ref}>{children}</div>;
}

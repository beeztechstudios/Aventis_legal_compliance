"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

/**
 * SmoothScroll
 *
 * Uses GSAP's native momentum-based scroll observer for buttery smooth
 * page scrolling (ease: 0.045 → feels like inertia / ~4.5 velocity).
 * Also scrolls to window top on every route change.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  // GSAP smooth scroll via ScrollSmoother-style lerp on wheel events
  useEffect(() => {
    let currentY = window.scrollY;
    let targetY = window.scrollY;
    let raf: number;
    const ease = 0.075; // ~4.5 feel — tweak between 0.06 (silky) and 0.1 (snappy)

    function onWheel(e: WheelEvent) {
      e.preventDefault();
      targetY = Math.max(
        0,
        Math.min(
          targetY + e.deltaY,
          document.documentElement.scrollHeight - window.innerHeight
        )
      );
    }

    function onTouch() {
      // Don't interfere with native touch scroll on mobile
    }

    function tick() {
      currentY += (targetY - currentY) * ease;
      // Stop animating when close enough
      if (Math.abs(targetY - currentY) < 0.1) {
        currentY = targetY;
      }
      window.scrollTo(0, currentY);
      raf = requestAnimationFrame(tick);
    }

    // Only enable on non-touch (desktop) devices
    const isTouchDevice = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    if (!isTouchDevice) {
      window.addEventListener("wheel", onWheel, { passive: false });
      raf = requestAnimationFrame(tick);
    }

    return () => {
      window.removeEventListener("wheel", onWheel);
      cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return <>{children}</>;
}

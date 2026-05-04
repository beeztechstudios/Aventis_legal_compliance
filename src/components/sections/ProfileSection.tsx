"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

function useCountUp(endValue: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !hasStarted) setHasStarted(true); },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => { observer.unobserve(el); };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * endValue));
      if (progress < 1) window.requestAnimationFrame(step);
      else setCount(endValue);
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, endValue, duration]);

  return { count, ref };
}

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <div className="flex flex-col items-center " ref={ref}>
      <div className="profile-stat-number text-white leading-none">{count}{suffix}</div>
      <p className="profile-stat-desc text-white/80 mt-[10px]">{label}</p>
    </div>
  );
}

export function ProfileSection() {
  return (
    <section id="profile" className="w-full bg-[#2E31CA]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">

        {/* Left: Text Content */}
        <div className="flex-1 justify-end px-6 md:px-6 pt-10 md:pt-[72px] pb-10 md:pb-[64px] flex flex-col relative">

          {/* "I'm Advocate" */}
          <div className="-ml-6 flex items-center gap-0 md:gap-[11.7px]">
            <Image src="/hand.gif" alt="wave" width={53} height={53} className="inline" />
            <p className="profile-subheading text-white">Why Clients Trust Advocate</p>
          </div>

          {/* Border box: left line + bottom line wrapping name & desc */}
          <div className="relative border-l border-white/30 px-[12px] md:px-[38px] w-fit">

            {/* Name */}
            <h2 className="profile-heading mb-[12px] text-white leading-tight">
              <span className="italic font-light">Akhil</span>{" "}Bharat Kukreja
            </h2>

            {/* Description */}
            <div className="profile-desc text-white/90 max-w-[590px] mb-[32px] space-y-4">
              <p className="text-white">
                Akhil Bharat Kukreja founded Pramanika Legal to provide sharp, strategy-driven legal representation that actually moves the needle.
              </p>
              <p className="text-white">
                With over 5 years of focused experience, he leads the firm&apos;s practice across cyber crime, cryptocurrency fraud, commercial litigation, and insolvency proceedings. Known for being relentlessly focused on outcomes, Advocate Kukreja is trusted for matters demanding both legal precision and strategic thinking.
              </p>
            </div>

            {/* Bottom horizontal line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-white/30" />

            {/* + crosshair */}
            <div className="absolute -bottom-[5px] -left-[5px] w-[10px] h-[10px]">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/50 -translate-x-1/2" />
              <div className="absolute top-1/2 left-0 right-0 h-px bg-white/50 -translate-y-1/2" />
            </div>
          </div>

          <div className="relative border-l border-white/30 pl-[6px] md:px-[38px]">
            {/* Stats */}
            <div className="flex pt-[24px] md:py-[32px] items-end justify-between md:items-start gap-[16px] md:gap-[40px]">
              <AnimatedStat value={5} suffix="+" label="years of experience" />
              <AnimatedStat value={100} suffix="+" label="matters advised" />
              <div className="flex flex-col   items-center ">
                <Image src="/map.svg" alt="India Map" width={95} height={95} className="w-[56px] h-[56px] md:w-[95px] md:h-[95px]" />
                <p className="profile-stat-desc text-white/80 mt-[10px]">Courts Across India</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right: Image */}
        <div className="w-full  md:w-[520px]   grayscale-100 flex-shrink-0 relative min-h-[480px] md:min-h-[700px]">
          <Image
            src="/akhiImage.png"
            alt="Advocate Akhil Bharat Kukreja"
            fill
            className="object-cover p-[22px] md:p-[13px]"
            priority
          />
        </div>

      </div>
    </section>
  );
}

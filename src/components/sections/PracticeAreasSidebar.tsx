"use client";

import Link from "next/link";
import { useState } from "react";

interface SidebarArea {
  label: string;
  href: string;
}

export function PracticeAreasSidebar({ areas }: { areas: SidebarArea[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);

  function handleHover(i: number) {
    if (i !== activeIndex) {
      setPrevIndex(activeIndex);
      setActiveIndex(i);
    }
  }

  function handleLeave() {
    setPrevIndex(activeIndex);
    setActiveIndex(null);
  }

  return (
    <div className="border border-black/10">
      <div className="px-5 py-4 border-b border-black/10">
        <h3 className="text-sm font-medium text-[#0A0A23] uppercase tracking-widest">
          Other Practice Areas
        </h3>
      </div>
      <ul onMouseLeave={handleLeave}>
        {areas.map((a, i) => {
          const isActive = activeIndex === i;
          const isPrev = prevIndex === i && activeIndex !== i;
          return (
            <li key={a.href} className="relative overflow-hidden border-b border-black/10 last:border-b-0">
              {/* Sliding blue fill */}
              <div
                className={`absolute inset-0 bg-[#2E31CA] z-0 transition-transform duration-400 ease-in-out ${
                  isActive ? "translate-x-0" : isPrev ? "-translate-x-full" : "-translate-x-full"
                }`}
              />
              <Link
                href={a.href}
                onMouseEnter={() => handleHover(i)}
                className={`relative z-10 flex items-center px-5 py-4 text-sm no-underline transition-colors duration-300 ${
                  isActive ? "text-white" : "text-[#0A0A23]/70"
                }`}
              >
                {a.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

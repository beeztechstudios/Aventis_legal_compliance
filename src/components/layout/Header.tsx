"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/about", label: "About Us" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

function NavLink({ href, label, isLight }: { href: string; label: string; isLight: boolean }) {
  const fillRef = useRef<HTMLSpanElement>(null);
  const defaultTextRef = useRef<HTMLSpanElement>(null);
  const hoverTextRef = useRef<HTMLSpanElement>(null);

  const onEnter = () => {
    gsap.killTweensOf([fillRef.current, defaultTextRef.current, hoverTextRef.current]);
    const tl = gsap.timeline();
    tl.to(fillRef.current, { scaleY: 1, duration: 0.22, ease: "power2.out" }, 0)
      .to(defaultTextRef.current, { y: "-105%", duration: 0.2, ease: "power2.in" }, 0)
      .fromTo(hoverTextRef.current, { y: "105%" }, { y: "0%", duration: 0.2, ease: "power2.out" }, 0.08);
  };

  const onLeave = () => {
    gsap.killTweensOf([fillRef.current, defaultTextRef.current, hoverTextRef.current]);
    const tl = gsap.timeline();
    tl.to(hoverTextRef.current, { y: "105%", duration: 0.18, ease: "power2.in" }, 0)
      .to(defaultTextRef.current, { y: "0%", duration: 0.2, ease: "power2.out" }, 0.06)
      .to(fillRef.current, { scaleY: 0, duration: 0.22, ease: "power2.in" }, 0.04);
  };

  return (
    <a
      href={href}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="relative inline-block px-3 py-2 no-underline navbar-text"
    >
      {/* Blue fill — scales up from bottom on hover */}
      <span
        ref={fillRef}
        className="absolute inset-0 bg-[#2E31CA] z-0"
        style={{ transform: "scaleY(0)", transformOrigin: "bottom" }}
      />
      {/* Clip wrapper — overflow-hidden here so text can't bleed outside */}
      <span className="relative z-10 flex flex-col overflow-hidden" style={{ height: "1.2em" }}>
        {/* Default text */}
        <span
          ref={defaultTextRef}
          className={`block leading-none ${isLight ? "text-[#2E31CA]" : "text-white"}`}
        >
          {label}
        </span>
        {/* Hover text — rolls up from below */}
        <span
          ref={hoverTextRef}
          className="absolute inset-0 flex items-center justify-center text-white leading-none"
          style={{ transform: "translateY(105%)" }}
        >
          {label}
        </span>
      </span>
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Condition for blue header (Insights detail page, but NOT the main listing page)
  const isInsightDetail = pathname?.startsWith("/insights/") && pathname !== "/insights";
  const isLight = isInsightDetail;
  const burgerColor = isInsightDetail ? "bg-primary" : "bg-white";
  const logoSrc = isInsightDetail ? "/blueLogo.svg" : "/pramanikaLogo.svg";

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="absolute top-[20px] md:top-[20px] left-0 right-0 z-50 w-full">
        <div className="max-w-7xl mx-auto flex items-center justify-between pt-10 relative px-6 md:px-6">

          {/* Desktop nav — hidden on mobile */}
          <nav className="hidden md:flex gap-[6px] navbar-text">
            {navLinks.map((l) => (
              <NavLink key={l.href} href={l.href} label={l.label} isLight={isLight} />
            ))}
          </nav>

          {/* Center Logo — links to home */}
          <Link href="/" className="absolute left-[60px] md:left-1/2 -translate-x-1/2 no-underline">
            <Image src={logoSrc} alt="Pramanika Legal" width={104} height={104} className="w-[72px] h-[72px] md:w-[104px] md:h-[104px]" />
          </Link>

          {/* Desktop CTA — hidden on mobile */}
          <div className="hidden md:block hover:opacity-90 transition-opacity">
            <a href="/contact">
              <Image src="/scheduleCallBtn.svg" alt="Schedule a call" width={175} height={45} className="cursor-pointer" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden ml-auto flex flex-col justify-center gap-[5px] w-8 h-8 relative z-50"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block h-[2px] ${burgerColor} rounded-full transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[7px] bg-white" : ""}`} />
            <span className={`block h-[2px] ${burgerColor} rounded-full transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-[2px] ${burgerColor} rounded-full transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[7px] bg-white" : ""}`} />
          </button>

        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-xl flex flex-col transition-transform duration-500 ease-in-out md:hidden ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Spacer to push nav down — no logo here */}
        <div className="h-24" />

        <nav className="flex flex-col flex-1 justify-center px-10 gap-8">
          {navLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 80}ms` : "0ms" }}
              className={`text-white no-underline mobile-nav-link border-b border-white/20 pb-6 transition-all duration-400 ${open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA at bottom */}
        <div className="px-6 pb-16">
          <a href="/contact">
            <Image src="/scheduleCallBtn.svg" alt="Schedule a call" width={175} height={45} className="cursor-pointer" />
          </a>
        </div>
      </div>
    </>
  );
}

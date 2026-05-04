"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

function WatermarkText() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, { y: 60, opacity: 0 });

    ScrollTrigger.create({
      trigger: el,
      start: "top 95%",
      once: true,
      onEnter: () => {
        gsap.to(el, {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
        });
      },
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  return (
    <span
      ref={ref}
      className="footer-watermark select-none text-[48px] md:text-[115px]"
    >
      PRAMANIKA LEGAL
    </span>
  );
}

export function Footer() {
  return (
    <footer className="bg-white relative overflow-hidden text-[#333333]">
      <div className="max-w-7xl mx-auto px-2 md:px-6 w-full">
        {/* Main Grid: 3 columns */}
        <div className="grid md:grid-cols-3 w-full relative z-10 border-b border-[#000000]/40">
          {/* Column 1 - Logo & Description */}
          <div className="px-6 md:px-0 pb-[32px] border-b md:border-b-0 md:border-r border-[#000000]/40 flex flex-col">
            <Image
              src="/blueLogo.svg"
              className="mt-12 md:mt-[120px]"
              alt="Pramanika Legal"
              width={158}
              height={165}
            />
            <p className="footer-desc mt-8 md:mt-auto max-w-[360px] text-[#4A4A4A]">
              Pramanika Legal is a Delhi-based law practice handling cybercrime
              and cryptocurrency fraud matters, civil and property litigation,
              commercial disputes, arbitration, consumer disputes and other
              complex legal proceedings.
            </p>
          </div>

          {/* Column 2 - Links & Social */}
          <div className="px-6 md:pl-[32px] md:pr-0 pb-[32px] border-b md:border-b-0 md:border-r border-[#000000]/40 flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-x mb-12 mt-12 md:mt-[120px]">
              <div className="flex flex-col gap-5">
                <Link href="/" className="footer-text">
                  Home
                </Link>
                <Link href="/about" className="footer-text text-[#4A4A4A]">
                  About Pramanika
                </Link>
                <Link
                  href="/practice-areas"
                  className="footer-text text-[#4A4A4A]"
                >
                  Practice Areas
                </Link>
                <Link href="/insights" className="footer-text text-[#4A4A4A]">
                  Insights
                </Link>
                <Link href="/contact" className="footer-text text-[#4A4A4A]">
                  Contact
                </Link>
              </div>
              <div className="flex flex-col gap-5">
                <Link href="/practice-areas/cybercrime-cryptocurrency-fraud-data-privacy" className="footer-text text-[#4A4A4A]">
                  Cybercrime & Cryptocurrency Fraud
                </Link>
                <Link href="/practice-areas/commercial-litigation-and-business-disputes" className="footer-text text-[#4A4A4A]">
                  Commercial Litigation & Business Disputes
                </Link>
                <Link href="/practice-areas/civil-litigation" className="footer-text text-[#4A4A4A]">
                  Civil Litigation
                </Link>
                <Link href="/practice-areas/consumer-litigation-and-real-estate-disputes" className="footer-text text-[#4A4A4A]">
                  Consumer Litigation & Real Estate Disputes
                </Link>
                <Link href="/practice-areas/family-and-matrimonial-litigation" className="footer-text text-[#4A4A4A]">
                  Family & Matrimonial Litigation
                </Link>
                <Link href="/practice-areas/white-collar-crime-and-criminal-litigation" className="footer-text text-[#4A4A4A]">
                  White-Collar Crime & Criminal Litigation
                </Link>
                {/* <Link href="/practice-areas/insolvency-and-bankruptcy-litigation" className="footer-text text-[#4A4A4A]">
                  Insolvency & Bankruptcy Litigation
                </Link>
                <Link href="/practice-areas/arbitration-and-alternate-dispute-resolution" className="footer-text text-[#4A4A4A]">
                  Arbitration & Alternate Dispute Resolution
                </Link> */}
              </div>
            </div>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/company/pramanika-legal/">
                <Image
                  src="/linkedInIcon.svg"
                  alt="linkedin"
                  width={32}
                  height={32}
                />
              </a>
              {/* <Image src="/twitterIcon.svg" alt="twitter" width={32} height={32} /> */}
            </div>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="px-6 md:pl-[32px] md:pr-0 pb-[32px] flex flex-col justify-start">
            <div className="mt-12 md:mt-[120px]">
              <p className="footer-address mb-[24px] text-[#050505]">
                E-33, 2nd Floor, Lajpat Nagar – 3<br />
                New Delhi, Delhi, India – 110024
              </p>
              <p className="footer-contact mb-[12px]">+91 9958480667</p>
              <p className="footer-contact text-[#050505]">
                akhil.pramanikalegal@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Watermark Section */}
        <div className="w-full overflow-hidden flex justify-start md:justify-center pl-4 md:pl-0 py-[16px] relative z-0">
          <WatermarkText />
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 px-6 md:px-0 py-6 border-t border-[#000000]/40 text-[13px] text-[#050505] relative z-10"
          style={{
            fontFamily: "var(--font-roboto)",

            fontWeight: 400,
            fontStyle: "Regular",
            fontSize: "14.4px",

            lineHeight: "20px",
          }}
        >
          <p>© 2026 Pramanika Legal. All Rights Reserved.</p>
          <div className="flex gap-2">
            <a
              href="/privacy-policy"
              className="text-[#050505] hover:underline"
            >
              Privacy Policy
            </a>
            <span className="opacity-50">|</span>
            <a
              href="/terms-of-service"
              className="text-[#050505] hover:underline"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

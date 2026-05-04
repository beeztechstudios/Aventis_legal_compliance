"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

export function CTASection() {
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    // Start hidden, slightly scaled up
    gsap.set(btn, { scale: 1.18, opacity: 0 });

    ScrollTrigger.create({
      trigger: btn,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(btn, {
          scale: 1,
          opacity: 1,
          duration: 0.55,
          ease: "back.out(2.5)",
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === btn) st.kill();
      });
    };
  }, []);

  return (
    <section className="w-full bg-black text-white min-h-[708px] flex items-center overflow-hidden relative">
      {/* Background */}
      <Image
        src="/CTABg.svg"
        alt="Courtroom Background"
        fill
        className="object-cover opacity-100 pointer-events-none"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10 w-full px-6 md:px-6">
        <div className="w-fit">
          <h2 className="hero-title text-white mb-[16px] text-[28px] leading-[36px] md:text-[72px] md:leading-[86px]">
          Ready for strategic<br />legal solutions?
          </h2>

          <p className="hero-subtitle text-white max-w-[560px] mb-[23px]">
            Contact Pramanika Legal today for a confidential consultation.
             <div className="flex flex-col mt-2 gap-2">
            <Link href="mailto:akhil.pramanikalegal@gmail.com" className="flex text-white items-center gap-2"><Mail className="w-4"/> akhil.pramanikalegal@gmail.com </Link>
            
            <Link href="tel:+919958480667" className="flex text-white items-center gap-2"> <Phone className="w-4"/> +919958480667 </Link>
            </div>
           

          </p>

          <div ref={btnRef}>
            <a href="/contact">
              <Image
                src="/discussCase.svg"
                alt="Let's discuss your matter"
                width={216}
                height={55}
                className="cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function CallToAction() {


  return (
    <section id="start-consultation" className="relative w-full overflow-hidden bg-[#0F1626] py-12 md:py-40 flex flex-col items-center justify-center text-center">

      {/* Background Image/Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/start-free-consultation-background.webp"
          alt="Background Pattern"
          fill
          className="object-cover object-center"
          quality={100}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6">
        <span className="font-sans text-[14px] md:text-[15px] text-white/90 mb-2 md:mb-6 tracking-wide">Let&apos;s start</span>

        <h1 className="heading-section text-white mb-2 md:mb-6 !text-[40px] md:!text-[76px] lg:!text-[96px]">
          Start<br />consultation
        </h1>

        <Link 
          href="/contact#connect"
          className="btn-premium-light px-5 py-3 rounded-md font-sans font-medium text-[15px] cursor-pointer inline-block"
        >
          Book a Consultation
        </Link>
      </div>

    </section>
  );
}

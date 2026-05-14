'use client';

import Image from 'next/image';

export default function CallToAction() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  const handleBookConsultation = () => {
    if (calendlyUrl) {
      window.open(calendlyUrl, '_blank');
    }
  };

  return (
    <section id="start-consultation" className="relative w-full overflow-hidden bg-[#0F1626] py-12 md:py-40 flex flex-col items-center justify-center text-center">

      {/* Background Image/Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/start-free-consultation-background.png"
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
          Start free<br />consultation
        </h1>

        <button 
          type="button"
          onClick={handleBookConsultation}
          className="bg-[#E3D0AD] text-[#131C2B] px-5 py-3 rounded-[4px] font-sans font-medium text-[15px] hover:bg-[#d8c09a] transition-colors"
        >
          Book a Consultation
        </button>
      </div>

    </section>
  );
}

import Image from 'next/image';

export default function CallToAction() {
  return (
    <section id="start-consultation" className="relative w-full overflow-hidden bg-[#0F1626] py-32 md:py-40 flex flex-col items-center justify-center text-center">
      
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
        <span className="font-sans text-[14px] md:text-[15px] text-white/90 mb-6 tracking-wide">Let&apos;s start</span>
        
        <h2 className="font-serif text-[3.5rem] md:text-[5rem] lg:text-[6rem] text-white leading-[1.05] mb-12">
          Start free<br />consultation
        </h2>
        
        <button className="bg-[#E3D0AD] text-[#131C2B] px-7 py-3 rounded-[4px] font-sans font-medium text-[15px] hover:bg-[#d8c09a] transition-colors">
          Book a Consultation
        </button>
      </div>

    </section>
  );
}

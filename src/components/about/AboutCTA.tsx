import Image from 'next/image';
import Link from 'next/link';

export default function AboutCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-[#131C2B] py-16 md:py-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <Image
          src="/need-reliable-compliance-background.png"
          alt="Background"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
        
        {/* Left Side: Heading */}
        <div className="flex-[3]">
          <h2 className="font-serif text-[32px] md:text-[48px] lg:text-[64px] xl:text-[72px] text-white leading-[1.1]">
            Need Reliable<br />Compliance Support?
          </h2>
        </div>

        {/* Right Side: Text and Buttons */}
        <div className="w-full lg:flex-[2] lg:max-w-[500px] flex flex-col items-start text-left">
          <p className="font-sans text-[15px] md:text-[18px] text-white/80 leading-relaxed mb-8 text-justify">
            Connect with Aventis Compliance Solutions for practical labour law advisory and business-focused compliance solutions tailored to your operational requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start">
            <Link 
              href="/contact#connect"
              className="btn-premium-light px-6 py-3 rounded-md font-sans font-medium text-[15px] whitespace-nowrap text-center cursor-pointer flex-1 sm:flex-initial"
            >
              Schedule a Consultation
            </Link>
            <Link 
              href="/contact#connect"
              className="btn-premium-outline px-6 py-3 rounded-md font-sans font-medium text-[15px] whitespace-nowrap text-center cursor-pointer flex-1 sm:flex-initial"
            >
              Connect With Our Team
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

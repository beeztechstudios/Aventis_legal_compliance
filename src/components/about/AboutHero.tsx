import Image from 'next/image';
import Link from 'next/link';

export default function AboutHero() {
  return (
    <section className="px-6 md:px-12 pb-12 md:pb-24 w-full bg-[#FAF1E1] relative overflow-hidden flex flex-col xl:flex-row items-center justify-between gap-4 md:gap-6 xl:gap-8">
      {/* Left Side: Content */}
      <div className="w-full xl:w-[48%] pt-12 md:pt-16 pb-0 relative z-10">
        <h1 className="heading-hero mb-2 leading-tight">
          <span className="block xl:whitespace-nowrap">About Aventis</span>
          <span className="block xl:whitespace-nowrap">Compliance Solutions</span>
        </h1>
        <p className="section-description heading-to-desc mb-4 max-w-[540px] text-[#131C2B]/80 font-sans">
          Building reliable compliance frameworks through practical, business-focused labour law and regulatory advisory services across India.
        </p>
        <Link href="/contact#connect" className="btn-premium shadow-sm text-[15px] px-8 py-3.5 rounded-md inline-flex items-center justify-center">
          Discuss your requirements
        </Link>
      </div>

      {/* Right Side: Image */}
      <div className="w-full xl:w-[50%] h-[280px] sm:h-[340px] md:h-[420px] lg:h-[480px] xl:h-[520px] 2xl:h-[580px] relative z-10 rounded-lg overflow-hidden">
        <Image
          src="/about-hero.png"
          alt="Law Office"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </section>
  );
}

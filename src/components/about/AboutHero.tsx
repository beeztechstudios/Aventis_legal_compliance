import Image from 'next/image';
import Link from 'next/link';

export default function AboutHero() {
  return (
    <section className="w-full px-6 md:px-12 bg-[#FAF1E1] relative flex flex-col xl:flex-row xl:items-center">
      {/* Left Side: Content */}
      <div className="hero-content w-full xl:w-1/2 pt-12 md:pt-16 pb-8 md:pb-12 xl:py-24 flex flex-col justify-center relative z-10 xl:pr-12">
        <h1 className="heading-hero mb-2 leading-tight">
          <span className="block xl:whitespace-nowrap">About Aventis</span>
          <span className="block xl:whitespace-nowrap">Compliance Solutions</span>
        </h1>
        <p className="section-description heading-to-desc mb-6 max-w-[540px] text-[#131C2B]/80 font-sans">
          Building reliable compliance frameworks through practical, business-focused labour law and regulatory advisory services across India.
        </p>
        <Link href="/contact#connect" className="btn-premium shadow-sm text-[15px] px-8 py-3.5 rounded-md inline-flex items-center justify-center w-fit">
          Discuss your requirements
        </Link>
      </div>

      {/* Right Side: Image */}
      <div className="hero-image w-full xl:w-1/2 pb-12 xl:pb-0 flex items-center justify-center xl:justify-end xl:pl-8">
        <Image
          src="/about-hero.webp"
          alt="Law Office"
          width={1000}
          height={1200}
          className="w-[90%] max-w-[500px] xl:max-w-none h-auto object-contain rounded-sm"
          priority
        />
      </div>
    </section>
  );
}

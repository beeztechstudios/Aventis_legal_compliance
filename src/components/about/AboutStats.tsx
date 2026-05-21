import Image from 'next/image';

export default function AboutStats() {
  return (
    <section className="py-12 md:py-24 w-full bg-[#FBE9C8] border-y border-[#131C2B]/10 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-24 w-full">

        {/* Left Side: Who We Are */}
        <div className="flex-1 lg:max-w-[50%] px-6 md:px-12">
          <h2 className="heading-section mb-6">Who We Are</h2>
          <p className="font-sans text-[15px] md:text-[16px] text-[#131C2B]/80 leading-relaxed text-justify mb-2">
            Aventis Compliance Solutions is a specialised advisory firm focused on labour law compliance, HR governance, and regulatory advisory for businesses across India. We help organizations manage workforce regulations, payroll compliances, statutory obligations, and workplace governance through practical and implementation-focused solutions.
          </p>
          <p className="font-sans text-[15px] md:text-[16px] text-[#131C2B]/80 leading-relaxed text-justify mb-2">
            Our services are designed to help businesses manage workforce compliance, payroll obligations, statutory filings, and workplace governance efficiently while reducing regulatory and operational risks.
          </p>
          <p className="font-sans text-[15px] md:text-[16px] text-[#131C2B]/80 leading-relaxed text-justify">
            We work closely with organizations across industries to develop compliance systems aligned with business operations, workforce structures, and evolving regulatory requirements.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 lg:max-w-[45%] w-full self-stretch">
          <div className="relative w-full h-full min-h-[300px]">
            <Image
              src="/about-who-we-are.webp"
              alt="Who We Are"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>

      </div>
    </section>
  );
}



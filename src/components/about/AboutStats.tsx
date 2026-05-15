export default function AboutStats() {
  const stats = [
    { value: '10+', label: 'Industries Supported' },
    { value: '100+', label: 'Compliance Matters Assisted' },
    { value: '50+', label: 'Business Compliance Reviews' },
    { value: '25+', label: 'Regulatory Advisory Engagements' },
  ];

  return (
    <section className="px-6 md:px-12 py-12 md:py-24 w-full bg-[#FBE9C8] border-y border-[#131C2B]/10">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-24 w-full">
        
        {/* Left Side: Who We Are */}
        <div className="flex-1 lg:max-w-[50%]">
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

        {/* Right Side: Stats Grid */}
        <div className="flex-1 lg:max-w-[45%] w-full grid grid-cols-2 gap-x-8 gap-y-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-start border-b border-[#131C2B]/20 pb-4">
              <span className="font-serif text-[40px] md:text-[56px] text-[#131C2B] leading-none mb-2">
                {stat.value}
              </span>
              <span className="font-sans text-[13px] md:text-[14px] text-[#131C2B]/80 uppercase tracking-widest font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

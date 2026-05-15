import Image from 'next/image';

export default function AboutFoundation() {
  const foundations = [
    {
      title: 'Our Mission',
      description1: 'To help businesses build compliant, transparent, and operationally efficient workplaces through practical labour law advisory and regulatory support.',
      description2: 'We focus on simplifying complex compliance requirements through structured, business-oriented solutions that support workforce governance, operational continuity, and long-term regulatory alignment.',
      image: '/our-mission.png',
      bgColor: 'bg-[#D6E0EA]',
      reverse: false,
    },
    {
      title: 'Our Vision',
      description1: 'To become a trusted compliance and regulatory advisory partner for businesses across India by delivering reliable, practical, and implementation-focused compliance solutions.',
      description2: 'Our vision is to support organizations in creating stronger workplace governance systems while enabling confident and sustainable business operations.',
      image: '/our-vision.png',
      bgColor: 'bg-[#D0F3E0]',
      reverse: true,
    },
    {
      title: 'Our Values',
      description1: 'We believe in delivering compliance solutions with professionalism, transparency, reliability, and a strong commitment to operational integrity. Our approach focuses on providing practical, business-oriented advisory and compliance support that helps organizations strengthen workforce governance, maintain regulatory alignment, reduce operational risks, and build sustainable long-term business practices.',
      image: '/our-values.png',
      bgColor: 'bg-[#E8E1E6]',
      reverse: false,
    },
  ];

  return (
    <section className="px-6 md:px-12 py-12 md:py-24 w-full bg-[#FAF1E1]">
      <div className="w-full">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="heading-section mb-4">Our Foundation</h2>
          <p className="section-description mx-auto">
            Guiding principles that drive our commitment to excellence and integrity.
          </p>
        </div>

        {/* Grid */}
        <div className="flex flex-col gap-6 md:gap-0">
          {foundations.map((item, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row ${item.reverse ? 'md:flex-row-reverse' : ''}`}>
              {/* Text Box */}
              <div className={`w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-between ${item.bgColor}`}>
                <h3 className="heading-sub md:text-[32px] mb-8 md:mb-12">{item.title}</h3>
                <div>
                  <p className="font-sans text-[14px] md:text-[16px] text-[#131C2B]/80 leading-relaxed">
                    {item.description1}
                  </p>
                  <p className="font-sans text-[14px] md:text-[16px] text-[#131C2B]/80 leading-relaxed  mt-2">
                    {item.description2}
                  </p>
                </div>
              </div>

              {/* Image Box */}
              <div className="w-full md:w-1/2 min-h-[300px] md:min-h-0 relative bg-transparent flex items-center justify-center px-4 md:px-6 ">
                <div className="relative w-full max-w-[280px] md:max-w-[420px] aspect-square overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain scale-125"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

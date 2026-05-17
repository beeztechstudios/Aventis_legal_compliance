import Image from 'next/image';
import Link from 'next/link';

export default function AboutWhyChooseUs() {
  const reasons = [
    {
      title: 'End-to-End Compliance',
      description: 'We provide labour law and regulatory compliance support for businesses across central and state requirements.',
      icon: '/end-to-end-compliance.svg',
    },
    {
      title: 'Risk Mitigation Approach',
      description: 'We identify compliance gaps proactively to reduce risks and improve operational efficiency.',
      icon: '/risk-mitigation-approach.svg',
    },
    {
      title: 'Customized Solutions',
      description: 'Compliance solutions tailored to your industry, workforce structure, and business requirements.',
      icon: '/customized-solutions.svg',
    },
    {
      title: 'Strong Liaison Support',
      description: 'We manage labour authority coordination, inspections, and notices with a structured and professional approach.',
      icon: '/strong-liaison-support.svg',
    },
  ];

  return (
    <section className="px-6 md:px-12 py-12 md:py-24 w-full bg-[#FAF1E1]">
      <div className="w-full">
        
        {/* Header Row */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="heading-section heading-to-desc">Why Choose Aventis</h2>
            <p className="section-description">
              Practical, reliable, and business-focused compliance support.
            </p>
          </div>
          <Link href="/contact#connect" className="btn-premium shadow-sm text-[14px] px-6 py-2.5 rounded-md inline-flex items-center justify-center">
            Book Consultation
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-3">
          {reasons.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-[#131C2B] text-[#FAF1E1] p-8 md:p-10 flex flex-col items-start min-h-[340px] md:min-h-[400px] shadow-sm rounded-sm"
            >
              <div className="w-[60px] h-[60px] mb-8 relative">
                <Image 
                  src={item.icon} 
                  alt={item.title} 
                  fill 
                  className="object-contain" 
                />
              </div>
              <div className="mt-auto">
                <h3 className="font-serif text-[22px] md:text-[28px] mb-3 leading-tight text-[#FAF1E1]">
                  {item.title}
                </h3>
                <p className="font-sans text-[15px] md:text-[16px] text-[FAF1E1] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

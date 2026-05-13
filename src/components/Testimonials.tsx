import Image from 'next/image';

const professionals = [
  {
    name: 'Isha Wadhwa',
    title: 'Founder and Principal Consultant',
    description:
      'A legal professional specializing in labour law compliance, regulatory advisory, payroll compliances, HR audits, and POSH governance. She provides practical, business-focused solutions that help organizations manage compliance efficiently while ensuring transparency and risk mitigation.',
    image: '/Isha-Wadhwa.png',
    layout: 'image-left',
  },
  {
    name: 'Manan Oberoi',
    title: 'Founder and Principal Consultant',
    description:
      'He advises clients on labour law matters, payroll compliances, HR audits, statutory obligations, and regulatory processes across industries. His approach focuses on delivering structured and practical solutions, ensuring compliance accuracy, efficiency, and smooth operations.',
    image: '/Manan-Oberoi.png',
    layout: 'image-right',
  },
];

export default function OurProfessionals() {
  return (
    <section id="professionals" className="bg-[#FAF1E1] py-20 md:py-16 w-full overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div className="text-center mb-14 md:mb-10">
          <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] text-[#131C2B] mb-4">
            Our Professionals
          </h2>
          <p className="text-[#131C2B]/70 text-[14px] md:text-[15px] font-sans leading-relaxed max-w-[560px] mx-auto">
            Experienced professionals dedicated to delivering reliable and practical compliance solutions.
          </p>
        </div>

        {/* Professionals */}
        <div className="flex flex-col gap-10 md:gap-16">
          {professionals.map((pro, idx) => (
            <div
              key={idx}
            className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-16 xl:gap-28 ${
                pro.layout === 'image-right' ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image Column */}
              <div className="flex-shrink-0 w-[260px] md:w-[220px] lg:w-[300px] xl:w-[380px]">
                <div className="relative w-full h-[360px] md:h-[320px] lg:h-[440px] xl:h-[540px]">
                  <Image
                    src={pro.image}
                    alt={pro.name}
                    fill
                    className="object-contain object-bottom"
                    sizes="(max-width: 768px) 260px, (max-width: 1024px) 220px, (max-width: 1280px) 300px, 380px"
                    priority={idx === 0}
                  />
                </div>
              </div>

              {/* Text Column */}
              <div className="flex-1 min-w-0 text-left">
                <h3 className="font-serif text-[2.4rem] md:text-[1.9rem] lg:text-[2.6rem] xl:text-[3.4rem] text-[#121C2A] leading-tight mb-0">
                  {pro.name}
                </h3>
                <p className="font-sans text-[15px] md:text-[13px] lg:text-[16px] xl:text-[19px] text-[#121C2A] mb-4 tracking-wide">
                  {pro.title}
                </p>
                <p className="font-sans text-[15px] md:text-[13px] lg:text-[16px] xl:text-[19px] text-[#121C2A] leading-relaxed text-justify">
                  {pro.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';

const professionals = [
  {
    name: 'Isha Wadhwa',
    title: 'Founder and Principal Consultant',
    description:
      'A legal professional with a focus on labour and employment laws, payroll and statutory compliances, HR audits, POSH advisory, workplace governance, taxation, and allied regulatory matters, holding a B.COM and LL.B degree, enrolled with the Bar Council in 2022, and practicing before the Labour Court and Industrial Tribunal through a practical, structured, and business-oriented compliance approach focused on transparency, operational efficiency, and effective risk mitigation.',
    image: '/Isha-Wadhwa.png',
    layout: 'image-left',
  },
  {
    name: 'Manan Oberoi',
    title: 'Principal Consultant',
    description:
      'A legal and compliance professional with over a decade of experience in labour and employment laws, payroll compliances, HR audits, labour law registrations, POSH advisory, workplace governance, labour inspections, employment documentation, and regulatory compliance, holding an LL.B degree, enrolled with the Bar Council in 2010, and practicing before the Labour Court and Industrial Tribunal through a practical, solution-oriented, and business-focused approach with a strong emphasis on compliance management and risk mitigation.',
    image: '/Manan-Oberoi.png',
    layout: 'image-right',
  },
];

export default function OurProfessionals() {
  return (
    <section id="professionals" className="bg-[#FAF1E1] w-full overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div className="text-left md:text-center mb-8 md:mb-12">
          <h2 className="heading-section heading-to-desc">
            Our Professionals
          </h2>
          <p className="section-description max-w-[560px] mx-0 md:mx-auto">
            Experienced professionals dedicated to delivering reliable and practical compliance solutions.
          </p>
        </div>

        {/* Professionals */}
        <div className="flex flex-col gap-12 md:gap-20">
          {professionals.map((pro, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-16 xl:gap-28 ${pro.layout === 'image-right' ? 'md:flex-row-reverse' : ''
                }`}
            >
              {/* Image Column */}
              <div className="flex-shrink-0 w-[260px] md:w-[220px] lg:w-[300px] xl:w-[380px]">
                <div className="relative w-full h-[300px] md:h-[260px] lg:h-[340px] xl:h-[420px]">
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
                <h3 className="heading-sub text-[#121C2A] text-[22px] md:text-[32px] mb-2">
                  {pro.name}
                </h3>
                <p className="heading-card font-normal text-[#121C2A] mb-4">
                  {pro.title}
                </p>
                <p className="font-sans text-[15px] md:text-[16px] text-[#121C2A] leading-relaxed text-justify">
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

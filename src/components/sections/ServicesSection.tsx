"use client";

import { CircleSmall } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const services = [
  {
    number: "01",
    slug: "cybercrime-cryptocurrency-fraud-data-privacy",
    title: "Cybercrime, Cryptocurrency Fraud & Data Privacy",
    description:
      "Cyber Crime, Cryptocurrency & Digital Fraud For individuals and businesses facing online threats.",
    points: [
      "Digital evidence gathering and investigation support",
      "Cyber fraud recovery proceedings",
      "Data privacy violations and breaches",
      "Cryptocurrency scam and exchange dispute resolution"
    ]
  },
  {
    number: "02",
    slug: "commercial-litigation-and-business-disputes",
    title: "Commercial Litigation & Business Disputes",
    description:
      "Commercial & Business Disputes For businesses and entrepreneurs, we offer seasoned representation across",
    points: [
      "High-value contract and corporate disputes",
      "Partnership and shareholder conflicts",
      "Business litigation in major courts and tribunals",
      "Commercial arbitration and mediation"
    ]
  },
  {
    number: "03",
    slug: "civil-litigation",
    title: "Civil Litigation",
    description:
      "Expert representation in civil suits, property disputes, and real estate legal matters.",
    points: [
      "Civil litigation across Delhi courts",
      "Recovery suits and debt collection",
      "Injunctions and stay orders",
      "Strategic case mapping and advisory"
    ]
  },
  {
    number: "04",
    slug: "consumer-litigation-and-real-estate-disputes",
    title: "Consumer Litigation & Real Estate Disputes",
    description:
      "Advocacy for consumer rights, deficiency of service claims, and real estate legal matters.",
    points: [
      "Title conflicts and possession disputes",
      "RERA complaints and builder-buyer matters",
      "Property litigation across Delhi NCR",
      "Real estate regulatory compliance"
    ]
  },
  {
    number: "05",
    slug: "family-and-matrimonial-litigation",
    title: "Family & Matrimonial Litigation",
    description:
      "Sensitive legal guidance on divorce, custody, maintenance, and other family law matters.",
    points: [
      "Matrimonial disputes and divorce proceedings",
      "Child custody and guardianship matters",
      "Family property and inheritance conflicts",
      "Maintenance and alimony settlements"
    ]
  },
  {
    number: "06",
    slug: "white-collar-crime-and-criminal-litigation",
    title: "White-Collar Crime & Criminal Litigation",
    description:
      "Defence and advisory for financial fraud, corporate misconduct, and regulatory investigations.",
    points: [
      "Fraud investigations and criminal defence",
      "Corporate misconduct proceedings",
      "Financial crime and economic offences",
      "Compliance and regulatory advisory"
    ]
  },
  {
    number: "07",
    slug: "insolvency-and-bankruptcy-litigation",
    title: "Insolvency & Bankruptcy Litigation",
    description:
      "Strategic counsel for insolvency proceedings, debt recovery, and restructuring under IBC.",
    points: [
      "NCLT and NCLAT representation",
      "Insolvency and bankruptcy proceedings",
      "Creditor and debtor representation",
      "Strategic financial restructuring"
    ]
  },
  {
    number: "08",
    slug: "arbitration-and-alternate-dispute-resolution",
    title: "Arbitration & Alternate Dispute Resolution",
    description:
      "Efficient resolution of disputes through arbitration, mediation, and alternative legal forums.",
    points: [
      "Domestic and international arbitration",
      "Mediation and conciliation services",
      "Alternate Dispute Resolution (ADR)",
      "Settlement negotiation and drafting"
    ]
  },
];

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);

  function handleHover(index: number) {
    if (index !== activeIndex) {
      setPrevIndex(activeIndex);
      setActiveIndex(index);
    }
  }

  function handleLeave() {
    setPrevIndex(activeIndex);
    setActiveIndex(null);
  }

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-6">

        {/* Heading */}
        <div className="py-8 md:py-[48px] border-b border-black/30">
          <h2 className="services-heading text-[#0A0A23]">
            Our Core Practice Areas
          </h2>
        </div>

        {/* Service rows */}
        <div onMouseLeave={handleLeave}>
          {services.map((service, i) => {
            const isActive = activeIndex === i;
            const isPrev = prevIndex === i && activeIndex !== i;

            return (
              <div
                key={i}
                onMouseEnter={() => handleHover(i)}
                onClick={() => handleHover(i)}
                className="relative overflow-hidden border-b border-black/15 cursor-pointer"
              >
                {/* Sliding blue background */}
                <div
                  className={`
                    absolute inset-0 bg-[#2E31CA] z-0
                    transition-transform duration-500 ease-in-out
                    ${isActive ? "translate-x-0" : isPrev ? "-translate-x-full" : "-translate-x-full"}
                  `}
                />

                {/* Row content */}
                <div className="relative z-10 flex items-center justify-between pl-2 pr-1 md:pr-8 py-5 md:py-8">
                  <div className="flex items-start  gap-[16px] md:gap-[24px] min-w-0">
                    {/* Number */}
                    <span className={`services-number flex-shrink-0 transition-colors duration-300 ${isActive ? "text-white" : "text-[#0A0A23]"}`}>
                      {service.number}
                    </span>

                    {/* Title + description */}
                    <div className="flex flex-col gap-[8px] md:gap-[12px] min-w-0">
                      <span className={`services-title transition-colors duration-300 ${isActive ? "text-white" : "text-[#0A0A23]"}`}>
                        {service.title}
                      </span>
                      <span
                        className={`services-desc transition-all duration-300 ${
                          isActive ? "text-white max-h-20 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                        }`}
                      >
                        {service.description}
                      </span>

                      {isActive && (
                        <ul className="mt-2 space-y-1">
                          {service.points.map((point, idx) => (
                            <li key={idx} className="text-white hidden md:flex items-center gap-2 services-desc ">
                              <CircleSmall width={12} height={12} /> {point}
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Mobile CTA — shown below desc when active */}
                      <div className={`md:hidden transition-all duration-300 ${isActive ? "opacity-100 max-h-16 mt-2" : "opacity-0 max-h-0 overflow-hidden"}`}>
                        <a href={`/practice-areas/${service.slug}`}>
                          <Image src="/exploreServices.svg" alt="Explore legal services" width={160} height={36} className="cursor-pointer" />
                        </a>
                      </div>
                    </div>
                  </div>

          
                  

                  {/* CTA — inline on desktop, hidden on mobile (shown below) */}
                  <div
                    className={`hidden md:flex flex-shrink-0 transition-all duration-300 mr-5 ${
                      isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                    }`}
                  >
                    <a href={`/practice-areas/${service.slug}`}>
                      <Image src="/exploreServices.svg" alt="Explore legal services" width={218} height={45} className="cursor-pointer" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

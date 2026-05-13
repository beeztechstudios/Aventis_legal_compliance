"use client";

import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const features = [
  {
    title: "End-to-End Compliance",
    description: "We provide complete labour law and regulatory compliance support, covering both central and state requirements. From registrations to ongoing management, we ensure businesses stay compliant efficiently.",
    image: "/end-to-end-compliance.png",
    bgColor: "bg-[#D6E0EA]", // Light blue
  },
  {
    title: "Customized Solutions",
    description: "Our compliance solutions are tailored to your industry, workforce structure, and business needs, ensuring practical and effective implementation.",
    image: "/customized-solutions.png",
    bgColor: "bg-[#FEE8C5]", // Light peach
  },
  {
    title: "Risk Mitigation Approach",
    description: "We identify compliance gaps and address them proactively to reduce legal risks, improve efficiency, and support secure business operations.",
    image: "/risk-mitigation-approach.png",
    bgColor: "bg-[#D0F3E0]", // Light green
  },
  {
    title: "Strong Liaison Support",
    description: "We manage inspections, notices, and coordination with labour authorities in a structured and professional manner, ensuring smooth processes and minimal business disruption.",
    image: "/strong-liaison-support.png",
    bgColor: "bg-[#E8E1E6]", // Light purple
  }
];

function AccordionItem({ feature, idx }: { feature: typeof features[0], idx: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const { contextSafe } = useGSAP({ scope: containerRef });

  const onEnter = contextSafe(() => {
    gsap.to(textRef.current, {
      height: 'auto',
      opacity: 1,
      duration: 0.5,
      ease: "power3.out"
    });

    gsap.to(imageContainerRef.current, {
      height: imageRef.current?.offsetHeight || 200,
      duration: 0.5,
      ease: "power3.out"
    });
  });

  const onLeave = contextSafe(() => {
    gsap.to(textRef.current, {
      height: 0,
      opacity: 0,
      duration: 0.4,
      ease: "power3.out"
    });

    gsap.to(imageContainerRef.current, {
      height: '90px', // Top part of the image
      duration: 0.4,
      ease: "power3.out"
    });
  });

  return (
    <div
      ref={containerRef}
      className={`w-full flex flex-col md:flex-row items-stretch justify-between p-6 md:p-8 cursor-pointer ${feature.bgColor}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="flex-1 flex flex-col justify-between pr-8 w-full md:w-[70%] mb-6 md:mb-0">
        <h3 className="font-serif text-2xl md:text-[28px] font-medium text-[#131C2B] flex items-start gap-4">
          <span>0{idx + 1}</span>
          {feature.title}
        </h3>
        <div ref={textRef} className="h-0 opacity-0 overflow-hidden w-full max-w-xl">
          <p className="text-[#131C2B]/70 text-[13px] md:text-[15px] leading-relaxed font-sans pt-6">
            {feature.description}
          </p>
        </div>
      </div>

      <div className="w-full md:w-[30%] flex justify-end items-start shrink-0">
        <div
          ref={imageContainerRef}
          className="relative w-full h-[150px] md:h-[90px] overflow-hidden ml-auto shadow-sm"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={imageRef}
            src={feature.image}
            alt={feature.title}
            className="w-full h-auto object-cover object-top block"
          />
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="px-6 md:px-12 py-20 w-full flex flex-col gap-12">
      {/* Header Row */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#131C2B] mb-4">Why Choose Aventis</h2>
          <p className="text-[#131C2B]/70 text-[15px] font-sans">
            Practical, reliable, and business-focused compliance support.
          </p>
        </div>
        <button className="mt-6 md:mt-0 btn-primary shadow-sm text-[14px] px-6 py-2.5 bg-[#A17755] hover:bg-[#8F6F4E] rounded-md">
          Book Consultation
        </button>
      </div>

      {/* Accordion List */}
      <div className="w-full flex flex-col gap-[2px]">
        {features.map((feature, idx) => (
          <AccordionItem key={idx} feature={feature} idx={idx} />
        ))}
      </div>
    </section>
  );
}

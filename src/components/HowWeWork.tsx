"use client";

import Image from 'next/image';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const steps = [
  {
    number: "1",
    title: "Understanding Requirements",
    description: "We begin by gaining a comprehensive understanding of your business operations, workforce structure, and internal processes. This allows us to identify key compliance requirements, assess operational challenges, and define a clear and structured scope of work aligned with your business objectives.",
    image: "/understanding-requirements-image.png"
  },
  {
    number: "2",
    title: "Compliance Assessment",
    description: "We conduct a detailed evaluation of applicable labour laws and regulatory obligations relevant to your business. Our assessment focuses on identifying compliance gaps, potential risks, and critical areas that require immediate and structured attention to ensure full regulatory alignment.",
    image: "/compliance-assesment-image.png"
  },
  {
    number: "3",
    title: "Implementation & Execution",
    description: "We implement practical and well-structured compliance solutions, including registrations, filings, documentation, and process alignment. Our team ensures accurate execution, timely completion, and adherence to all statutory requirements across your operations.",
    image: "/implementation-image.png"
  },
  {
    number: "4",
    title: "Ongoing Support",
    description: "We provide continuous monitoring, updates, and advisory support to ensure your business remains aligned with evolving regulations. Our proactive approach helps maintain long-term compliance, reduce risks, and support smooth and uninterrupted operations.",
    image: "/ongoing-support-image.png"
  }
];

export default function HowWeWork() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  const toggleCard = (idx: number) => {
    setActiveIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section id="how-we-work" className="bg-[#FAF1E1] py-12 md:py-16 w-full overflow-hidden">
      <div className="w-full px-6 md:px-12 mx-auto">

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 md:mb-16 gap-6">
          <div>
            <h2 className="heading-section heading-to-desc">How We Work</h2>
            <p className="section-description max-w-[600px]">
              A structured approach to ensure seamless compliance and efficient execution.
            </p>
          </div>
          <div className="flex 2xl:hidden gap-2 self-start md:self-auto justify-start">
            <button
              onClick={scrollLeft}
              className="w-8 h-8 md:w-10 md:h-10 bg-[#A17755] flex items-center justify-center text-white hover:bg-[#8e6e4d] transition-colors shadow-sm rounded-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollRight}
              className="w-8 h-8 md:w-10 md:h-10 bg-[#A17755] flex items-center justify-center text-white hover:bg-[#8e6e4d] transition-colors shadow-sm rounded-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="grid grid-flow-col auto-cols-[85vw] md:auto-cols-[65vw] lg:auto-cols-[calc(46.75%-1rem)] 2xl:grid-flow-row 2xl:grid-cols-4 gap-4 overflow-x-auto 2xl:overflow-x-visible snap-x snap-mandatory 2xl:snap-none w-full pb-8 2xl:pb-0 scrollbar-hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {steps.map((step, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div
                key={idx}
                className="relative overflow-hidden aspect-square cursor-pointer snap-start group"
                onClick={() => toggleCard(idx)}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className={`object-cover object-center transition-transform duration-[10s] ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}
                />

                {/* Dark Box overlay */}
                <div
                  className={`absolute transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] bg-[#071220] bottom-3 left-3 right-3 flex flex-col justify-end
                    ${isActive ? 'top-3' : 'top-[calc(100%-80px)] md:top-[calc(100%-96px)] group-hover:top-3'}`}
                >
                  {/* Large Number */}
                  <div
                    className={`absolute top-5 left-5 md:top-6 md:left-6 transition-opacity duration-500 delay-100
                      ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                  >
                    <span className="font-serif text-[4rem] md:text-[5rem] lg:text-[6rem] 2xl:text-[5rem] text-white/20 leading-none">{step.number}</span>
                  </div>

                  {/* Text content */}
                  <div
                    className={`flex flex-col justify-end h-full transition-all duration-500
                      ${isActive ? 'p-4 md:p-5' : 'p-4 md:p-5 group-hover:p-4 md:group-hover:p-5'}`}
                  >
                    <h3
                      className={`font-serif font-medium text-white transition-all duration-500 text-[18px] md:text-[24px] lg:text-[24px] xl:text-[28px] 2xl:text-[22px]
                        ${isActive ? 'mb-2' : 'mb-0 group-hover:mb-2'}`}
                    >
                      {step.title}
                    </h3>

                    <div
                      className={`grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                        ${isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr] group-hover:grid-rows-[1fr]'}`}
                    >
                      <div className="overflow-hidden">
                        <p
                          className={`text-white/70 text-[12px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[15px] leading-[1.5] font-sans transition-opacity duration-500 delay-150
                            ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
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

"use client";

import { useState } from 'react';
import { Plus, X } from 'lucide-react';

const faqs = [
  {
    question: "Do you provide Pan-India compliance support?",
    answer: "Yes, we provide compliance services across India with a structured, state-wise approach. Our team ensures that businesses operating in multiple locations remain compliant with both central and state-specific labour laws and regulatory requirements."
  },
  {
    question: "Can you assist with labour inspections and notices?",
    answer: "Yes, we handle labour inspections, statutory notices, and communication with authorities in a professional and structured manner. We ensure timely responses, proper documentation, and smooth coordination to minimize operational disruptions."
  },
  {
    question: "Do you manage PF, ESI, and statutory filings?",
    answer: "Yes, we offer complete support for PF, ESI, and other statutory compliance requirements, including registrations, filings, and ongoing management. Our approach ensures accuracy, timeliness, and full compliance with applicable regulations."
  },
  {
    question: "Can startups and small businesses work with you?",
    answer: "Yes, we provide scalable compliance solutions tailored for startups and small businesses. Our services are designed to support growing organizations in managing compliance efficiently from the early stages."
  },
  {
    question: "Do you provide ongoing compliance support?",
    answer: "Yes, we offer continuous monitoring and advisory support to help businesses stay aligned with changing laws and regulations. Our ongoing support ensures long-term compliance and smooth business operations."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#FAF1E1] py-12 md:py-32 w-full">
      <div className="w-full px-6 md:px-12 mx-auto">
        
        <h2 className="heading-section mb-6 md:mb-16">FAQ</h2>
        
        <div className="flex flex-col w-full border-t border-[#131C2B]/10">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-[#131C2B]/10">
              <button 
                onClick={() => toggleFAQ(idx)}
                className="w-full flex items-center justify-between py-6 md:py-8 text-left group"
              >
                <h3 className="heading-sub pr-8">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 text-[#131C2B]">
                  {openIndex === idx ? <X className="w-5 h-5 md:w-6 md:h-6" /> : <Plus className="w-5 h-5 md:w-6 md:h-6" />}
                </div>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${openIndex === idx ? 'max-h-40 opacity-100 pb-6 md:pb-8' : 'max-h-0 opacity-0'}`}
              >
                <p className="font-sans text-[13px] md:text-[18px] text-[#131C2B]/80 leading-relaxed max-w-5xl pt-0 md:pt-0">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

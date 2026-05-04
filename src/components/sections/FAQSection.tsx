"use client";

import { useState } from "react";

const faqData = [
  {
    question: "What kind of cases does Pramanika Legal handle?",
    answer: "Pramanika Legal handles a wide spectrum of legal matters — from cyber crime and cryptocurrency fraud to commercial disputes, property litigation, consumer cases, and insolvency proceedings. If your matter is complex or high-stakes, we are the firm to call."
  },
  {
    question: "How can a lawyer help if I've been a victim of cyber fraud or an online scam?",
    answer: "A cyber crime lawyer can help you file an FIR with the Cyber Crime Cell, gather digital evidence, approach the court for injunctions or account freezes, and initiate civil or criminal recovery proceedings. Acting quickly is critical — the sooner you consult, the better your chances of recovery."
  },
  {
    question: "Can I recover money lost to a cryptocurrency scam?",
    answer: "Yes, recovery is possible in many cases. Our team has handled numerous crypto fraud and cryptocurrency scam matters and can advise you on the legal remedies available — including tracing funds, approaching financial regulators, and filing criminal complaints against fraudsters."
  },
  {
    question: "What should I do first if I'm facing a business or commercial dispute?",
    answer: "Start by preserving all relevant documents — contracts, emails, invoices, and correspondence. Then consult a commercial litigation lawyer at the earliest. Early legal advice can help you assess your position, explore negotiation options, and prepare for litigation if needed."
  },
  {
    question: "Do you handle property disputes across Delhi NCR?",
    answer: "Yes. We represent clients in property disputes across Delhi, Gurgaon, Noida, and the wider NCR region — covering title conflicts, possession disputes, RERA complaints, and builder-buyer matters."
  },
  {
    question: "How do I get started with Pramanika Legal?",
    answer: "Simply reach out for a confidential consultation. We'll understand your situation, explain your options clearly, and outline a strategy tailored to your matter."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item implicitly open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full pt-12 md:pt-24">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <h2 className="section-title mb-8 md:mb-16">Frequently Asked Questions</h2>

        <div className="flex flex-col border-t border-[#000000]/20">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index}
                className={`border-b border-[#000000]/20 transition-colors duration-500 ease-in-out cursor-pointer ${isOpen ? 'bg-[#2E31CA] text-white' : 'hover:bg-black/5 text-black'}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className={`px-2 md:px-6 py-6 md:py-8 flex justify-between items-center transition-all`}>
                  <h3 className={`faq-question transition-colors duration-500 ${isOpen ? 'text-white' : 'text-[#1a1a1a]'}`}>
                    {faq.question}
                  </h3>

                  {/* Icon section (+ / -) */}
                  <div className="shrink-0 ml-4 relative w-6 h-6 flex items-center justify-center">
                    {/* Horizontal Line (always visible, becomes minus) */}
                    <div className={`absolute w-4 h-[2px] transition-colors duration-500 ${isOpen ? 'bg-white' : 'bg-black'}`}></div>
                    {/* Vertical Line (disappears when open to form a minus) */}
                    <div className={`absolute w-[2px] h-4 transition-all duration-500 ${isOpen ? 'bg-white rotate-90 scale-0' : 'bg-black rotate-0 scale-100'}`}></div>
                  </div>
                </div>

                <div 
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <div className={`px-2  md:px-6 max-w-4xl pb-6 md:pb-8 pt-0 faq-answer pr-2 md:pr-24 transition-colors duration-500 ${isOpen ? 'text-[#E5E5E5]' : 'text-transparent'}`}>
                      {faq.answer}
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

"use client";

import { useState } from "react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

const defaultFaqs: FAQItem[] = [
  {
    question: "How do I get in touch with a lawyer in Delhi for an urgent matter?",
    answer: "Call or WhatsApp us directly at +91 9958480667 for immediate assistance. For cyber crime and fraud cases in particular, we prioritise urgent consultations and aim to respond within a few hours."
  },
  {
    question: "Does Advocate Akhil Bharat Kukreja personally handle consultations?",
    answer: "Yes. Every initial consultation is handled personally by Advocate Akhil Bharat Kukreja — so you speak directly with the lead counsel from your very first interaction."
  },
  {
    question: "Is the initial consultation free?",
    answer: "Yes. We offer a free initial assessment for most matters, so you can clearly understand your options and legal position before making any decision."
  },
  {
    question: "Can I consult Pramanika Legal if I am outside Delhi?",
    answer: "Absolutely. While our primary office is in Delhi NCR, we practise before the Supreme Court of India and various national tribunals, and regularly advise clients from across India. Remote consultations are available."
  },
  {
    question: "How quickly will you respond to my enquiry?",
    answer: "All enquiries are acknowledged within 24 hours. Urgent matters — especially cyber fraud and property emergencies — are typically responded to within a few hours of contact."
  }
];

export function ContactFAQ({ faqs }: { faqs?: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const data = faqs || defaultFaqs;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full pt-16 md:pt-24 pb-24 bg-white">
     <div className="max-w-7xl mx-auto px-5 md:px-6">
        <h2 className="section-title mb-8 md:mb-16">Frequently Asked Questions</h2>

        <div className="flex flex-col border-t border-[#000000]/20">
          {data.map((faq, index) => {
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

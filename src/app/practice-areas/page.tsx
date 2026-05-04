import { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { PracticeAreasSection } from "@/components/sections/PracticeAreasSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ContactFAQ } from "@/components/sections/ContactFAQ";

export const metadata: Metadata = {
  title: "Practice Areas | Pramanika Legal – Cyber Crime & Disputes Delhi",
  description: "Explore Pramanika Legal's practice areas in Delhi: cyber crime lawyer, crypto fraud, commercial litigation, property disputes & more. Top legal services in Delhi.",
  alternates: {
    canonical: "https://www.pramanikalegal.com/practice-areas",
  },
  openGraph: {
    title: "Practice Areas | Pramanika Legal Delhi",
    description: "Comprehensive legal services in Delhi across key practice areas.",
    url: "https://www.pramanikalegal.com/practice-areas",
    siteName: "Pramanika Legal",
    locale: "en_IN",
    type: "website",
  },
};

export default function PracticeAreas() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Practice Areas",
    "url": "https://www.pramanikalegal.com/practice-areas",
    "description": "Comprehensive legal services in Delhi across cyber crime, commercial litigation, property disputes, and more.",
    "hasPart": [
      { "@type": "Service", "name": "Cybercrime & Cryptocurrency Fraud" },
      { "@type": "Service", "name": "Business & Commercial Disputes" },
      { "@type": "Service", "name": "Civil, Consumer & Real Estate Disputes" },
      { "@type": "Service", "name": "Family, Matrimonial & Sensitive Matters" },
      { "@type": "Service", "name": "White Collar Crime" },
      { "@type": "Service", "name": "Insolvency, Bankruptcy & Arbitration" }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection
        bgImage="/practiceAreaBg.svg"
        title="Legal Services in Delhi by Pramanika Legal"
        subtitle="Pramanika Legal offers comprehensive legal services in Delhi across cyber crime, cryptocurrency fraud, commercial litigation, property disputes, civil matters, family law, white collar crime, and insolvency."
        ctaImage="/discussCase.svg"
        ctaAlt="Discuss your case now"
        centered
      />

      {/* AI Summary Box (Visually Hidden for SEO/AEO/GEO) */}
      <div className="sr-only" aria-hidden="true" style={{ 
        position: 'absolute', 
        width: '1px', 
        height: '1px', 
        padding: 0, 
        margin: '-1px', 
        overflow: 'hidden', 
        clip: 'rect(0, 0, 0, 0)', 
        whiteSpace: 'nowrap', 
        borderWidth: 0 
      }}>
        <p>
          Pramanika Legal offers comprehensive legal services in Delhi across cyber crime, cryptocurrency fraud, commercial litigation, property disputes, civil matters, family law, white collar crime, and insolvency. Led by Advocate Akhil Bharat Kukreja, the firm practises across the Supreme Court of India, Delhi High Court, and all major tribunals and regulatory forums.
        </p>
      </div>

      <PracticeAreasSection />

      {/* Where We Practise Section */}
      {/* <section className="bg-white pt-12 pb-36 ">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-16">
            <p className="legacy-label text-[#2E31CA] mb-2">Our Presence</p>
            <h2 className="services-heading text-[#0A0A23]">Where We Practise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-black/10 divide-y md:divide-y-0 md:divide-x divide-black/10 border-b border-black/10">
            {[
              "Supreme Court of India",
              "Delhi High Court",
              "District Courts, Delhi",
              "NCLT and NCLAT",
              "Consumer Commissions",
              "RERA and regulatory forums",
              "Arbitral Tribunals",
              "Tribunals Pan-India"
            ].map((forum, i) => (
              <div key={i} className="relative px-6 py-12 group hover:bg-black/[0.02] transition-colors">
            
                <span className="absolute items-center justify-center w-3 h-3 z-10 pointer-events-none -bottom-[6px] -right-[6px] flex">
                  <span className="absolute w-px h-3 bg-[#2E31CA] opacity-40"/>
                  <span className="absolute w-3 h-px bg-[#2E31CA] opacity-40"/>
                </span>
                
                <div className="flex flex-col gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2E31CA]" />
                  <span className="font-serif text-[#0A0A23] text-xl md:text-2xl font-normal leading-tight">
                    {forum}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ SECTION */}
      <ContactFAQ faqs={[
        {
          question: "Which practice area is right for my case?",
          answer: "If you're unsure where your matter fits, contact us for a free consultation. We'll assess your situation and direct you to the right team and forum — whether it's a cyber crime complaint, a business dispute, or a property conflict."
        },
        {
          question: "Do you handle both criminal and civil matters?",
          answer: "Yes. Pramanika Legal handles matters across civil, criminal, regulatory, and arbitral forums — giving you complete legal coverage under one roof."
        },
        {
          question: "Can Pramanika Legal represent me outside Delhi?",
          answer: "Absolutely. While we are based in Delhi, we practise before the Supreme Court of India and various national tribunals, representing clients from across the country."
        },
        {
          question: "How quickly can I get a consultation?",
          answer: "We offer prompt, confidential consultations. Reach out via phone or email and our team will respond within 24 hours. Urgent matters are typically prioritized."
        }
      ]} />

      <CTASection />
    </>
  );
}

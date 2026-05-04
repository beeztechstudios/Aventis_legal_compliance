import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";
import { ContactFAQ } from "@/components/sections/ContactFAQ";
import { HeroSection } from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Contact | Best Law Firm | Best Lawyer in Delhi | Pramanika Legal",
  description: "Contact top lawyer in Delhi at Pramanika Legal for cyber crime, disputes & more. Reach Advocate Akhil Bharat Kukreja at +91 9958480667. Expert legal services in Delhi NCR.",
  alternates: {
    canonical: "https://www.pramanikalegal.com/contact",
  },
  openGraph: {
    title: "Contact Pramanika Legal | Lawyer in Delhi",
    description: "Get in touch with our Delhi law firm for expert consultations on cyber crime, commercial disputes, property matters & more.",
    url: "https://www.pramanikalegal.com/contact",
    siteName: "Pramanika Legal",
    images: [
      {
        url: "https://www.pramanikalegal.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Pramanika Legal",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function Contact() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    "name": "Contact Pramanika Legal",
    "url": "https://www.pramanikalegal.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Pramanika Legal",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9958480667",
        "contactType": "legal consultation",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <HeroSection
        bgImage="/contactBg.png"
        title="Contact Lawyer in Delhi: Pramanika Legal"
        subtitle="Need to speak with a lawyer in Delhi? Pramanika Legal is a trusted law firm in Delhi NCR handling cyber crime, crypto fraud, commercial litigation, property disputes, and more."
        ctaImage="/discussCase.svg"
        ctaAlt="Contact Advocate Akhil Bharat Kukreja"
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
          Need to speak with a lawyer in Delhi? Pramanika Legal is a trusted law firm in Delhi NCR handling cyber crime, crypto fraud, commercial litigation, property disputes, and more. Contact Advocate Akhil Bharat Kukreja directly at +91 9958480667 or akhil.pramanikalegal@gmail.com for fast, confidential legal guidance.
        </p>
      </div>

      <main className="bg-white">
       

        {/* ── FORM & DETAILS (Existing ContactSection) ── */}
        <div id="contact-wrapper">
          <ContactSection />
        </div>

        {/* ── WORKING HOURS & DETAILS ── */}
        {/* <section className="bg-white py-12 border-t border-black/5">
          <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-[#0A0A23] text-xl md:text-2xl mb-6 font-normal">Working Hours</h3>
              <div className="space-y-2 text-[#4B5563]">
                <p><span className="font-medium text-[#0A0A23]">Monday to Saturday:</span> 10:00 AM – 7:00 PM</p>
                <p><span className="font-medium text-[#0A0A23]">Sunday & Public Holidays:</span> By prior appointment only</p>
                <p className="pt-4 text-sm italic">
                  We respond to all enquiries within 24 hours. Urgent cyber crime and fraud matters are prioritised and typically receive a response within a few hours.
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-[#0A0A23] text-xl md:text-2xl mb-6 font-normal">Why Clients Choose Pramanika Legal</h3>
              <ul className="space-y-4 text-[#4B5563]">
                {[
                  "Direct access to lead counsel Advocate Akhil Bharat Kukreja personally",
                  "Full-spectrum legal services: Cyber, Crypto, Commercial, Property",
                  "Pan-India practice across High Courts and Supreme Court",
                  "Free initial consultation to understand your legal position",
                  "Strict confidentiality and rapid response times"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2E31CA] mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section> */}

        {/* ── FAQ SECTION (Client Component) ── */}
        <ContactFAQ />
      </main>
    </>
  );
}

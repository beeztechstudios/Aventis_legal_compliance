import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Pramanika Legal – Legal Services Delhi NCR",
  description: "Pramanika Legal's Privacy Policy: protecting your data as a trusted law firm in Delhi. Compliant legal services in Delhi for cyber privacy, disputes & client confidentiality.",
  alternates: {
    canonical: "https://www.pramanikalegal.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Pramanika Legal Delhi",
    description: "Our commitment to data privacy and client confidentiality in all legal services.",
    url: "https://www.pramanikalegal.com/privacy-policy",
    siteName: "Pramanika Legal",
    locale: "en_IN",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "url": "https://www.pramanikalegal.com/privacy-policy",
    "description": "Privacy policy outlining how Pramanika Legal collects, uses, and protects client data.",
    "publisher": { "@type": "Organization", "name": "Pramanika Legal" }
  };

  return (
    <main className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <div className="bg-[#0A0A23] pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-sm mb-6 transition-colors no-underline"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Home
          </Link>
          <h1 className="hero-title text-white ">
            Privacy Policy – Pramanika Legal, Law Firm in Delhi
          </h1>

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
              At Pramanika Legal, a leading law firm in Delhi, we are committed to protecting your personal and case-related data. This Privacy Policy explains how we collect, use, and safeguard information while providing legal services in Delhi for cyber crime, commercial disputes, property matters, and more. We comply fully with Indian laws including the Digital Personal Data Protection Act, 2023.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-3xl space-y-12">
          
          <section>
            <h2 className="font-serif font-normal text-[#0A0A23] text-2xl md:text-3xl mb-5">Our Commitment to Your Privacy</h2>
            <div className="space-y-4 text-[#4B5563] leading-[1.8] text-[1rem] md:text-[1.125rem]">
              <p>Client confidentiality is the foundation of everything we do at Pramanika Legal. As a trusted law firm in Delhi, we treat all information shared with us — whether during a consultation, in the course of representation, or through our website — with the highest level of professional secrecy and legal protection.</p>
              <p>We collect and process only the data that is strictly necessary to deliver effective, strategic legal solutions for our clients.</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif font-normal text-[#0A0A23] text-2xl md:text-3xl mb-5">Information We Collect</h2>
            <div className="space-y-4 text-[#4B5563] leading-[1.8] text-[1rem] md:text-[1.125rem]">
              <p>We collect only the information required to represent you effectively:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact details — name, phone number, email address, and postal address</li>
                <li>Case-related information and supporting documents</li>
                <li>Identification and verification details where legally required</li>
                <li>Communication records between you and our team</li>
              </ul>
              <p>All information is collected lawfully and with your consent where required under applicable law.</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif font-normal text-[#0A0A23] text-2xl md:text-3xl mb-5">How We Use and Disclose Your Information</h2>
            <div className="space-y-4 text-[#4B5563] leading-[1.8] text-[1rem] md:text-[1.125rem]">
              <p>Your information is used solely to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide legal services in Delhi and represent you before courts and tribunals</li>
                <li>Communicate case updates, strategy, and important legal developments</li>
                <li>Comply with our legal and professional obligations</li>
              </ul>
              <p>We never sell your data. Your information is shared only in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With your explicit prior consent</li>
                <li>With court-appointed authorities or regulators when required by law</li>
                <li>With trusted service providers operating under strict confidentiality agreements</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="font-serif font-normal text-[#0A0A23] text-2xl md:text-3xl mb-5">Data Security and Protection</h2>
            <div className="space-y-4 text-[#4B5563] leading-[1.8] text-[1rem] md:text-[1.125rem]">
              <p>We apply industry-standard security measures to protect all client data, including encrypted storage, secure servers, and restricted internal access protocols. As specialists in cyber crime and data privacy matters, we hold our own data practices to the same high standards we advocate for our clients.</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif font-normal text-[#0A0A23] text-2xl md:text-3xl mb-5">Your Rights</h2>
            <div className="space-y-4 text-[#4B5563] leading-[1.8] text-[1rem] md:text-[1.125rem]">
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access, correct, or update your personal information at any time</li>
                <li>Request deletion of your data, subject to applicable legal and professional requirements</li>
                <li>Withdraw consent for data processing where consent is the legal basis</li>
                <li>Lodge a complaint with us or the relevant authority regarding how your data has been handled</li>
              </ul>
              <p>To exercise any of these rights, contact us directly using the details below.</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif font-normal text-[#0A0A23] text-2xl md:text-3xl mb-5">Cookies and Tracking Technologies</h2>
            <div className="space-y-4 text-[#4B5563] leading-[1.8] text-[1rem] md:text-[1.125rem]">
              <p>Our website uses essential cookies to support core functionality and basic analytics. You can manage or disable cookies through your browser settings at any time. We do not use tracking technologies for advertising or third-party profiling purposes.</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif font-normal text-[#0A0A23] text-2xl md:text-3xl mb-5">Changes to This Privacy Policy</h2>
            <div className="space-y-4 text-[#4B5563] leading-[1.8] text-[1rem] md:text-[1.125rem]">
              <p>We may update this Privacy Policy from time to time to reflect changes in law, technology, or our practices. Any revisions will be published on this page with an updated effective date. Continued use of our services following any changes constitutes acceptance of the revised policy.</p>
            </div>
          </section>

          <section className="bg-[#F9FAFB] p-8 border-l-4 border-[#2E31CA]">
            <h2 className="font-serif font-normal text-[#0A0A23] text-2xl mb-4">Contact Us for Privacy Queries</h2>
            <div className="text-[#4B5563] space-y-2">
              <p className="font-medium text-[#0A0A23]">Advocate Akhil Bharat Kukreja</p>
              <p>Founder & Lead Counsel, Pramanika Legal</p>
              <div className="flex flex-col md:flex-row md:gap-6 pt-2">
                <p>📞 +91 9958480667</p>
                <p>📧 akhil.pramanikalegal@gmail.com</p>
              </div>
              <p className="text-sm pt-4 italic">We respond to all privacy-related enquiries within 48 hours.</p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}

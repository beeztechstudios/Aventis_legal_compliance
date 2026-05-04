import { client, urlFor } from "@/lib/sanity";
import Link from "next/link";
import Image from "next/image";
import { SanityContentRenderer } from "@/lib/sanityContent";
import { CTASection } from "@/components/sections/CTASection";
import { Metadata } from "next";
import { PracticeAreasSidebar } from "@/components/sections/PracticeAreasSidebar";
import { ArrowUpRight } from "lucide-react";

const relatedAreas = [
  { label: "Cybercrime, Cryptocurrency Fraud, Data Privacy and Online Reputation Matters", href: "/practice-areas/cybercrime-cryptocurrency-fraud-data-privacy" },
  { label: "Commercial Litigation and Business Disputes", href: "/practice-areas/commercial-litigation-and-business-disputes" },
  { label: "Civil Litigation", href: "/practice-areas/civil-litigation" },
  { label: "Consumer Litigation and Real Estate Disputes", href: "/practice-areas/consumer-litigation-and-real-estate-disputes" },
  { label: "Family and Matrimonial Litigation", href: "/practice-areas/family-and-matrimonial-litigation" },
  { label: "White Collar Crime and Criminal Litigation Support", href: "/practice-areas/white-collar-crime-and-criminal-litigation" },
  { label: "Insolvency and Bankruptcy Litigation and Support", href: "/practice-areas/insolvency-and-bankruptcy-litigation" },
  { label: "Arbitration and Alternate Dispute Resolution", href: "/practice-areas/arbitration-and-alternate-dispute-resolution" },
];

async function getPracticeArea(slug: string) {
  const query = `
    *[_type == "practiceArea" && slug.current == $slug][0]{
      title, tagline, excerpt, content, featuredImage, keyPoints, seo, slug
    }
  `;
  try {
    return await client.fetch(query, { slug });
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = await getPracticeArea(slug);
  if (!area) return { title: "Practice Area Not Found" };

  // Specialized SEO Mapping for all major practice areas
  const specialSEO: Record<string, Metadata> = {
    "cybercrime-cryptocurrency-fraud-data-privacy": {
      title: "Cyber Crime Lawyer Delhi | Best Cyber Crime Advocate – Pramanika Legal",
      description: "Best cyber crime lawyer in Delhi at Pramanika Legal. Expert cyber crime advocate handling online fraud recovery, crypto scams, data privacy & white-collar cyber cases.",
      openGraph: {
        title: "Cyber Crime Lawyer Delhi | Pramanika Legal",
        description: "Trusted cyber crime lawyer in Delhi NCR. Expert handling of online fraud recovery, crypto scams & digital crime cases by Advocate Akhil Bharat Kukreja.",
        url: `https://www.pramanikalegal.com/practice-areas/${slug}`,
        siteName: "Pramanika Legal",
        images: area.featuredImage && area.featuredImage.asset
          ? [{ url: urlFor(area.featuredImage).url(), width: 1200, height: 630, alt: "Cyber Crime Lawyer Delhi" }]
          : [],
        locale: "en_IN",
        type: "website",
      },
      alternates: {
        canonical: `https://www.pramanikalegal.com/practice-areas/${slug}`,
      },
    },
    "commercial-litigation-and-business-disputes": {
      title: "Commercial Litigation & Business Dispute Lawyer Delhi | Pramanika Legal",
      description: "Top commercial litigation lawyer in Delhi. Specialist in business disputes, contractual breaches, and corporate legal services in Delhi NCR.",
      openGraph: {
        title: "Commercial Litigation & Business Dispute Lawyer Delhi | Pramanika Legal",
        description: "Expert handling of business disputes, contractual breaches, and corporate litigation in Delhi NCR by Pramanika Legal.",
        url: `https://www.pramanikalegal.com/practice-areas/${slug}`,
        siteName: "Pramanika Legal",
        locale: "en_IN",
        type: "website",
      },
      alternates: {
        canonical: `https://www.pramanikalegal.com/practice-areas/${slug}`,
      },
    },
    "civil-litigation": {
      title: "Civil Litigation Lawyer Delhi | Civil Case Advocate | Pramanika Legal",
      description: "Expert civil litigation lawyer in Delhi specializing in civil suits, property matters, and recovery cases. Strategic advocacy by Advocate Akhil Kukreja.",
      openGraph: {
        title: "Civil Litigation Lawyer Delhi | Pramanika Legal",
        description: "Strategic civil litigation services in Delhi NCR for property suits, recovery cases, and legal disputes.",
        url: `https://www.pramanikalegal.com/practice-areas/${slug}`,
        siteName: "Pramanika Legal",
        locale: "en_IN",
        type: "website",
      },
      alternates: {
        canonical: `https://www.pramanikalegal.com/practice-areas/${slug}`,
      },
    },
    "consumer-litigation-and-real-estate-disputes": {
      title: "Property & Consumer Dispute Lawyer Delhi | RERA Specialist | Pramanika Legal",
      description: "Top consumer and real estate lawyer in Delhi. Expert property dispute lawyer handling RERA cases, builder-buyer conflicts, and consumer protection in Delhi NCR.",
      openGraph: {
        title: "Property & Consumer Dispute Lawyer Delhi | Pramanika Legal",
        description: "Expert handling of RERA cases, builder-buyer disputes, and property litigation in Delhi NCR by Advocate Akhil Bharat Kukreja.",
        url: `https://www.pramanikalegal.com/practice-areas/${slug}`,
        siteName: "Pramanika Legal",
        locale: "en_IN",
        type: "website",
      },
      alternates: {
        canonical: `https://www.pramanikalegal.com/practice-areas/${slug}`,
      },
    },
    "family-and-matrimonial-litigation": {
      title: "Family & Matrimonial Lawyer Delhi | Divorce Advocate – Pramanika Legal",
      description: "Expert family law and matrimonial lawyer in Delhi. Specialist in divorce, child custody, and maintenance cases across Delhi NCR.",
      openGraph: {
        title: "Family & Matrimonial Lawyer Delhi | Pramanika Legal",
        description: "Compassionate and strategic family law services in Delhi NCR for divorce, custody, and matrimonial disputes.",
        url: `https://www.pramanikalegal.com/practice-areas/${slug}`,
        siteName: "Pramanika Legal",
        locale: "en_IN",
        type: "website",
      },
      alternates: {
        canonical: `https://www.pramanikalegal.com/practice-areas/${slug}`,
      },
    },
    "white-collar-crime-and-criminal-litigation": {
      title: "White-Collar Crime & Criminal Lawyer Delhi | Pramanika Legal",
      description: "Expert white-collar crime and criminal litigation lawyer in Delhi. Specialist in economic offences, criminal defense, and legal advocacy in Delhi NCR.",
      openGraph: {
        title: "White-Collar Crime & Criminal Lawyer Delhi | Pramanika Legal",
        description: "Robust criminal defense and white-collar crime advocacy in Delhi NCR by Pramanika Legal.",
        url: `https://www.pramanikalegal.com/practice-areas/${slug}`,
        siteName: "Pramanika Legal",
        locale: "en_IN",
        type: "website",
      },
      alternates: {
        canonical: `https://www.pramanikalegal.com/practice-areas/${slug}`,
      },
    },
    "insolvency-and-bankruptcy-litigation": {
      title: "Insolvency & Bankruptcy Lawyer Delhi | IBC Specialist – Pramanika Legal",
      description: "Top insolvency and bankruptcy lawyer in Delhi. Specialist advocate for NCLT matters, IBC cases, and debt recovery in Delhi NCR.",
      openGraph: {
        title: "Insolvency & Bankruptcy Lawyer Delhi | Pramanika Legal",
        description: "Expert NCLT and IBC legal services in Delhi NCR for insolvency and bankruptcy proceedings.",
        url: `https://www.pramanikalegal.com/practice-areas/${slug}`,
        siteName: "Pramanika Legal",
        locale: "en_IN",
        type: "website",
      },
      alternates: {
        canonical: `https://www.pramanikalegal.com/practice-areas/${slug}`,
      },
    },
    "arbitration-and-alternate-dispute-resolution": {
      title: "Arbitration & ADR Lawyer Delhi | Mediator – Pramanika Legal",
      description: "Expert arbitration and ADR lawyer in Delhi. Specialist in international and domestic arbitration, mediation, and conciliation in Delhi NCR.",
      openGraph: {
        title: "Arbitration & ADR Lawyer Delhi | Pramanika Legal",
        description: "Strategic alternate dispute resolution services in Delhi NCR for complex commercial and civil matters.",
        url: `https://www.pramanikalegal.com/practice-areas/${slug}`,
        siteName: "Pramanika Legal",
        locale: "en_IN",
        type: "website",
      },
      alternates: {
        canonical: `https://www.pramanikalegal.com/practice-areas/${slug}`,
      },
    },
  };

  if (specialSEO[slug]) {
    return specialSEO[slug];
  }

  const title = (area.seo?.metaTitle as string) || (area.title as string);
  const description = (area.seo?.metaDescription as string) || (area.excerpt as string);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.pramanikalegal.com/practice-areas/${slug}`,
      siteName: "Pramanika Legal",
      images: area.featuredImage && area.featuredImage.asset
        ? [
            {
              url: urlFor(area.featuredImage).url(),
              width: 1200,
              height: 630,
              alt: area.title,
            },
          ]
        : [],
      locale: "en_IN",
      type: "article",
    },
    alternates: {
      canonical: `https://www.pramanikalegal.com/practice-areas/${slug}`,
    },
  };
}

export default async function PracticeAreaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = await getPracticeArea(slug);

  if (!area) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-[#0A0A23] mb-4">Practice area not found</h1>
          <Link href="/practice-areas" className="text-[#2E31CA] hover:underline">
            ← Back to Practice Areas
          </Link>
        </div>
      </div>
    );
  }

  const isCyberCrime = slug === "cybercrime-cryptocurrency-fraud-data-privacy";
  const isCommercial = slug === "commercial-litigation-and-business-disputes";
  const isCivil = slug === "civil-litigation";
  const isConsumer = slug === "consumer-litigation-and-real-estate-disputes";
  const isFamily = slug === "family-and-matrimonial-litigation";
  const isWhiteCollar = slug === "white-collar-crime-and-criminal-litigation";
  const isInsolvency = slug === "insolvency-and-bankruptcy-litigation";
  const isArbitration = slug === "arbitration-and-alternate-dispute-resolution";

  const jsonLdMap: Record<string, object> = {
    "cybercrime-cryptocurrency-fraud-data-privacy": {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "Cyber Crime Lawyer Delhi",
      "url": `https://www.pramanikalegal.com/practice-areas/${slug}`,
      "description": "Expert cyber crime lawyer Delhi handling online fraud recovery, cryptocurrency scams, data privacy and white-collar cyber cases.",
      "areaServed": "Delhi NCR",
      "provider": { "@type": "Organization", "name": "Pramanika Legal" },
      "serviceType": ["Cybercrime Defence", "Cryptocurrency Fraud Cases", "Data Privacy Litigation", "Online Fraud Recovery"]
    },
    "commercial-litigation-and-business-disputes": {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "Commercial Litigation Lawyer Delhi",
      "url": `https://www.pramanikalegal.com/practice-areas/${slug}`,
      "description": "Top commercial litigation lawyer in Delhi specializing in business disputes, contractual breaches, and corporate legal services.",
      "areaServed": "Delhi NCR",
      "provider": { "@type": "Organization", "name": "Pramanika Legal" },
      "serviceType": ["Business Disputes", "Contractual Breaches", "Corporate Litigation"]
    },
    "civil-litigation": {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "Civil Litigation Lawyer Delhi",
      "url": `https://www.pramanikalegal.com/practice-areas/${slug}`,
      "description": "Expert civil litigation lawyer in Delhi specializing in civil suits, property matters, and recovery cases.",
      "areaServed": "Delhi NCR",
      "provider": { "@type": "Organization", "name": "Pramanika Legal" },
      "serviceType": ["Civil Suits", "Property Disputes", "Debt Recovery"]
    },
    "consumer-litigation-and-real-estate-disputes": {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "Property & Consumer Dispute Lawyer Delhi",
      "url": `https://www.pramanikalegal.com/practice-areas/${slug}`,
      "description": "Top consumer and real estate lawyer in Delhi handling RERA cases, builder-buyer conflicts, and consumer protection.",
      "areaServed": "Delhi NCR",
      "provider": { "@type": "Organization", "name": "Pramanika Legal" },
      "serviceType": ["RERA Matters", "Builder-Buyer Disputes", "Consumer Protection"]
    },
    "family-and-matrimonial-litigation": {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "Family & Matrimonial Lawyer Delhi",
      "url": `https://www.pramanikalegal.com/practice-areas/${slug}`,
      "description": "Expert family law and matrimonial lawyer in Delhi specializing in divorce, child custody, and maintenance cases.",
      "areaServed": "Delhi NCR",
      "provider": { "@type": "Organization", "name": "Pramanika Legal" },
      "serviceType": ["Divorce Proceedings", "Child Custody", "Matrimonial Disputes"]
    },
    "white-collar-crime-and-criminal-litigation": {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "White-Collar Crime & Criminal Lawyer Delhi",
      "url": `https://www.pramanikalegal.com/practice-areas/${slug}`,
      "description": "Expert white-collar crime and criminal litigation lawyer in Delhi specializing in economic offences and criminal defense.",
      "areaServed": "Delhi NCR",
      "provider": { "@type": "Organization", "name": "Pramanika Legal" },
      "serviceType": ["Economic Offences", "Criminal Defense", "Corporate Fraud"]
    },
    "insolvency-and-bankruptcy-litigation": {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "Insolvency & Bankruptcy Lawyer Delhi",
      "url": `https://www.pramanikalegal.com/practice-areas/${slug}`,
      "description": "Top insolvency and bankruptcy lawyer in Delhi specializing in NCLT matters and IBC cases.",
      "areaServed": "Delhi NCR",
      "provider": { "@type": "Organization", "name": "Pramanika Legal" },
      "serviceType": ["NCLT Matters", "IBC Cases", "Liquidation Support"]
    },
    "arbitration-and-alternate-dispute-resolution": {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "Arbitration & ADR Lawyer Delhi",
      "url": `https://www.pramanikalegal.com/practice-areas/${slug}`,
      "description": "Expert arbitration and ADR lawyer in Delhi specializing in international and domestic arbitration and mediation.",
      "areaServed": "Delhi NCR",
      "provider": { "@type": "Organization", "name": "Pramanika Legal" },
      "serviceType": ["Commercial Arbitration", "Mediation", "Conciliation"]
    }
  };

  const jsonLd = jsonLdMap[slug] || {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": area.title,
    "description": area.excerpt || area.tagline,
    "provider": {
      "@type": "LegalService",
      "name": "Pramanika Legal",
      "url": "https://www.pramanikalegal.com/"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Delhi NCR"
    }
  };

  const aiSummaryMap: Record<string, React.ReactNode> = {
    "cybercrime-cryptocurrency-fraud-data-privacy": (
      <p className="text-white/90 text-[15px] md:text-base leading-relaxed">
        Pramanika Legal is home to the best cyber crime lawyer in Delhi. Led by Advocate Akhil Bharat Kukreja, we provide expert cyber crime advocate Delhi NCR services for online fraud recovery, cryptocurrency scams, data privacy breaches, and white-collar digital crimes. Strategic defence, swift recovery, and court-proven results across Delhi High Court, Supreme Court, and tribunals.
      </p>
    ),
    "commercial-litigation-and-business-disputes": (
      <p className="text-white/90 text-[15px] md:text-base leading-relaxed">
        Pramanika Legal is a premier commercial litigation lawyer Delhi firm. Led by Advocate Akhil Bharat Kukreja, we specialize in high-stakes business disputes, contractual disagreements, and corporate litigation. Our team delivers strategic wins for businesses through rigorous advocacy and court-room excellence.
      </p>
    ),
    "civil-litigation": (
      <p className="text-white/90 text-[15px] md:text-base leading-relaxed">
        Our civil litigation lawyer Delhi practice provides strategic representation for a wide range of civil matters. From recovery suits to complex property disputes, Advocate Akhil Bharat Kukreja ensures effective legal solutions tailored to achieve the best possible outcomes in civil courts and tribunals.
      </p>
    ),
    "consumer-litigation-and-real-estate-disputes": (
      <p className="text-white/90 text-[15px] md:text-base leading-relaxed">
        Leading property dispute lawyer Delhi firm and trusted consumer litigation experts. We handle RERA cases, builder-buyer conflicts, title disputes, and consumer protection matters with a focus on swift resolution and client-centric advocacy across Delhi NCR.
      </p>
    ),
    "family-and-matrimonial-litigation": (
      <p className="text-white/90 text-[15px] md:text-base leading-relaxed">
        Specialized family and matrimonial lawyer Delhi services. We provide compassionate yet strategic representation for divorce, child custody, maintenance, and domestic matters, ensuring your rights are protected during sensitive legal proceedings.
      </p>
    ),
    "white-collar-crime-and-criminal-litigation": (
      <p className="text-white/90 text-[15px] md:text-base leading-relaxed">
        Expert white-collar crime lawyer Delhi and criminal defense advocates. We handle economic offences, corporate fraud, and complex criminal litigation with a robust defense strategy designed to protect individuals and businesses in high-stakes criminal matters.
      </p>
    ),
    "insolvency-and-bankruptcy-litigation": (
      <p className="text-white/90 text-[15px] md:text-base leading-relaxed">
        Top insolvency and bankruptcy lawyer Delhi practice. We represent creditors and debtors in NCLT and IBC proceedings, delivering strategic solutions for debt recovery, corporate restructuring, and insolvency resolution.
      </p>
    ),
    "arbitration-and-alternate-dispute-resolution": (
      <p className="text-white/90 text-[15px] md:text-base leading-relaxed">
        Premier arbitration and alternate dispute resolution lawyer Delhi services. We specialize in domestic and international arbitration, mediation, and conciliation, offering efficient and effective paths for resolving complex commercial and civil disputes outside of traditional litigation.
      </p>
    )
  };

  const aiSummary = aiSummaryMap[slug] || null;

  const headingMap: Record<string, string> = {
    "cybercrime-cryptocurrency-fraud-data-privacy": "Cyber Crime Lawyer Delhi: Pramanika Legal Expertise",
    "commercial-litigation-and-business-disputes": "Commercial Litigation & Business Dispute Lawyer Delhi",
    "civil-litigation": "Civil Litigation Lawyer Delhi: Expert Case Advocacy",
    "consumer-litigation-and-real-estate-disputes": "Property & Consumer Dispute Lawyer Delhi: RERA Experts",
    "family-and-matrimonial-litigation": "Family & Matrimonial Lawyer Delhi: Strategic Advocacy",
    "white-collar-crime-and-criminal-litigation": "White-Collar Crime & Criminal Lawyer Delhi",
    "insolvency-and-bankruptcy-litigation": "Insolvency & Bankruptcy Lawyer Delhi: IBC Specialists",
    "arbitration-and-alternate-dispute-resolution": "Arbitration & ADR Lawyer Delhi: Effective Resolutions"
  };

  const dynamicHeading = headingMap[slug] || area.title;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-white min-h-screen">
        {/* ── Hero Banner ── */}
        <div className="w-full bg-[#0A0A23] relative overflow-hidden min-h-[420px] md:min-h-[520px] flex items-end">
          {area.featuredImage && (
            <Image
              src={urlFor(area.featuredImage).url()}
              alt={area.title}
              fill
              className="object-cover opacity-30 pointer-events-none"
              priority
            />
          )}
          <div className="relative mt-10 z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pb-14 pt-36">
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-sm mb-6 transition-colors no-underline"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Practice Areas
            </Link>
            
            <h1 className="hero-title text-white leading-tight ">
              {dynamicHeading}
            </h1>
            
            {aiSummary && (
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
                {aiSummary}
              </div>
            )}

            {area.tagline && !aiSummary && (
              <p className="hero-subtitle text-white/70 mt-4 ">
                {area.tagline}
              </p>
            )}
          </div>
        </div>

        {/* ── Body ── */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">

            {/* Left: Main Content */}
            <div className="flex-1 min-w-0">
              {/* Excerpt lead */}
              {area.excerpt && (
                <p className="text-lg md:text-xl font-serif text-[#0A0A23] leading-relaxed mb-10 border-l-4 border-[#2E31CA] pl-5">
                  {area.excerpt}
                </p>
              )}

              {/* Portable Text body */}
              <div className="prose prose-lg max-w-none
                prose-headings:font-serif prose-headings:text-[#0A0A23] prose-headings:font-normal
                prose-p:text-[#4B5563] prose-p:leading-relaxed
                prose-strong:text-[#0A0A23]
                prose-li:text-[#4B5563]">
                <SanityContentRenderer content={area.content} />
              </div>
            </div>

            {/* Right: Sidebar */}
            <aside className="lg:w-[300px] xl:w-[340px] flex-shrink-0">
              <PracticeAreasSidebar
                areas={relatedAreas.filter((a) => !a.href.endsWith(slug))}
              />
              {/* Consult CTA card */}                                                                                                                                                                
                  <div className="bg-[#2E31CA] p-6 mt-4 text-white">                                                                                                                                           
                       <h3 className="font-serif text-xl mb-3 font-normal text-white">Need legal help?</h3>                                                                                                  
                      <p className="text-white/70 text-sm leading-relaxed mb-5">                                                                                                                            
                        Speak directly with our team to understand your options.                                                                                                                            
                     </p>                                                                                                                                                                                  
                      <Link                                                                                                                                                                                 
                   href="/contact"                                                                                                                                                                     
                      className="inline-flex items-center gap-2 bg-white text-[#2E31CA] text-sm font-medium px-5 py-2.5 hover:bg-white/90 transition-colors no-underline"                                 
                      >                                                                                                                                                                                     
                      Book a Consultation                                                                                                                                                                 
                        <ArrowUpRight className="w-4 h-4" />                                                                                                                                                
                     </Link>                                                                                                                                                                               
                   </div>   
            </aside>
          </div>
        </div>
      </main>

      <CTASection />
    </>
  );
}

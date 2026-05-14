import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Image from "next/image";
import { client } from "@/sanity/client";
import PracticeAreasGrid from "@/components/PracticeAreasGrid";

export const revalidate = 60;

async function getPracticeAreas() {
  const query = `*[_type == "practiceArea"] | order(_createdAt asc) {
    title,
    "slug": slug.current,
    excerpt
  }`;
  
  try {
    const areas = await client.fetch(query);
    return areas;
  } catch (error) {
    console.error("Failed to fetch practice areas:", error);
    return [];
  }
}

// Fallback data if Sanity is empty
const fallbackAreas = [
  {
    slug: "labour-law-advisory-compliance",
    title: "Labour Law Advisory &\nCompliance",
    excerpt: "Comprehensive advisory and compliance support under central and state labour laws to help businesses manage workforce regulations efficiently.",
  },
  {
    slug: "regulatory-compliance-governance",
    title: "Regulatory Compliance &\nGovernance (GRC)",
    excerpt: "Structured governance and compliance solutions focused on improving regulatory alignment and reducing operational risks.",
  },
  {
    slug: "payroll-statutory-compliance",
    title: "Payroll & Statutory\nCompliances",
    excerpt: "Support for PF, ESI, PT, LWF, and related statutory obligations with accurate and timely compliance management.",
  },
  {
    slug: "labour-law-audits-due-diligence",
    title: "Labour Law Audits &\nDue Diligence",
    excerpt: "Detailed compliance audits and due diligence assessments to identify gaps, risks, and regulatory concerns.",
  },
  {
    slug: "registration-licensing-services",
    title: "Registration &\nLicensing (Pan-India)",
    excerpt: "Assistance with labour registrations, licenses, and statutory approvals across multiple states in India.",
  },
  {
    slug: "ongoing-compliance-management",
    title: "Ongoing Compliance\nManagement & Filings",
    excerpt: "End-to-end compliance management including filings, documentation, and regulatory coordination support.",
  },
  {
    slug: "maintenance-of-statutory-registers",
    title: "Maintenance of Statutory\nRegisters & Records",
    excerpt: "Support for maintaining statutory registers, records, and documentation as required under applicable laws.",
  },
  {
    slug: "contractor-vendor-compliance",
    title: "Contractor & Vendor\nCompliance Management",
    excerpt: "Compliance support for contractors, vendors, and third-party workforce management across business operations.",
  },
  {
    slug: "labour-department-liaison",
    title: "Labour Department Liaison &\nRepresentation",
    excerpt: "Professional coordination with labour authorities for inspections, notices, and regulatory interactions.",
  },
  {
    slug: "workplace-investigations",
    title: "Workplace Investigations &\nDisciplinary Proceedings",
    excerpt: "Structured support for workplace investigations, disciplinary matters, and internal proceedings.",
  },
  {
    slug: "posh-advisory-compliance",
    title: "POSH Advisory & Sexual\nHarassment Compliance",
    excerpt: "Comprehensive POSH compliance support including policy drafting, IC setup, and training programs.",
  },
  {
    slug: "hr-policies-employment",
    title: "HR Policies & Employment\nDocumentation",
    excerpt: "Drafting and review of HR policies, employment contracts, and workplace governance documentation.",
  },
  {
    slug: "taxation-allied-advisory",
    title: "Taxation & Allied\nRegulatory Advisory",
    excerpt: "Advisory support relating to taxation matters and allied regulatory compliance requirements.",
  }
];

export default async function PracticeAreasPage() {
  const sanityAreas = await getPracticeAreas();
  const areas = sanityAreas && sanityAreas.length > 0 ? sanityAreas : fallbackAreas;

  return (
    <main className="flex flex-col min-h-screen bg-[#FAF1E1]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full px-6 md:px-12 flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-8 z-10 overflow-hidden">
        <div className="w-full lg:w-[48%] pt-16 md:pt-24 pb-0 flex flex-col z-10 relative">
          <h1 className="heading-hero !text-[30px] md:!text-[48px] lg:!text-[64px] mb-2">
            <span className="block whitespace-nowrap">Labour Law &</span>
            <span className="block whitespace-nowrap">Compliance Solutions</span>
            <span className="block whitespace-nowrap">for Modern Businesses</span>
          </h1>
          <p className="section-description heading-to-desc mb-4 max-w-[650px] text-justify">
            Reliable labour law and regulatory compliance support designed to help businesses manage workforce obligations, reduce risks, and ensure operational efficiency.
          </p>
          <div>
            <button className="bg-[#A17755] text-white px-8 py-3.5 rounded-[4px] font-sans font-medium text-[15px] hover:bg-[#8F6F4E] transition-colors shadow-sm">
              Book Consultation
            </button>
          </div>
        </div>

        <div className="w-full lg:w-[45%] h-[250px] sm:h-[300px] md:h-[380px] lg:h-[400px] xl:h-[460px] 2xl:h-[500px] relative z-10 overflow-hidden rounded-md lg:-mt-16 xl:-mt-24">
          {/* Diagonal line behind the image */}
          <div className="absolute -left-[30%] top-1/2 w-[130%] h-[1px] border-b border-dashed border-[#A17755]/40 rotate-[-15deg] z-[-1] pointer-events-none" />
          <Image
            src="/practice-hero.png"
            alt="Labour Law Library"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* Grid Section */}
      <section className="w-full px-6 md:px-12 py-12 md:py-32 z-10 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <h2 className="heading-section">
            Our Practice Areas
          </h2>
          <p className="section-description max-w-[400px] translate-y-2">
            Comprehensive labour law, compliance, and regulatory advisory solutions tailored to support modern businesses across India.
          </p>
        </div>

        {/* Grid Container */}
        <PracticeAreasGrid areas={areas} />
      </section>

      <FAQ />
      <CallToAction />
      <Footer />
    </main>
  );
}

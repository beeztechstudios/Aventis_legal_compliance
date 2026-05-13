"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const practiceAreas = [
  {
    slug: "labour-law-advisory-compliance",
    title: "Labour Law Advisory &\nCompliance",
    desc: "Comprehensive advisory and compliance support under central and state labour laws to help businesses manage workforce regulations efficiently.",
    icon: "/labour-law-advisory.svg",
    dark: false,
  },
  {
    slug: "regulatory-compliance-governance",
    title: "Regulatory Compliance &\nGovernance (GRC)",
    desc: "Structured governance and compliance solutions focused on improving regulatory alignment and reducing operational risks.",
    icon: "/regulatory-compliance.svg",
    dark: false,
  },
  {
    slug: "payroll-statutory-compliance",
    title: "Payroll & Statutory\nCompliances",
    desc: "Support for PF, ESI, PT, LWF, and related statutory obligations with accurate and timely compliance management.",
    icon: "/payroll-compliance.svg",
    dark: false,
  },
  {
    slug: "labour-law-audits-due-diligence",
    title: "Labour Law Audits &\nDue Diligence",
    desc: "Detailed compliance audits and due diligence assessments to identify gaps, risks, and regulatory concerns.",
    icon: "/labour-law-audits.svg",
    dark: false,
  },
  {
    slug: "registration-licensing-services",
    title: "Registration &\nLicensing (Pan-India)",
    desc: "Assistance with labour registrations, licenses, and statutory approvals across multiple states in India.",
    icon: "/registrations-licesnsing.svg",
    dark: false,
  },
  {
    slug: "ongoing-compliance-management",
    title: "Ongoing Compliance\nManagement & Filings",
    desc: "End-to-end compliance management including filings, documentation, and regulatory coordination support.",
    icon: "/ongoing-compliance.svg",
    dark: false,
  },
  {
    slug: "maintenance-of-statutory-registers",
    title: "Maintenance of Statutory\nRegisters & Records",
    desc: "Support for maintaining statutory registers, records, and documentation as required under applicable laws.",
    icon: "/maintainance-records.svg",
    dark: false,
  },
  {
    slug: "contractor-vendor-compliance",
    title: "Contractor & Vendor\nCompliance Management",
    desc: "Compliance support for contractors, vendors, and third-party workforce management across business operations.",
    icon: "/contractor-vendor.svg",
    dark: false,
  },
  {
    slug: "labour-department-liaison",
    title: "Labour Department Liaison &\nRepresentation",
    desc: "Professional coordination with labour authorities for inspections, notices, and regulatory interactions.",
    icon: "/labour-department.svg",
    dark: false,
  },
  {
    slug: "workplace-investigations",
    title: "Workplace Investigations &\nDisciplinary Proceedings",
    desc: "Structured support for workplace investigations, disciplinary matters, and internal proceedings.",
    icon: "/workplace-investigations.svg",
    dark: false,
  },
  {
    slug: "posh-advisory-compliance",
    title: "POSH Advisory & Sexual\nHarassment Compliance",
    desc: "Comprehensive POSH compliance support including policy drafting, IC setup, and training programs.",
    icon: "/POSH-advisory.svg",
    dark: false,
  },
  {
    slug: "hr-policies-employment",
    title: "HR Policies & Employment\nDocumentation",
    desc: "Drafting and review of HR policies, employment contracts, and workplace governance documentation.",
    icon: "/HR-policies.svg",
    dark: false,
  },
  {
    slug: "taxation-allied-advisory",
    title: "Taxation & Allied\nRegulatory Advisory",
    desc: "Advisory support relating to taxation matters and allied regulatory compliance requirements.",
    icon: "/taxation-advisory.svg",
    dark: false,
  }
];

export default function PracticeAreasPage() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <main className="flex flex-col min-h-screen bg-[#FAF1E1]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full px-6 md:px-12 flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-8 z-10 overflow-hidden">
        <div className="w-full lg:w-[48%] py-16 md:py-24 flex flex-col z-10 relative">
          <h1 className="font-serif font-normal text-[1.6rem] sm:text-[2rem] md:text-[2.3rem] lg:text-[2.2rem] xl:text-[3.4rem] 2xl:text-[4.5rem] leading-[1.12] tracking-tight text-[#131C2B] mb-6">
            <span className="block whitespace-nowrap">Labour Law &</span>
            <span className="block whitespace-nowrap">Compliance Solutions</span>
            <span className="block whitespace-nowrap">for Modern Businesses</span>
          </h1>
          <p className="font-sans text-[15px] md:text-[17px] text-[#131C2B]/80 mb-10 max-w-[650px] leading-relaxed text-justify">
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
      <section className="w-full px-6 md:px-12 py-20 md:py-32 z-10 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <h2 className="font-serif text-[2.2rem] md:text-[3rem] lg:text-[3.5rem] text-[#131C2B] leading-none">
            Our Practice Areas
          </h2>
          <p className="font-sans text-[13px] md:text-[15px] text-[#111111] max-w-[400px] leading-relaxed pb-0 translate-y-2">
            Comprehensive labour law, compliance, and regulatory advisory solutions tailored to support modern businesses across India.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {practiceAreas.map((area, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveIdx(isActive ? null : idx)}
                className="relative p-8 md:p-10 flex flex-col h-[380px] md:h-[400px] bg-[#FDE9CA] overflow-hidden group cursor-pointer transition-colors duration-500"
              >
                {/* Blue fill rising from bottom on hover/click */}
                <div className={`absolute inset-x-0 bottom-0 bg-[#121C2A] transition-all duration-500 ease-in-out group-hover:h-full z-0 ${isActive ? 'h-full' : 'h-0'}`} />

                {/* Icon — equal gap above (card padding) and below before text */}
                <div className="relative z-10 mb-8 md:mb-10">
                  <Image
                    src={area.icon}
                    alt={area.title}
                    width={60}
                    height={60}
                    className={`transition-all duration-500 group-hover:brightness-100 group-hover:invert-0 ${isActive ? 'brightness-100' : 'brightness-0'}`}
                  />
                </div>

                {/* Text block — shifts upward on hover/click */}
                <div className={`relative z-10 mt-auto flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-28 ${isActive ? '-translate-y-28' : 'translate-y-0'}`}>
                  <h3 className={`font-serif text-[20px] md:text-[22px] font-medium mb-3 leading-[1.3] whitespace-pre-line transition-colors duration-500 group-hover:text-[#FDEACB] ${isActive ? 'text-[#FDEACB]' : 'text-[#121C2A]'}`}>
                    {area.title}
                  </h3>
                  <p className={`text-[13px] md:text-[14px] leading-relaxed font-sans line-clamp-3 transition-colors duration-500 group-hover:text-[#FDEACB]/80 ${isActive ? 'text-[#FDEACB]/80' : 'text-[#121C2A]/70'}`}>
                    {area.desc}
                  </p>
                </div>

                {/* Read More — pinned to bottom-left, hidden until hover/click */}
                <div className={`absolute bottom-8 md:bottom-10 left-8 md:left-10 z-10 transition-all duration-400 ease-in-out delay-150 group-hover:opacity-100 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                  <Link href={`/practice-areas/${area.slug}`} className="bg-white text-[#A57858] px-5 py-2 text-[13px] font-sans font-medium hover:bg-[#FDEACB] hover:text-[#121C2A] transition-colors border-none inline-block">
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <FAQ />
      <CallToAction />
      <Footer />
    </main>
  );
}

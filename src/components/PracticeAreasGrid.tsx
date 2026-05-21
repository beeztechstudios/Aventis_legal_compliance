"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface PracticeArea {
  slug: string;
  title: string;
  excerpt: string;
  iconName?: string;
}

export default function PracticeAreasGrid({ areas }: { areas: PracticeArea[] }) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  // Icon map fallback if Sanity doesn't provide one
  const iconMap: Record<string, string> = {
    "labour-law-advisory-compliance": "/labour-law-advisory.svg",
    "regulatory-compliance-governance": "/regulatory-compliance.svg",
    "payroll-statutory-compliance": "/payroll-compliance.svg",
    "labour-law-audits-due-diligence": "/labour-law-audits.svg",
    "registration-licensing-services": "/registrations-licesnsing.svg",
    "ongoing-compliance-management": "/ongoing-compliance.svg",
    "maintenance-of-statutory-registers": "/maintainance-records.svg",
    "contractor-vendor-compliance": "/contractor-vendor.svg",
    "labour-department-liaison": "/labour-department.svg",
    "workplace-investigations": "/workplace-investigations.svg",
    "posh-advisory-compliance": "/POSH-advisory.svg",
    "hr-policies-employment": "/HR-policies.svg",
    "taxation-allied-advisory": "/taxation-advisory.svg",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
      {areas.map((area, idx) => {
        const isActive = activeIdx === idx;
        const icon = area.iconName ? `/practice_area_icons/${area.iconName}` : iconMap[area.slug] || "/practice_area_icons/labour-law-advisory.svg";
        
        return (
          <div
            key={idx}
            onClick={() => setActiveIdx(isActive ? null : idx)}
            className="relative p-8 md:p-10 flex flex-col h-[380px] md:h-[400px] bg-[#FDE9CA] overflow-hidden group cursor-pointer transition-colors duration-500"
          >
            {/* Blue fill rising from bottom on hover/click */}
            <div className={`absolute inset-x-0 bottom-0 bg-[#121C2A] transition-all duration-500 ease-in-out group-hover:h-full z-0 ${isActive ? 'h-full' : 'h-0'}`} />

            {/* Icon */}
            <div className="relative z-10 mb-8 md:mb-10">
              <Image
                src={icon}
                alt={area.title}
                width={60}
                height={60}
                className={`w-[60px] h-[60px] object-contain transition-all duration-500 group-hover:brightness-100 group-hover:invert-0 ${isActive ? 'brightness-100' : 'brightness-0'}`}
              />
            </div>

            {/* Text block */}
            <div className={`relative z-10 mt-auto flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-16 md:group-hover:-translate-y-20 xl:group-hover:-translate-y-16 ${isActive ? '-translate-y-16 md:-translate-y-20 xl:-translate-y-16' : 'translate-y-0'}`}>
              <h3 className={`heading-sub !text-[18px] lg:!text-[16px] xl:!text-[22px] h-[52px] xl:h-[64px] mb-1.5 leading-[1.3] whitespace-pre-line line-clamp-2 transition-colors duration-500 group-hover:text-[#FDEACB] ${isActive ? 'text-[#FDEACB]' : 'text-[#121C2A]'}`}>
                {area.title}
              </h3>
              <p className={`text-[13px] md:text-[14px] h-[48px] leading-relaxed font-sans line-clamp-2 transition-colors duration-500 group-hover:text-[#FDEACB]/80 ${isActive ? 'text-[#FDEACB]/80' : 'text-[#121C2A]/70'}`}>
                {area.excerpt}
              </p>
            </div>

            {/* Learn More */}
            <div className={`absolute bottom-8 md:bottom-10 left-8 md:left-10 z-10 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
              <Link href={`/practice-areas/${area.slug}`} className="bg-white text-[#A57858] px-5 py-2 text-[13px] font-sans font-medium hover:bg-[#FDEACB] hover:text-[#121C2A] transition-colors border-none inline-block rounded-sm">
                Read More
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

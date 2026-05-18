import { client } from "@/sanity/client";
import PracticeAreasClient from "./PracticeAreasClient";

export const revalidate = 60;

async function getPracticeAreas() {
  const query = `*[_type == "practiceArea"] | order(_createdAt asc) {
    title,
    "slug": slug.current,
    excerpt,
    iconName
  }`;

  try {
    const areas = await client.fetch(query);
    return areas;
  } catch (error) {
    console.error("Failed to fetch practice areas:", error);
    return [];
  }
}

const fallbackAreas = [
  {
    slug: "labour-law-advisory-compliance",
    title: "Labour Law Advisory & Compliance",
    excerpt: "Comprehensive advisory and compliance support under central and state labour laws to help businesses manage workforce regulations efficiently.",
  },
  {
    slug: "regulatory-compliance-governance",
    title: "Regulatory Compliance & Governance (GRC)",
    excerpt: "Structured governance and compliance solutions focused on improving regulatory alignment and reducing operational risks.",
  },
  {
    slug: "payroll-statutory-compliance",
    title: "Payroll & Statutory Compliances",
    excerpt: "Support for PF, ESI, PT, LWF, and related statutory obligations with accurate and timely compliance management.",
  },
  {
    slug: "labour-law-audits-due-diligence",
    title: "Labour Law Audits & Due Diligence",
    excerpt: "Detailed compliance audits and due diligence assessments to identify gaps, risks, and regulatory concerns.",
  },
];

export default async function PracticeAreas() {
  const sanityAreas = await getPracticeAreas();
  const areas = sanityAreas?.length ? sanityAreas : fallbackAreas;

  return <PracticeAreasClient areas={areas} />;
}

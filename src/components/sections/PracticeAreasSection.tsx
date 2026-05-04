import Link from "next/link";
import { client } from "@/lib/sanity";

interface PracticeArea {
  title: string;
  excerpt: string;
  slug: { current: string };
}

async function getPracticeAreas(): Promise<PracticeArea[]> {
  try {
    return await client.fetch(
      `*[_type == "practiceArea"] | order(_createdAt asc) { title, excerpt, slug }`,
      {},
      { next: { revalidate: 60 } }
    );
  } catch {
    return [];
  }
}

// Icon map keyed by slug — keeps SVGs out of Sanity
const iconMap: Record<string, React.ReactNode> = {
  // Cybercrime — monitor with exclamation
  "cybercrime-cryptocurrency-fraud-data-privacy": (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <rect x="7" y="9" width="30" height="20" rx="2" stroke="#0A0A23" strokeWidth="1.4"/>
      <line x1="15" y1="35" x2="29" y2="35" stroke="#0A0A23" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="22" y1="29" x2="22" y2="35" stroke="#0A0A23" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="22" y1="14" x2="22" y2="21" stroke="#0A0A23" strokeWidth="1.4" strokeLinecap="round"/>
      <circle cx="22" cy="24.5" r="1.2" fill="#0A0A23"/>
    </svg>
  ),
  // Commercial Litigation — briefcase
  "commercial-litigation-and-business-disputes": (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <rect x="7" y="16" width="30" height="21" rx="2" stroke="#0A0A23" strokeWidth="1.4"/>
      <path d="M16 16V13C16 11.895 16.895 11 18 11H26C27.105 11 28 11.895 28 13V16" stroke="#0A0A23" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="7" y1="25" x2="37" y2="25" stroke="#0A0A23" strokeWidth="1.4"/>
      <line x1="22" y1="22" x2="22" y2="28" stroke="#0A0A23" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  // Civil Litigation — courthouse / columns
  "civil-litigation": (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <line x1="7" y1="36" x2="37" y2="36" stroke="#0A0A23" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="7" y1="19" x2="37" y2="19" stroke="#0A0A23" strokeWidth="1.4" strokeLinecap="round"/>
      <polyline points="22,9 37,19 7,19" stroke="#0A0A23" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round" fill="none"/>
      <line x1="13" y1="19" x2="13" y2="36" stroke="#0A0A23" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="22" y1="19" x2="22" y2="36" stroke="#0A0A23" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="31" y1="19" x2="31" y2="36" stroke="#0A0A23" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  // Consumer Litigation & Real Estate — house with key
  "consumer-litigation-and-real-estate-disputes": (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <polyline points="7,22 22,9 37,22" stroke="#0A0A23" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M11 20V36H33V20" stroke="#0A0A23" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="18" y="27" width="8" height="9" rx="1" stroke="#0A0A23" strokeWidth="1.4"/>
      <circle cx="22" cy="31" r="1.2" fill="#0A0A23"/>
    </svg>
  ),
  // Family Law — two adults + child (people group)
  "family-and-matrimonial-litigation": (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <circle cx="14" cy="13" r="4" stroke="#0A0A23" strokeWidth="1.4"/>
      <path d="M6 35C6 29.477 9.582 25 14 25C18.418 25 22 29.477 22 35" stroke="#0A0A23" strokeWidth="1.4" strokeLinecap="round"/>
      <circle cx="30" cy="13" r="4" stroke="#0A0A23" strokeWidth="1.4"/>
      <path d="M22 35C22 29.477 25.582 25 30 25C34.418 25 38 29.477 38 35" stroke="#0A0A23" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  // White-Collar Crime — document with magnifying glass
  "white-collar-crime-and-criminal-litigation": (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <path d="M26 7H12C10.895 7 10 7.895 10 9V35C10 36.105 10.895 37 12 37H32C33.105 37 34 36.105 34 35V15L26 7Z" stroke="#0A0A23" strokeWidth="1.4" strokeLinejoin="round"/>
      <polyline points="26,7 26,15 34,15" stroke="#0A0A23" strokeWidth="1.4" strokeLinejoin="round" fill="none"/>
      <line x1="15" y1="22" x2="25" y2="22" stroke="#0A0A23" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="15" y1="27" x2="25" y2="27" stroke="#0A0A23" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="15" y1="17" x2="20" y2="17" stroke="#0A0A23" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  // Insolvency & Bankruptcy — coin with rupee / dollar symbol
  "insolvency-and-bankruptcy-litigation": (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="14" stroke="#0A0A23" strokeWidth="1.4"/>
      <line x1="22" y1="13" x2="22" y2="16" stroke="#0A0A23" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="22" y1="28" x2="22" y2="31" stroke="#0A0A23" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M18 17H25C26.657 17 28 18.343 28 20C28 21.657 26.657 23 25 23H18" stroke="#0A0A23" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="18" y1="20" x2="28" y2="20" stroke="#0A0A23" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M18 23L26 29" stroke="#0A0A23" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  // Arbitration & Mediation — scales of justice
  "arbitration-and-alternate-dispute-resolution": (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <line x1="22" y1="8" x2="22" y2="36" stroke="#0A0A23" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="10" y1="13" x2="34" y2="13" stroke="#0A0A23" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M10 13L7 22H13L10 13Z" stroke="#0A0A23" strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M34 13L31 22H37L34 13Z" stroke="#0A0A23" strokeWidth="1.4" strokeLinejoin="round"/>
      <line x1="16" y1="36" x2="28" y2="36" stroke="#0A0A23" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
};

const defaultIcon = (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <rect x="8" y="8" width="28" height="28" rx="2" stroke="#0A0A23" strokeWidth="1.4"/>
  </svg>
);

export async function PracticeAreasSection() {
  const areas = await getPracticeAreas();

  return (
    <section className="w-full  pb-42">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-[53px] flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="legacy-label mt-[80px] md:mt-[148px] text-[#2E31CA] mb-2">Expertise</p>
          <h2 className="services-heading">Our Practice Areas</h2>
        </div>
        <p className="services-desc text-[#0A0A23]/70 max-w-[340px] leading-relaxed">
          We handle complex, high-stakes matters across a wide range of legal domains. Every case is approached with strategy, precision, and an unwavering focus on results — because your legal challenges deserve more than routine representation.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl px-2 md:px-6 mx-auto border-t border-black/10 grid grid-cols-1 md:grid-cols-3 border-b border-black/10 relative">
        {areas.map((area, i) => {
          const slug = area.slug?.current ?? "";
          const total = areas.length;
          const cols = 3;
          const lastRowStart = total - (total % cols || cols);
          const isLastRow = i >= lastRowStart;
          const isLastCol = i % cols === cols - 1;
          return (
            <div
              key={slug}
              className={[
                "relative px-4 pt-8 pb-[24px] flex flex-col justify-between border-black/10",
                "border-b",
                isLastRow ? "md:border-b-0" : "md:border-b",
                isLastCol ? "" : "md:border-r",
              ].join(" ")}
            >
              {/* Plus at top-left where vertical border meets top/row border */}
              {i % cols !== 0 && (
                <span className="absolute hidden md:flex items-center justify-center w-3 h-3 z-10 pointer-events-none top-0 left-0 -translate-x-1/2 -translate-y-1/2">
                  <span className="absolute w-px h-3 bg-[#2E31CA]"/>
                  <span className="absolute w-3 h-px bg-[#2E31CA]"/>
                </span>
              )}
              {/* Plus at bottom-left where vertical border meets bottom row border (not last row) */}
              {i % cols !== 0 && !isLastRow && (
                <span className="absolute hidden md:flex items-center justify-center w-3 h-3 z-10 pointer-events-none bottom-0 left-0 -translate-x-1/2 translate-y-1/2">
                  <span className="absolute w-px h-3 bg-[#2E31CA]"/>
                  <span className="absolute w-3 h-px bg-[#2E31CA]"/>
                </span>
              )}
              {/* Icon */}
              <div className="mb-24 md:mb-65">
                {iconMap[slug] ?? defaultIcon}
              </div>

              <div>
                {/* Title */}
                <h3 className="process-item-title mb-[8px]">{area.title}</h3>

                {/* Excerpt */}
                <p className="process-item-desc mb-[24px] line-clamp-3">{area.excerpt}</p>

                {/* Read More */}
                <Link href={`/practice-areas/${slug}`} className="">
                  <img src="/blueReadMore.svg" alt="Read More" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

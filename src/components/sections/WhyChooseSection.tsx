const cards = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="24" y1="4" x2="24" y2="44" stroke="#0A0A23" strokeWidth="1.2"/>
        <line x1="4" y1="24" x2="44" y2="24" stroke="#0A0A23" strokeWidth="1.2"/>
        <line x1="9.37" y1="9.37" x2="38.63" y2="38.63" stroke="#0A0A23" strokeWidth="1.2"/>
        <line x1="38.63" y1="9.37" x2="9.37" y2="38.63" stroke="#0A0A23" strokeWidth="1.2"/>
      </svg>
    ),
    title: "Experience\nThat Counts",
    desc: "5+ years of focused expertise across courts, tribunals, and regulatory forums in India",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="24" y1="4" x2="24" y2="44" stroke="#0A0A23" strokeWidth="1.2"/>
        <line x1="4" y1="24" x2="44" y2="24" stroke="#0A0A23" strokeWidth="1.2"/>
        <line x1="9.37" y1="9.37" x2="38.63" y2="38.63" stroke="#0A0A23" strokeWidth="1.2"/>
        <line x1="38.63" y1="9.37" x2="9.37" y2="38.63" stroke="#0A0A23" strokeWidth="1.2"/>
      </svg>
    ),
    title: "Strategic\nRepresentation",
    desc: "We don't just respond to legal problems; we anticipate and outmanoeuvre them",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="24" y1="4" x2="24" y2="44" stroke="#0A0A23" strokeWidth="1.2"/>
        <line x1="4" y1="24" x2="44" y2="24" stroke="#0A0A23" strokeWidth="1.2"/>
        <line x1="9.37" y1="9.37" x2="38.63" y2="38.63" stroke="#0A0A23" strokeWidth="1.2"/>
        <line x1="38.63" y1="9.37" x2="9.37" y2="38.63" stroke="#0A0A23" strokeWidth="1.2"/>
      </svg>
    ),
    title: "Client-First\nApproach",
    desc: "Clear communication, honest advice, and full transparency at every stage",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="24" y1="4" x2="24" y2="44" stroke="#0A0A23" strokeWidth="1.2"/>
        <line x1="4" y1="24" x2="44" y2="24" stroke="#0A0A23" strokeWidth="1.2"/>
        <line x1="9.37" y1="9.37" x2="38.63" y2="38.63" stroke="#0A0A23" strokeWidth="1.2"/>
        <line x1="38.63" y1="9.37" x2="9.37" y2="38.63" stroke="#0A0A23" strokeWidth="1.2"/>
      </svg>
    ),
    title: "Proven Results &\nFull-Spectrum Practice",
    desc: "A strong track record in cyber fraud recovery, complex commercial disputes, and high-court litigation . ",
  },
];

export function WhyChooseSection() {
  return (
    <section className="w-full pb-36">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-16 pb-0">
        <h2 className="services-heading">
          Why Choose Pramanika Legal
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto border-t border-[#0000004D] mt-[48px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#0000004D] border-b border-[#0000004D]">
        {cards.map((card, i) => (
          <div key={i} className="px-4 pt-4 pb-8 flex flex-col gap-0">
            {/* Icon */}
            <div className="mb-[80px] md:mb-[100px] mt-2">{card.icon}</div>

            {/* Title */}
            <h3 className="process-item-title mb-[8px]">
              {card.title}
            </h3>

            {/* Description */}
            <p className="process-item-desc">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

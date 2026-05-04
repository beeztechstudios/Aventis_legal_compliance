import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Pramanika Legal",
  description: "Terms of Service for Pramanika Legal — the conditions governing use of this website.",
};

const sections = [
  {
    number: "1",
    title: "Acceptance of Terms",
    body: "By accessing or using this website, users agree to be bound by these Terms of Service, together with the Privacy Policy and any other applicable website notices or disclaimers. If a user does not agree with these terms, the website should not be used.",
  },
  {
    number: "2",
    title: "Informational Purpose Only",
    body: "The material on this website is provided for general informational purposes only. It is intended to give users an overview of the practice areas, services and professional profile of Pramanika Legal. It does not constitute legal advice, legal opinion or a substitute for case-specific professional consultation.",
  },
  {
    number: "3",
    title: "No Advocate-Client Relationship",
    body: "Accessing the website, reading its contents or sending an enquiry through the website does not create an advocate-client relationship. A professional relationship arises only after Pramanika Legal has reviewed the matter, agreed to act and the engagement has been formally confirmed.",
  },
  {
    number: "4",
    title: "No Guarantee of Outcome",
    body: "Past experience, representative matters, practice descriptions or discussion of legal issues on the website should not be treated as a guarantee of any specific outcome. Every dispute depends on its own facts, documents, forum and legal position.",
  },
  {
    number: "5",
    title: "User Conduct",
    body: "Users agree not to misuse the website, submit false or misleading information, interfere with website functionality, attempt unauthorised access, transmit harmful code or use the website for unlawful, abusive or fraudulent purposes.",
  },
  {
    number: "6",
    title: "User Submissions",
    body: "Any information submitted through the website should be accurate to the best of the user's knowledge. Users should avoid sending highly sensitive, confidential or privileged information through open website forms unless specifically requested to do so after direct communication with the office.",
  },
  {
    number: "7",
    title: "Intellectual Property",
    body: "All content on this website, including text, structure, design elements, logos and branding, is the intellectual property of Pramanika Legal or its licensors, unless otherwise stated. Users may view and use the content for personal informational purposes only. No content may be copied, reproduced, republished or commercially exploited without prior written permission.",
  },
  {
    number: "8",
    title: "Third-Party Links and Content",
    body: "The website may include links to third-party websites, articles, tools or platforms for convenience. Pramanika Legal does not control and is not responsible for the content, availability, privacy practices or terms applicable to such third-party resources.",
  },
  {
    number: "9",
    title: "Limitation of Liability",
    body: "Pramanika Legal shall not be liable for any direct, indirect, incidental or consequential loss arising from the use of, or reliance upon, the website or any content made available through it, to the fullest extent permitted by applicable law.",
  },
  {
    number: "10",
    title: "Website Availability",
    body: "While reasonable efforts may be made to keep the website accurate and accessible, Pramanika Legal does not guarantee uninterrupted access, error-free operation or complete freedom from technical defects. Website content may be modified, updated or withdrawn at any time without prior notice.",
  },
  {
    number: "11",
    title: "Governing Law and Jurisdiction",
    body: "These Terms of Service shall be governed by the laws of India. Subject to applicable law, courts at New Delhi shall have jurisdiction in relation to matters arising from use of the website.",
  },
  {
    number: "12",
    title: "Changes to Terms",
    body: "Pramanika Legal may revise these Terms of Service from time to time. Continued use of the website after such changes are published shall amount to acceptance of the revised terms.",
  },
  {
    number: "13",
    title: "Contact",
    body: "For any questions regarding these Terms of Service, users may contact Pramanika Legal through the email address or phone number listed on the website.",
  },
];

export default function TermsOfServicePage() {
  return (
    <main className="bg-white min-h-screen">
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
            Terms of Service
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-3xl">
          {sections.map((s) => (
            <div key={s.number} className="mb-10 pb-10 border-b border-black/10 last:border-b-0">
              <h2 className="font-serif font-normal text-[#0A0A23] text-xl md:text-2xl mb-3">
                {s.number}. {s.title}
              </h2>
              <p className="text-[#4B5563] leading-[1.8] text-[1rem] md:text-[1.0625rem]">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

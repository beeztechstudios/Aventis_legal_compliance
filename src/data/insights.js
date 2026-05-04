/**
 * Dummy insights data — shaped to match a Sanity GROQ query result.
 *
 * Sanity integration: replace this export with a real fetch, e.g.:
 *
 *   import { client } from "@/lib/sanity";
 *   export async function getInsights() {
 *     return client.fetch(`*[_type == "insight"] | order(publishedAt desc) {
 *       _id,
 *       title,
 *       slug,
 *       excerpt,
 *       publishedAt,
 *       readTime,
 *       "imageUrl": mainImage.asset->url,
 *       categories[]->{ title }
 *     }`);
 *   }
 *
 * The shape of each object below mirrors the fields returned by that query.
 */

export const insightsDummyData = [
  {
    _id: "1",
    title: "Cybercrime & Cryptocurrency Fraud",
    slug: "cybercrime-cryptocurrency-fraud",
    excerpt:
      "Legal assistance for cyber fraud investigations, digital crime matters, and cryptocurrency-related disputes in India.",
    publishedAt: "2025-09-10T00:00:00Z",
    readTime: "6 min read",
    imageUrl: "/blog1.svg",
    categories: [{ title: "Cybercrime" }],
  },
  {
    _id: "2",
    title: "Understanding Cybercrime Laws in India",
    slug: "understanding-cybercrime-laws-india",
    excerpt:
      "Key considerations for international investors entering India's regulated markets and dispute resolution forums.",
    publishedAt: "2025-09-10T00:00:00Z",
    readTime: "8 min read",
    imageUrl: "/blog2.svg",
    categories: [{ title: "Commercial" }],
  },
  {
    _id: "3",
    title: "Cybercrime & Cryptocurrency Fraud",
    slug: "cybercrime-cryptocurrency-fraud-2",
    excerpt:
      "Legal assistance for cyber fraud investigations, digital crime matters, and cryptocurrency-related disputes in India.",
    publishedAt: "2025-09-10T00:00:00Z",
    readTime: "5 min read",
    imageUrl: "/blog1.svg",
    categories: [{ title: "Cybercrime" }],
  },
  {
    _id: "4",
    title: "Understanding Cybercrime Laws in India",
    slug: "cybercrime-laws-india-2",
    excerpt:
      "Strategic representation in contractual disputes, partnership conflicts, and corporate litigation.",
    publishedAt: "2025-09-10T00:00:00Z",
    readTime: "7 min read",
    imageUrl: "/blog2.svg",
    categories: [{ title: "Commercial" }],
  },
  {
    _id: "5",
    title: "Cybercrime & Cryptocurrency Fraud",
    slug: "cybercrime-cryptocurrency-fraud-3",
    excerpt:
      "Legal assistance for cyber fraud investigations, digital crime matters, and cryptocurrency-related disputes in India.",
    publishedAt: "2025-09-10T00:00:00Z",
    readTime: "6 min read",
    imageUrl: "/blog1.svg",
    categories: [{ title: "Cybercrime" }],
  },
  {
    _id: "6",
    title: "Understanding Cybercrime Laws in India",
    slug: "cybercrime-laws-india-3",
    excerpt:
      "Strategic representation in contractual disputes, partnership conflicts, and corporate litigation.",
    publishedAt: "2025-09-10T00:00:00Z",
    readTime: "9 min read",
    imageUrl: "/blog2.svg",
    categories: [{ title: "Arbitration" }],
  },
  {
    _id: "7",
    title: "Consumer Rights & Dispute Resolution",
    slug: "consumer-rights-dispute-resolution",
    excerpt:
      "A practical guide to consumer rights enforcement and the available forums for redressal in India.",
    publishedAt: "2025-08-20T00:00:00Z",
    readTime: "5 min read",
    imageUrl: "/blog1.svg",
    categories: [{ title: "Consumer" }],
  },
  {
    _id: "8",
    title: "Arbitration in Commercial Disputes",
    slug: "arbitration-commercial-disputes",
    excerpt:
      "How arbitration is reshaping dispute resolution for businesses and why it may be the right choice for your case.",
    publishedAt: "2025-08-15T00:00:00Z",
    readTime: "7 min read",
    imageUrl: "/blog2.svg",
    categories: [{ title: "Arbitration" }],
  },
];

/** Number of cards shown per page in the main grid */
export const INSIGHTS_PER_PAGE = 6;

import type { Metadata } from "next";

export const siteUrl = new URL("https://www.aventislegal.in");
export const siteName = "Aventis | Legal Compliance";
export const siteDescription = "Simplifying Compliance, Strengthening Governance.";

const openGraphData = (title: string, description: string) => ({
  title,
  description,
  url: siteUrl.toString(),
  siteName,
  type: "website",
});

export const defaultMetadata: Metadata = {
  title: siteName,
  description: siteDescription,
  metadataBase: siteUrl,
  openGraph: openGraphData(siteName, siteDescription),
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export const homeMetadata: Metadata = {
  title: siteName,
  description: siteDescription,
  openGraph: openGraphData(siteName, siteDescription),
};

export const aboutMetadata: Metadata = {
  title: "About Aventis | Legal Compliance",
  description: "Learn how Aventis supports businesses with labour law, compliance, and governance services across India.",
  openGraph: openGraphData("About Aventis | Legal Compliance", "Learn how Aventis supports businesses with labour law, compliance, and governance services across India."),
};

export const contactMetadata: Metadata = {
  title: "Contact Aventis | Legal Compliance",
  description: "Get in touch with Aventis for labour law compliance, audits, and regulatory advisory services.",
  openGraph: openGraphData("Contact Aventis | Legal Compliance", "Get in touch with Aventis for labour law compliance, audits, and regulatory advisory services."),
};

export const practiceAreasMetadata: Metadata = {
  title: "Practice Areas | Aventis Legal Compliance",
  description: "Explore Aventis practice areas for labour law advisory, compliance management, POSH advisory, and regulatory services.",
  openGraph: openGraphData("Practice Areas | Aventis Legal Compliance", "Explore Aventis practice areas for labour law advisory, compliance management, POSH advisory, and regulatory services."),
};

export const insightsMetadata: Metadata = {
  title: "Insights | Aventis Legal Compliance",
  description: "Browse labour law updates, compliance resources, and expert insights from Aventis.",
  openGraph: openGraphData("Insights | Aventis Legal Compliance", "Browse labour law updates, compliance resources, and expert insights from Aventis."),
};

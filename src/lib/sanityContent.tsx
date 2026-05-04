import { PortableText, PortableTextComponents } from "@portabletext/react";
import { urlFor } from "./sanity";
import Image from "next/image";

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div className="relative w-full aspect-video my-8 rounded-lg overflow-hidden">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || "Insight Image"}
            fill
            className="object-cover"
          />
        </div>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="hero-text-article-subtitle mt-12 mb-4 text-[#163C0F] font-serif lowercase">
        {children}
      </h2>
    ),
    normal: ({ children }) => (
      <p className="hero-text-article-body mb-6 text-[#4B5563] leading-relaxed">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="space-y-4 mb-8">
        {children}
      </ul>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-3 hero-text-article-body text-[#4B5563]">
        <span className="text-[#2E31CA] font-bold text-xl leading-none mt-1">+</span>
        <span>{children}</span>
      </li>
    ),
  },
};

export function SanityContentRenderer({ content }: { content: any }) {
  if (!content) return null;
  return <PortableText value={content} components={components} />;
}

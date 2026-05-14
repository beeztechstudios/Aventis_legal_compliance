import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlForImage } from "@/sanity/image";

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div className="relative w-full aspect-video my-8 rounded-lg overflow-hidden bg-black/5">
          <Image
            src={urlForImage(value)?.url() || ""}
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
      <h2 className="font-serif text-[1.8rem] md:text-[2rem] text-[#131C2B] mt-12 mb-6 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-serif text-[1.4rem] md:text-[1.6rem] text-[#131C2B] mt-10 mb-4 leading-snug">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-serif text-[1.2rem] md:text-[1.3rem] text-[#131C2B] mt-8 mb-3 leading-snug font-medium">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="font-sans text-[15px] md:text-[16px] text-[#131C2B]/80 leading-relaxed mb-6">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="space-y-3 mb-8 pl-6 list-none relative">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal space-y-3 mb-8 pl-6 text-[#131C2B]/80 font-sans text-[15px] md:text-[16px] leading-relaxed">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="relative font-sans text-[15px] md:text-[16px] text-[#131C2B]/80 leading-relaxed pl-2">
        <span className="absolute left-[-1.5rem] top-[0.4rem] w-[6px] h-[6px] rounded-full bg-[#A17755]" />
        {children}
      </li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-[#131C2B]">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a href={value.href} rel={rel} className="text-[#A17755] hover:underline transition-all">
          {children}
        </a>
      );
    },
  },
};

export function SanityContentRenderer({ content }: { content: any }) {
  if (!content) return null;
  return <PortableText value={content} components={components} />;
}

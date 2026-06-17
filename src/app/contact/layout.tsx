import type { Metadata } from "next";
import { contactMetadata } from "@/lib/siteMeta";

export const metadata: Metadata = contactMetadata;

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

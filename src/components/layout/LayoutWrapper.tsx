"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { DisclaimerPopup } from "@/components/ui/DisclaimerPopup";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  if (isStudio) {
    return <>{children}</>;
  }

  return (
    <SmoothScroll>
      <Header />
      <div className="max-w-8xl mx-auto grow w-full">
        {children}
      </div>
      <Footer />
      <WhatsAppButton />
      <DisclaimerPopup />
    </SmoothScroll>
  );
}

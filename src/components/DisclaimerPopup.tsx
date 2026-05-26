"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "aventis_disclaimer_accepted";

export function DisclaimerPopup() {
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const accepted = sessionStorage.getItem(STORAGE_KEY);
    if (!accepted) {
      // slight delay so the page can paint first
      const t = setTimeout(() => setVisible(true), 300);
      return () => clearTimeout(t);
    }
  }, []);

  function handleAgree() {
    setAnimating(true);
    setTimeout(() => {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setVisible(false);
      setAnimating(false);
    }, 350);
  }

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center p-4 transition-opacity duration-350 ${
        animating ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#131C2B]/75 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className={`relative w-full max-w-[560px] overflow-hidden shadow-2xl transition-all duration-350 ${
          animating ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
        style={{ backgroundColor: "#FAF1E1" }}
      >
        {/* Gold top accent bar */}
        <div className="h-[3px] w-full" style={{ backgroundColor: "#A17755" }} />

        <div className="px-8 py-8 md:px-10 md:py-10">
          {/* Eyebrow + heading */}
          <div className="mb-6">
            <p
              className="text-[10px] tracking-[0.2em] uppercase font-medium mb-2"
              style={{ color: "#A17755", fontFamily: "var(--font-sans, Inter, sans-serif)" }}
            >
              Important Notice
            </p>
            <h2
              className="text-[22px] md:text-[26px] leading-snug font-normal tracking-tight"
              style={{ color: "#131C2B", fontFamily: "var(--font-serif, 'Libre Baskerville', serif)" }}
            >
              Disclaimer
            </h2>
          </div>

          {/* Divider */}
          <div className="w-10 h-[1.5px] mb-6" style={{ backgroundColor: "#A17755" }} />

          {/* Content */}
          <div
            className="text-[13.5px] md:text-[14.5px] leading-[1.8] space-y-3"
            style={{ color: "#131C2B", opacity: 0.8, fontFamily: "var(--font-sans, Inter, sans-serif)" }}
          >
            <p>
              The information provided on this website is intended solely for
              general informational purposes. It does not constitute legal
              advice, nor does viewing this website create an attorney–client
              relationship between you and{" "}
              <strong style={{ color: "#131C2B", opacity: 1 }}>Aventis</strong>.
            </p>
            <p>
              Legal matters are highly fact-specific. You should not act upon
              any information on this site without seeking professional legal
              counsel from a qualified attorney regarding your particular
              circumstances.
            </p>
            <p>
              As per the rule of Bar Council of India, there has been no
              solicitation, invitation or inducement of any sort whatsoever
              from the firm or any of its members to create a Lawyer-Client
              relationship through this website.
            </p>
            <p>
              By clicking <strong>&ldquo;I Agree&rdquo;</strong>, you
              acknowledge that you have read and understood this disclaimer and
              agree to proceed on these terms.
            </p>
          </div>

          {/* Action button */}
          <div className="mt-8">
            <button
              onClick={handleAgree}
              className="btn-premium w-full py-3 px-6 text-[14px] font-medium tracking-wide rounded-none"
              style={{ fontFamily: "var(--font-sans, Inter, sans-serif)" }}
            >
              I Agree
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

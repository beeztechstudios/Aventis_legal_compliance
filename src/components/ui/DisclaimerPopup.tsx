"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "parmanika_disclaimer_accepted";

export function DisclaimerPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = sessionStorage.getItem(STORAGE_KEY);
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  function handleAgree() {
    sessionStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  }

  function handleDisagree() {
    window.history.back();
    // fallback if there's no history
    window.location.href = "about:blank";
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-[560px] rounded-2xl bg-white shadow-2xl overflow-hidden"
        style={{ fontFamily: "var(--font-roboto)" }}
      >
        {/* Top accent bar */}
        <div className="h-1.5 w-full bg-primary" />

        <div className="px-8 py-8 md:px-10 md:py-10">
          {/* Logo / heading area */}
          <div className="mb-6">
            <p
              className="text-[11px] tracking-[0.18em] uppercase text-primary font-medium mb-2"
              style={{ fontFamily: "var(--font-roboto)" }}
            >
              Important Notice
            </p>
            <h2
              className="text-[22px] md:text-[28px] leading-snug text-[#0A0A23]"
              style={{ fontFamily: "var(--font-roboto-serif)", fontWeight: 400 }}
            >
              Disclaimer
            </h2>
          </div>

          {/* Divider */}
          <div className="w-10 h-[2px] bg-primary/30 mb-6" />

          {/* Content */}
          <div className="text-[13.5px] md:text-[14.5px] leading-[1.75] text-[#333] space-y-3">
            <p>
              The information provided on this website is intended solely for
              general informational purposes. It does not constitute legal
              advice, nor does viewing this website create an attorney–client
              relationship between you and <strong>Parmanika Legal</strong>.
            </p>
            <p>
              Legal matters are highly fact-specific. You should not act upon
              any information on this site without seeking professional legal
              counsel from a qualified attorney regarding your particular
              circumstances.
            </p>
            <p>
              By clicking <strong>&ldquo;I Agree&rdquo;</strong>, you
              acknowledge that you have read and understood this disclaimer and
              agree to proceed on these terms.
            </p>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAgree}
              className="flex-1 bg-primary text-white text-[14px] font-medium py-3 px-6 rounded-full transition-opacity hover:opacity-90 active:opacity-75"
              style={{ fontFamily: "var(--font-roboto)" }}
            >
              Agree 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

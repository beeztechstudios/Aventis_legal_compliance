"use client";

import { useState } from "react";

const WA_NUMBER = "919958480667";

function buildWaUrl(name: string, matter: string) {
  const greeting = name.trim() ? `Hi, I'm ${name.trim()}.` : "Hi,";
  const body = matter.trim()
    ? `${greeting} I'd like to discuss: ${matter.trim()}`
    : `${greeting} I'd like to get some legal guidance.`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(body)}`;
}

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [matter, setMatter] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    window.open(buildWaUrl(name, matter), "_blank", "noopener,noreferrer");
    setOpen(false);
    setName("");
    setMatter("");
  }

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">

      {/* Popup card */}
      {open && (
        <div
          style={{
            fontFamily: "var(--font-roboto)",
            width: 300,
            background: "#ffffff",
            border: "1.5px solid #2e31ca",
            boxShadow: "0 8px 40px 0 rgba(46,49,202,0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
          }}
        >
          {/* Header */}
          <div style={{ background: "#2e31ca", padding: "14px 18px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
            <div>
              <p style={{ fontFamily: "var(--font-roboto-serif)", fontWeight: 400, fontSize: 15, color: "#fff", margin: 0, lineHeight: 1.3 }}>
                Pramanika Legal
              </p>
              <p style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", margin: "3px 0 0", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Quick Consultation
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              style={{ background: "none", border: "none", color: "rgba(255,255,255,0.7)", fontSize: 22, lineHeight: 1, cursor: "pointer", padding: 0, marginTop: 2 }}
            >
              ×
            </button>
          </div>

          {/* Body */}
          <div style={{ padding: "16px 18px 4px" }}>
            <p style={{ fontSize: 13, color: "#444", lineHeight: 1.65, margin: 0 }}>
              Share your name and briefly describe your matter — we&apos;ll continue the conversation on WhatsApp.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ padding: "12px 18px 18px", display: "flex", flexDirection: "column", gap: 10 }}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              style={{
                width: "100%",
                border: "1.5px solid #d0d0d0",
                background: "#f7f7fb",
                padding: "10px 12px",
                fontSize: 13,
                color: "#222",
                outline: "none",
                boxSizing: "border-box",
                fontFamily: "var(--font-roboto)",
              }}
              onFocus={e => (e.target.style.borderColor = "#2e31ca")}
              onBlur={e => (e.target.style.borderColor = "#d0d0d0")}
            />
            <textarea
              value={matter}
              onChange={(e) => setMatter(e.target.value)}
              placeholder="Briefly describe your matter…"
              rows={3}
              required
              style={{
                width: "100%",
                border: "1.5px solid #d0d0d0",
                background: "#f7f7fb",
                padding: "10px 12px",
                fontSize: 13,
                color: "#222",
                outline: "none",
                resize: "none",
                boxSizing: "border-box",
                fontFamily: "var(--font-roboto)",
              }}
              onFocus={e => (e.target.style.borderColor = "#2e31ca")}
              onBlur={e => (e.target.style.borderColor = "#d0d0d0")}
            />

            <button
              type="submit"
              style={{
                width: "100%",
                background: "#2e31ca",
                color: "#fff",
                border: "none",
                padding: "13px 16px",
                fontSize: 13.5,
                fontWeight: 600,
                fontFamily: "var(--font-roboto)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                letterSpacing: "0.01em",
                marginTop: 2,
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = "#2224a8")}
              onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = "#2e31ca")}
            >
              {/* WhatsApp icon in green */}
              {/* <svg viewBox="0 0 32 32" width="16" height="16" fill="#25D366">
                <path d="M16 2C8.268 2 2 8.268 2 16c0 2.456.664 4.758 1.82 6.74L2 30l7.46-1.796A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.56 11.56 0 01-5.9-1.616l-.424-.252-4.424 1.064 1.1-4.308-.276-.44A11.557 11.557 0 014.4 16C4.4 9.592 9.592 4.4 16 4.4S27.6 9.592 27.6 16 22.408 27.6 16 27.6zm6.34-8.68c-.348-.176-2.06-1.016-2.38-1.132-.32-.116-.552-.176-.784.176-.232.348-.9 1.132-1.104 1.368-.2.232-.404.26-.752.084-.348-.176-1.468-.54-2.796-1.724-1.032-.92-1.728-2.056-1.932-2.404-.204-.348-.02-.536.152-.708.156-.156.348-.404.524-.608.172-.2.228-.348.344-.58.116-.232.06-.436-.028-.612-.088-.176-.784-1.892-1.076-2.592-.284-.68-.572-.588-.784-.596-.204-.008-.436-.012-.668-.012s-.608.088-.928.436c-.32.348-1.22 1.192-1.22 2.908s1.248 3.372 1.424 3.604c.176.232 2.456 3.752 5.952 5.26.832.36 1.48.576 1.988.736.836.268 1.596.228 2.196.14.672-.1 2.06-.844 2.352-1.66.292-.816.292-1.516.204-1.66-.084-.148-.316-.232-.664-.408z" />
              </svg> */}
              Continue on WhatsApp
            </button>
          </form>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => setOpen((p) => !p)}
        aria-label="Chat on WhatsApp"
        style={{
          width: 54,
          height: 54,
          borderRadius: "50%",
          background: "#25D366",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 4px 16px rgba(37,211,102,0.4)",
        }}
      >
        <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.456.664 4.758 1.82 6.74L2 30l7.46-1.796A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.56 11.56 0 01-5.9-1.616l-.424-.252-4.424 1.064 1.1-4.308-.276-.44A11.557 11.557 0 014.4 16C4.4 9.592 9.592 4.4 16 4.4S27.6 9.592 27.6 16 22.408 27.6 16 27.6zm6.34-8.68c-.348-.176-2.06-1.016-2.38-1.132-.32-.116-.552-.176-.784.176-.232.348-.9 1.132-1.104 1.368-.2.232-.404.26-.752.084-.348-.176-1.468-.54-2.796-1.724-1.032-.92-1.728-2.056-1.932-2.404-.204-.348-.02-.536.152-.708.156-.156.348-.404.524-.608.172-.2.228-.348.344-.58.116-.232.06-.436-.028-.612-.088-.176-.784-1.892-1.076-2.592-.284-.68-.572-.588-.784-.596-.204-.008-.436-.012-.668-.012s-.608.088-.928.436c-.32.348-1.22 1.192-1.22 2.908s1.248 3.372 1.424 3.604c.176.232 2.456 3.752 5.952 5.26.832.36 1.48.576 1.988.736.836.268 1.596.228 2.196.14.672-.1 2.06-.844 2.352-1.66.292-.816.292-1.516.204-1.66-.084-.148-.316-.232-.664-.408z" />
        </svg>
      </button>
    </div>
  );
}

"use client";

import { LocateIcon, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { PopupModal } from "react-calendly";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Accepts: +91XXXXXXXXXX or 10-digit local number (auto-prefixed to +91)
const INDIA_PHONE_RE = /^(\+91)?[6-9]\d{9}$/;

function toE164India(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 10) return `+91${digits}`;
  if (digits.length === 12 && digits.startsWith("91")) return `+${digits}`;
  return raw; // already formatted or invalid — pass as-is
}

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "+91",
    message: "",
  });
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({});
  const [showCalendly, setShowCalendly] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    // Keep +91 prefix for phone — don't let user delete it
    if (name === "phone") {
      const updated = value.startsWith("+91") ? value : "+91" + value.replace(/^\+?9?1?/, "");
      setForm({ ...form, phone: updated });
      setErrors((prev) => ({ ...prev, phone: undefined }));
      return;
    }
    setForm({ ...form, [name]: value });
    if (name === "email") setErrors((prev) => ({ ...prev, email: undefined }));
  }

  function validate() {
    const next: { email?: string; phone?: string } = {};
    if (!EMAIL_RE.test(form.email)) next.email = "Enter a valid email address.";
    const normalized = form.phone.replace(/\s/g, "");
    if (!INDIA_PHONE_RE.test(normalized)) next.phone = "Enter a valid 10-digit Indian mobile number.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setShowCalendly(true);
  }

  // Build E.164 phone for Calendly
  const e164Phone = toE164India(form.phone.replace(/\s/g, ""));

  return (
    <section id="contact" className="w-full bg-white py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">

          {/* ── LEFT: Office Info ── */}
          <div className="flex flex-col gap-8">
            <p className="legacy-label text-[#2E31CA]">Get in Touch with the Best Lawyer in Delhi</p>

            <div>
              <h3 className="contact-desc text-[#4A4A4A] mb-3">
                Whether you are facing a cyber fraud emergency, a property conflict, a business dispute, or any other legal matter — Pramanika Legal is ready to help. We serve clients across Delhi NCR and India with strategic legal guidance, complete confidentiality, and a genuine commitment to results.
              </h3>
              <p className="contact-desc text-black mb-1 flex items-center gap-2">
                <LocateIcon width={16} height={16}/>
                E-33, 2nd Floor, Lajpat Nagar – 3
                New Delhi, Delhi, India – 110024
              </p>
              <div className="flex flex-col gap-1">
              <p className="contact-desc text-black flex items-center gap-2">
                <Phone width={16} height={16}/>
                <a href="tel:+919958480667" className="text-black hover:underline no-underline">
                  +91 9958480667
                </a>
              </p>
              <p className="contact-desc text-black flex items-center gap-2">
                <Mail width={16} height={16}/>
                <a href="mailto:akhil.pramanikalegal@gmail.com" className="text-black hover:underline no-underline">
                  akhil.pramanikalegal@gmail.com
                </a>
              </p>
              </div>
            </div>

            {/* World map placeholder */}
            <div className="w-full rounded overflow-hidden border border-black/10 bg-white">
              <iframe
                title="Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3504.0823755714828!2d77.23706800000001!3d28.567289000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM0JzAyLjIiTiA3N8KwMTQnMTMuNCJF!5e0!3m2!1sen!2sin!4v1774350276476!5m2!1sen!2sin"
                width="100%"
                height="280"
                style={{ border: 0, filter: "grayscale(100%) contrast(1.05)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* ── RIGHT: Contact Form ── */}
          <div className="border border-[#0000004D] p-4 md:p-[24px] flex flex-col">
            <h2
              className="mb-[18px] text-[#050505] text-[16px] md:text-[24px]"
              style={{
                fontFamily: "var(--font-roboto)",
                fontWeight: 400,
                fontStyle: "Regular",
                lineHeight: "28.8px",
                letterSpacing: "0%",
                textTransform: "uppercase",
              }}
            >
              Discuss Your Requirements
            </h2>
            <div className="w-full h-[1px] bg-[#00000033] mb-[24px]"></div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-[16px]">
              {/* Full Name */}
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter Your Full Name Here"
                required
                className="w-full border border-[#D0D0D0] bg-[#F9F9F9] px-4 py-3 text-[14px] text-[#333] placeholder-[#999] focus:outline-none focus:border-[#2E31CA] transition-colors"
                style={{ fontFamily: "var(--font-roboto)" }}
              />

              {/* Company */}
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company / Organization"
                className="w-full border border-[#D0D0D0] bg-[#F9F9F9] px-4 py-3 text-[14px] text-[#333] placeholder-[#999] focus:outline-none focus:border-[#2E31CA] transition-colors"
                style={{ fontFamily: "var(--font-roboto)" }}
              />

              {/* Email + Phone row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className={`w-full border bg-[#F9F9F9] px-4 py-3 text-[14px] text-[#333] placeholder-[#999] focus:outline-none transition-colors ${errors.email ? "border-red-400 focus:border-red-400" : "border-[#D0D0D0] focus:border-[#2E31CA]"}`}
                    style={{ fontFamily: "var(--font-roboto)" }}
                  />
                  {errors.email && <p className="text-[11px] text-red-500" style={{ fontFamily: "var(--font-roboto)" }}>{errors.email}</p>}
                </div>
                <div className="flex flex-col gap-1">
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91XXXXXXXXXX"
                    className={`w-full border bg-[#F9F9F9] px-4 py-3 text-[14px] text-[#333] placeholder-[#999] focus:outline-none transition-colors ${errors.phone ? "border-red-400 focus:border-red-400" : "border-[#D0D0D0] focus:border-[#2E31CA]"}`}
                    style={{ fontFamily: "var(--font-roboto)" }}
                  />
                  {errors.phone && <p className="text-[11px] text-red-500" style={{ fontFamily: "var(--font-roboto)" }}>{errors.phone}</p>}
                </div>
              </div>

              {/* Message */}
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Briefly describe your matter... (optional)"
                rows={4}
                className="w-full border border-[#D0D0D0] bg-[#F9F9F9] px-4 py-3 text-[14px] text-[#333] placeholder-[#999] focus:outline-none focus:border-[#2E31CA] transition-colors resize-none"
                style={{ fontFamily: "var(--font-roboto)" }}
              />

              {/* Primary CTA */}
              <button
                type="submit"
                className="w-full cursor-pointer bg-[#2E31CA] text-white py-[14px] px-6 text-[15px] font-medium flex items-center justify-center gap-2 hover:opacity-90 active:opacity-75 transition-opacity"
                style={{ fontFamily: "var(--font-roboto)" }}
              >
                Schedule a Meeting ↗
              </button>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-black/10" />
                <span className="text-[12px] text-[#999]" style={{ fontFamily: "var(--font-roboto)" }}>OR</span>
                <div className="flex-1 h-px bg-black/10" />
              </div>

              {/* WhatsApp CTA */}
              <button
                type="button"
                onClick={() => {
                  const greeting = form.name.trim() ? `Hi, I'm ${form.name.trim()}.` : "Hi,";
                  const body = form.message.trim()
                    ? `${greeting} I'd like to discuss: ${form.message.trim()}`
                    : `${greeting} I'd like to get some legal guidance.`;
                  window.open(
                    `https://wa.me/919958480667?text=${encodeURIComponent(body)}`,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className="w-full cursor-pointer bg-[#25D366] text-white py-[14px] px-6 text-[15px] font-medium flex items-center justify-center gap-2 hover:opacity-90 active:opacity-75 transition-opacity"
                style={{ fontFamily: "var(--font-roboto)" }}
              >
                <svg viewBox="0 0 32 32" width="18" height="18" fill="white">
                  <path d="M16 2C8.268 2 2 8.268 2 16c0 2.456.664 4.758 1.82 6.74L2 30l7.46-1.796A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.56 11.56 0 01-5.9-1.616l-.424-.252-4.424 1.064 1.1-4.308-.276-.44A11.557 11.557 0 014.4 16C4.4 9.592 9.592 4.4 16 4.4S27.6 9.592 27.6 16 22.408 27.6 16 27.6zm6.34-8.68c-.348-.176-2.06-1.016-2.38-1.132-.32-.116-.552-.176-.784.176-.232.348-.9 1.132-1.104 1.368-.2.232-.404.26-.752.084-.348-.176-1.468-.54-2.796-1.724-1.032-.92-1.728-2.056-1.932-2.404-.204-.348-.02-.536.152-.708.156-.156.348-.404.524-.608.172-.2.228-.348.344-.58.116-.232.06-.436-.028-.612-.088-.176-.784-1.892-1.076-2.592-.284-.68-.572-.588-.784-.596-.204-.008-.436-.012-.668-.012s-.608.088-.928.436c-.32.348-1.22 1.192-1.22 2.908s1.248 3.372 1.424 3.604c.176.232 2.456 3.752 5.952 5.26.832.36 1.48.576 1.988.736.836.268 1.596.228 2.196.14.672-.1 2.06-.844 2.352-1.66.292-.816.292-1.516.204-1.66-.084-.148-.316-.232-.664-.408z" />
                </svg>
                Connect on WhatsApp
              </button>
            </form>
          </div>

        </div>
      </div>

      {showCalendly && (
        <PopupModal
          url={process.env.NEXT_PUBLIC_CALENDLY_URL!}
          prefill={{
            name: form.name,
            email: form.email,
            customAnswers: {
              a1: e164Phone,
              ...(form.message.trim() ? { a2: form.message } : {}),
            },
          }}
          onModalClose={() => setShowCalendly(false)}
          open={showCalendly}
          rootElement={document.body}
        />
      )}
    </section>
  );
}

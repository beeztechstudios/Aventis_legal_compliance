'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PopupModal } from 'react-calendly';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const container = React.useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [showCalendly, setShowCalendly] = useState(false);
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppClick = () => {
    const greeting = formData.name.trim() ? `Hi, I'm ${formData.name.trim()}.` : "Hi,";
    const body = formData.message.trim()
      ? `${greeting} I'd like to discuss: ${formData.message.trim()}`
      : `${greeting} I'd like to get some legal guidance.`;
    window.open(
      `https://wa.me/919818162862?text=${encodeURIComponent(body)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!calendlyUrl) {
      console.warn('Missing NEXT_PUBLIC_CALENDLY_URL');
      return;
    }
    setShowCalendly(true);
  };

  useGSAP(() => {
    gsap.from(".hero-content > *", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });

    gsap.from(".hero-image", {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  }, { scope: container });

  return (
    <main ref={container} className="flex flex-col min-h-screen bg-[#FAF1E1]">
      <Navbar />

      {/* Contact Hero Section */}
      <section className="px-6 md:px-12 w-full relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
        {/* Decorative Lines */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 hidden lg:block">
          <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-30">
            <path d="M 350,550 L 550,450 L 800,550" stroke="#A17755" strokeWidth="1" />
            <path d="M 350,600 L 550,500 L 800,600" stroke="#A17755" strokeWidth="1" />
          </svg>
        </div>

        {/* Left Side: Content */}
        <div className="w-full lg:w-[48%] hero-content pt-16 md:pt-24 pb-0 relative z-10">
          <h1 className="heading-hero !text-[30px] md:!text-[48px] lg:!text-[64px] mb-2">
            <span className="block lg:whitespace-nowrap">Contact Aventis</span>
            <span className="block lg:whitespace-nowrap">Compliance Solutions</span>
          </h1>
          <p className="section-description heading-to-desc mb-4 max-w-[540px]">
            Connect with our team for reliable labour law compliance and regulatory support tailored to your business requirements.
          </p>
          <button
            type="button"
            onClick={() => setShowCalendly(true)}
            className="bg-[#A17755] text-white px-8 py-3.5 rounded-md font-sans font-medium text-[15px] hover:bg-[#8F6F4E] transition-colors shadow-sm"
          >
            Book Consultation
          </button>
          <p className="text-[#131C2B]/60 text-xs mt-6 font-sans">
            Located in <span className="font-semibold text-[#131C2B]">India.</span>
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-[50%] h-[280px] sm:h-[340px] md:h-[420px] lg:h-[480px] xl:h-[520px] 2xl:h-[580px] relative hero-image z-10 rounded-lg overflow-hidden">
          <Image
            src="/contact.png"
            alt="Contact Hero Image"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* Connect Section */}
      <section id="contact-details" className="px-6 md:px-12 py-20 md:py-32 w-full bg-[#FAF1E1]">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Column: Info & Map */}
          <div className="flex-1 lg:max-w-[45%] flex flex-col">
            <h2 className="heading-section heading-to-desc">Connect With Aventis</h2>
            <p className="section-description mb-10">
              We help businesses navigate labour law and regulatory requirements with structured, responsive, and practical compliance support across India.
            </p>

            <div className="flex flex-col gap-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#A17755]/10 flex items-center justify-center shrink-0">
                  <Image src="/call-icon.svg" alt="Phone" width={20} height={20} className="w-5 h-5" />
                </div>
                <div>
                  <a href="tel:+919818162862" className="text-[#131C2B] text-[16px] md:text-[17px] hover:text-[#A17755] transition-colors">
                    +91 9818162862
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#A17755]/10 flex items-center justify-center shrink-0">
                  <Image src="/mail-icon.svg" alt="Email" width={20} height={20} className="w-5 h-5" />
                </div>
                <div>
                  <a href="mailto:info@aventiscompliance.com" className="text-[#131C2B] text-[16px] md:text-[17px] hover:text-[#A17755] transition-colors">
                    info@aventiscompliance.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#A17755]/10 flex items-center justify-center shrink-0">
                  <Image src="/map-icon.svg" alt="Location" width={20} height={20} className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[#131C2B] text-[16px] md:text-[17px] leading-relaxed">
                    F-1164, Basement, Chittaranjan<br />Park, New Delhi – 110019
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="w-full rounded-2xl overflow-hidden border border-[#131C2B]/10 shadow-sm">
              <iframe
                title="Office Location Map"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBVizdQeh3udy11xDc5Ao2YStR2gLc-rfc&amp;q=F-1164%2C%20Basement%2C%20Chittaranjan%20Park%2C%20New%20Delhi%20%E2%80%93%20110019&amp;maptype=roadmap&amp;zoom=14"
                width="100%"
                height="320"
                style={{ border: 0, filter: "grayscale(100%) contrast(1.05)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="flex-1 lg:max-w-[50%] bg-[#FCFCFC] border border-white/60 rounded-2xl p-8 md:p-12 shadow-sm">
            <h3 className="heading-section heading-to-desc text-[20px] md:text-[32px] lg:text-[40px] whitespace-nowrap overflow-hidden">
              let&apos;s discuss your requirements
            </h3>
            <div className="w-full h-px bg-[#131C2B]/10 mb-10"></div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <label className="text-[14px] font-medium text-[#131C2B] font-sans">Enter Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter Your Full Name"
                  className="w-full px-5 py-4 bg-[#EBEBEB] border-none rounded-md text-[15px] focus:outline-none focus:ring-1 focus:ring-[#A17755]/30 transition-all placeholder:text-[#131C2B]/60"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 flex flex-col gap-3">
                  <label className="text-[14px] font-medium text-[#131C2B] font-sans">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter Your Email Address"
                    className="w-full px-5 py-4 bg-[#EBEBEB] border-none rounded-md text-[15px] focus:outline-none focus:ring-1 focus:ring-[#A17755]/30 transition-all placeholder:text-[#131C2B]/60"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-3">
                  <label className="text-[14px] font-medium text-[#131C2B] font-sans">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter Your Phone Number"
                    className="w-full px-5 py-4 bg-[#EBEBEB] border-none rounded-md text-[15px] focus:outline-none focus:ring-1 focus:ring-[#A17755]/30 transition-all placeholder:text-[#131C2B]/60"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[14px] font-medium text-[#131C2B] font-sans">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Briefly describe your requirements... (optional)"
                  rows={4}
                  className="w-full px-5 py-4 bg-[#EBEBEB] border-none rounded-md text-[15px] focus:outline-none focus:ring-1 focus:ring-[#A17755]/30 transition-all resize-none placeholder:text-[#131C2B]/60"
                />
              </div>

              <div className="flex flex-col gap-4 mt-4">
                <button
                  type="submit"
                  className="w-full bg-[#A17755] text-white py-4 rounded-md font-sans font-medium text-[16px] hover:bg-[#8F6F4E] transition-colors"
                >
                  Schedule a Consultation
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="w-full bg-[#FAF1E1] text-[#A17755] py-4 rounded-md font-sans font-medium text-[15px] flex items-center justify-center gap-2 border border-[#A17755]/20 hover:bg-[#F5EAD6] transition-colors"
                >
                  <Image src="/whatsapp-icon.svg" alt="WhatsApp" width={20} height={20} className="w-5 h-5" />
                  Connect on WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <FAQ />
      <CallToAction />
      <Footer />

      {showCalendly && calendlyUrl ? (
        <PopupModal
          url={calendlyUrl}
          prefill={{
            name: formData.name,
            email: formData.email,
            customAnswers: {
              a1: formData.phone,
              ...(formData.message.trim() ? { a2: formData.message } : {}),
            },
          }}
          onModalClose={() => setShowCalendly(false)}
          open={showCalendly}
          rootElement={document.body}
        />
      ) : null}
    </main>
  );
}

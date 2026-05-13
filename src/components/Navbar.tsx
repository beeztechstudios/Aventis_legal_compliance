'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '/practice-areas', label: 'Practice Areas' },
  { href: '#industries', label: 'Industries' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full flex flex-col">
      {/* Top Banner — hidden on mobile */}
      <div className="hidden md:flex w-full bg-[#CBB283] py-2 items-center justify-center">
        <p className="text-[#131C2B] text-[13px] md:text-sm font-medium flex items-center gap-2 text-center px-4">
          <BookOpen className="w-4 h-4 opacity-70 shrink-0" />
          The Importance of Timely Compliance in Labour Law &amp; Regulatory Obligations
        </p>
      </div>

      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-6 w-full relative">
        {/* Logo Area */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Aventis Compliance Solutions"
              width={160}
              height={56}
              className="h-12 md:h-14 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10 text-[15px] font-sans text-[#131C2B]">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:opacity-70 transition-opacity">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Burger Button */}
        <button
          className="md:hidden p-1 text-[#131C2B] hover:opacity-70 transition-opacity"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
            onClick={() => setMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="fixed top-0 right-0 z-50 h-full w-72 bg-[#FAF1E1] shadow-2xl flex flex-col md:hidden animate-[slideIn_0.25s_ease-out]">
            {/* Close button */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-[#CBB283]/40">
              <Image
                src="/logo.svg"
                alt="Aventis Compliance Solutions"
                width={130}
                height={46}
                className="h-10 w-auto object-contain"
              />
              <button
                onClick={() => setMenuOpen(false)}
                className="p-1 text-[#131C2B] hover:opacity-70 transition-opacity"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-1 px-4 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-md text-[16px] font-medium text-[#131C2B] hover:bg-[#CBB283]/30 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto px-8 pb-8">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center bg-[#A17755] hover:bg-[#8F6F4E] text-white rounded-md py-3 text-[15px] font-medium transition-colors"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </>
      )}

      {/* Slide-in animation */}
      <style jsx>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

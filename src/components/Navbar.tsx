'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, BookOpen } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/practice-areas', label: 'Practice Areas' },
  { href: '/#industries', label: 'Industries' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div 
        className={`w-full flex flex-col sticky top-0 z-50 bg-beige transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Top Banner — hidden on mobile & tablet */}
        <div className="hidden lg:flex w-full bg-[#CBB283] py-2 items-center justify-center">
          <p className="text-[#131C2B] text-[13px] md:text-sm font-medium flex items-center gap-2 text-center px-4">
            <BookOpen className="w-4 h-4 opacity-70 shrink-0" />
            The Importance of Timely Compliance in Labour Law &amp; Regulatory Obligations
          </p>
        </div>

        {/* Main Navbar */}
        <nav className="flex items-center justify-between px-6 lg:px-6 xl:px-12 py-6 w-full relative">
          {/* Logo Area */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Aventis Compliance Solutions"
                width={160}
                height={56}
                className="h-12 lg:h-14 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center lg:space-x-1.5 xl:space-x-4 lg:text-[15px] xl:text-[17px] font-sans text-[#131C2B]">
            {navLinks.map((link) => {
              const isActive = link.href === '/' 
                ? pathname === '/' 
                : link.href === '/#industries' 
                  ? false 
                  : pathname === link.href || pathname.startsWith(link.href + '/');
              return (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={`nav-link-btn lg:px-2.5 xl:px-[0.95rem] whitespace-nowrap ${isActive ? 'nav-link-btn-active' : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Burger Button */}
          <button
            className="lg:hidden p-1 text-[#131C2B] hover:opacity-70 transition-opacity"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X className="w-[30px] h-[30px]" /> : <Menu className="w-[30px] h-[30px]" />}
          </button>
        </nav>
      </div>

      {/* Mobile/Tablet Drawer */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
            onClick={() => setMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="fixed top-0 right-0 z-50 h-full w-72 bg-beige shadow-2xl flex flex-col lg:hidden animate-[slideIn_0.25s_ease-out]">
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
                <X className="w-[26px] h-[26px]" />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-1 px-4 py-6">
              {navLinks.map((link) => {
                const isActive = link.href === '/' 
                  ? pathname === '/' 
                  : link.href === '/#industries' 
                    ? false 
                    : pathname === link.href || pathname.startsWith(link.href + '/');
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`px-4 py-3 rounded-md text-[18px] font-medium transition-all ${
                      isActive 
                        ? 'bg-[#A17755] text-[#FAF1E1] hover:bg-[#A17755]' 
                        : 'text-[#131C2B] hover:bg-[#CBB283]/30'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto px-8 pb-8">
              <Link
                href="/contact#connect"
                onClick={() => setMenuOpen(false)}
                className="btn-premium block w-full text-center py-3 text-[17px] rounded-md cursor-pointer"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}

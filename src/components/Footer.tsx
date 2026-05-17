import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#FAF1E1] pt-12 md:pt-20 pb-10">
      <div className="w-full px-5 sm:px-8 md:px-12 mx-auto">

        <div className="flex flex-col lg:flex-row justify-between mb-12 md:mb-20 gap-10 lg:gap-12">

          {/* Left Side: Branding & Newsletter */}
          <div className="flex flex-col w-full lg:max-w-[520px]">
            {/* Logo */}
            <div className="mb-6">
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="Aventis Compliance Solutions"
                  width={160}
                  height={56}
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                />
              </Link>
            </div>

            <p className="text-[#131C2B]/60 text-[14px] sm:text-[15px] leading-relaxed mb-8 max-w-[480px]">
              Providing reliable labour law compliance, HR governance, and regulatory advisory services across India.
            </p>

            {/* Newsletter */}
            <div>
              <h4 className="font-serif text-[18px] sm:text-[22px] md:text-[26px] text-[#131C2B] mb-2 leading-snug">
                Stay Updated with Compliance Insights
              </h4>
              <p className="text-[#131C2B]/50 text-[13px] sm:text-[14px] mb-4">
                Get updates on labour laws, compliance requirements, and regulatory changes.
              </p>
              {/* Input + Button — full width on mobile, capped on desktop */}
              <div className="flex w-full lg:max-w-[420px] h-[46px] sm:h-[52px]">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 min-w-0 bg-[#E3D0AD] px-4 sm:px-6 text-[#131C2B] placeholder-[#131C2B]/60 outline-none text-[13px] sm:text-[15px] rounded-none"
                />
                <button className="btn-premium px-5 sm:px-8 text-[13px] sm:text-[15px] rounded-none whitespace-nowrap flex-shrink-0">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Links */}
          <div className="flex flex-col pt-0 lg:pt-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 sm:gap-x-14 md:gap-x-16 gap-y-8 mb-10 md:mb-16">
              {/* Pages */}
              <div className="flex flex-col gap-4">
                <h5 className="text-[#A17755] font-sans text-[13px] sm:text-[15px] mb-1 font-medium uppercase tracking-wide">Pages</h5>
                <Link href="/" className="text-[#131C2B] text-[13px] sm:text-[15px] hover:text-[#A17755] transition-colors">Home</Link>
                <Link href="/#practice-areas" className="text-[#131C2B] text-[13px] sm:text-[15px] hover:text-[#A17755] transition-colors">Practice Areas</Link>
                <Link href="/#industries" className="text-[#131C2B] text-[13px] sm:text-[15px] hover:text-[#A17755] transition-colors">Industries</Link>
                <Link href="/insights" className="text-[#131C2B] text-[13px] sm:text-[15px] hover:text-[#A17755] transition-colors">Insights</Link>
                <Link href="/about" className="text-[#131C2B] text-[13px] sm:text-[15px] hover:text-[#A17755] transition-colors">About</Link>
                <Link href="/contact" className="text-[#131C2B] text-[13px] sm:text-[15px] hover:text-[#A17755] transition-colors">Contact</Link>
              </div>

              {/* Inners */}
              <div className="flex flex-col gap-4">
                <h5 className="text-[#A17755] font-sans text-[13px] sm:text-[15px] mb-1 font-medium uppercase tracking-wide">Services</h5>
                <Link href="#" className="text-[#131C2B] text-[13px] sm:text-[15px] hover:text-[#A17755] transition-colors">Labour Law Compliance</Link>
                <Link href="#" className="text-[#131C2B] text-[13px] sm:text-[15px] hover:text-[#A17755] transition-colors">POSH Compliance</Link>
                <Link href="#" className="text-[#131C2B] text-[13px] sm:text-[15px] hover:text-[#A17755] transition-colors">Payroll Compliance</Link>
                <Link href="#" className="text-[#131C2B] text-[13px] sm:text-[15px] hover:text-[#A17755] transition-colors">Liaison Support</Link>
              </div>

              {/* Utility */}
              <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
                <h5 className="text-[#A17755] font-sans text-[13px] sm:text-[15px] mb-1 font-medium uppercase tracking-wide">Utility</h5>
                <Link href="#" className="text-[#131C2B] text-[13px] sm:text-[15px] hover:text-[#A17755] transition-colors">Privacy Policy</Link>
                <Link href="#" className="text-[#131C2B] text-[13px] sm:text-[15px] hover:text-[#A17755] transition-colors">Terms &amp; Conditions</Link>
                <Link href="#" className="text-[#131C2B] text-[13px] sm:text-[15px] hover:text-[#A17755] transition-colors">Disclaimer</Link>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 sm:gap-8 items-center">
              <Link href="#" className="text-[#131C2B] hover:text-[#A17755] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </Link>
              <Link href="#" className="text-[#131C2B] hover:text-[#A17755] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
              </Link>
              <Link href="#" className="text-[#131C2B] hover:text-[#A17755] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Line & Copyright */}
        <div className="border-t border-[#131C2B]/10 pt-6">
          <p className="text-[#131C2B]/50 text-[12px] sm:text-[14px]">© 2024 Aventis Compliance Solutions. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#FAF1E1] pt-12 md:pt-20 pb-10">
      <div className="w-full px-5 sm:px-8 md:px-12 mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 mb-12 md:mb-20 gap-y-12 md:gap-y-16 lg:gap-y-0 gap-x-10 lg:gap-x-12 xl:gap-x-16">

          {/* Left Side: Branding */}
          <div className="flex flex-col justify-start items-start text-left w-full lg:col-span-4 xl:col-span-4">
            {/* Logo */}
            <div className="mb-6">
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="Aventis Compliance Solutions"
                  width={320}
                  height={112}
                  className="h-10 sm:h-14 md:h-16 lg:h-20 xl:h-24 2xl:h-28 w-auto object-contain"
                />
              </Link>
            </div>

            <p className="text-[#131C2B]/60 text-[14px] sm:text-[15px] leading-relaxed max-w-[400px] md:max-w-none lg:max-w-[400px]">
              Providing reliable labour law compliance, HR governance, and regulatory advisory services across India.
            </p>
          </div>

          {/* Right Side: Links + Social */}
          <div className="flex flex-col pt-0 lg:pt-4 lg:col-span-8 xl:col-span-8 w-full items-start lg:items-end">
            <div className="flex flex-col items-start w-full lg:w-fit lg:pr-14 xl:pr-[115px]">

            {/* Links Grid: PAGES | SERVICES | UTILITY */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row justify-start gap-x-10 sm:gap-x-16 md:gap-x-20 lg:gap-x-14 xl:gap-x-[115px] gap-y-8 mb-10 md:mb-14 w-full">

              {/* PAGES Column */}
              <div className="flex flex-col gap-4 text-left">
                <h5 className="text-[#A17755] font-sans text-[13px] sm:text-[15px] font-medium tracking-wide">Pages</h5>
                <div className="flex flex-col gap-3">
                  <Link href="/" className="text-[#131C2B] text-[13px] sm:text-[15px] hover:text-[#A17755] transition-colors">Home</Link>
                  <Link href="/practice-areas" className="text-[#131C2B] text-[13px] sm:text-[15px] hover:text-[#A17755] transition-colors">Practice Areas</Link>
                  <Link href="/#industries" className="text-[#131C2B] text-[13px] sm:text-[15px] hover:text-[#A17755] transition-colors">Industries</Link>
                  <Link href="/insights" className="text-[#131C2B] text-[13px] sm:text-[15px] hover:text-[#A17755] transition-colors">Insights</Link>
                  <Link href="/about" className="text-[#131C2B] text-[13px] sm:text-[15px] hover:text-[#A17755] transition-colors">About Us</Link>
                  <Link href="/contact" className="text-[#131C2B] text-[13px] sm:text-[15px] hover:text-[#A17755] transition-colors">Contact Us</Link>
                </div>
              </div>

              {/* SERVICES Column */}
              <div className="flex flex-col gap-4 text-left">
                <h5 className="text-[#A17755] font-sans text-[13px] sm:text-[15px] font-medium tracking-wide">Inners</h5>
                <div className="flex flex-col gap-3">
                  <Link href="/practice-areas/labour-law-advisory-compliance" className="text-[#131C2B] text-[13px] sm:text-[15px] hover:text-[#A17755] transition-colors">Labour Law Compliance</Link>
                  <Link href="/practice-areas/posh-compliance-and-investigations" className="text-[#131C2B] text-[13px] sm:text-[15px] hover:text-[#A17755] transition-colors">POSH Compliance</Link>
                  <Link href="/practice-areas/payroll-and-statutory-compliances" className="text-[#131C2B] text-[13px] sm:text-[15px] hover:text-[#A17755] transition-colors">Payroll Compliance</Link>
                  <Link href="/practice-areas/labour-department-liaison" className="text-[#131C2B] text-[13px] sm:text-[15px] hover:text-[#A17755] transition-colors">Liaison Support</Link>
                </div>
              </div>

              {/* UTILITY Column */}
              <div className="flex flex-col gap-4 text-left">
                <h5 className="text-[#A17755] font-sans text-[13px] sm:text-[15px] font-medium tracking-wide">Utility</h5>
                <div className="flex flex-col gap-3">
                  <Link href="/privacy-policy" className="text-[#131C2B] text-[13px] sm:text-[15px] hover:text-[#A17755] transition-colors">Privacy Policy</Link>
                  <Link href="/terms-of-service" className="text-[#131C2B] text-[13px] sm:text-[15px] hover:text-[#A17755] transition-colors">Terms of Service</Link>
                </div>
              </div>

            </div>

            {/* Social Icons — bottom-left of links area */}
            <div className="flex gap-5 sm:gap-7 items-center justify-start w-full lg:w-auto">
              <Link href="#" className="text-[#131C2B] hover:text-[#A17755] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
              </Link>
              <Link href="https://www.linkedin.com/company/aventis-legal-solutions" target="_blank" className="text-[#131C2B] hover:text-[#A17755] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
              </Link>
              <Link href="#" className="text-[#131C2B] hover:text-[#A17755] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </Link>
            </div>

            </div>
          </div>

        </div>

        {/* Bottom Line & Copyright */}
        <div className="border-t border-[#131C2B]/10 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-[#131C2B]/50 text-[12px] sm:text-[14px] text-left">© 2026 Aventis Compliance Solutions. All rights reserved.</p>
          <p className="text-[#131C2B]/50 text-[12px] sm:text-[14px] text-left sm:text-right">
            Designed and Developed by{' '}
            <Link
              href="https://www.beeztech.studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline text-[#131C2B]/70 hover:text-[#131C2B] transition-colors"
            >
              Beeztech
            </Link>
          </p>
        </div>

      </div>
    </footer>
  );
}

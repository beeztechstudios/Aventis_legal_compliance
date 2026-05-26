import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import PageAnimate from "@/components/PageAnimate";

export const metadata: Metadata = {
  title: 'Terms of Service | Aventis Compliance Solutions',
  description: 'Terms of Service for Aventis Compliance Solutions.',
};

export default function TermsOfServicePage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#FAF1E1]">
      <Navbar />

      <PageAnimate>
        <section className="px-6 md:px-12 py-16 md:py-24 max-w-4xl mx-auto w-full">
          <div className="hero-content">
            <h1 className="heading-hero mb-12">Terms of Service</h1>
          </div>

        <div className="flex flex-col space-y-12">
          {/* Section 1 */}
          <div>
            <h2 className="heading-sub mb-4">1. Acceptance of Terms</h2>
            <div className="section-description space-y-4">
              <p>
                By accessing and using this website, you agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="heading-sub mb-4">2. Informational Purpose Only</h2>
            <div className="section-description space-y-4">
              <p>
                All content on this website is provided for general informational purposes only and should not be construed as legal advice.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="heading-sub mb-4">3. No Advocate-Client Relationship</h2>
            <div className="section-description space-y-4">
              <p>
                Use of this website does not establish any advocate-client or advisory relationship. A formal engagement is required for professional services.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="heading-sub mb-4">4. No Guarantee of Outcome</h2>
            <div className="section-description space-y-4">
              <p>
                The Firm does not guarantee outcomes or results of any advisory, compliance, or legal matter.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="heading-sub mb-4">5. User Conduct</h2>
            <div className="section-description space-y-4">
              <p>Users agree not to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Use the website for unlawful purposes</li>
                <li>Submit false, misleading, or harmful information</li>
                <li>Attempt to disrupt website functionality</li>
              </ul>
            </div>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="heading-sub mb-4">6. User Submissions</h2>
            <div className="section-description space-y-4">
              <p>Any information submitted through the website:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Must be accurate and lawful</li>
                <li>Does not create confidentiality obligations unless formally agreed</li>
              </ul>
            </div>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="heading-sub mb-4">7. Intellectual Property</h2>
            <div className="section-description space-y-4">
              <p>
                All content on this website, including text, design, and materials, is the intellectual property of Aventis Compliance Solutions and may not be copied or reproduced without permission.
              </p>
            </div>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="heading-sub mb-4">8. Third-Party Links and Content</h2>
            <div className="section-description space-y-4">
              <p>
                The website may include third-party links. The Firm does not endorse or take responsibility for external content.
              </p>
            </div>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="heading-sub mb-4">9. Limitation of Liability</h2>
            <div className="section-description space-y-4">
              <p>The Firm shall not be liable for:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Any direct or indirect damages arising from website use</li>
                <li>Reliance on information provided on the website</li>
              </ul>
            </div>
          </div>

          {/* Section 10 */}
          <div>
            <h2 className="heading-sub mb-4">10. Website Availability</h2>
            <div className="section-description space-y-4">
              <p>
                We do not guarantee uninterrupted or error-free access to the website and may modify or discontinue it at any time.
              </p>
            </div>
          </div>

          {/* Section 11 */}
          <div>
            <h2 className="heading-sub mb-4">11. Governing Law and Jurisdiction</h2>
            <div className="section-description space-y-4">
              <p>
                These Terms shall be governed by the laws of India.<br />
                Jurisdiction shall lie with courts in New Delhi.
              </p>
            </div>
          </div>

          {/* Section 12 */}
          <div>
            <h2 className="heading-sub mb-4">12. Changes to Terms</h2>
            <div className="section-description space-y-4">
              <p>
                We reserve the right to modify these Terms at any time. Continued use of the website constitutes acceptance of updated terms.
              </p>
            </div>
          </div>

          {/* Section 13 */}
          <div className="bg-[#131C2B]/5 p-8 rounded-xl border border-[#131C2B]/10">
            <h2 className="heading-sub mb-4">13. Contact</h2>
            <div className="section-description space-y-4">
              <p className="font-semibold text-[#131C2B]">Aventis Compliance Solutions</p>
              <p>
                F-1164, Basement, Chittaranjan Park, <br />
                New Delhi – 110019
              </p>
              <p>
                <strong>Phone:</strong> <a href="tel:+919818162862" className="hover:text-[#A17755] transition-colors">+91 9818162862</a>
              </p>
              <p>
                <strong>Email:</strong> <a href="mailto:ishawadhwa@aventislegal.in" className="hover:text-[#A17755] transition-colors">ishawadhwa@aventislegal.in</a>
              </p>
              
              <div className="mt-8 pt-6 border-t border-[#131C2B]/10">
                <Link 
                  href="/contact" 
                  className="btn-premium shadow-sm text-[15px] px-8 py-3.5 rounded-md cursor-pointer inline-flex items-center justify-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
      </PageAnimate>

      <Footer />
    </main>
  );
}

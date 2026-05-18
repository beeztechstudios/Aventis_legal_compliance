import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Aventis Compliance Solutions',
  description: 'Privacy Policy of Aventis Compliance Solutions.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#FAF1E1]">
      <Navbar />

      <section className="px-6 md:px-12 py-16 md:py-24 max-w-4xl mx-auto w-full">
        <h1 className="heading-hero mb-12">Privacy Policy</h1>

        <div className="flex flex-col space-y-12">
          {/* Section 1 */}
          <div>
            <h2 className="heading-sub mb-4">1. Introduction</h2>
            <div className="section-description space-y-4">
              <p>
                Aventis Compliance Solutions (“Firm”, “we”, “our”, or “us”) is committed to protecting the privacy and confidentiality of users of its website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
              <p>
                By using this website, you consent to the practices described in this policy.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="heading-sub mb-4">2. Information We May Collect</h2>
            <div className="section-description space-y-4">
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Personal Information:</strong> Name, phone number, email address, organization details, or any information voluntarily submitted through contact forms or inquiries.</li>
                <li><strong>Professional Information:</strong> Business details shared for advisory or consultation purposes.</li>
                <li><strong>Technical Information:</strong> IP address, browser type, device information, and usage data.</li>
                <li><strong>Cookies & Usage Data:</strong> Information collected through cookies and analytics tools.</li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="heading-sub mb-4">3. How Information Is Used</h2>
            <div className="section-description space-y-4">
              <p>We use the collected information to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Respond to inquiries and provide requested services</li>
                <li>Offer legal and compliance-related guidance</li>
                <li>Improve website functionality and user experience</li>
                <li>Communicate updates, insights, or service-related information</li>
                <li>Maintain internal records and compliance documentation</li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="heading-sub mb-4">4. No Attorney-Client Relationship by Website Use Alone</h2>
            <div className="section-description space-y-4">
              <p>
                Use of this website, including submitting inquiries or contacting us, does not create an advocate-client or professional relationship. Such a relationship is established only through formal engagement.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="heading-sub mb-4">5. Sharing of Information</h2>
            <div className="section-description space-y-4">
              <p>We do not sell or rent personal information. Information may be shared only:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>With authorized team members for service delivery</li>
                <li>With regulatory authorities, if required by law</li>
                <li>With third-party service providers (e.g., IT support), subject to confidentiality obligations</li>
              </ul>
            </div>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="heading-sub mb-4">6. Data Security</h2>
            <div className="section-description space-y-4">
              <p>
                We implement reasonable technical and organizational safeguards to protect your data from unauthorized access, misuse, or disclosure. However, no system is completely secure, and absolute security cannot be guaranteed.
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="heading-sub mb-4">7. Cookies and Analytics</h2>
            <div className="section-description space-y-4">
              <p>Our website may use cookies and analytics tools to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Understand user behaviour</li>
                <li>Improve website performance</li>
                <li>Enhance user experience</li>
              </ul>
              <p>Users may choose to disable cookies through their browser settings.</p>
            </div>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="heading-sub mb-4">8. Data Retention</h2>
            <div className="section-description space-y-4">
              <p>We retain personal information only as long as necessary for:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Providing services</li>
                <li>Legal and regulatory compliance</li>
                <li>Internal record-keeping</li>
              </ul>
            </div>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="heading-sub mb-4">9. Third-Party Links</h2>
            <div className="section-description space-y-4">
              <p>
                The website may contain links to third-party websites. We are not responsible for the privacy practices or content of such websites.
              </p>
            </div>
          </div>

          {/* Section 10 */}
          <div>
            <h2 className="heading-sub mb-4">10. User Rights and Requests</h2>
            <div className="section-description space-y-4">
              <p>Users may request to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Access their personal data</li>
                <li>Correct or update information</li>
                <li>Request deletion (subject to legal obligations)</li>
              </ul>
              <p>Requests can be made via contact details below.</p>
            </div>
          </div>

          {/* Section 11 */}
          <div>
            <h2 className="heading-sub mb-4">11. Policy Updates</h2>
            <div className="section-description space-y-4">
              <p>
                We may update this Privacy Policy from time to time. Updates will be reflected on this page with revised effective dates.
              </p>
            </div>
          </div>

          {/* Section 12 */}
          <div className="bg-[#131C2B]/5 p-8 rounded-xl border border-[#131C2B]/10">
            <h2 className="heading-sub mb-4">12. Contact for Privacy Queries</h2>
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
                <strong>Email:</strong> <a href="mailto:mananoberoi@aventislegal.in" className="hover:text-[#A17755] transition-colors">mananoberoi@aventislegal.in</a>
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

      <Footer />
    </main>
  );
}

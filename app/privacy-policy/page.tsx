'use client';

import Link from 'next/link';
import { Shield, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F9EEDC] text-[#1E1E1E] pt-28 pb-16 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#8B0000]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-[#4A0404]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#4A0404]/60 hover:text-[#4A0404] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4A0404]/5 border border-[#4A0404]/10 text-xs font-semibold text-[#4A0404] uppercase tracking-wider w-fit">
            <Shield className="w-3.5 h-3.5" />
            Legal Documentation
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-[#4A0404] uppercase tracking-tight leading-none">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#1E1E1E]/50 font-medium">
            Last Updated: May 29, 2026
          </p>
        </div>

        {/* Content Card */}
        <div className="glass-layer rounded-3xl p-8 md:p-12 border border-[#4A0404]/10 shadow-lg bg-white/40 backdrop-blur-md space-y-8 font-sans text-sm md:text-base leading-relaxed text-[#1E1E1E]/80 font-light">
          <p className="text-[#1E1E1E] font-medium text-base">
            Welcome to Nexoresha Media Works (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
          </p>
          <p>
            We respect your privacy and are committed to protecting the information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
          </p>

          <hr className="border-[#4A0404]/10" />

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl text-[#4A0404] tracking-wider uppercase">
              1. Information We Collect
            </h2>
            <p>We may collect the following information:</p>
            <div className="space-y-4 pl-4 border-l border-[#4A0404]/20">
              <div>
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#4A0404] mb-1">Personal &amp; Business Information</h3>
                <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                  <li>Full Name</li>
                  <li>Email Address</li>
                  <li>Phone Number</li>
                  <li>Company Name</li>
                  <li>Business Information</li>
                  <li>Social Media Handles</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#4A0404] mb-1">Payment Information</h3>
                <p className="text-xs md:text-sm">
                  Payments are processed through secure third-party payment providers. We do not store your complete card or banking details on our servers.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#4A0404] mb-1">Automatically Collected Information</h3>
                <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                  <li>IP Address</li>
                  <li>Browser Type</li>
                  <li>Device Information</li>
                  <li>Pages Visited</li>
                  <li>Website Usage Data</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl text-[#4A0404] tracking-wider uppercase">
              2. How We Use Your Information
            </h2>
            <p>We use the collected information to:</p>
            <ul className="list-disc pl-5 space-y-1.5 pl-4 border-l border-[#4A0404]/20">
              <li>Provide requested services</li>
              <li>Create custom marketing strategies</li>
              <li>Process payments</li>
              <li>Respond to inquiries</li>
              <li>Improve website performance</li>
              <li>Send project updates</li>
              <li>Deliver customer support</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl text-[#4A0404] tracking-wider uppercase">
              3. Sharing of Information
            </h2>
            <p>We do not sell your personal information.</p>
            <p>Information may be shared with:</p>
            <ul className="list-disc pl-5 space-y-1.5 pl-4 border-l border-[#4A0404]/20">
              <li>Payment gateway providers</li>
              <li>Hosting providers</li>
              <li>Marketing tools</li>
              <li>Analytics services</li>
              <li>Government authorities when legally required</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl text-[#4A0404] tracking-wider uppercase">
              4. Cookies
            </h2>
            <p>Our website may use cookies to:</p>
            <ul className="list-disc pl-5 space-y-1.5 pl-4 border-l border-[#4A0404]/20">
              <li>Improve user experience</li>
              <li>Analyze traffic</li>
              <li>Remember preferences</li>
              <li>Enhance website performance</li>
            </ul>
            <p className="text-xs">Users may disable cookies through their browser settings.</p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl text-[#4A0404] tracking-wider uppercase">
              5. Data Security
            </h2>
            <p>
              We implement reasonable security measures to protect user information.
            </p>
            <p>
              However, no internet transmission method can be guaranteed to be 100% secure.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl text-[#4A0404] tracking-wider uppercase">
              6. Third-Party Services
            </h2>
            <p>
              Our website may contain links to third-party websites.
            </p>
            <p>
              We are not responsible for the privacy practices of those websites.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl text-[#4A0404] tracking-wider uppercase">
              7. Data Retention
            </h2>
            <p>We retain information only as long as necessary for:</p>
            <ul className="list-disc pl-5 space-y-1.5 pl-4 border-l border-[#4A0404]/20">
              <li>Service delivery</li>
              <li>Legal compliance</li>
              <li>Business operations</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl text-[#4A0404] tracking-wider uppercase">
              8. Your Rights
            </h2>
            <p>You may request:</p>
            <ul className="list-disc pl-5 space-y-1.5 pl-4 border-l border-[#4A0404]/20">
              <li>Access to your information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your information</li>
              <li>Withdrawal of consent where applicable</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl text-[#4A0404] tracking-wider uppercase">
              9. Changes to This Policy
            </h2>
            <p>We may update this Privacy Policy at any time.</p>
            <p>Updates will be reflected on this page.</p>
          </section>

          <hr className="border-[#4A0404]/10" />

          {/* Section 10 */}
          <section className="space-y-6">
            <h2 className="font-display text-2xl text-[#4A0404] tracking-wider uppercase">
              10. Contact Information
            </h2>
            <p>For privacy-related questions:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#4A0404]/5 p-6 rounded-2xl border border-[#4A0404]/10">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#4A0404] font-bold text-xs uppercase tracking-wider">
                  <Mail className="w-4 h-4" />
                  Email
                </div>
                <a href="mailto:nexoreshamediawork@gmail.com" className="text-xs text-[#1E1E1E] hover:underline font-semibold block break-all">
                  nexoreshamediawork@gmail.com
                </a>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#4A0404] font-bold text-xs uppercase tracking-wider">
                  <Phone className="w-4 h-4" />
                  Phone
                </div>
                <a href="tel:+919136936913" className="text-xs text-[#1E1E1E] hover:underline font-semibold block">
                  +91 91369 36913
                </a>
                <a href="tel:+918879501593" className="text-xs text-[#1E1E1E] hover:underline font-semibold block">
                  +91 88795 01593
                </a>
              </div>
              <div className="space-y-2 col-span-1 md:col-span-1">
                <div className="flex items-center gap-2 text-[#4A0404] font-bold text-xs uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  Address
                </div>
                <p className="text-xs text-[#1E1E1E]/80 font-medium leading-relaxed">
                  710, ganesh wadi building no 2, Midc, Andheri east
                </p>
              </div>
            </div>
            <p className="text-center font-display text-[#4A0404] text-xl tracking-wider pt-4">
              Nexoresha Media Works
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

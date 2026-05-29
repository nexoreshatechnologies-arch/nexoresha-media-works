'use client';

import Link from 'next/link';
import { FileText, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';

export default function TermsOfServicePage() {
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
            <FileText className="w-3.5 h-3.5" />
            Legal Documentation
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-[#4A0404] uppercase tracking-tight leading-none">
            Terms of Service
          </h1>
          <p className="text-xs text-[#1E1E1E]/50 font-medium">
            Last Updated: May 29, 2026
          </p>
        </div>

        {/* Content Card */}
        <div className="glass-layer rounded-3xl p-8 md:p-12 border border-[#4A0404]/10 shadow-lg bg-white/40 backdrop-blur-md space-y-8 font-sans text-sm md:text-base leading-relaxed text-[#1E1E1E]/80 font-light">
          <p className="text-[#1E1E1E] font-medium text-base">
            By accessing or using the Nexoresha Media Works website and services, you agree to these Terms of Service.
          </p>
          <p>
            If you do not agree, please discontinue use of our website and services.
          </p>

          <hr className="border-[#4A0404]/10" />

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl text-[#4A0404] tracking-wider uppercase">
              1. Services
            </h2>
            <p>Nexoresha Media Works provides services including:</p>
            <ul className="list-disc pl-5 space-y-1.5 pl-4 border-l border-[#4A0404]/20">
              <li>Social Media Management</li>
              <li>Branding</li>
              <li>Content Creation</li>
              <li>Reel Editing</li>
              <li>Content Planning</li>
              <li>Marketing Campaigns</li>
              <li>Photoshoots</li>
              <li>Videoshoots</li>
              <li>Advertising Services</li>
              <li>Custom Digital Solutions</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl text-[#4A0404] tracking-wider uppercase">
              2. Client Responsibilities
            </h2>
            <p>Clients agree to:</p>
            <ul className="list-disc pl-5 space-y-1.5 pl-4 border-l border-[#4A0404]/20">
              <li>Provide accurate information</li>
              <li>Supply required materials on time</li>
              <li>Review and approve content promptly</li>
              <li>Maintain lawful business practices</li>
            </ul>
            <p className="text-xs">
              Delays from the client side may affect project timelines.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl text-[#4A0404] tracking-wider uppercase">
              3. Payments
            </h2>
            <div className="space-y-4 pl-4 border-l border-[#4A0404]/20">
              <div>
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#4A0404] mb-1">General</h3>
                <p className="text-xs md:text-sm">
                  All payments must be made according to the agreed package or quotation.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#4A0404] mb-1">Custom Services</h3>
                <p className="text-xs md:text-sm">
                  Custom package pricing may vary depending on project scope and requirements.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#4A0404] mb-1">Late Payments</h3>
                <p className="text-xs md:text-sm">
                  Projects may be paused until outstanding payments are received.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl text-[#4A0404] tracking-wider uppercase">
              4. Refund Policy
            </h2>
            <p>Due to the nature of digital and creative services:</p>
            <div className="space-y-4 pl-4 border-l border-[#4A0404]/20">
              <div>
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#4A0404] mb-1">Non-Refundable Services</h3>
                <p className="text-xs md:text-sm">
                  Once work has begun, payments are generally non-refundable.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#4A0404] mb-1">Partial Refunds</h3>
                <p className="text-xs md:text-sm">
                  May be considered only in exceptional circumstances at our discretion.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#4A0404] mb-1">Custom Projects</h3>
                <p className="text-xs md:text-sm">
                  Custom projects are non-refundable once execution begins.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl text-[#4A0404] tracking-wider uppercase">
              5. Intellectual Property
            </h2>
            <div className="space-y-4 pl-4 border-l border-[#4A0404]/20">
              <div>
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#4A0404] mb-1">Client-Owned Materials</h3>
                <p className="text-xs md:text-sm">
                  Clients retain ownership of materials they provide.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#4A0404] mb-1">Agency-Created Materials</h3>
                <p className="text-xs md:text-sm">
                  Ownership of final deliverables transfers after full payment unless otherwise specified.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#4A0404] mb-1">Portfolio Rights</h3>
                <p className="text-xs md:text-sm">
                  Nexoresha Media Works reserves the right to showcase completed work in portfolios, social media, and case studies unless otherwise agreed in writing.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl text-[#4A0404] tracking-wider uppercase">
              6. Content Approval
            </h2>
            <p>
              Clients are responsible for reviewing and approving content before publication.
            </p>
            <p>
              We are not liable for errors that were approved by the client.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl text-[#4A0404] tracking-wider uppercase">
              7. Advertising Platforms
            </h2>
            <p>We are not responsible for decisions made by:</p>
            <ul className="list-disc pl-5 space-y-1 pl-4 border-l border-[#4A0404]/20 text-xs md:text-sm">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>YouTube</li>
              <li>Google</li>
              <li>Other advertising platforms</li>
            </ul>
            <p className="text-xs">
              Platform algorithm changes may impact campaign performance.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl text-[#4A0404] tracking-wider uppercase">
              8. Performance Disclaimer
            </h2>
            <p>We strive for the best results; however:</p>
            <div className="space-y-4 pl-4 border-l border-[#4A0404]/20">
              <div>
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#4A0404] mb-1">We do not guarantee:</h3>
                <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                  <li>Viral content</li>
                  <li>Specific follower growth</li>
                  <li>Specific sales numbers</li>
                  <li>Specific engagement rates</li>
                </ul>
              </div>
            </div>
            <p className="text-xs">
              Results depend on numerous external factors.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl text-[#4A0404] tracking-wider uppercase">
              9. Limitation of Liability
            </h2>
            <p>Nexoresha Media Works shall not be liable for:</p>
            <ul className="list-disc pl-5 space-y-1.5 pl-4 border-l border-[#4A0404]/20 text-xs md:text-sm">
              <li>Indirect damages</li>
              <li>Business losses</li>
              <li>Revenue losses</li>
              <li>Reputation losses</li>
              <li>Platform outages</li>
            </ul>
            <p className="text-xs font-semibold">
              Our maximum liability shall not exceed the amount paid for the service.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl text-[#4A0404] tracking-wider uppercase">
              10. Service Termination
            </h2>
            <p>We reserve the right to terminate services if:</p>
            <ul className="list-disc pl-5 space-y-1.5 pl-4 border-l border-[#4A0404]/20 text-xs md:text-sm">
              <li>Terms are violated</li>
              <li>Abusive behavior occurs</li>
              <li>Payments remain unpaid</li>
              <li>Illegal activities are involved</li>
            </ul>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl text-[#4A0404] tracking-wider uppercase">
              11. Governing Law
            </h2>
            <p>
              These Terms shall be governed by the laws of India.
            </p>
            <p>
              Any disputes shall be subject to the jurisdiction of the courts located in Maharashtra, India.
            </p>
          </section>

          <hr className="border-[#4A0404]/10" />

          {/* Section 12 */}
          <section className="space-y-6">
            <h2 className="font-display text-2xl text-[#4A0404] tracking-wider uppercase">
              12. Contact Information
            </h2>
            <p>For terms or service-related questions:</p>
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

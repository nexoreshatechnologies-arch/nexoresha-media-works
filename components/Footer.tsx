'use client';

import Link from 'next/link';
import { Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#4A0404] text-[#F9EEDC] mt-auto border-t border-[#8B0000]/10 rounded-t-[2.5rem] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <h2 className="font-display text-4xl tracking-wider text-[#EAD8C0]">NEXORESHA</h2>
            <p className="font-sans text-sm text-[#EAD8C0]/75 leading-relaxed max-w-sm">
              The Director's Eye for your brand. We redefine luxury through cinematic precision, branding strategies, and modern creative media production.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-xl border border-[#EAD8C0]/25 flex items-center justify-center hover:bg-[#8B0000] hover:border-[#8B0000] text-[#F9EEDC] transition-all duration-300 hover:scale-105"
                aria-label="Instagram Link"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl border border-[#EAD8C0]/25 flex items-center justify-center hover:bg-[#8B0000] hover:border-[#8B0000] text-[#F9EEDC] transition-all duration-300 hover:scale-105"
                aria-label="YouTube Link"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl border border-[#EAD8C0]/25 flex items-center justify-center hover:bg-[#8B0000] hover:border-[#8B0000] text-[#F9EEDC] transition-all duration-300 hover:scale-105"
                aria-label="LinkedIn Link"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-[#8B0000] bg-[#EAD8C0] px-3 py-1 rounded w-fit">
              Navigation
            </h4>
            <ul className="space-y-4 text-sm text-[#EAD8C0]/75">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/#companies" className="hover:text-white transition-colors">Brands</Link>
              </li>
              <li>
                <Link href="/highlights" className="hover:text-white transition-colors">Highlights</Link>
              </li>
              <li>
                <Link href="/#packages" className="hover:text-white transition-colors">Packages</Link>
              </li>
              <li>
                <Link href="/#customize" className="hover:text-white transition-colors">Custom Build</Link>
              </li>
            </ul>
          </div>

          {/* Socials / Contact Info */}
          <div className="space-y-6">
            <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-[#8B0000] bg-[#EAD8C0] px-3 py-1 rounded w-fit">
              Connect
            </h4>
            <ul className="space-y-4 text-sm text-[#EAD8C0]/75">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact Form</Link>
              </li>
              <li>
                <a href="mailto:ayush.choudhary@nexoresha.tech" className="hover:text-white transition-colors">ayush.choudhary@nexoresha.tech</a>
              </li>
              <li className="flex flex-col gap-1.5">
                <a href="tel:+919136936913" className="hover:text-white transition-colors font-medium">+91 91369 36913</a>
                <a href="tel:+918879501593" className="hover:text-white transition-colors font-medium">+91 88795 01593</a>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom divider and back to top */}
        <div className="mt-16 pt-8 border-t border-[#EAD8C0]/10 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-xs text-[#EAD8C0]/50 text-center sm:text-left">
            © 2026 Nexoresha Media Works. Developed by{' '}
            <a
              href="https://nexoresha.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline"
            >
              Nexoresha Technologies
            </a>
          </p>
          <button
            onClick={handleScrollToTop}
            className="group flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#EAD8C0]/70 hover:text-white transition-colors duration-300 cursor-pointer"
          >
            Back to Top
            <div className="w-8 h-8 rounded-full border border-[#EAD8C0]/20 flex items-center justify-center group-hover:bg-[#8B0000] group-hover:border-[#8B0000] transition-all duration-300">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}

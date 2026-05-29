'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useCartStore } from '@/lib/store';
import { ShoppingBag, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const pathname = usePathname();
  const router = useRouter();
  const { items, toggleCart } = useCartStore();
  
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  // Monitor scroll for glass styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check active section on home page
      if (pathname === '/') {
        const sections = ['home', 'companies', 'highlights', 'packages', 'customize'];
        const scrollPosition = window.scrollY + 200;

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (pathname === '/' && targetId !== 'contact' && targetId !== 'highlights') {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(targetId);
      }
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', href: '/', id: 'home' },
    { label: 'Companies', href: '/#companies', id: 'companies' },
    { label: 'Highlights', href: '/highlights', id: 'highlights' },
    { label: 'Packages', href: '/#packages', id: 'packages' },
    { label: 'Customize', href: '/#customize', id: 'customize' },
    { label: 'Contact Us', href: '/contact', id: 'contact' },
  ];

  return (
    <nav
      id="top-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 max-w-full ${
        isScrolled
          ? 'py-3 bg-[#F9EEDC]/20 backdrop-blur-xl border-b border-[#4A0404]/5 shadow-sm'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-[#4A0404]/10 bg-[#4A0404]/5 flex items-center justify-center transition-all duration-500 group-hover:rotate-12 group-hover:scale-105 group-hover:border-[#8B0000]/30 shadow-sm">
            <img
              src="/logo.png"
              alt="Nexoresha Media Works Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-display text-xl tracking-wider text-[#4A0404] transition-colors group-hover:text-[#8B0000]">
            NEXORESHA
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === '/'
              ? activeSection === item.id
              : (pathname === item.href ||
                 (item.id === 'highlights' && pathname.startsWith('/highlights')) ||
                 (item.id === 'contact' && pathname.startsWith('/contact')));

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative py-1 text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                  isActive ? 'text-[#8B0000]' : 'text-[#1E1E1E]/75 hover:text-[#4A0404]'
                }`}
              >
                {item.label}
                {/* Premium underline slide animation */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#8B0000] transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0'
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          {/* Cart Icon */}
          <button
            onClick={() => toggleCart(true)}
            className="relative p-2.5 rounded-xl border border-[#4A0404]/10 hover:border-[#4A0404]/30 bg-[#F9EEDC]/40 hover:bg-[#F9EEDC] text-[#4A0404] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Open Shopping Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#8B0000] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#F9EEDC]">
                {totalItems}
              </span>
            )}
          </button>

          {/* Quick Start Project CTA */}
          <Link
            href="/#packages"
            onClick={(e) => handleNavClick(e, 'packages')}
            className="hidden sm:flex bg-[#4A0404] hover:bg-[#8B0000] text-white px-6 py-2.5 rounded-xl font-medium text-xs tracking-wider uppercase transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-[0_4px_12px_rgba(74,4,4,0.15)] flex-row items-center gap-1.5"
          >
            Start Project
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="max-md:flex hidden relative p-2.5 rounded-xl border border-[#4A0404]/10 hover:border-[#4A0404]/30 bg-[#F9EEDC]/40 hover:bg-[#F9EEDC] text-[#4A0404] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer items-center justify-center"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay Slide */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute inset-x-0 top-full bg-[#F9EEDC]/95 backdrop-blur-md border-b border-[#4A0404]/10 shadow-lg px-6 py-8 flex flex-col gap-6 z-40 transition-all duration-300 animate-in fade-in slide-in-from-top-5">
          {navItems.map((item) => {
            const isActive = pathname === '/'
              ? activeSection === item.id
              : (pathname === item.href ||
                 (item.id === 'highlights' && pathname.startsWith('/highlights')) ||
                 (item.id === 'contact' && pathname.startsWith('/contact')));

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`text-lg font-display tracking-wider transition-colors py-2 border-b border-[#4A0404]/5 uppercase ${
                  isActive ? 'text-[#8B0000] font-semibold' : 'text-[#1E1E1E] hover:text-[#8B0000]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/#packages"
            onClick={(e) => handleNavClick(e, 'packages')}
            className="bg-[#4A0404] text-white text-center py-3.5 rounded-xl font-display tracking-widest text-lg uppercase hover:bg-[#8B0000] transition-all"
          >
            Start Project
          </Link>
        </div>
      )}
    </nav>
  );
}

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

interface Company {
  name: string;
  role: string;
  desc: string;
  tag: string;
  href: string;
}

const companies: Company[] = [
  {
    name: 'Nexoresha Technologies',
    role: 'Owner & Founder',
    desc: 'The technical core, building premium custom software solutions, ecommerce platforms, web applications, and digital interfaces.',
    tag: 'Tech Core',
    href: 'https://www.nexoreshamedia.works/',
  },
  {
    name: 'Nexoresha Tales',
    role: 'Owner & Founder',
    desc: 'The storytelling division, drafting rich narrative copy, editorial scriptures, brand storylines, and creative content scripts.',
    tag: 'Storytelling & Literature',
    href: '#',
  },
  {
    name: 'Nexoresha Media Works',
    role: 'Owner & Founder',
    desc: 'The production house, designing visual assets, filming cinematic advertisements, and managing high-tier social media channels.',
    tag: 'Cinematography & Branding',
    href: '/',
  },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto bg-[#F9EEDC] relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 right-[10%] w-[350px] h-[350px] bg-[#8B0000]/4 rounded-full blur-[90px]" />
        <div className="absolute bottom-1/4 left-[5%] w-[350px] h-[350px] bg-[#EAD8C0]/50 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        <div className="text-center space-y-3 max-w-md mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-[#8B0000] block">
            The Ecosystem
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-[#4A0404] uppercase">
            NEXORESHA BRANDS
          </h2>
          <p className="text-xs text-[#1E1E1E]/60 font-light leading-relaxed">
            Ventures built to scale custom engineering, storytelling, and high-fidelity production.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {companies.map((co, index) => (
            <Link
              href={co.href}
              key={co.name}
              target={co.href.startsWith('http') ? '_blank' : undefined}
              rel={co.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="block group"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                whileHover={{ y: -6 }}
                transition={{ 
                  y: { type: 'spring', stiffness: 350, damping: 20 },
                  opacity: { duration: 0.5, delay: index * 0.1 }
                }}
                className="glass-layer p-8 rounded-2xl border border-[#4A0404]/10 shadow-sm flex flex-col justify-between bg-white/20 hover:border-[#8B0000]/30 hover:bg-[#8B0000]/[0.01] transition-all h-full cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] uppercase font-bold tracking-widest text-[#8B0000] border border-[#8B0000]/20 px-2.5 py-1 rounded-full w-fit block bg-[#8B0000]/5">
                      {co.tag}
                    </span>
                    {co.href.startsWith('http') && (
                      <ExternalLink className="w-3.5 h-3.5 text-[#8B0000]/60 group-hover:text-[#8B0000] transition-colors" />
                    )}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display text-2xl text-[#4A0404] tracking-wide uppercase group-hover:text-[#8B0000] transition-colors">
                      {co.name}
                    </h3>
                    <p className="text-[10px] text-[#1E1E1E]/50 tracking-wider font-semibold uppercase">
                      {co.role}
                    </p>
                  </div>
                  <p className="text-xs text-[#1E1E1E]/75 leading-relaxed font-light">
                    {co.desc}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

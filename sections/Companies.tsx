'use client';

import { motion } from 'framer-motion';
import { Gem, Clock, Sparkles, Crown, Compass, GlassWater, Building2, Utensils, Car, Anchor } from 'lucide-react';

interface Company {
  name: string;
  category: string;
  stat: string;
  icon: any;
}

const row1Companies: Company[] = [
  { name: 'Lumina Lux', category: 'Luxury Hospitality', stat: '+240% Reach', icon: Gem },
  { name: 'Chronos Time', category: 'Haute Horology', stat: '+180% Growth', icon: Clock },
  { name: 'Vogue Elite', category: 'Fashion Agency', stat: '1.2M+ Views', icon: Sparkles },
  { name: 'Aurelia Gems', category: 'Fine Jewelry', stat: '+320% Sales', icon: Crown },
  { name: 'Zenith Yachts', category: 'Luxury Charters', stat: '+210% Booking', icon: Anchor },
];

const row2Companies: Company[] = [
  { name: 'Forma Studio', category: 'Architecture', stat: 'Award Winning', icon: Compass },
  { name: 'Estate Vines', category: 'Wine & Spirits', stat: '+310% Likes', icon: GlassWater },
  { name: 'Skyline Prop', category: 'Real Estate', stat: '+500 Leads', icon: Building2 },
  { name: 'Velvet Dine', category: 'Fine Dining', stat: '+150% Bookings', icon: Utensils },
  { name: 'Eclipse Motors', category: 'Hypercars', stat: 'Sold Out', icon: Car },
];

export default function Companies() {
  return (
    <section id="companies" className="py-24 bg-[#F5EBDD] overflow-hidden relative border-t border-[#4A0404]/5">
      {/* Background soft blurs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#EAD8C0]/30 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
        <h2 className="font-display text-3xl md:text-5xl text-[#4A0404]/30 tracking-[0.2em] uppercase">
          TRUSTED BY BRANDS
        </h2>
        <div className="h-[2px] w-24 bg-[#8B0000]/15 mx-auto mt-4" />
      </div>

      {/* Marquee Rows Container */}
      <div className="space-y-8 relative z-10">
        {/* Row 1: Left */}
        <div className="flex overflow-hidden select-none mask-image-gradient">
          <div className="flex gap-6 marquee-left py-2">
            {/* Direct list */}
            {row1Companies.concat(row1Companies).map((company, index) => {
              const Icon = company.icon;
              return (
                <motion.div
                  key={`r1-${index}`}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="glass-layer px-8 py-5 rounded-2xl flex items-center gap-5 min-w-[280px] cursor-pointer shadow-sm hover:shadow-[0_15px_30px_rgba(74,4,4,0.06)] border border-[#EAD8C0]/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#4A0404]/5 flex items-center justify-center text-[#4A0404] border border-[#4A0404]/10">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-[#4A0404] tracking-wide uppercase leading-tight">
                      {company.name}
                    </h4>
                    <p className="text-[10px] text-[#1E1E1E]/60 tracking-wider uppercase font-semibold">
                      {company.category}
                    </p>
                    <p className="text-xs text-[#8B0000] font-bold mt-0.5">{company.stat}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Right */}
        <div className="flex overflow-hidden select-none mask-image-gradient">
          <div className="flex gap-6 marquee-right py-2">
            {row2Companies.concat(row2Companies).map((company, index) => {
              const Icon = company.icon;
              return (
                <motion.div
                  key={`r2-${index}`}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="glass-layer px-8 py-5 rounded-2xl flex items-center gap-5 min-w-[280px] cursor-pointer shadow-sm hover:shadow-[0_15px_30px_rgba(74,4,4,0.06)] border border-[#EAD8C0]/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#4A0404]/5 flex items-center justify-center text-[#4A0404] border border-[#4A0404]/10">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-[#4A0404] tracking-wide uppercase leading-tight">
                      {company.name}
                    </h4>
                    <p className="text-[10px] text-[#1E1E1E]/60 tracking-wider uppercase font-semibold">
                      {company.category}
                    </p>
                    <p className="text-xs text-[#8B0000] font-bold mt-0.5">{company.stat}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

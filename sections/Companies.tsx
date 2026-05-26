'use client';

import { motion } from 'framer-motion';
import { Gem, Clock, Sparkles, Crown, Compass, GlassWater, Building2, Utensils, Car, Anchor } from 'lucide-react';

interface Company {
  name: string;
  category: string;
  stat: string;
  icon: any;
  image: string;
}

const row1Companies: Company[] = [
  { 
    name: 'Khushi Kumpawat', 
    category: 'Beauty & Fashion', 
    stat: '78.6k Followers', 
    icon: Sparkles,
    image: '/Work/logo_1_centered.png'
  },
  { 
    name: "Sidhpura's Institute", 
    category: 'Commerce Academy', 
    stat: 'Trusted Classes', 
    icon: Building2,
    image: '/Work/logo_2_centered.png'
  },
  { 
    name: 'The Thane Foodie', 
    category: 'Food & Drink Vlogger', 
    stat: '1.1k Followers', 
    icon: Utensils,
    image: '/Work/logo_3_centered.png'
  },
  { 
    name: 'Finland Int. School', 
    category: 'Premium Education', 
    stat: '5.0k Followers', 
    icon: Compass,
    image: '/Work/logo_4_centered.png'
  },
  { 
    name: 'Bha2Pa (Touring Party)', 
    category: 'Food & Travel', 
    stat: '238k Followers', 
    icon: Car,
    image: '/Work/logo_5_centered.png'
  },
  { 
    name: 'Malvan Tadka', 
    category: 'Coastal Restaurant', 
    stat: '18+ Outlets', 
    icon: Anchor,
    image: '/Work/logo_6_centered.png'
  },
];

const row2Companies: Company[] = [
  { 
    name: 'Finland Int. School', 
    category: 'Premium Education', 
    stat: '5.0k Followers', 
    icon: Compass,
    image: '/Work/logo_4_centered.png'
  },
  { 
    name: 'Bha2Pa (Touring Party)', 
    category: 'Food & Travel', 
    stat: '238k Followers', 
    icon: Car,
    image: '/Work/logo_5_centered.png'
  },
  { 
    name: 'Malvan Tadka', 
    category: 'Coastal Restaurant', 
    stat: '18+ Outlets', 
    icon: Anchor,
    image: '/Work/logo_6_centered.png'
  },
  { 
    name: 'Khushi Kumpawat', 
    category: 'Beauty & Fashion', 
    stat: '78.6k Followers', 
    icon: Sparkles,
    image: '/Work/logo_1_centered.png'
  },
  { 
    name: "Sidhpura's Institute", 
    category: 'Commerce Academy', 
    stat: 'Trusted Classes', 
    icon: Building2,
    image: '/Work/logo_2_centered.png'
  },
  { 
    name: 'The Thane Foodie', 
    category: 'Food & Drink Vlogger', 
    stat: '1.1k Followers', 
    icon: Utensils,
    image: '/Work/logo_3_centered.png'
  },
];

export default function Companies() {
  return (
    <section id="companies" className="py-24 bg-[#F9EEDC] overflow-hidden relative border-t border-[#4A0404]/5">
      {/* Background soft blurs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[250px] bg-[#4A0404]/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[250px] bg-[#8B0000]/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03, color: '#8B0000' }}
          transition={{ 
            y: { type: 'spring', stiffness: 100 },
            scale: { type: 'spring', stiffness: 300, damping: 15 },
            color: { duration: 0.3 }
          }}
          className="font-display text-3xl md:text-5xl text-[#4A0404]/80 tracking-[0.2em] uppercase font-bold cursor-default inline-block"
        >
          TRUSTED BY BRANDS
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, type: 'spring', stiffness: 100 }}
          className="text-[11px] md:text-xs text-[#4A0404]/60 tracking-[0.2em] uppercase font-medium mt-3 max-w-2xl mx-auto leading-relaxed"
        >
          Partnering with the world&apos;s most prestigious labels to craft cinematic visual masterpieces
        </motion.p>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-[1.5px] bg-[#8B0000]/30 mx-auto mt-5" 
        />
      </div>

      {/* Marquee Rows Container */}
      <div className="space-y-8 relative z-10">
        {/* Row 1: Left */}
        <div className="flex overflow-hidden select-none mask-image-gradient py-6 -my-6">
          <div className="flex gap-6 marquee-left py-2">
            {/* Direct list */}
            {row1Companies.concat(row1Companies).map((company, index) => {
              return (
                <motion.div
                  key={`r1-${index}`}
                  whileHover={{ 
                    y: -6, 
                    scale: 1.02,
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="glass-layer px-5 py-4 rounded-2xl flex items-center gap-4 min-w-[310px] cursor-pointer shadow-sm hover:shadow-[0_15px_30px_rgba(74,4,4,0.06)] border border-[#EAD8C0]/40 hover:border-[#8B0000]/30 hover:bg-[#8B0000]/[0.015] transition-all duration-300 group"
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden border border-[#4A0404]/10 transition-all duration-300 group-hover:scale-105 relative flex-shrink-0 bg-white flex items-center justify-center">
                    <img 
                      src={`${company.image}?v=5`} 
                      alt={company.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-[#4A0404] tracking-wide uppercase leading-tight transition-colors duration-300 group-hover:text-[#8B0000]">
                      {company.name}
                    </h4>
                    <p className="text-[10px] text-[#1E1E1E]/60 tracking-wider uppercase font-semibold">
                      {company.category}
                    </p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B0000] opacity-75 group-hover:opacity-100 transition-opacity duration-300 relative flex">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B0000] opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#8B0000]" />
                      </span>
                      <p className="text-xs text-[#8B0000] font-bold tracking-wider leading-none">
                        {company.stat}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Right */}
        <div className="flex overflow-hidden select-none mask-image-gradient py-6 -my-6">
          <div className="flex gap-6 marquee-right py-2">
            {row2Companies.concat(row2Companies).map((company, index) => {
              return (
                <motion.div
                  key={`r2-${index}`}
                  whileHover={{ 
                    y: -6, 
                    scale: 1.02,
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="glass-layer px-5 py-4 rounded-2xl flex items-center gap-4 min-w-[310px] cursor-pointer shadow-sm hover:shadow-[0_15px_30px_rgba(74,4,4,0.06)] border border-[#EAD8C0]/40 hover:border-[#8B0000]/30 hover:bg-[#8B0000]/[0.015] transition-all duration-300 group"
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden border border-[#4A0404]/10 transition-all duration-300 group-hover:scale-105 relative flex-shrink-0 bg-white flex items-center justify-center">
                    <img 
                      src={`${company.image}?v=5`} 
                      alt={company.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-[#4A0404] tracking-wide uppercase leading-tight transition-colors duration-300 group-hover:text-[#8B0000]">
                      {company.name}
                    </h4>
                    <p className="text-[10px] text-[#1E1E1E]/60 tracking-wider uppercase font-semibold">
                      {company.category}
                    </p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B0000] opacity-75 group-hover:opacity-100 transition-opacity duration-300 relative flex">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B0000] opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#8B0000]" />
                      </span>
                      <p className="text-xs text-[#8B0000] font-bold tracking-wider leading-none">
                        {company.stat}
                      </p>
                    </div>
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

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, Code, Award } from 'lucide-react';

export default function Vision() {
  return (
    <section id="vision" className="py-28 px-6 md:px-12 max-w-7xl mx-auto bg-[#F9EEDC] relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 right-[10%] w-[350px] h-[350px] bg-[#8B0000]/4 rounded-full blur-[90px]" />
        <div className="absolute bottom-1/4 left-[5%] w-[350px] h-[350px] bg-[#EAD8C0]/50 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Side: Vision Text */}
        <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
          <div className="space-y-3 flex flex-col items-center lg:items-start">
            <motion.span
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase font-bold tracking-widest text-[#8B0000] block"
            >
              Core Mission
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, color: '#8B0000' }}
              transition={{ 
                y: { type: 'spring', stiffness: 100 },
                scale: { type: 'spring', stiffness: 300, damping: 15 },
                color: { duration: 0.25 }
              }}
              className="font-display text-4xl md:text-6xl text-[#4A0404] uppercase leading-none cursor-default inline-block"
            >
              OUR VISION
            </motion.h2>
          </div>

          <div className="space-y-6 text-[#1E1E1E] text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-lg md:text-2xl font-bold text-[#4A0404] leading-relaxed border-[#8B0000] border-l-0 pl-0 lg:border-l-4 lg:pl-5 text-center lg:text-left"
            >
              “To become a next-generation creative media powerhouse that transforms brands into digital icons through strategy, storytelling, and innovative social media experiences.”
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-xs md:text-base text-[#1E1E1E]/80 leading-relaxed font-light text-center lg:text-left"
            >
              At Nexoresha Media Works, the vision is to help businesses grow beyond likes and followers by building powerful brand identities, meaningful audience connections, and long-term digital success. Inspired by the strategic and growth-focused approach shown in your presentation, the company aims to combine creativity, trend intelligence, content production, and performance marketing into one complete media ecosystem.
            </motion.p>
          </div>
        </div>

        {/* Right Side: Founders Cards */}
        <div className="lg:col-span-6 lg:col-start-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Card 1: Founder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col"
          >
            <Link href="/team/ayush-chaudhary" className="group flex flex-col">
              <motion.div
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                className="relative aspect-[2/3] w-full rounded-2xl overflow-hidden border border-[#4A0404]/10 bg-white/20 glass-layer shadow-sm hover:shadow-[0_20px_40px_rgba(74,4,4,0.12)] hover:border-[#8B0000]/30 transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full flex-grow overflow-hidden bg-white">
                  <img
                    src="/team/ayush.jpg"
                    alt="Ayush Chaudhary"
                    className="w-full h-full object-cover object-top grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-[#8B0000] text-white text-[9px] font-bold px-3 py-1 rounded-full border border-white/10 tracking-widest uppercase shadow flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5" />
                    FOUNDER
                  </div>
                </div>

                {/* Info area */}
                <div className="p-5 space-y-1 bg-white/60 group-hover:bg-[#8B0000]/[0.02] border-t border-[#4A0404]/5 transition-colors">
                  <h3 className="font-display text-xl text-[#4A0404] tracking-wider uppercase leading-none group-hover:text-[#8B0000] transition-colors flex items-center justify-between">
                    Ayush Chaudhary
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-[10px] text-[#1E1E1E]/60 tracking-widest uppercase font-semibold">
                    Owner & Founder
                  </p>
                </div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Card 2: Co-Founder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col"
          >
            <Link href="/team/prasad-dhage" className="group flex flex-col">
              <motion.div
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                className="relative aspect-[2/3] w-full rounded-2xl overflow-hidden border border-[#4A0404]/10 bg-white/20 glass-layer shadow-sm hover:shadow-[0_20px_40px_rgba(74,4,4,0.12)] hover:border-[#8B0000]/30 transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full flex-grow overflow-hidden bg-white">
                  <img
                    src="/team/prasad.jpg"
                    alt="Prasad N. Dhage"
                    className="w-full h-full object-cover object-top grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-[#4A0404] text-[#EAD8C0] text-[9px] font-bold px-3 py-1 rounded-full border border-[#EAD8C0]/20 tracking-widest uppercase shadow flex items-center gap-1">
                    <Award className="w-2.5 h-2.5" />
                    CO-FOUNDER
                  </div>
                </div>

                {/* Info area */}
                <div className="p-5 space-y-1 bg-white/60 group-hover:bg-[#8B0000]/[0.02] border-t border-[#4A0404]/5 transition-colors">
                  <h3 className="font-display text-xl text-[#4A0404] tracking-wider uppercase leading-none group-hover:text-[#8B0000] transition-colors flex items-center justify-between">
                    Prasad N. Dhage
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-[10px] text-[#1E1E1E]/60 tracking-widest uppercase font-semibold">
                    Co-Founder & Chief Editor
                  </p>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

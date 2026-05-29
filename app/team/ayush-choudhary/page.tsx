'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Sparkles, Building, Briefcase, Award, Eye, Heart, Compass, MessageSquare, ExternalLink } from 'lucide-react';

export default function AyushChoudharyPortfolio() {
  const leadershipQualities = [
    {
      title: 'Ecosystem Visionary',
      desc: 'The capability to construct and orchestrate a multi-company ecosystem bridging software technologies, creative literature, and visual media production under a unified brand voice.',
      icon: Compass,
      color: 'from-[#4A0404]/10 to-[#8B0000]/10',
    },
    {
      title: 'Strategic Innovation',
      desc: 'Expertise in aligning core technological foundations with audience psychology and social media algorithms to maximize conversion value for premium brands.',
      icon: Eye,
      color: 'from-amber-500/5 to-amber-600/10',
    },
    {
      title: 'Empowering Leadership',
      desc: 'Fostering a creative playground where directors, designers, and editors work with absolute agency, standardizing production pipelines to deliver premium high-end results.',
      icon: Award,
      color: 'from-blue-500/5 to-blue-600/10',
    },
    {
      title: 'Operational Excellence',
      desc: 'Transitioning creative media from pure aesthetic art into structured business growth parameters, turning likes and organic reach into measurable client revenue assets.',
      icon: Briefcase,
      color: 'from-emerald-500/5 to-emerald-600/10',
    },
  ];

  const companies = [
    {
      name: 'Nexoresha Technologies',
      role: 'Owner & Founder',
      desc: 'The technical core, building premium custom software solutions, ecommerce platforms, web applications, and digital interfaces.',
      tag: 'Tech Core',
      href: 'https://nexoresha.tech/',
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

  return (
    <div className="min-h-screen bg-[#F9EEDC] pb-24 pt-28 relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B0000]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#EAD8C0]/50 rounded-full blur-[100px]" />
      </div>

      {/* Floating Back Navigation */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 relative z-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#4A0404] hover:text-[#8B0000] transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Main
        </Link>
      </div>

      {/* Profile Header Block */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Profile Image container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
          className="lg:col-span-4 w-full aspect-[2/3] rounded-3xl overflow-hidden border border-[#4A0404]/10 bg-white shadow-lg relative"
        >
          <img
            src="/team/ayush.jpg"
            alt="Ayush Choudhary"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>

        {/* Text descriptions */}
        <div className="lg:col-span-8 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.15 }}
            className="space-y-2.5"
          >
            <span className="text-xs uppercase font-bold tracking-widest text-[#8B0000] bg-[#EAD8C0] px-3.5 py-1 rounded w-fit block">
              Founder & Director
            </span>
            <h1 className="font-display text-5xl md:text-7xl text-[#4A0404] uppercase leading-none tracking-tight">
              Ayush Choudhary
            </h1>
            <p className="text-xs uppercase font-bold tracking-wider text-[#1E1E1E]/55">
              Owner & Founder of Nexoresha Ventures
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
            className="font-sans text-sm md:text-base text-[#1E1E1E]/80 leading-relaxed font-light max-w-2xl"
          >
            Ayush Choudhary is a visionary entrepreneur and strategist who operates at the intersection of technology, creative narrative, and high-impact cinematography. As the orchestrator of the Nexoresha ecosystem, he sets the brand's direction and builds frameworks that bridge complex web software and narrative storytelling with commercial media marketing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.25 }}
            className="flex flex-wrap gap-3.5 pt-2"
          >
            <Link
              href="/contact"
              className="bg-[#4A0404] hover:bg-[#8B0000] text-white px-6 py-3 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              Discuss Business
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Leadership Qualities Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 space-y-12 relative z-10">
        <div className="text-center space-y-3 max-w-md mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-[#8B0000]">
            Executive Qualities
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-[#4A0404] uppercase">
            LEADERSHIP PROFILE
          </h2>
          <p className="text-xs text-[#1E1E1E]/60 font-light leading-relaxed">
            The values and operational methods driving Nexoresha's growth roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadershipQualities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                whileHover={{ y: -6 }}
                transition={{ 
                  y: { type: 'spring', stiffness: 350, damping: 20 },
                  opacity: { duration: 0.5, delay: index * 0.1 }
                }}
                key={item.title}
                className="glass-layer p-8 rounded-2xl border border-[#4A0404]/10 shadow-sm flex gap-5 bg-white/20 hover:border-[#8B0000]/30 hover:bg-[#8B0000]/[0.01] transition-all"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} border border-[#4A0404]/15 flex items-center justify-center text-[#4A0404] flex-shrink-0`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-2xl text-[#4A0404] tracking-wide uppercase">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#1E1E1E]/70 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Ventures/Companies Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 space-y-12 relative z-10">
        <div className="text-center space-y-3 max-w-md mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-[#8B0000]">
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
    </div>
  );
}

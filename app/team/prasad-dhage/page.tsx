'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Sparkles, Video, Volume2, Palette, Clock, Film, MessageSquare, ExternalLink } from 'lucide-react';

export default function PrasadDhagePortfolio() {
  const editSkills = [
    {
      title: 'Cinematic Retention Pacing',
      desc: 'Expertise in speed ramping, visual beats cutting, and narrative pacing to maximize retention rates for vertical mobile feeds.',
      icon: Clock,
      color: 'from-amber-500/5 to-amber-600/10',
    },
    {
      title: 'Sensory Sound Design (SFX)',
      desc: 'Orchestrating rich ambient layers, sound effects, and musical transitions to build immersive cinematic audio landscapes.',
      icon: Volume2,
      color: 'from-blue-500/5 to-blue-600/10',
    },
    {
      title: 'Aesthetic Color Grading',
      desc: 'Advanced LUT and color log processing to achieve luxury aesthetics, custom color palettes, and cinematic lighting highlights.',
      icon: Palette,
      color: 'from-[#4A0404]/10 to-[#8B0000]/10',
    },
    {
      title: 'Storytelling Architecture',
      desc: 'Structuring raw footages into cohesive narrative stories that convey visual authority, authority branding, and product prestige.',
      icon: Film,
      color: 'from-emerald-500/5 to-emerald-600/10',
    },
  ];

  const clientWorks = [
    {
      client: 'Khushi Kumpawat',
      industry: 'Beauty & Fashion',
      desc: 'Directed the editing flow of visual glamour narratives. Focused on highly polished soft lighting looks, premium color grading, and transition pacing matching trending audios.',
      metric: '2.4M Reach Generated',
    },
    {
      client: "Sidhpura's Institute",
      industry: 'Commerce Academy',
      desc: 'Engineered educational grid layouts, pacing scripts, and dynamic text overlays to increase audience comprehension and bookmark values.',
      metric: 'Trusted Academic Leader',
    },
    {
      client: 'The Thane Foodie',
      industry: 'Food & Drink Vlogger',
      desc: 'Compiled mouth-watering sensory travel guides. Synchronized high-fidelity food sizzles, fast cuts, speed-ramping, and ASMR sound effects.',
      metric: '1.1M Reach Generated',
    },
    {
      client: 'Finland International School',
      industry: 'Premium Education',
      desc: 'Edited high-end brand documentaries. Blended drone cinematics with academic timelines to project professional, trust-building authority.',
      metric: '1.8M Views Delivered',
    },
    {
      client: 'Bha2Pa (Touring Party)',
      industry: 'Food & Travel',
      desc: 'Managed cinematic color recovery of log footages, scenery pacing, and organic audio transition mapping for long-form vertical content.',
      metric: '3.1M Total Views',
    },
    {
      client: 'Malvan Tadka',
      industry: 'Coastal Restaurant',
      desc: 'Designed high-conversion restaurant commercial campaigns. Merged vibrant ocean themes, rapid-cut transitions, and crisp local audio overlays.',
      metric: '18+ Outlets Promoted',
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
            src="/team/prasad.jpg"
            alt="Prasad N. Dhage"
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
              Co-Founder & Chief Editor
            </span>
            <h1 className="font-display text-5xl md:text-7xl text-[#4A0404] uppercase leading-none tracking-tight">
              Prasad N. Dhage
            </h1>
            <p className="text-xs uppercase font-bold tracking-wider text-[#1E1E1E]/55">
              Visual Editor & Media Architect
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
            className="font-sans text-sm md:text-base text-[#1E1E1E]/80 leading-relaxed font-light max-w-2xl"
          >
            Prasad N. Dhage is a skilled visual editor and co-founder of Nexoresha Media Works. He shapes the aesthetic signature of all agency campaigns, converting raw footage into premium high-retention digital assets. Prasad manages color science, pacing dynamics, and immersive SFX pipelines for all elite brand portfolios.
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
              <Video className="w-4 h-4" />
              Request Custom Edit
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Editing Skills Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 space-y-12 relative z-10">
        <div className="text-center space-y-3 max-w-md mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-[#8B0000]">
            Creative Core
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-[#4A0404] uppercase">
            TECHNICAL CREDENTIALS
          </h2>
          <p className="text-xs text-[#1E1E1E]/60 font-light leading-relaxed">
            The edit suites and retention strategies implemented to elevate brand narratives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {editSkills.map((item, index) => {
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

      {/* Client Collaborations Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 space-y-12 relative z-10">
        <div className="text-center space-y-3 max-w-md mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-[#8B0000]">
            The Case Studies
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-[#4A0404] uppercase">
            CLIENT COLLABORATIONS
          </h2>
          <p className="text-xs text-[#1E1E1E]/60 font-light leading-relaxed">
            Detailed campaigns managed and edited directly by Prasad Dhage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientWorks.map((work, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -6 }}
              transition={{ 
                y: { type: 'spring', stiffness: 350, damping: 20 },
                opacity: { duration: 0.5, delay: index * 0.1 }
              }}
              key={work.client}
              className="glass-layer p-8 rounded-2xl border border-[#4A0404]/10 shadow-sm flex flex-col justify-between bg-white/20 hover:border-[#8B0000]/30 hover:bg-[#8B0000]/[0.01] transition-all"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-[#8B0000] border border-[#8B0000]/25 px-2.5 py-0.5 rounded bg-[#8B0000]/5">
                    {work.industry}
                  </span>
                </div>
                
                <div className="space-y-1">
                  <h3 className="font-display text-2xl text-[#4A0404] tracking-wide uppercase">
                    {work.client}
                  </h3>
                </div>

                <p className="text-xs text-[#1E1E1E]/75 leading-relaxed font-light">
                  {work.desc}
                </p>
              </div>

              <div className="border-t border-[#4A0404]/5 pt-4 mt-6 flex justify-between items-center">
                <span className="text-[10px] uppercase tracking-widest text-[#1E1E1E]/50 font-bold block">
                  Campaign Impact
                </span>
                <span className="text-xs font-bold text-[#8B0000] tracking-wide uppercase">
                  {work.metric}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

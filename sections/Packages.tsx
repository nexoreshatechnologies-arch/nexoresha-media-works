'use client';

import { motion } from 'framer-motion';
import { Check, Star, ShieldAlert, Sparkles, Zap, Award } from 'lucide-react';
import { useCartStore } from '@/lib/store';

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  description: string;
  icon: any;
  themeClass: string;
  badge?: string;
  deliverables: string[];
  buttonStyle: string;
  shineColor: string;
}

const plans: PricingPlan[] = [
  {
    id: 'package_bronze',
    name: 'Bronze',
    price: 7999,
    description: 'Essential Digital Presence',
    icon: Zap,
    themeClass: 'bg-gradient-to-b from-[#3a2010]/20 to-[#CD7F32]/10 border-[#CD7F32]/30 shadow-[0_15px_30px_rgba(205,127,50,0.05)] text-[#1E1E1E]',
    deliverables: [
      '8 Premium Static Posts',
      '2 Cinematic Reels / Videos',
      'Basic Algorithm Analytics',
      'Standard Support (Email)',
    ],
    buttonStyle: 'bg-[#CD7F32]/20 hover:bg-[#CD7F32] hover:text-white text-[#CD7F32] border-[#CD7F32]/35',
    shineColor: 'from-transparent via-orange-300/20 to-transparent',
  },
  {
    id: 'package_silver',
    name: 'Silver',
    price: 12999,
    description: 'High-Impact Brand Growth',
    icon: Award,
    themeClass: 'bg-gradient-to-b from-slate-200/20 to-slate-400/10 border-slate-400/30 shadow-[0_15px_30px_rgba(192,192,192,0.05)] text-[#1E1E1E]',
    deliverables: [
      '15 Premium Designed Posts',
      '5 Cinematic Edited Reels',
      '1 Professional Photoshoot Session',
      'Priority Support (WhatsApp)',
    ],
    buttonStyle: 'bg-slate-400/20 hover:bg-slate-500 hover:text-white text-slate-700 border-slate-400/35',
    shineColor: 'from-transparent via-slate-100/30 to-transparent',
  },
  {
    id: 'package_gold',
    name: 'Gold',
    price: 19999,
    description: 'Authority & Market Dominance',
    icon: Star,
    badge: 'MOST POPULAR',
    themeClass: 'bg-[#4A0404] text-[#F9EEDC] border-[#8B0000] scale-105 shadow-[0_20px_40px_rgba(74,4,4,0.18)] z-10',
    deliverables: [
      '30 Multi-Platform Creative Assets',
      '10 Cinematic High-Grade Reels',
      '1 Full Brand Documentary Short',
      'Professional Drone Shoots Included',
      'Dedicated Producer Support 24/7',
    ],
    buttonStyle: 'bg-[#8B0000] hover:bg-[#8B0000]/80 text-white border-transparent',
    shineColor: 'from-transparent via-yellow-200/15 to-transparent',
  },
  {
    id: 'package_platinum',
    name: 'Platinum',
    price: 29999,
    description: 'Omnipresent Luxury Authority',
    icon: Sparkles,
    themeClass: 'bg-gradient-to-b from-[#1E1E1E] to-black border-slate-700/60 shadow-[0_20px_45px_rgba(0,0,0,0.3)] text-white',
    deliverables: [
      'Unlimited Media Asset Requests',
      'Dedicated Production Camera Crew',
      'Full Scale Branding Strategy',
      'Influencer Campaign Integrations',
      'Direct WhatsApp Line to Director',
    ],
    buttonStyle: 'bg-white/10 hover:bg-white hover:text-black text-white border-white/20',
    shineColor: 'from-transparent via-white/10 to-transparent',
  },
];

export default function Packages() {
  const { addItem, toggleCart } = useCartStore();

  const handleSelectPackage = (plan: PricingPlan) => {
    addItem({
      id: plan.id,
      name: `${plan.name} Package`,
      price: plan.price,
      category: 'Branding Packages',
      description: plan.description,
    });
    toggleCart(true); // Open cart immediately
  };

  return (
    <section id="packages" className="py-28 bg-[#EAD8C0]/20 border-t border-b border-[#4A0404]/5 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-10% w-96 h-96 bg-[#8B0000]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-5% w-[500px] h-[500px] bg-[#EAD8C0]/40 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-20 space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-[#8B0000]">
            Pricing Structure
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-[#4A0404] uppercase leading-none">
            LUXURY PACKAGES
          </h2>
          <p className="text-sm md:text-base text-[#1E1E1E]/70 font-light leading-relaxed">
            Select the level of visual authority your brand demands. All plans are optimized for long-term organic growth.
          </p>
        </div>

        {/* Plan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch pt-6">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const isGold = plan.name === 'Gold';

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                whileHover={{ y: -8, scale: isGold ? 1.06 : 1.03 }}
                transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                className={`relative rounded-3xl p-8 border flex flex-col justify-between overflow-hidden group ${plan.themeClass}`}
              >
                {/* Visual shine sweep overlay */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                  <div className={`absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r ${plan.shineColor} skew-x-12 transition-all duration-1000 group-hover:left-[150%]`} />
                </div>

                {/* Badge for Gold */}
                {plan.badge && (
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#8B0000] text-white text-[9px] font-bold px-4 py-1.5 rounded-full border border-white/20 tracking-wider shadow-md uppercase">
                    {plan.badge}
                  </div>
                )}

                {/* Card Top Details */}
                <div className="space-y-6 relative z-10">
                  <div className="flex justify-between items-start pt-2">
                    <div>
                      <h3 className={`font-display text-3xl uppercase tracking-wider ${
                        isGold ? 'text-white' : plan.name === 'Bronze' ? 'text-[#CD7F32]' : plan.name === 'Silver' ? 'text-slate-600' : 'text-[#EAD8C0]'
                      }`}>
                        {plan.name}
                      </h3>
                      <p className={`text-xs mt-1 ${isGold ? 'text-[#EAD8C0]/85' : 'text-[#1E1E1E]/60'}`}>
                        {plan.description}
                      </p>
                    </div>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                      isGold ? 'bg-white/10 border-white/10 text-[#EAD8C0]' : 'bg-[#4A0404]/5 border-[#4A0404]/10 text-[#4A0404]'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="border-b border-current/15 pb-6">
                    <span className="font-display text-4xl leading-none">
                      ₹{plan.price.toLocaleString('en-IN')}
                    </span>
                    <span className={`text-[10px] uppercase font-bold tracking-widest block mt-1 ${isGold ? 'text-[#EAD8C0]/75' : 'text-[#1E1E1E]/50'}`}>
                      Estimated Month budget
                    </span>
                  </div>

                  {/* Deliverables List */}
                  <ul className="space-y-3.5 pt-2">
                    {plan.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs font-light leading-relaxed">
                        <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isGold ? 'text-[#EAD8C0]' : 'text-[#8B0000]'}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action CTA */}
                <div className="pt-8 relative z-10">
                  <button
                    onClick={() => handleSelectPackage(plan)}
                    className={`w-full py-4.5 rounded-xl font-display tracking-widest text-sm uppercase transition-all duration-300 border font-semibold cursor-pointer ${plan.buttonStyle}`}
                  >
                    Select {plan.name}
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

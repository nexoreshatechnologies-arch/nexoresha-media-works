'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, Instagram, Send, Loader2, Sparkles, Gem, Brain, TrendingUp, Users, Target, ShieldCheck } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';
import confetti from 'canvas-confetti';

interface FormState {
  name: string;
  businessName: string;
  budget: string;
  services: string[];
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    businessName: '',
    budget: '₹10,000 - ₹25,000',
    services: [],
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const servicesList = [
    'Social Media Management',
    'Reels Production',
    'Content Strategy',
    'Branding Strategy',
    'Paid Marketing (Ads)',
    'Professional Shoots',
  ];

  const budgetOptions = [
    'Under ₹10,000',
    '₹10,000 - ₹25,000',
    '₹25,000 - ₹50,000',
    '₹50,000 - ₹1,00,000',
    '₹1,00,000+',
  ];

  const handleCheckboxChange = (service: string) => {
    setForm((prev) => {
      const isSelected = prev.services.includes(service);
      return {
        ...prev,
        services: isSelected
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    // Client-side validations
    if (!form.name.trim() || !form.businessName.trim()) {
      setErrorMessage('Please fill in both Name and Business Name.');
      setIsLoading(false);
      return;
    }

    if (form.services.length === 0) {
      setErrorMessage('Please select at least one service to begin.');
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Submission failed');

      setIsSuccess(true);
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.5 },
        colors: ['#4A0404', '#8B0000', '#EAD8C0', '#F9EEDC']
      });

      // Reset form
      setForm({
        name: '',
        businessName: '',
        budget: '₹10,000 - ₹25,000',
        services: [],
        message: '',
      });

    } catch (err: any) {
      setErrorMessage(err.message || 'An error occurred during submission. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactOptions = [
    { label: 'WhatsApp', value: 'Chat with us', icon: MessageSquare, href: 'https://wa.me/919136936913', color: 'hover:border-emerald-500/30 text-emerald-600' },
    { label: 'Instagram', value: '@nexoresha.media.works', icon: Instagram, href: 'https://www.instagram.com/nexoresha.media.works?igsh=eHlhMDRpemFzMTJn', color: 'hover:border-pink-500/30 text-pink-600' },
    { label: 'Email', value: 'ayush.choudhary@nexoresha.tech', icon: Mail, href: 'mailto:ayush.choudhary@nexoresha.tech', color: 'hover:border-[#8B0000]/30 text-[#8B0000]' },
    { label: 'Phone', value: '+91 91369 36913', icon: Phone, href: 'tel:+919136936913', color: 'hover:border-[#4A0404]/30 text-[#4A0404]' },
  ];

  const whyChooseUsCards = [
    { title: 'Algorithm Growth', desc: 'Campaign strategies modeled on dynamic network parameters.', icon: Brain },
    { title: 'Deep Audience Analysis', desc: 'Structuring content pillars directly based on buyer psychology.', icon: Users },
    { title: 'Real Revenue Growth', desc: 'Moving past simple vanity metrics to focus on conversion value.', icon: TrendingUp },
    { title: 'Long-term Branding', desc: 'Crafting premium aesthetic identities that build loyalty.', icon: Gem },
    { title: 'Creative Strategy', desc: 'Directing cinematic campaigns with editorial visual quality.', icon: Target },
    { title: 'Performance Campaigns', desc: 'Data-driven analytics to maximize return on advertising spend.', icon: ShieldCheck },
  ];

  return (
    <div className="min-h-screen bg-[#F9EEDC] pb-24 relative overflow-hidden">
      {/* 1. Contact Hero */}
      <div className="relative w-full h-[380px] bg-[#4A0404] flex items-center justify-center text-center overflow-hidden">
        {/* Glow particles */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F9EEDC] z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#8B0000]/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-20 space-y-4 max-w-xl px-6 pt-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#EAD8C0]">
            Get In Touch
          </span>
          <h1 className="font-display text-5xl md:text-7xl text-[#F9EEDC] uppercase leading-none tracking-tight">
            LET'S BUILD YOUR BRAND
          </h1>
          <p className="text-xs md:text-sm text-[#EAD8C0]/70 max-w-sm mx-auto font-light leading-relaxed">
            Collaborate with our directors to design a high-end digital identity that converts organic views into business assets.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 -mt-16 space-y-24">
        
        {/* 2. About Nexoresha segment */}
        <div className="glass-layer rounded-3xl p-8 md:p-12 border border-[#4A0404]/10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/40">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="font-display text-3xl md:text-4xl text-[#4A0404] uppercase tracking-wider">
              WHO WE ARE
            </h2>
            <p className="text-sm md:text-base text-[#1E1E1E]/80 leading-relaxed font-light">
              Nexoresha Media Works is a modern social media growth and branding agency focused on strategy, creativity, audience psychology, and long-term business growth. We do not believe in templates or quick hacks. Instead, we establish visual authority by directing high-value campaigns tailored for premium brands.
            </p>
          </div>
          <div className="lg:col-span-4 grid grid-cols-2 gap-3.5">
            {servicesList.slice(0, 4).map((service) => (
              <div
                key={service}
                className="bg-[#4A0404]/5 border border-[#4A0404]/10 p-4 rounded-xl text-center text-xs font-semibold text-[#4A0404] shadow-sm"
              >
                {service}
              </div>
            ))}
          </div>
        </div>

        {/* 3. Why Choose Us */}
        <div className="space-y-12">
          <div className="text-center space-y-3 max-w-md mx-auto">
            <span className="text-xs uppercase font-bold tracking-widest text-[#8B0000]">
              Core Pillars
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-[#4A0404] uppercase">
              WHY CHOOSE US
            </h2>
            <p className="text-xs text-[#1E1E1E]/60 font-light leading-relaxed">
              We align visual narrative structure with data-driven audience triggers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                  key={card.title}
                  className="glass-layer p-8 rounded-2xl border border-[#4A0404]/10 shadow-sm flex flex-col items-start space-y-4 bg-white/30"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#4A0404]/5 flex items-center justify-center text-[#4A0404] border border-[#4A0404]/10">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl text-[#4A0404] tracking-wide uppercase">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#1E1E1E]/70 leading-relaxed font-light">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 4. Stats Counters Section */}
        <div className="bg-[#4A0404] text-[#F9EEDC] rounded-3xl p-12 border border-[#8B0000]/10 shadow-[0_20px_50px_rgba(74,4,4,0.15)] grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 opacity-30 pointer-events-none" />
          
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold tracking-tight text-[#EAD8C0]">
              <AnimatedCounter target={50} suffix="+" />
            </div>
            <p className="text-[10px] uppercase font-bold tracking-wider text-[#F9EEDC]/60">
              BRANDS WORKED WITH
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold tracking-tight text-[#EAD8C0]">
              <AnimatedCounter target={1200} suffix="+" />
            </div>
            <p className="text-[10px] uppercase font-bold tracking-wider text-[#F9EEDC]/60">
              REELS CREATED
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold tracking-tight text-[#EAD8C0]">
              <AnimatedCounter target={150} suffix="M+" />
            </div>
            <p className="text-[10px] uppercase font-bold tracking-wider text-[#F9EEDC]/60">
              REACH GENERATED
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold tracking-tight text-[#EAD8C0]">
              <AnimatedCounter target={98} suffix="%" />
            </div>
            <p className="text-[10px] uppercase font-bold tracking-wider text-[#F9EEDC]/60">
              CAMPAIGN SUCCESS
            </p>
          </div>
        </div>

        {/* 5. Contact Form + Options Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Options Cards */}
          <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <h3 className="font-display text-2xl text-[#4A0404] tracking-wider uppercase">
                DIRECT CHANNELS
              </h3>
              <p className="text-xs text-[#1E1E1E]/60 font-light leading-relaxed">
                Connect instantly with our media directors using secure channels.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactOptions.map((opt) => {
                const Icon = opt.icon;
                if (opt.label === 'Phone') {
                  return (
                    <div
                      key={opt.label}
                      className={`glass-layer p-5 rounded-2xl border border-[#4A0404]/10 shadow-sm flex items-center gap-4 bg-white/20 ${opt.color}`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-current/5 border border-current/10 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-[#1E1E1E]/50 block">
                          {opt.label}
                        </span>
                        <div className="text-sm font-semibold block text-[#1E1E1E] mt-0.5 flex flex-col gap-1">
                          <a href="tel:+919136936913" className="hover:text-[#8B0000] transition-colors block">
                            +91 91369 36913
                          </a>
                          <a href="tel:+918879501593" className="hover:text-[#8B0000] transition-colors block">
                            +91 88795 01593
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                  <a
                    key={opt.label}
                    href={opt.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`glass-layer p-5 rounded-2xl border border-[#4A0404]/10 shadow-sm flex items-center gap-4 transition-all duration-300 hover:scale-[1.02] cursor-pointer bg-white/20 ${opt.color}`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-current/5 border border-current/10 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#1E1E1E]/50 block">
                        {opt.label}
                      </span>
                      <span className="text-sm font-semibold block text-[#1E1E1E] mt-0.5">
                        {opt.value}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="glass-layer rounded-3xl p-5 sm:p-8 border border-[#4A0404]/10 shadow-lg bg-white/40">
              <div className="mb-8">
                <h3 className="font-display text-xl sm:text-2xl text-[#4A0404] tracking-wider uppercase">
                  PROJECT INQUIRY FORM
                </h3>
                <p className="text-[10px] sm:text-xs text-[#1E1E1E]/60 mt-1 font-light">
                  Tell us about your brand targets. Let's outline a premium media structure.
                </p>
              </div>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/30 text-emerald-600">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h4 className="font-display text-2xl text-emerald-700 tracking-wider uppercase">
                    INQUIRY REGISTERED
                  </h4>
                  <p className="text-xs text-[#1E1E1E]/70 max-w-sm leading-relaxed">
                    Thank you! Your brand specifications have been recorded in our lead registry. Our Director will reach out to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-xs text-[#8B0000] font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-700 text-xs rounded-xl font-semibold">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold tracking-widest text-[#4A0404] uppercase">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full text-xs sm:text-sm bg-[#F9EEDC]/40 border border-[#4A0404]/15 focus:border-[#4A0404] focus:outline-none rounded-xl p-3 sm:p-3.5 text-[#1E1E1E] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold tracking-widest text-[#4A0404] uppercase">
                        Business Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.businessName}
                        onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                        placeholder="Acme Luxury Co."
                        className="w-full text-xs sm:text-sm bg-[#F9EEDC]/40 border border-[#4A0404]/15 focus:border-[#4A0404] focus:outline-none rounded-xl p-3 sm:p-3.5 text-[#1E1E1E] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold tracking-widest text-[#4A0404] uppercase block">
                        Monthly Budget Target
                      </label>
                      <select
                        value={form.budget}
                        onChange={(e) => setForm({ ...form, budget: e.target.value })}
                        className="w-full text-xs sm:text-sm bg-[#F9EEDC]/40 border border-[#4A0404]/15 focus:border-[#4A0404] focus:outline-none rounded-xl p-3 sm:p-3.5 text-[#1E1E1E] transition-colors cursor-pointer"
                      >
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-bold tracking-widest text-[#4A0404] uppercase block">
                      Services Needed (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {servicesList.map((service) => {
                        const isChecked = form.services.includes(service);
                        return (
                          <button
                            type="button"
                            key={service}
                            onClick={() => handleCheckboxChange(service)}
                            className={`p-2.5 sm:p-3 rounded-xl border text-[10px] sm:text-[11px] font-semibold text-left transition-all flex justify-between items-center cursor-pointer ${
                              isChecked
                                ? 'bg-[#4A0404] text-white border-transparent shadow-sm'
                                : 'bg-[#F9EEDC]/20 border-[#4A0404]/10 text-[#4A0404] hover:bg-[#4A0404]/5'
                            }`}
                          >
                            {service}
                            {isChecked && <Sparkles className="w-3.5 h-3.5 text-[#EAD8C0] flex-shrink-0 ml-1.5" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest text-[#4A0404] uppercase">
                      Custom Message / Requirements
                    </label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Outline any specific targets, timeline, shoots or media specifications..."
                      className="w-full text-xs sm:text-sm bg-[#F9EEDC]/40 border border-[#4A0404]/15 focus:border-[#4A0404] focus:outline-none rounded-xl p-3 sm:p-3.5 text-[#1E1E1E] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#4A0404] hover:bg-[#8B0000] disabled:bg-[#4A0404]/45 text-white py-4.5 rounded-xl font-display tracking-widest text-lg uppercase flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.01] active:scale-95 shadow-md cursor-pointer"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting Inquiry...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Project Request
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

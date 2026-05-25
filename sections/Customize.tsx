'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Film, Camera, Target, Plus, Info, LayoutGrid } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import ServiceModal from '@/components/ServiceModal';

interface ServiceDetails {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  icon: any;
  deliverables: string[];
  timeline: string;
  gallery: string[];
}

const services: ServiceDetails[] = [
  // Content Services
  {
    id: 'custom_story',
    name: 'Story Design',
    price: 3999,
    category: 'Content',
    description: 'Narrative-driven social stories that captivate and convert. Optimized for high engagement, interaction stickers, and brand continuity.',
    icon: Film,
    deliverables: ['5 Custom Story Designs', 'Interactive Poll Stickers', 'Optimized Color Grading', 'Ready-to-Post High-Res Export'],
    timeline: '3 Days',
    gallery: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400',
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=400',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400'
    ]
  },
  {
    id: 'custom_post',
    name: 'Post Design',
    price: 4999,
    category: 'Content',
    description: 'High-fidelity static frames with architectural layout precision. Perfect for premium social media grids and high-aesthetic brands.',
    icon: LayoutGrid,
    deliverables: ['6 Static Post Designs', 'Modern Typography Layout', 'Custom Brand Overlays', 'Source Figma File Access'],
    timeline: '4 Days',
    gallery: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400',
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=400'
    ]
  },
  {
    id: 'custom_reel_edit',
    name: 'Reel Editing',
    price: 7999,
    category: 'Content',
    description: 'Dynamic pacing and professional color grading for vertical reels. We match visual transitions with sound effects to drive organic reach.',
    icon: Film,
    deliverables: ['3 Custom Edited Reels', 'SFX & Sound Matching', 'Premium Text Animations', 'Vertical 9:16 Optimization'],
    timeline: '5 Days',
    gallery: [
      'https://images.unsplash.com/photo-1508847154043-be12a62861c1?q=80&w=400',
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=400',
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=400'
    ]
  },
  {
    id: 'custom_carousel',
    name: 'Carousel Posts',
    price: 5999,
    category: 'Content',
    description: 'In-depth educational slides with seamless swipe-over connections. Highly optimized to increase bookmarks and profile sharing.',
    icon: LayoutGrid,
    deliverables: ['2 Swipe Carousels (up to 8 slides)', 'Visual Continuity Styling', 'Strategic Layout Planning', 'Export in High-Fidelity PNG'],
    timeline: '5 Days',
    gallery: [
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=400',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400'
    ]
  },
  {
    id: 'custom_strategy',
    name: 'Content Planning',
    price: 6999,
    category: 'Content',
    description: 'Comprehensive monthly creative calendar mapping audience psychology. Get step-by-step guidance on what to post and when.',
    icon: Target,
    deliverables: ['30-Day Grid Layout Outline', 'Content Pillar Definition', 'Captions & Hashtag Packs', 'Audience Psychology Alignment'],
    timeline: '7 Days',
    gallery: [
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=400'
    ]
  },

  // Production Services
  {
    id: 'custom_photoshoot',
    name: 'Photoshoot Session',
    price: 14999,
    category: 'Production',
    description: 'Studio or outdoor professional product and lifestyle shoot. Our creative lighting directors ensure a luxury high-end appeal.',
    icon: Camera,
    deliverables: ['20 High-Res Edited Photos', 'Custom Lighting Setup', 'Commercial Color Retouching', 'Multi-crop Options (Grid & Story)'],
    timeline: '7 Days',
    gallery: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=400',
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=400',
      'https://images.unsplash.com/photo-1508847154043-be12a62861c1?q=80&w=400'
    ]
  },
  {
    id: 'custom_videoshoot',
    name: 'Videoshoot Session',
    price: 19999,
    category: 'Production',
    description: 'High-definition cinematic filming of your operations or services. Perfect for commercials, hero reels, or brand storytelling documentaries.',
    icon: Camera,
    deliverables: ['2 Edited Commercial Videos', 'Full Set Lighting & Sound', 'Directing & Script Layout', 'Color Graded Rec709 Export'],
    timeline: '8 Days',
    gallery: [
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=400',
      'https://images.unsplash.com/photo-1508847154043-be12a62861c1?q=80&w=400',
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=400'
    ]
  },
  {
    id: 'custom_drone',
    name: 'Drone Shoot',
    price: 24999,
    category: 'Production',
    description: 'Ultra-HD 4K aerial cinematography for vast perspectives. Captivate your audience with architectural heights and sweeping cinematic paths.',
    icon: Camera,
    deliverables: ['10 Drone Shots in 4K', 'Licensed Operator Session', 'Landscape Motion Correction', 'RAW Footage Delivery Optional'],
    timeline: '6 Days',
    gallery: [
      'https://images.unsplash.com/photo-1508847154043-be12a62861c1?q=80&w=400',
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=400',
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=400'
    ]
  },

  // Marketing Services
  {
    id: 'custom_ig_ads',
    name: 'Instagram Ads',
    price: 11999,
    category: 'Marketing',
    description: 'Targeted campaign setup optimizing visual creatives and copy. Drive leads, profile views, or ecommerce conversions.',
    icon: Target,
    deliverables: ['Ad Campaign Structure Setup', 'A/B Creative Variations', 'Weekly Leads & Reach Report', 'Pixel Optimization Setup'],
    timeline: '7 Days',
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=400',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400'
    ]
  },
  {
    id: 'custom_fb_ads',
    name: 'Facebook Ads',
    price: 11999,
    category: 'Marketing',
    description: 'High-conversion advertising targeting demographics and pixel setups. Maximize ROAS with custom re-engagement audiences.',
    icon: Target,
    deliverables: ['Pixel Setup & Custom Audiences', 'Retargeting Flow Implementation', 'ROI Metrics Tracking', 'Creative Copy Variations'],
    timeline: '7 Days',
    gallery: [
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=400',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400'
    ]
  },
  {
    id: 'custom_branding',
    name: 'Branding Strategy',
    price: 17999,
    category: 'Marketing',
    description: 'Complete visual voice and identity mapping. Establish color theory parameters, logo guidelines, and authority tone mapping.',
    icon: Target,
    deliverables: ['Brand Style Guide PDF', 'Typography & Palette Rules', 'Competitor Analysis Audit', 'Content Tone Vector Definition'],
    timeline: '14 Days',
    gallery: [
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=400'
    ]
  },
  {
    id: 'custom_influencers',
    name: 'Influencer Outreach',
    price: 29999,
    category: 'Marketing',
    description: 'Outreach and campaign coordination with matching micro and macro influencers to amplify your organic social campaign.',
    icon: Target,
    deliverables: ['5 Influencer Placements', 'Contract & Script Coordination', 'Campaign Impact Analytics', 'Creator Roster Sourcing'],
    timeline: '15 Days',
    gallery: [
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=400',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400'
    ]
  }
];

export default function Customize() {
  const [activeTab, setActiveTab] = useState<'Content' | 'Production' | 'Marketing'>('Content');
  const [selectedService, setSelectedService] = useState<ServiceDetails | null>(null);

  const { addItem, toggleCart } = useCartStore();

  const filteredServices = services.filter((s) => s.category === activeTab);

  const handleQuickAdd = (e: React.MouseEvent, s: ServiceDetails) => {
    e.stopPropagation(); // Avoid opening modal
    addItem({
      id: s.id,
      name: s.name,
      price: s.price,
      category: s.category,
      description: s.description,
    });
    toggleCart(true); // Open the cart drawer
  };

  const tabs: ('Content' | 'Production' | 'Marketing')[] = ['Content', 'Production', 'Marketing'];

  const tabIcons = {
    Content: Film,
    Production: Camera,
    Marketing: Target,
  };

  return (
    <section id="customize" className="py-28 max-w-7xl mx-auto px-6 md:px-12 bg-[#F9EEDC]">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
        <span className="text-xs uppercase font-bold tracking-widest text-[#8B0000]">
          Interactive Builder
        </span>
        <h2 className="font-display text-4xl md:text-6xl text-[#4A0404] uppercase leading-none">
          BUILD YOUR VISION
        </h2>
        <p className="text-sm md:text-base text-[#1E1E1E]/70 font-light leading-relaxed">
          Mix and match premium services to architect a tailored branding roadmap. Add selections to checkout.
        </p>
      </div>

      {/* Tabs Selector Navigation */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-[#EAD8C0]/30 p-1.5 rounded-2xl border border-[#4A0404]/5 shadow-inner">
          {tabs.map((tab) => {
            const Icon = tabIcons[tab];
            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive ? 'text-[#F9EEDC] font-bold z-10' : 'text-[#4A0404]/70 hover:text-[#4A0404]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 bg-[#4A0404] rounded-xl -z-10 shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className="w-4 h-4" />
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* Services Cards Grid Layout */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredServices.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="glass-layer rounded-2xl p-7 flex flex-col justify-between group hover:border-[#8B0000]/20 hover:bg-white/50 cursor-pointer shadow-sm hover:shadow-[0_15px_30px_rgba(74,4,4,0.06)] transition-all duration-500 relative"
              >
                {/* Visual card content */}
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#4A0404]/5 flex items-center justify-center text-[#4A0404] border border-[#4A0404]/10 group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    
                    {/* Info indicator */}
                    <button className="text-[#4A0404]/40 hover:text-[#4A0404] p-1 rounded transition-colors">
                      <Info className="w-4 h-4" />
                    </button>
                  </div>

                  <h3 className="font-display text-2xl text-[#4A0404] tracking-wide uppercase mb-2">
                    {service.name}
                  </h3>
                  <p className="text-xs text-[#1E1E1E]/65 leading-relaxed font-light mb-6 line-clamp-2">
                    {service.description}
                  </p>
                </div>

                <div className="flex justify-between items-center border-t border-[#4A0404]/5 pt-5">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-[#1E1E1E]/40 font-bold block">
                      Starting Price
                    </span>
                    <span className="font-display text-xl text-[#8B0000]">
                      ₹{service.price.toLocaleString('en-IN')}
                    </span>
                  </div>

                  {/* Add icon button */}
                  <button
                    onClick={(e) => handleQuickAdd(e, service)}
                    className="w-10 h-10 rounded-xl bg-[#4A0404] hover:bg-[#8B0000] text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-md cursor-pointer"
                    aria-label={`Add ${service.name} to cart`}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Service Details modal popup */}
      <ServiceModal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </section>
  );
}

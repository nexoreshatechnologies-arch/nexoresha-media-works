'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Film, Filter, Play, CheckCircle } from 'lucide-react';
import HighlightCard from '@/components/HighlightCard';
import VideoModal from '@/components/VideoModal';

interface ReelProject {
  title: string;
  client: string;
  reach: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
}

const portfolioReels: ReelProject[] = [
  {
    title: 'Skyline Manor',
    client: 'Lumina Lux',
    reach: '2.4M Reach',
    category: 'Cinematography',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCImEf7k9s9k9EudQVZobqIaguoePfsu_awmNpO4hNbvOFOKsPLtptADWs90FHiuI_-dqLar3FErrDdsnEvSEXTqVveBpShLwNNxNG1h3dMRd1G57zX1tR6xeCkq117oSZ7na2YuVhaZoeSPydfa0cSUSBsZOcpKshQGd_29ijNGAFAD9838MW0eD48g-RjKxzJ19CHljJSpQpfX4n23zXJNHtZz4DkJbYxz4pUM80lBqQOqKLixeG4dzHTRh4GimtSttB35H1f0J4',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-woman-with-silver-makeup-40191-large.mp4',
  },
  {
    title: 'The Artisan',
    client: 'Chronos Time',
    reach: '1.1M Reach',
    category: 'Branding',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCd-bbzUuTJABNfq71txAwvhlLvul-yIcJ9pGHL8LLn8dnoWZuA3A8WrU3W9PEcxcUTM9ijC7Y4oH-rUXFxBBbT-pa4_muvDLECDoF_0u2rQMLwetthPcGjIFy7cCXTAUiGxKaDiX7U3XtDR1UPB6OZekt3b8YxM6TVpv2kbnLmdfE8cGe1HsgHgN_ViFqchCStZhWKuBsz7ON7rpVRe9qNdKBLXyRNbZ6FXFdQrmmmSI3x4bc4OzOA1hdjM7FGRwVb1FrP9bcWer0',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-potter-creating-a-clay-vase-41712-large.mp4',
  },
  {
    title: 'Velocità',
    client: 'Eclipse Motors',
    reach: '850K Reach',
    category: 'Social Campaigns',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCguSRpSI6D7yPvbDrncNy0b8t5cix7hsFSfFNMh49t-fUG9hbXJpQShrnjN76TwMiMtajJ2H9WV2Vqo7fy6A_MEc5G91W0vEiWNXGtHFv_QWACTt_DqhS_totaptwA1SeLT-RcFti05dn5JOwVdjAQu5K8-ATAXltmpVJl60LNXWiLokoUOeMLNTb9CRfhAboiZWR_0e0J6jYQVxSWCZMivmG58eXXuIw3gRbSOF72AuKuwieOtKaKhq6MIGjCTg281InMlu-PmyY',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-driving-in-a-futuristic-neon-lit-city-42618-large.mp4',
  },
  {
    title: 'Urban Rhythm',
    client: 'Zenith Yachts',
    reach: '3.1M Views',
    category: 'Cinematography',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-dancing-woman-in-the-city-under-neon-lights-42221-large.mp4',
  },
  {
    title: 'Gold Dust',
    client: 'Aurelia Gems',
    reach: '980K Likes',
    category: 'Branding',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-sparkles-and-gold-dust-falling-slowly-31295-large.mp4',
  },
  {
    title: 'Neon Shift',
    client: 'Vogue Elite',
    reach: '1.8M Reach',
    category: 'Social Campaigns',
    thumbnail: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=400',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-neon-light-glowing-in-a-dark-room-43034-large.mp4',
  },
];

export default function HighlightsPage() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Branding' | 'Cinematography' | 'Social Campaigns'>('All');
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);

  const filteredReels = portfolioReels.filter(
    (reel) => activeFilter === 'All' || reel.category === activeFilter
  );

  const filterOptions: ('All' | 'Branding' | 'Cinematography' | 'Social Campaigns')[] = [
    'All',
    'Branding',
    'Cinematography',
    'Social Campaigns',
  ];

  return (
    <div className="min-h-screen bg-[#F9EEDC] pt-28 pb-24">
      {/* Background radial glow */}
      <div className="absolute top-0 inset-x-0 h-[600px] pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#8B0000]/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        {/* Page Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B0000]/10 border border-[#8B0000]/20 text-xs font-semibold text-[#8B0000] uppercase tracking-wider">
            <Film className="w-3.5 h-3.5" />
            Media Portfolio
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl text-[#4A0404] uppercase leading-none tracking-tight">
            THE HIGHLIGHTS REEL
          </h1>
          <p className="text-sm md:text-base text-[#1E1E1E]/75 font-light leading-relaxed">
            Netflix-style engagement reporting. Hover over any frame for an instant video preview showcase. Click for full-screen high-fidelity viewing.
          </p>
        </div>

        {/* Filter Selection Panel */}
        <div className="flex justify-center flex-wrap gap-3">
          <div className="inline-flex flex-wrap bg-[#EAD8C0]/30 p-1.5 rounded-2xl border border-[#4A0404]/5 shadow-inner">
            {filterOptions.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`relative px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    isActive ? 'text-[#F9EEDC] font-bold z-10' : 'text-[#4A0404]/75 hover:text-[#4A0404]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterBg"
                      className="absolute inset-0 bg-[#4A0404] rounded-xl -z-10 shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Masonry-style Grid Portfolio */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredReels.map((reel) => (
              <motion.div
                key={reel.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <HighlightCard
                  title={reel.title}
                  client={reel.client}
                  reach={reel.reach}
                  category={reel.category}
                  thumbnail={reel.thumbnail}
                  videoUrl={reel.videoUrl}
                  onSelect={(url, title) => setSelectedVideo({ url, title })}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Video Modal overlay player */}
      <VideoModal
        isOpen={selectedVideo !== null}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo?.url || ''}
        title={selectedVideo?.title || ''}
      />
    </div>
  );
}

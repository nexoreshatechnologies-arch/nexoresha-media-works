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
  category: 'Branding' | 'Cinematography' | 'Social Campaigns';
  thumbnail?: string;
  videoUrl: string;
}

const portfolioReels: ReelProject[] = [
  {
    title: 'Future Builders',
    client: "Sidhpura's Institute",
    reach: '850K Reach',
    category: 'Cinematography',
    videoUrl: '/Highlights/SaveClip.App_AQMV1p4Urvj0gEfDOcYtuz0IJGXcF1p-TQSdoGPy5wSlZUdBXQnRj7CT2rxrZibynMQfVbAUyVCEtwC0z2sQDSuwm-H5l9cjOWNhSdo.mp4',
  },
  {
    title: 'Glamour Narrative',
    client: 'Khushi Kumpawat',
    reach: '2.4M Reach',
    category: 'Branding',
    videoUrl: '/Highlights/SaveClip.App_AQNlO-4gmIV1QZe3IN3NnELC2o7Bgot6mmuJKyYsy_SgYXlb8UZk2vvshyz9J3vpTQUjCD7bBcMGSZPXQqh9xnrAC17x1VIL9BiWSUA.mp4',
  },
  {
    title: 'Taste of Thane',
    client: 'The Thane Foodie',
    reach: '1.1M Reach',
    category: 'Social Campaigns',
    videoUrl: '/Highlights/SaveClip.App_AQNMgmGaQVPLf0z61k14px3fLqy2Up7oApk9eRBS90Z3f0EL1IgHntnme5jt_b8Nuq8F3Wm7em1eQmYofDCxiCAvsglTwXnJEzU5ejM.mp4',
  },
  {
    title: 'School of Excellence',
    client: 'Finland Int. School',
    reach: '1.8M Reach',
    category: 'Cinematography',
    videoUrl: '/Highlights/SaveClip.App_AQOavP-z27RyV_x2gKQ129D1dRf8rG2uPbiwm2FjHq9Lyr27aQvcJ1OYQ8-BiV1lzCtTIJHM8uZx4A_ShkX4u0UEHMGL6VXertJIGj4.mp4',
  },
  {
    title: 'Touring Maharashtra',
    client: 'Bha2Pa (Touring Party)',
    reach: '3.1M Views',
    category: 'Branding',
    videoUrl: '/Highlights/SaveClip.App_AQPMjUB6m94d57tGt5xOcOYqF4QRujxVPtZKDfiSL348YG9VleczT4QmCbXESDVCwkw_t1_EMM-DFQE8JHDbL7ZRsueXAICPprThVXQ.mp4',
  },
  {
    title: 'Coastal Feast',
    client: 'Malvan Tadka',
    reach: '980K Likes',
    category: 'Social Campaigns',
    videoUrl: '/Highlights/SaveClip.App_AQPh2KWWhywm3QI5ohx-Urwa7WjS-H1Diz16CpTH-PZ54y4PkJoRdB2uG821BgyEleTi22v8VDqpOHA6vLKDDNLO5-zFhxz7SbYT0ws.mp4',
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

      <div className="max-w-[92vw] mx-auto px-6 md:px-12 lg:px-20 relative z-10 space-y-16">
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
            {filteredReels.map((reel, index) => (
              <motion.div
                key={reel.title}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
              >
                <HighlightCard
                  title={reel.title}
                  client={reel.client}
                  reach={reel.reach}
                  category={reel.category}
                  thumbnail={reel.thumbnail}
                  videoUrl={reel.videoUrl}
                  featured={reel.videoUrl.includes('AQNlO-4gmIV1QZe3IN3NnELC2o7Bgot6mmuJKyYsy_SgYXlb8UZk2vvshyz9J3vpTQUjCD7bBcMGSZPXQqh9xnrAC17x1VIL9BiWSUA')}
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

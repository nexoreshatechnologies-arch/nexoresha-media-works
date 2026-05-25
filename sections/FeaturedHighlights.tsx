'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
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

const featuredReels: ReelProject[] = [
  {
    title: 'Skyline Manor',
    client: 'Lumina Lux',
    reach: '2.4M Reach',
    category: 'Luxury Real Estate',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCImEf7k9s9k9EudQVZobqIaguoePfsu_awmNpO4hNbvOFOKsPLtptADWs90FHiuI_-dqLar3FErrDdsnEvSEXTqVveBpShLwNNxNG1h3dMRd1G57zX1tR6xeCkq117oSZ7na2YuVhaZoeSPydfa0cSUSBsZOcpKshQGd_29ijNGAFAD9838MW0eD48g-RjKxzJ19CHljJSpQpfX4n23zXJNHtZz4DkJbYxz4pUM80lBqQOqKLixeG4dzHTRh4GimtSttB35H1f0J4',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-woman-with-silver-makeup-40191-large.mp4',
  },
  {
    title: 'The Artisan',
    client: 'Chronos Time',
    reach: '1.1M Reach',
    category: 'Brand Documentary',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCd-bbzUuTJABNfq71txAwvhlLvul-yIcJ9pGHL8LLn8dnoWZuA3A8WrU3W9PEcxcUTM9ijC7Y4oH-rUXFxBBbT-pa4_muvDLECDoF_0u2rQMLwetthPcGjIFy7cCXTAUiGxKaDiX7U3XtDR1UPB6OZekt3b8YxM6TVpv2kbnLmdfE8cGe1HsgHgN_ViFqchCStZhWKuBsz7ON7rpVRe9qNdKBLXyRNbZ6FXFdQrmmmSI3x4bc4OzOA1hdjM7FGRwVb1FrP9bcWer0',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-potter-creating-a-clay-vase-41712-large.mp4',
  },
  {
    title: 'Velocità',
    client: 'Eclipse Motors',
    reach: '850K Reach',
    category: 'Commercial Reel',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCguSRpSI6D7yPvbDrncNy0b8t5cix7hsFSfFNMh49t-fUG9hbXJpQShrnjN76TwMiMtajJ2H9WV2Vqo7fy6A_MEc5G91W0vEiWNXGtHFv_QWACTt_DqhS_totaptwA1SeLT-RcFti05dn5JOwVdjAQu5K8-ATAXltmpVJl60LNXWiLokoUOeMLNTb9CRfhAboiZWR_0e0J6jYQVxSWCZMivmG58eXXuIw3gRbSOF72AuKuwieOtKaKhq6MIGjCTg281InMlu-PmyY',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-driving-in-a-futuristic-neon-lit-city-42618-large.mp4',
  },
];

export default function FeaturedHighlights() {
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);

  const handleSelectVideo = (url: string, title: string) => {
    setSelectedVideo({ url, title });
  };

  return (
    <section id="highlights" className="py-28 px-6 md:px-12 max-w-7xl mx-auto bg-[#F9EEDC]">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <motion.span 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="text-xs uppercase font-bold tracking-widest text-[#8B0000] block"
        >
          Creative Showreel
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03, color: '#8B0000' }}
          transition={{ 
            y: { type: 'spring', stiffness: 100 },
            scale: { type: 'spring', stiffness: 300, damping: 15 },
            color: { duration: 0.3 },
            default: { duration: 0.8, delay: 0.1, type: 'spring', stiffness: 100 }
          }}
          className="font-display text-4xl md:text-6xl text-[#4A0404] uppercase leading-none cursor-default inline-block"
        >
          FEATURED WORKS
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 100 }}
          className="text-sm md:text-base text-[#1E1E1E]/70 font-light leading-relaxed max-w-md mx-auto"
        >
          A curated showcase of our high-impact vertical campaigns and luxury visual narratives.
        </motion.p>
      </div>

      {/* Grid of Highlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredReels.map((reel, index) => (
          <motion.div
            key={reel.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <HighlightCard
              title={reel.title}
              client={reel.client}
              reach={reel.reach}
              category={reel.category}
              thumbnail={reel.thumbnail}
              videoUrl={reel.videoUrl}
              onSelect={handleSelectVideo}
            />
          </motion.div>
        ))}
      </div>

      {/* Explore More Button below */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex justify-center mt-14"
      >
        <Link
          href="/highlights"
          className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#4A0404] hover:text-[#F9EEDC] bg-[#EAD8C0]/30 hover:bg-[#8B0000] border border-[#4A0404]/10 hover:border-transparent px-8 py-4 rounded-xl shadow-sm transition-all duration-300 hover:scale-[1.03] active:scale-95 cursor-pointer"
        >
          Explore More Portfolio
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </motion.div>

      {/* Video Modal Player */}
      <VideoModal
        isOpen={selectedVideo !== null}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo?.url || ''}
        title={selectedVideo?.title || ''}
      />
    </section>
  );
}

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
  thumbnail?: string;
  videoUrl: string;
}

const featuredReels: ReelProject[] = [
  {
    title: 'Future Builders',
    client: "Sidhpura's Institute",
    reach: '850K Reach',
    category: 'Brand Film',
    videoUrl: '/Highlights/SaveClip.App_AQMV1p4Urvj0gEfDOcYtuz0IJGXcF1p-TQSdoGPy5wSlZUdBXQnRj7CT2rxrZibynMQfVbAUyVCEtwC0z2sQDSuwm-H5l9cjOWNhSdo.mp4',
  },
  {
    title: 'Glamour Narrative',
    client: 'Khushi Kumpawat',
    reach: '2.4M Reach',
    category: 'Beauty & Fashion',
    videoUrl: '/Highlights/SaveClip.App_AQNlO-4gmIV1QZe3IN3NnELC2o7Bgot6mmuJKyYsy_SgYXlb8UZk2vvshyz9J3vpTQUjCD7bBcMGSZPXQqh9xnrAC17x1VIL9BiWSUA.mp4',
  },
  {
    title: 'Taste of Thane',
    client: 'The Thane Foodie',
    reach: '1.1M Reach',
    category: 'Social Campaign',
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
    category: 'Commercial Reel',
    videoUrl: '/Highlights/SaveClip.App_AQPh2KWWhywm3QI5ohx-Urwa7WjS-H1Diz16CpTH-PZ54y4PkJoRdB2uG821BgyEleTi22v8VDqpOHA6vLKDDNLO5-zFhxz7SbYT0ws.mp4',
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
              featured={reel.videoUrl.includes('AQNlO-4gmIV1QZe3IN3NnELC2o7Bgot6mmuJKyYsy_SgYXlb8UZk2vvshyz9J3vpTQUjCD7bBcMGSZPXQqh9xnrAC17x1VIL9BiWSUA')}
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

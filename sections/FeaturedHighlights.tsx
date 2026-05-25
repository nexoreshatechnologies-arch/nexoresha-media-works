'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
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
    <section id="highlights" className="py-28 px-6 md:px-12 max-w-7xl mx-auto bg-[#F5EBDD]">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div className="space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-[#8B0000]">
            Creative Showreel
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-[#4A0404] uppercase leading-none">
            FEATURED WORKS
          </h2>
          <p className="text-sm md:text-base text-[#1E1E1E]/70 max-w-md font-light leading-relaxed">
            A curated showcase of our high-impact vertical campaigns and luxury visual narratives.
          </p>
        </div>
        
        <Link
          href="/highlights"
          className="group flex items-center gap-1 text-sm font-semibold uppercase tracking-wider text-[#4A0404] border-b-2 border-[#4A0404] pb-1 cursor-pointer"
        >
          Explore More
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      {/* Grid of Highlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredReels.map((reel) => (
          <HighlightCard
            key={reel.title}
            title={reel.title}
            client={reel.client}
            reach={reel.reach}
            category={reel.category}
            thumbnail={reel.thumbnail}
            videoUrl={reel.videoUrl}
            onSelect={handleSelectVideo}
          />
        ))}
      </div>

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

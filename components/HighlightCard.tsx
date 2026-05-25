'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, TrendingUp, Eye } from 'lucide-react';

interface HighlightCardProps {
  title: string;
  client: string;
  reach: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
  onSelect: (videoUrl: string, title: string) => void;
}

export default function HighlightCard({
  title,
  client,
  reach,
  category,
  thumbnail,
  videoUrl,
  onSelect,
}: HighlightCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch((e) => {
        // Safe check for browser auto-play blocker
        console.warn('Hover auto-play blocked:', e);
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(videoUrl, `${client} - ${title}`)}
      className="group relative aspect-[9/16] overflow-hidden rounded-2xl bg-[#4A0404] cursor-pointer border border-[#4A0404]/10 hover:border-[#8B0000]/30 shadow-md hover:shadow-[0_20px_50px_rgba(74,4,4,0.22)] transition-all duration-500 flex flex-col justify-end"
    >
      {/* Thumbnail static image */}
      <img
        alt={`${client} project thumbnail`}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
          isHovered ? 'opacity-0 scale-105' : 'opacity-80 scale-100'
        }`}
        src={thumbnail}
      />

      {/* Hover autoplay preview video */}
      <video
        ref={videoRef}
        src={videoUrl}
        loop
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out pointer-events-none ${
          isHovered ? 'opacity-70' : 'opacity-0'
        }`}
      />

      {/* Shadow Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#4A0404]/90 via-transparent to-black/30 pointer-events-none z-10" />

      {/* Play indicator hover button */}
      <div className="absolute inset-0 flex items-center justify-center z-15 pointer-events-none">
        <motion.div
          animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-lg"
        >
          <Play className="w-6 h-6 fill-white ml-1" />
        </motion.div>
      </div>

      {/* Card Metadata Details */}
      <div className="relative z-20 p-6 space-y-2">
        <span className="text-[10px] text-[#EAD8C0] tracking-widest uppercase font-bold block">
          {category}
        </span>
        <div className="flex justify-between items-end">
          <div>
            <span className="text-xs text-white/70 block font-medium">{client}</span>
            <h3 className="text-white font-display text-2xl tracking-wide uppercase leading-tight">
              {title}
            </h3>
          </div>
          
          <div className="flex items-center gap-1 bg-[#8B0000] text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg shadow-md flex-shrink-0">
            <TrendingUp className="w-3 h-3" />
            {reach}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

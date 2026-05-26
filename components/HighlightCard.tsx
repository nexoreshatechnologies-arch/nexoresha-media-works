'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, TrendingUp, Award } from 'lucide-react';

interface HighlightCardProps {
  title: string;
  client: string;
  reach: string;
  category: string;
  thumbnail?: string;
  videoUrl: string;
  featured?: boolean;
  onSelect: (videoUrl: string, title: string) => void;
}

export default function HighlightCard({
  title,
  client,
  reach,
  category,
  thumbnail,
  videoUrl,
  featured = false,
  onSelect,
}: HighlightCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch((e) => {
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
      className={`group relative aspect-[9/16] overflow-hidden rounded-2xl bg-[#4A0404] cursor-pointer border shadow-md transition-all duration-500 flex flex-col justify-end ${
        featured 
          ? 'border-yellow-500/50 hover:border-yellow-400 shadow-[0_10px_35px_rgba(234,179,8,0.15)] hover:shadow-[0_20px_50px_rgba(234,179,8,0.3)] ring-1 ring-yellow-500/20' 
          : 'border-[#4A0404]/10 hover:border-[#8B0000]/30 hover:shadow-[0_20px_50px_rgba(139,0,0,0.18)]'
      }`}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 left-4 z-30 flex items-center gap-1.5 bg-gradient-to-r from-yellow-500 to-amber-600 border border-yellow-400/25 px-3 py-1 rounded-full shadow-lg">
          <Award className="w-3.5 h-3.5 text-white animate-pulse" />
          <span className="text-[9px] text-white font-bold tracking-widest uppercase">
            Featured Focus
          </span>
        </div>
      )}

      {/* Thumbnail static image */}
      {thumbnail ? (
        <img
          alt={`${client} project thumbnail`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
            isHovered ? 'opacity-0 scale-105' : 'opacity-80 scale-100'
          }`}
          src={thumbnail}
        />
      ) : null}

      {/* Autoplay preview video (or fallback static first frame) */}
      <video
        ref={videoRef}
        src={videoUrl}
        loop
        muted
        playsInline
        preload="metadata"
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out pointer-events-none ${
          thumbnail
            ? (isHovered ? 'opacity-70 scale-105' : 'opacity-0 scale-100')
            : (isHovered ? 'opacity-90 scale-105' : 'opacity-85 scale-100')
        }`}
      />

      {/* Shadow Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#4A0404]/90 via-transparent to-black/30 pointer-events-none z-10" />

      {/* Play indicator hover button */}
      <div className="absolute inset-0 flex items-center justify-center z-15 pointer-events-none">
        <motion.div
          animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className={`w-16 h-16 rounded-full border flex items-center justify-center text-white shadow-lg backdrop-blur-md ${
            featured 
              ? 'bg-yellow-500/20 border-yellow-400/50 text-yellow-100' 
              : 'bg-white/20 border-white/40 text-white'
          }`}
        >
          <Play className="w-6 h-6 fill-current ml-1" />
        </motion.div>
      </div>

      {/* Card Metadata Details */}
      <motion.div 
        animate={{ y: isHovered ? -4 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="relative z-20 p-6 space-y-2"
      >
        <span className={`text-[10px] tracking-widest uppercase font-bold block ${
          featured ? 'text-yellow-400' : 'text-[#EAD8C0]'
        }`}>
          {category}
        </span>
        <div className="flex justify-between items-end w-full">
          <div className="flex-grow pr-2">
            <span className="text-xs text-white/70 block font-medium">{client}</span>
            <h3 className="text-white font-display text-2xl tracking-wide uppercase leading-tight">
              {title}
            </h3>
          </div>
          {reach && (
            <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-2.5 py-1.5 rounded-xl border border-white/15 text-white text-[10px] font-bold uppercase tracking-wider shrink-0 shadow-sm">
              <TrendingUp className="w-3.5 h-3.5 text-[#EAD8C0]" />
              <span>{reach}</span>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

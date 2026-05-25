'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play, Film } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  
  const targetProgress = useRef(0);
  const currentProgress = useRef(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isPreloaded, setIsPreloaded] = useState(false);
  const [loadPercent, setLoadPercent] = useState(0);

  // Preload all 240 frames in the client
  useEffect(() => {
    const totalFrames = 240;
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, '0');
      img.src = `/Hero Frames/ezgif-frame-${frameNum}.jpg`;
      
      img.onload = () => {
        loadedCount++;
        setLoadPercent(Math.round((loadedCount / totalFrames) * 100));
        if (loadedCount === totalFrames) {
          setIsPreloaded(true);
        }
      };
      
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          setIsPreloaded(true);
        }
      };

      loadedImages.push(img);
    }
    
    imagesRef.current = loadedImages;

    // Scroll progress trigger listener
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollHeight = rect.height - window.innerHeight;
      
      if (scrollHeight <= 0) return;
      
      // Calculate scroll progress (0 to 1) relative to parent's height
      const progress = Math.max(0, Math.min(1, -rect.top / scrollHeight));
      targetProgress.current = progress;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Animation frame loop with lerp (linear interpolation) for Apple-level fluid scrubbing
    let animationId = 0;
    const updateFrame = () => {
      // Lerp coefficient (0.15 makes frames drift smoothly behind scrolling speed)
      currentProgress.current += (targetProgress.current - currentProgress.current) * 0.15;
      
      // Map progress to frame count (1 - 240)
      const frameIndex = Math.min(
        totalFrames,
        Math.max(1, Math.floor(currentProgress.current * (totalFrames - 1)) + 1)
      );

      if (imgRef.current) {
        const frameNum = String(frameIndex).padStart(3, '0');
        imgRef.current.src = `/Hero Frames/ezgif-frame-${frameNum}.jpg`;
      }

      animationId = requestAnimationFrame(updateFrame);
    };

    updateFrame();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  } as any;

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  } as any;

  return (
    <div ref={containerRef} className="relative w-full h-[300vh] bg-[#F9EEDC]">
      {/* Sticky Content Wrapper (Height locked to viewport) */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-[#F9EEDC]">
        
        {/* Soft Background blur accents */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-1/4 left-[5%] w-[250px] h-[250px] bg-[#8B0000]/3 rounded-full blur-[80px]" />
          <div className="absolute bottom-10 right-[25%] w-[300px] h-[300px] bg-[#4A0404]/3 rounded-full blur-[100px]" />
        </div>

        {/* 1. Image Sequence Container (Absolute right-aligned bleeding on desktop, full-screen overlay on mobile) */}
        <div className="absolute top-[73px] right-0 bottom-0 left-0 lg:left-[45%] w-full lg:w-[55%] h-[calc(100vh-73px)] z-0 flex items-center justify-center bg-[#F9EEDC]">
          
          {/* Loading Indicator for frames preloading */}
          {!isPreloaded && (
            <div className="absolute inset-0 bg-[#F9EEDC] z-20 flex flex-col items-center justify-center gap-3 p-8">
              <span className="font-display text-xl text-[#4A0404] tracking-widest uppercase">
                Loading Sequence
              </span>
              <div className="w-48 h-1.5 bg-[#4A0404]/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#8B0000] transition-all duration-300"
                  style={{ width: `${loadPercent}%` }}
                />
              </div>
              <span className="text-[10px] uppercase font-bold text-[#1E1E1E]/50 tracking-wider">
                {loadPercent}% complete
              </span>
            </div>
          )}

          <img
            ref={imgRef}
            alt="Cinematic Brand Scroll Sequence"
            className="w-full h-full object-contain select-none pointer-events-none"
            src="/Hero Frames/ezgif-frame-001.jpg"
          />
        </div>

        {/* 2. Content Overlay Container (Z-Index 10) */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full h-full flex items-center justify-start pointer-events-none">
          
          {/* Text & CTAs card - transparent on desktop, light blur on mobile for legibility */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-md lg:max-w-xl space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start bg-[#F9EEDC]/10 backdrop-blur-md border border-white/20 p-8 sm:p-10 rounded-3xl shadow-[0_15px_35px_rgba(74,4,4,0.03)] lg:bg-transparent lg:backdrop-blur-none lg:border-none lg:shadow-none lg:p-0 pointer-events-auto mt-[73px]"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4A0404]/5 border border-[#4A0404]/10 text-xs font-semibold text-[#4A0404] uppercase tracking-wider"
            >
              <Film className="w-3.5 h-3.5" />
              Social Media & Branding Agency
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl md:text-5xl lg:text-7xl leading-[0.95] text-[#4A0404] uppercase tracking-tight drop-shadow-sm"
            >
              THE DIRECTOR'S <br />
              <span className="text-[#8B0000]">EYE</span> FOR YOUR BRAND
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="font-sans text-sm md:text-base text-[#1E1E1E]/80 leading-relaxed font-light"
            >
              We don't just curate posts; we direct your legacy. Experience our scroll-triggered brand sequencing and establish visual authority.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2"
            >
              <Link
                href="/contact"
                className="group bg-[#4A0404] hover:bg-[#8B0000] text-white px-8 py-4 rounded-xl font-medium tracking-wide uppercase transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-[0_10px_25px_rgba(74,4,4,0.12)] flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                Start Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/highlights"
                className="group glass-layer border border-[#4A0404]/10 hover:border-[#4A0404]/30 hover:bg-[#EAD8C0]/30 text-[#4A0404] px-8 py-4 rounded-xl font-medium tracking-wide uppercase transition-all duration-300 hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                <Play className="w-4 h-4 fill-[#4A0404] text-[#4A0404]" />
                View Showreel
              </Link>
            </motion.div>
          </motion.div>
          
        </div>

      </div>
    </div>
  );
}

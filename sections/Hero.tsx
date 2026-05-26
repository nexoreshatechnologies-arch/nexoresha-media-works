'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
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

  const directorsRef = useRef<HTMLSpanElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    targetProgress.current = latest;
  });

  // Mouse coordinate tracker for background glow with fading boundary
  const [mousePos, setMousePos] = useState({ x: -200, y: -200, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (typeof window === 'undefined') return;
    
    let isLeftOfS = false;
    if (directorsRef.current) {
      const rect = directorsRef.current.getBoundingClientRect();
      // Only keep the glow active if the cursor is left of the right edge of the word "DIRECTOR'S"
      isLeftOfS = e.clientX < rect.right;
    }

    setMousePos({
      x: e.clientX,
      y: e.clientY,
      opacity: isLeftOfS ? 1 : 0,
    });
  };

  // Preload all 241 frames in the client
  useEffect(() => {
    const totalFrames = 241;
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, '0');
      img.src = `/Hero Section frames/ezgif-frame-${frameNum}.jpg`;
      
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

    // Animation frame loop with lerp (linear interpolation) for Apple-level fluid scrubbing
    let animationId = 0;
    const updateFrame = () => {
      currentProgress.current += (targetProgress.current - currentProgress.current) * 0.15;
      
      const frameIndex = Math.min(
        totalFrames,
        Math.max(1, Math.floor(currentProgress.current * (totalFrames - 1)) + 1)
      );

      if (imgRef.current) {
        const frameNum = String(frameIndex).padStart(3, '0');
        imgRef.current.src = `/Hero Section frames/ezgif-frame-${frameNum}.jpg`;
      }

      animationId = requestAnimationFrame(updateFrame);
    };

    updateFrame();

    return () => {
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
    hidden: { y: 25, opacity: 0 },
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

  // Split strings for hover letter bounce effect
  const renderInteractiveText = (text: string, isMaroon: boolean) => {
    return text.split('').map((char, index) => {
      if (char === ' ') return <span key={index} className="inline-block">&nbsp;</span>;
      return (
        <motion.span
          key={index}
          className={`inline-block cursor-default font-display transition-colors duration-300 ${
            isMaroon 
              ? 'text-[#FF5E5E] hover:text-[#F9EEDC]' 
              : 'text-[#F9EEDC] hover:text-[#FF5E5E]'
          }`}
          whileHover={{ y: -8, scale: 1.15, rotate: isMaroon ? -5 : 5 }}
          transition={{ type: 'spring', stiffness: 350, damping: 10 }}
        >
          {char}
        </motion.span>
      );
    });
  };

  return (
    <div id="home" ref={containerRef} className="relative w-full h-[300vh] bg-[#997557]">
      {/* Sticky Content Wrapper (Height locked to viewport) */}
      <div 
        className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-[#997557]"
        onMouseMove={handleMouseMove}
      >
        
        {/* Interactive mouse follow cursor glow (Desktop only, fades near sequence) */}
        <motion.div
          className="absolute w-[350px] h-[350px] bg-gradient-to-r from-[#8B0000]/12 to-transparent rounded-full blur-[80px] pointer-events-none z-0 hidden lg:block"
          animate={{
            x: mousePos.x - 175,
            y: mousePos.y - 175,
            opacity: mousePos.opacity
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 120 }}
        />

        {/* Static Background blur accents */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-1/4 left-[5%] w-[250px] h-[250px] bg-[#8B0000]/3 rounded-full blur-[80px]" />
          <div className="absolute bottom-10 right-[25%] w-[300px] h-[300px] bg-[#4A0404]/3 rounded-full blur-[100px]" />
        </div>

        {/* 1. Image Sequence Container (Absolute centered background animation) */}
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-screen z-0 flex items-center justify-center bg-[#997557] overflow-hidden">
          
          {/* Loading Indicator for frames preloading */}
          {!isPreloaded && (
            <div className="absolute inset-0 bg-[#997557] z-20 flex flex-col items-center justify-center gap-3 p-8">
              <span className="font-display text-xl text-[#F9EEDC] tracking-widest uppercase">
                Loading Sequence
              </span>
              <div className="w-48 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#FF5E5E] transition-all duration-300"
                  style={{ width: `${loadPercent}%` }}
                />
              </div>
              <span className="text-[10px] uppercase font-bold text-[#F9EEDC]/60 tracking-wider">
                {loadPercent}% complete
              </span>
            </div>
          )}

          <div className="relative w-full aspect-[16/9] scale-[2.4] sm:scale-[1.25] transition-transform duration-300 transform -translate-y-[12vh] sm:translate-y-0 flex items-center justify-center overflow-hidden">
            <img
              ref={imgRef}
              alt="Cinematic Brand Scroll Sequence"
              className="w-full h-full object-cover select-none pointer-events-none opacity-100"
              style={{ clipPath: 'inset(4.2% 0 4.2% 0)' }}
              src="/Hero Section frames/ezgif-frame-001.jpg"
            />
          </div>
        </div>

        {/* 2. Content Overlay Container (Z-Index 10) */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full h-full flex items-center justify-center pointer-events-none">
          
          {/* Centered Text & CTAs layout (rectangular box removed) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl w-full space-y-4 sm:space-y-6 text-center flex flex-col items-center pointer-events-auto transform -translate-y-[12vh] sm:translate-y-[-5%] lg:translate-y-[-7%]"
          >
            {/* Tag Badge with rotating Film roll icon on hover */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[9px] sm:text-xs font-semibold text-[#F9EEDC] uppercase tracking-wider group cursor-default backdrop-blur-sm"
            >
              <Film className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FF5E5E] group-hover:rotate-[45deg] transition-transform duration-500" />
              Social Media & Branding Agency
            </motion.div>

            {/* Letter-split bounce headers */}
            <motion.h1
              variants={itemVariants}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl leading-[0.95] uppercase tracking-tight drop-shadow-md flex flex-wrap justify-center gap-x-2 sm:gap-x-3 gap-y-1 select-none"
            >
              <span className="inline-block">{renderInteractiveText("THE", false)}</span>
              <span ref={directorsRef} className="inline-block">{renderInteractiveText("DIRECTOR'S", false)}</span>
              <span className="inline-block">{renderInteractiveText("EYE", true)}</span>
              <span className="inline-block">{renderInteractiveText("FOR", false)}</span>
              <span className="inline-block">{renderInteractiveText("YOUR", false)}</span>
              <span className="inline-block">{renderInteractiveText("BRAND", false)}</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="font-sans text-[11px] sm:text-sm md:text-base text-[#F9EEDC]/85 leading-relaxed font-light drop-shadow-sm max-w-[85%] sm:max-w-md lg:max-w-2xl"
            >
              We don&apos;t just curate posts; we direct your legacy. Experience our scroll-triggered brand sequencing and establish visual authority.
            </motion.p>

            {/* Interactive CTAs - horizontal and compact on mobile to fit the laptop screen */}
            <motion.div
              variants={itemVariants}
              className="flex flex-row justify-center gap-2 sm:gap-4 w-auto pt-1 sm:pt-2"
            >
              <Link
                href="/contact"
                className="group bg-[#4A0404] hover:bg-[#8B0000] text-white px-4 py-2.5 sm:px-8 sm:py-4 rounded-xl font-medium tracking-wide uppercase transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-[0_10px_25px_rgba(74,4,4,0.12)] flex items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-sm border border-[#8B0000]/30"
              >
                Start Project
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="/highlights"
                className="group bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-[#F9EEDC] hover:text-white px-4 py-2.5 sm:px-8 sm:py-4 rounded-xl font-medium tracking-wide uppercase transition-all duration-300 hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-sm backdrop-blur-sm shadow-[0_10px_25px_rgba(255,255,255,0.03)]"
              >
                <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#F9EEDC] text-[#F9EEDC] group-hover:scale-115 transition-transform" />
                View Showreel
              </Link>
            </motion.div>
          </motion.div>
          
        </div>

      </div>
    </div>
  );
}

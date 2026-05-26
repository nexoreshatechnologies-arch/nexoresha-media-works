'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Loader2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

export default function VideoModal({ isOpen, onClose, videoUrl, title }: VideoModalProps) {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      // Auto-focus and lock body scroll
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleCanPlay = () => {
    setIsLoading(false);
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn('Auto-play blocked by browser:', err);
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />

          {/* Modal content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative w-full max-w-lg aspect-[9/16] md:max-h-[85vh] rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl flex flex-col z-10"
          >
            {/* Header controls overlay */}
            <div className="absolute top-0 inset-x-0 p-4 bg-gradient-to-b from-black/85 to-transparent flex justify-between items-center z-20">
              <h3 className="font-display text-lg text-white tracking-widest uppercase">
                {title}
              </h3>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Loading Spinner */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center z-15 bg-black">
                <Loader2 className="w-8 h-8 text-white animate-spin opacity-70" />
              </div>
            )}

            {/* Video element */}
            <div className="flex-grow w-full h-full relative z-10 flex items-center justify-center bg-black">
              <video
                ref={videoRef}
                src={videoUrl}
                className="w-full h-full object-cover"
                controls
                playsInline
                onCanPlay={handleCanPlay}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

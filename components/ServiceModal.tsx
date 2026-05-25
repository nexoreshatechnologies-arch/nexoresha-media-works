'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Calendar, ArrowRight, ShoppingCart, Image as ImageIcon } from 'lucide-react';
import { useCartStore } from '@/lib/store';

interface ServiceDetails {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  icon: any;
  deliverables: string[];
  timeline: string;
  gallery: string[];
}

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceDetails | null;
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  const { addItem, toggleCart } = useCartStore();

  if (!isOpen || !service) return null;

  const handleAddToCart = () => {
    addItem({
      id: service.id,
      name: service.name,
      price: service.price,
      category: service.category,
      description: service.description,
    });
    onClose();
    toggleCart(true); // Open the cart immediately
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[220] flex items-center justify-center p-4">
        {/* Backdrop glass blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#1E1E1E]/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 50, opacity: 0, scale: 0.95 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="relative w-full max-w-2xl bg-[#F5EBDD] border border-[#4A0404]/20 rounded-3xl shadow-[0_20px_50px_rgba(74,4,4,0.22)] overflow-hidden z-10 flex flex-col max-h-[90vh]"
        >
          {/* Header controls */}
          <div className="p-6 border-b border-[#4A0404]/10 bg-[#4A0404]/5 flex justify-between items-center flex-shrink-0">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#8B0000] block mb-0.5">
                {service.category} Service
              </span>
              <h3 className="font-display text-2xl text-[#4A0404] tracking-wide uppercase leading-tight">
                {service.name}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#4A0404] hover:bg-[#4A0404]/10 transition-colors cursor-pointer"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content - Scrollable */}
          <div className="p-8 overflow-y-auto space-y-8 flex-grow">
            
            {/* Description & Metadata */}
            <div className="space-y-4">
              <p className="text-sm md:text-base text-[#1E1E1E]/80 leading-relaxed font-light">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 bg-[#4A0404]/5 border border-[#4A0404]/10 px-3.5 py-2 rounded-xl text-xs font-semibold text-[#4A0404]">
                  <Calendar className="w-4 h-4 text-[#8B0000]" />
                  Timeline: {service.timeline}
                </div>
                <div className="flex items-center gap-2 bg-[#8B0000]/5 border border-[#8B0000]/10 px-3.5 py-2 rounded-xl text-xs font-semibold text-[#8B0000]">
                  Starting Price: ₹{service.price.toLocaleString('en-IN')}
                </div>
              </div>
            </div>

            {/* Deliverables checklist */}
            <div className="space-y-4">
              <h4 className="font-display text-lg text-[#4A0404] tracking-wider uppercase">
                What's Included (Deliverables)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-[#1E1E1E]/80 bg-white/40 border border-[#4A0404]/5 p-3.5 rounded-xl"
                  >
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Media Gallery Showcase */}
            {service.gallery && service.gallery.length > 0 && (
              <div className="space-y-4">
                <h4 className="font-display text-lg text-[#4A0404] tracking-wider uppercase flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-[#8B0000]" />
                  Creative Visual Showcase
                </h4>
                
                {/* Horizontal slider */}
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin snap-x max-w-full">
                  {service.gallery.map((imgUrl, index) => (
                    <div
                      key={index}
                      className="snap-center flex-shrink-0 w-56 aspect-video md:w-64 rounded-xl overflow-hidden shadow-sm border border-[#4A0404]/10"
                    >
                      <img
                        alt={`Example work ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        src={imgUrl}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Footer */}
          <div className="p-6 border-t border-[#4A0404]/10 bg-[#F5EBDD] flex justify-between items-center gap-4 flex-shrink-0">
            <div>
              <span className="text-[10px] text-[#1E1E1E]/50 uppercase tracking-widest block font-bold">
                Starting from
              </span>
              <span className="font-display text-2xl text-[#8B0000]">
                ₹{service.price.toLocaleString('en-IN')}
              </span>
            </div>

            <button
              onClick={handleAddToCart}
              className="bg-[#4A0404] hover:bg-[#8B0000] text-white px-6 py-3.5 rounded-xl font-display tracking-wider text-sm uppercase flex items-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer shadow-md"
            >
              <ShoppingCart className="w-4 h-4" />
              Add to cart
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, Ticket, Loader2, MessageSquare, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/lib/store';

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function CartDrawer() {
  const {
    items,
    coupon,
    isCartOpen,
    removeItem,
    updateQuantity,
    applyCoupon,
    removeCoupon,
    clearCart,
    toggleCart,
  } = useCartStore();

  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState(false);
  
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);

  // Price calculations
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountPercent = coupon ? coupon.discountPercent : 0;
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const afterDiscount = subtotal - discountAmount;
  const gstAmount = Math.round(afterDiscount * 0.18);
  const totalAmount = afterDiscount + gstAmount;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    setCouponSuccess(false);

    if (!couponInput.trim()) return;

    const success = applyCoupon(couponInput);
    if (success) {
      setCouponSuccess(true);
      setCouponInput('');
    } else {
      setCouponError('Invalid coupon code.');
    }
  };

  const handleCheckout = () => {
    if (items.length === 0) return;
    setIsCheckoutLoading(true);

    try {
      // 1. Build a beautiful descriptive message for WhatsApp
      let message = `Hello Nexoresha! I would like to initiate a branding project with the following services:\n\n`;

      items.forEach((item, index) => {
        message += `${index + 1}. *${item.name}* (${item.category}) - ${item.quantity} unit(s) x ₹${item.price.toLocaleString('en-IN')}\n`;
      });

      if (coupon) {
        message += `\n*Coupon Applied:* ${coupon.code} (${coupon.discountPercent}% OFF)\n`;
        message += `*Discount Amount:* - ₹${discountAmount.toLocaleString('en-IN')}\n`;
      }

      message += `\n*GST (18%):* ₹${gstAmount.toLocaleString('en-IN')}\n`;
      message += `*Estimated Budget:* ₹${totalAmount.toLocaleString('en-IN')}\n\n`;
      message += `Please connect me with a media director to discuss the roadmap!`;

      // 2. Open WhatsApp link
      const encodedMsg = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/919136936913?text=${encodedMsg}`;

      window.open(whatsappUrl, '_blank');

      // 3. Clear cart and close
      clearCart();
      toggleCart(false);
      setIsCheckoutLoading(false);
    } catch (err) {
      console.error(err);
      alert('Failed to initialize WhatsApp redirection. Please try again.');
      setIsCheckoutLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-100 overflow-hidden">
            {/* Backdrop slide blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => toggleCart(false)}
              className="absolute inset-0 bg-[#1E1E1E]/50 backdrop-blur-sm"
            />

            {/* Sidebar drawer body */}
            <div className="absolute inset-y-0 right-0 max-w-full flex">
              <motion.div
                initial={{ translateX: '100%' }}
                animate={{ translateX: 0 }}
                exit={{ translateX: '100%' }}
                transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
                className="w-screen max-w-md bg-[#F9EEDC] shadow-[-20px_0_50px_rgba(74,4,4,0.06)] border-l border-[#4A0404]/10 flex flex-col h-full"
              >
                {/* Header */}
                <div className="p-6 border-b border-[#4A0404]/10 flex justify-between items-center bg-[#4A0404]/5">
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-2xl text-[#4A0404] tracking-wider uppercase">
                      YOUR PROJECT
                    </h3>
                    <span className="bg-[#4A0404]/10 text-[#4A0404] text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      {items.length} items
                    </span>
                  </div>
                  <button
                    onClick={() => toggleCart(false)}
                    className="p-1.5 rounded-lg text-[#4A0404] hover:bg-[#4A0404]/10 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Items List */}
                <div className="flex-grow p-6 overflow-y-auto space-y-4">
                  {items.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-64 text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-[#4A0404]/5 flex items-center justify-center text-[#4A0404]/45">
                        <ShoppingBag className="w-8 h-8" />
                      </div>
                      <div>
                        <p className="font-display text-lg text-[#4A0404] tracking-wide uppercase">
                          YOUR VISION IS EMPTY
                        </p>
                        <p className="text-xs text-[#1E1E1E]/60 max-w-xs mt-1">
                          Add custom services or branding plans below to compile your agency request.
                        </p>
                      </div>
                    </div>
                  ) : (
                    items.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-4 p-4 rounded-xl border border-[#4A0404]/10 bg-white/40 backdrop-blur shadow-sm relative group hover:border-[#4A0404]/20 transition-all"
                      >
                        <div className="flex-grow space-y-1.5">
                          <div className="flex justify-between">
                            <h4 className="font-semibold text-sm text-[#4A0404] leading-snug">
                              {item.name}
                            </h4>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-red-600 hover:text-red-800 p-1 opacity-60 group-hover:opacity-100 transition-opacity cursor-pointer"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-[11px] text-[#1E1E1E]/60 line-clamp-1">
                            {item.description || item.category}
                          </p>
                          
                          <div className="flex justify-between items-center pt-1">
                            <span className="font-semibold text-sm text-[#8B0000]">
                              ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                            </span>
                            
                            {/* Quantity buttons */}
                            <div className="flex items-center border border-[#4A0404]/10 bg-white/60 rounded-lg overflow-hidden">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1 px-1.5 hover:bg-[#4A0404]/5 text-[#4A0404] transition-colors cursor-pointer"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-xs font-semibold px-2 text-[#4A0404]">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1 px-1.5 hover:bg-[#4A0404]/5 text-[#4A0404] transition-colors cursor-pointer"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Sub-footer Pricing Area */}
                {items.length > 0 && (
                  <div className="p-6 bg-white/70 border-t border-[#4A0404]/10 space-y-4">
                    {/* Coupon Form */}
                    <form onSubmit={handleApplyCoupon} className="flex gap-2">
                      <div className="relative flex-grow">
                        <Ticket className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A0404]/50" />
                        <input
                          type="text"
                          value={couponInput}
                          onChange={(e) => setCouponInput(e.target.value)}
                          placeholder="Coupon Code"
                          className="w-full text-xs bg-[#F9EEDC]/40 border border-[#4A0404]/15 rounded-lg py-2.5 pl-9 pr-3 text-[#1E1E1E] focus:outline-none focus:border-[#4A0404] placeholder-[#1E1E1E]/40"
                        />
                      </div>
                      <button
                        type="submit"
                        className="bg-[#4A0404] hover:bg-[#8B0000] text-white px-4 rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer"
                      >
                        Apply
                      </button>
                    </form>

                    {couponError && <p className="text-red-600 text-[10px] font-semibold">{couponError}</p>}
                    {couponSuccess && <p className="text-emerald-700 text-[10px] font-semibold">Coupon applied successfully!</p>}

                    {coupon && (
                      <div className="flex justify-between items-center bg-emerald-50 border border-emerald-200/50 p-2.5 rounded-lg text-xs">
                        <span className="text-emerald-800 font-semibold flex items-center gap-1.5">
                          <Ticket className="w-3.5 h-3.5" />
                          Code: {coupon.code} ({coupon.discountPercent}% OFF)
                        </span>
                        <button
                          onClick={removeCoupon}
                          className="text-red-700 hover:underline font-semibold tracking-wide uppercase text-[10px]"
                        >
                          Remove
                        </button>
                      </div>
                    )}

                    {/* Pricing summary */}
                    <div className="space-y-2 border-t border-[#4A0404]/10 pt-4">
                      <div className="flex justify-between text-xs text-[#1E1E1E]/70">
                        <span>Project Subtotal</span>
                        <span className="font-semibold text-[#1E1E1E]">₹{subtotal.toLocaleString('en-IN')}</span>
                      </div>
                      {coupon && (
                        <div className="flex justify-between text-xs text-emerald-800 font-semibold">
                          <span>Discount Applied</span>
                          <span>- ₹{discountAmount.toLocaleString('en-IN')}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-xs text-[#1E1E1E]/70">
                        <span>GST Liability (18%)</span>
                        <span className="font-semibold text-[#1E1E1E]">₹{gstAmount.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="border-t border-[#4A0404]/10 my-2 pt-3 flex justify-between items-center">
                        <span className="font-display text-lg text-[#4A0404] tracking-wider uppercase">
                          ESTIMATED BUDGET
                        </span>
                        <span className="font-display text-2xl text-[#8B0000]">
                          ₹{totalAmount.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>

                    {/* Checkout Button */}
                    <button
                      onClick={handleCheckout}
                      disabled={isCheckoutLoading}
                      className="w-full bg-[#4A0404] hover:bg-[#8B0000] disabled:bg-[#4A0404]/40 text-[#F9EEDC] py-4 rounded-xl font-display tracking-widest text-lg uppercase transition-all duration-300 hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      {isCheckoutLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Redirecting...
                        </>
                      ) : (
                        <>
                          <MessageSquare className="w-5 h-5" />
                          Discuss on WhatsApp
                        </>
                      )}
                    </button>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

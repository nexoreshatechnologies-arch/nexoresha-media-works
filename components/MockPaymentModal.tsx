'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, CheckCircle2, XCircle, ShieldAlert, Sparkles, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface MockPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderData: {
    razorpayOrderId: string;
    amount: number;
    currency: string;
    keyId: string;
  } | null;
  onSuccess: (paymentId: string) => void;
  onFailure: (message: string) => void;
}

export default function MockPaymentModal({
  isOpen,
  onClose,
  orderData,
  onSuccess,
  onFailure
}: MockPaymentModalProps) {
  const [status, setStatus] = useState<'idle' | 'processing' | 'success' | 'failure'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen || !orderData) return null;

  const handleSimulateSuccess = () => {
    setStatus('processing');
    setTimeout(() => {
      setStatus('success');
      const paymentId = `pay_mock_${Math.random().toString(36).substring(2, 11)}`;
      
      // Trigger premium celebration confetti!
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#4A0404', '#8B0000', '#EAD8C0', '#F9EEDC']
      });

      setTimeout(() => {
        onSuccess(paymentId);
        setStatus('idle');
      }, 2000);
    }, 1800);
  };

  const handleSimulateFailure = () => {
    setStatus('processing');
    setTimeout(() => {
      setStatus('failure');
      setErrorMessage('The transaction was declined by the user\'s bank.');
      setTimeout(() => {
        onFailure('Payment failed: transaction declined.');
        setStatus('idle');
      }, 2000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
        {/* Backdrop blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={status === 'processing' ? undefined : onClose}
          className="absolute inset-0 bg-[#1E1E1E]/60 backdrop-blur-md"
        />

        {/* Modal body */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="relative w-full max-w-md overflow-hidden rounded-2xl bg-[#F9EEDC] border border-[#4A0404]/20 shadow-[0_20px_50px_rgba(74,4,4,0.25)] z-10"
        >
          {/* Top aesthetic border */}
          <div className="h-2 w-full bg-gradient-to-r from-[#4A0404] via-[#8B0000] to-[#EAD8C0]" />

          {/* Body Content */}
          <div className="p-8">
            {status === 'idle' && (
              <div className="space-y-6">
                {/* Header */}
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#8B0000] bg-[#8B0000]/10 px-2 py-0.5 rounded">
                      Sandbox Simulator
                    </span>
                    <h3 className="font-display text-2xl text-[#4A0404] mt-1.5 uppercase">
                      RAZORPAY PAYMENT
                    </h3>
                  </div>
                  <CreditCard className="w-8 h-8 text-[#4A0404]" />
                </div>

                {/* Gateway Warning notice */}
                <div className="flex gap-3 bg-[#8B0000]/5 border border-[#8B0000]/10 p-4 rounded-xl text-xs text-[#8B0000]/90 leading-relaxed">
                  <ShieldAlert className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block">Developer mode enabled</span>
                    No active credentials configured in env. System fell back to this local simulated gateway environment automatically.
                  </div>
                </div>

                {/* Pricing / Details Info */}
                <div className="bg-[#4A0404]/5 rounded-xl p-4 space-y-2 border border-[#4A0404]/5">
                  <div className="flex justify-between text-xs text-[#1E1E1E]/60">
                    <span>Merchant</span>
                    <span className="font-semibold text-[#1E1E1E]">Nexoresha Media Works</span>
                  </div>
                  <div className="flex justify-between text-xs text-[#1E1E1E]/60">
                    <span>Order Reference</span>
                    <span className="font-mono text-[#1E1E1E]">{orderData.razorpayOrderId}</span>
                  </div>
                  <div className="border-t border-[#4A0404]/10 my-2 pt-2 flex justify-between items-center">
                    <span className="text-sm font-semibold text-[#4A0404]">Amount Payable</span>
                    <span className="font-display text-2xl text-[#8B0000]">
                      ₹{orderData.amount.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Interactive Simulation CTA's */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={handleSimulateSuccess}
                    className="flex flex-col items-center justify-center p-4 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/25 rounded-xl text-emerald-700 font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  >
                    <CheckCircle2 className="w-7 h-7 mb-1.5" />
                    Simulate Success
                  </button>
                  <button
                    onClick={handleSimulateFailure}
                    className="flex flex-col items-center justify-center p-4 bg-red-500/10 hover:bg-red-500/20 border border-red-500/25 rounded-xl text-red-700 font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  >
                    <XCircle className="w-7 h-7 mb-1.5" />
                    Simulate Failure
                  </button>
                </div>

                {/* Bottom note */}
                <p className="text-[10px] text-center text-[#1E1E1E]/40 font-medium">
                  Secured sandbox test connection. No real money will be charged.
                </p>
              </div>
            )}

            {status === 'processing' && (
              <div className="flex flex-col items-center justify-center py-16 space-y-4">
                <Loader2 className="w-12 h-12 text-[#4A0404] animate-spin" />
                <h4 className="font-display text-xl text-[#4A0404] tracking-wider uppercase">
                  Processing Payment
                </h4>
                <p className="text-xs text-[#1E1E1E]/60">
                  Authenticating transaction details with client bank...
                </p>
              </div>
            )}

            {status === 'success' && (
              <div className="flex flex-col items-center justify-center py-16 space-y-4 text-center">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/30">
                  <Sparkles className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="font-display text-2xl text-emerald-700 tracking-wider uppercase">
                  SUCCESSFUL
                </h4>
                <p className="text-xs text-[#1E1E1E]/60 max-w-xs">
                  Your payment has been captured and validated. Finalizing project dashboard details...
                </p>
              </div>
            )}

            {status === 'failure' && (
              <div className="flex flex-col items-center justify-center py-16 space-y-4 text-center">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/30">
                  <XCircle className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="font-display text-2xl text-red-700 tracking-wider uppercase">
                  PAYMENT FAILED
                </h4>
                <p className="text-xs text-red-600 font-semibold">{errorMessage}</p>
                <p className="text-xs text-[#1E1E1E]/50">
                  Redirecting back to custom configuration dashboard...
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

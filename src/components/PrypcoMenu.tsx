'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe, ArrowUpRight, Clock } from 'lucide-react';

interface PrypcoMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrypcoMenu({ isOpen, onClose }: PrypcoMenuProps) {
  const [uaeTime, setUaeTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Dubai',
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(new Date());
        setUaeTime(`${timeStr} GST`);
      } catch (e) {
        setUaeTime('8:45 PM GST');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 pt-[max(1rem,env(safe-area-inset-top,1rem))] pb-[max(1rem,env(safe-area-inset-bottom,1rem))]">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-navy-deep/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[1180px] max-h-[92vh] bg-white rounded-3xl shadow-modal overflow-y-auto overscroll-contain p-5 sm:p-10 z-10 text-slate-800 [-webkit-overflow-scrolling:touch]"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-8">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-xs font-bold text-slate-700 tracking-wider">
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                <span>EN</span>
              </div>

              <Link href="/" onClick={onClose} className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Capital Value"
                  width={220}
                  height={80}
                  className="h-14 sm:h-16 w-auto object-contain"
                />
              </Link>

              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-slate-900 hover:bg-blue-primary text-white flex items-center justify-center transition-colors"
                aria-label="Close Navigation Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {/* Col 1: Company */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-600 mb-4">Company</h4>
                <ul className="space-y-3">
                  <li><Link href="/" onClick={onClose} className="text-base font-semibold text-slate-800 hover:text-blue-primary block transition-colors">Home</Link></li>
                  <li><Link href="/about" onClick={onClose} className="text-base font-semibold text-slate-800 hover:text-blue-primary block transition-colors">About Us</Link></li>
                  <li>
                    <Link href="/leadership" onClick={onClose} className="text-base font-semibold text-slate-900 hover:text-blue-primary inline-flex items-center gap-2 transition-colors">
                      Founder &amp; Leadership <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-900">Founder</span>
                    </Link>
                  </li>
                  <li><Link href="/team" onClick={onClose} className="text-base font-semibold text-slate-800 hover:text-blue-primary block transition-colors">The team</Link></li>
                  <li><Link href="/blog" onClick={onClose} className="text-base font-semibold text-slate-800 hover:text-blue-primary block transition-colors">Blogs & Articles</Link></li>
                  <li><Link href="/careers" onClick={onClose} className="text-base font-semibold text-slate-800 hover:text-blue-primary block transition-colors">Careers</Link></li>
                  <li><Link href="/brand-assets" onClick={onClose} className="text-base font-semibold text-slate-800 hover:text-blue-primary block transition-colors">Brand assets</Link></li>
                  <li><Link href="/liquidity-report" onClick={onClose} className="text-base font-semibold text-slate-800 hover:text-blue-primary block transition-colors">Liquidity report</Link></li>
                  <li><Link href="/privacy" onClick={onClose} className="text-base font-semibold text-slate-800 hover:text-blue-primary block transition-colors">Legal & Privacy</Link></li>
                  <li><Link href="/contact" onClick={onClose} className="text-base font-semibold text-slate-800 hover:text-blue-primary block transition-colors">Contact us</Link></li>
                </ul>
              </div>

              {/* Col 2: Personal */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-primary mb-4">Personal</h4>
                <ul className="space-y-3">
                  <li><Link href="/real-estate" onClick={onClose} className="text-base font-semibold text-slate-800 hover:text-blue-primary block transition-colors">Real estate</Link></li>
                  <li>
                    <Link href="/mortgages" onClick={onClose} className="text-base font-semibold text-slate-800 hover:text-blue-primary inline-flex items-center gap-2 transition-colors">
                      Mortgages <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">Core</span>
                    </Link>
                  </li>
                  <li><Link href="/owners-portal" onClick={onClose} className="text-base font-semibold text-slate-800 hover:text-blue-primary block transition-colors">Owners portal</Link></li>
                  <li>
                    <Link href="/golden-visa" onClick={onClose} className="text-base font-semibold text-slate-800 hover:text-blue-primary inline-flex items-center gap-2 transition-colors">
                      Golden Visa <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">10-Year</span>
                    </Link>
                  </li>
                  <li><Link href="/will-services" onClick={onClose} className="text-base font-semibold text-slate-800 hover:text-blue-primary block transition-colors">Will services</Link></li>
                </ul>
              </div>

              {/* Col 3: Invest */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-4">Invest</h4>
                <ul className="space-y-2.5">
                  <li><Link href="/blocks" onClick={onClose} className="text-base font-semibold text-slate-800 hover:text-blue-primary block transition-colors">Blocks</Link></li>
                  <li className="pl-3"><Link href="/blocks#properties" onClick={onClose} className="text-sm text-slate-600 hover:text-blue-primary block transition-colors">Properties</Link></li>
                  <li className="pl-3"><Link href="/blocks#calculator" onClick={onClose} className="text-sm text-slate-600 hover:text-blue-primary block transition-colors">ROI calculator</Link></li>
                  <li className="pt-2">
                    <Link href="/mint" onClick={onClose} className="text-base font-semibold text-slate-800 hover:text-blue-primary inline-flex items-center gap-2 transition-colors">
                      Mint <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">New</span>
                    </Link>
                  </li>
                  <li className="pl-3"><Link href="/mint#gold" onClick={onClose} className="text-sm text-slate-600 hover:text-blue-primary block transition-colors">Gold</Link></li>
                  <li className="pl-3"><Link href="/mint#properties" onClick={onClose} className="text-sm text-slate-600 hover:text-blue-primary block transition-colors">Properties</Link></li>
                  <li className="pl-3"><Link href="/mint#sell" onClick={onClose} className="text-sm text-slate-600 hover:text-blue-primary block transition-colors">Sell your property</Link></li>
                </ul>
              </div>

              {/* Col 4: Business */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-4">Business</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/one" onClick={onClose} className="text-base font-semibold text-slate-800 hover:text-blue-primary inline-flex items-center gap-2 transition-colors">
                      One <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">for Agents</span>
                    </Link>
                  </li>
                  <li><Link href="/collect" onClick={onClose} className="text-base font-semibold text-slate-800 hover:text-blue-primary block transition-colors">Collect</Link></li>
                  <li><Link href="/advance" onClick={onClose} className="text-base font-semibold text-slate-800 hover:text-blue-primary block transition-colors">Advance</Link></li>
                </ul>
              </div>

              {/* Col 5: Right Showcase Card */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 flex flex-col justify-between">
                <div>
                  <div className="relative rounded-xl overflow-hidden h-40 mb-3 group">
                    <Image
                      src="/villa.jpg"
                      alt="Capital Value Advisory"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <Link
                      href="/mortgages"
                      onClick={onClose}
                      className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-gold-primary text-slate-900 flex items-center justify-center shadow-lg"
                      aria-label="View Mortgage Guidance"
                    >
                      <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                    </Link>
                  </div>
                  <h5 className="font-bold text-slate-900 text-sm mb-1">Mortgage Consultation</h5>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Explore personalized UAE property-finance guidance with licensed consultants.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    {['in', 'ig', 'X', 'fb', 'yt'].map((s) => (
                      <span
                        key={s}
                        className="w-7 h-7 rounded bg-white border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-600 hover:bg-blue-primary hover:text-white cursor-pointer transition-colors"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{uaeTime || '8:45 PM GST'}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

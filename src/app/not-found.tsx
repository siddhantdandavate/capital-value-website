import React from 'react';
import Link from 'next/link';
import { Compass, ArrowRight, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#060A1A] flex items-center justify-center pt-[100px] pb-20 px-6">
      <div className="max-w-xl text-center">
        <div className="w-16 h-16 rounded-2xl bg-gold/10 text-gold-light flex items-center justify-center mx-auto mb-6 border border-gold/30">
          <Compass className="w-8 h-8" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-gold-light bg-gold/10 px-3 py-1 rounded-full border border-gold/20 inline-block mb-4">
          Error 404 · Page Not Found
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Page Not Available
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
          The property finance route or advisory section you requested is not available. Please return to our homepage or explore our dedicated mortgage solutions.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gold-primary hover:bg-gold-light text-navy-deep font-bold text-sm transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/mortgages"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 transition-all"
          >
            <span>Explore Mortgages</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

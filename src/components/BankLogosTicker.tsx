'use client';

import React, { useState } from 'react';
import { Pause, Play, Sparkles, Shield, Building2, CheckCircle2 } from 'lucide-react';

interface BankLogo {
  id: string;
  name: string;
  arabicName: string;
  category: 'Conventional' | 'Islamic' | 'International';
  specialty: string;
  renderLogo: () => React.ReactNode;
}

const banks: BankLogo[] = [
  {
    id: 'fab',
    name: 'First Abu Dhabi Bank',
    arabicName: 'بنك أبوظبي الأول',
    category: 'Conventional',
    specialty: 'Largest Bank in the UAE',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 54 38" className="h-9 w-auto shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Dynamic FAB Swoosh */}
          <path d="M4 30C16 12 36 6 50 6" stroke="#E11D48" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M10 34C22 18 38 12 48 12" stroke="#003A70" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
        <div className="flex flex-col text-left">
          <span className="text-[20px] font-black tracking-tight text-[#003A70] leading-none">FAB</span>
          <span className="text-[9px] font-bold text-[#E11D48] tracking-wider uppercase mt-0.5">First Abu Dhabi Bank</span>
          <span className="text-[9px] text-slate-500 font-arabic">بنك أبوظبي الأول</span>
        </div>
      </div>
    ),
  },
  {
    id: 'mashreq',
    name: 'Mashreq',
    arabicName: 'المشرق',
    category: 'Conventional',
    specialty: 'Digital Mortgage Innovation',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 44 44" className="h-9 w-auto shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Orange sunburst flower rays */}
          <circle cx="22" cy="22" r="6" fill="#FF5E00" />
          <path d="M22 4V12M22 32V40M4 22H12M32 22H40M9.3 9.3L15 15M29 29L34.7 34.7M9.3 34.7L15 29M29 15L34.7 9.3" stroke="#FF5E00" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <div className="flex flex-col text-left">
          <span className="text-[19px] font-extrabold tracking-tight text-[#FF5E00] leading-none lowercase">mashreq</span>
          <span className="text-[10px] font-medium text-slate-700 font-arabic mt-0.5">المشرق</span>
          <span className="text-[8px] tracking-wider text-slate-400 uppercase">WE MAKE POSSIBLE</span>
        </div>
      </div>
    ),
  },
  {
    id: 'hsbc',
    name: 'HSBC',
    arabicName: 'إتش إس بي سي',
    category: 'International',
    specialty: 'Expat & Premier Financing',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 60 36" className="h-8 w-auto shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* HSBC Hexagonal Interlocking Triangles */}
          <rect x="18" y="3" width="24" height="30" fill="white" stroke="#DB0011" strokeWidth="0.5" />
          <polygon points="6,18 18,6 18,30" fill="#DB0011" />
          <polygon points="54,18 42,6 42,30" fill="#DB0011" />
          <polygon points="30,6 18,18 42,18" fill="#DB0011" />
          <polygon points="30,30 18,18 42,18" fill="#DB0011" />
        </svg>
        <div className="flex flex-col text-left">
          <span className="text-[20px] font-black tracking-wider text-[#1F1F1F] leading-none">HSBC</span>
          <span className="text-[8.5px] font-semibold text-slate-500 uppercase tracking-widest mt-0.5">Middle East</span>
        </div>
      </div>
    ),
  },
  {
    id: 'standard-chartered',
    name: 'Standard Chartered',
    arabicName: 'ستاندرد تشارترد',
    category: 'International',
    specialty: 'International Wealth & Mortgages',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 46 38" className="h-8 w-auto shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Blue and Green Interlaced Ribbon */}
          <path d="M14 8C7 8 4 14 4 19C4 24 8 30 16 30C24 30 27 22 32 16C37 10 40 8 44 8" stroke="#009944" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M32 30C39 30 42 24 42 19C42 14 38 8 30 8C22 8 19 16 14 22C9 28 6 30 2 30" stroke="#0072CE" strokeWidth="4.5" strokeLinecap="round" />
        </svg>
        <div className="flex flex-col text-left">
          <span className="text-[13px] font-bold text-[#0072CE] leading-tight">standard</span>
          <span className="text-[13px] font-bold text-[#009944] leading-none -mt-0.5">chartered</span>
        </div>
      </div>
    ),
  },
  {
    id: 'dib',
    name: 'Dubai Islamic Bank',
    arabicName: 'بنك دبي الإسلامي',
    category: 'Islamic',
    specialty: 'Pioneering Islamic Home Finance',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 42 42" className="h-9 w-auto shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Islamic Star Medallion */}
          <circle cx="21" cy="21" r="18" fill="#0E783E" />
          <circle cx="21" cy="21" r="15" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
          <polygon points="21,7 25,16 35,16 27,22 30,31 21,26 12,31 15,22 7,16 17,16" fill="#F4B41A" />
        </svg>
        <div className="flex flex-col text-left">
          <span className="text-[14px] font-bold text-[#0E783E] leading-tight font-arabic">بنك دبي الإسلامي</span>
          <span className="text-[11px] font-extrabold text-[#0E783E] tracking-tight">Dubai Islamic Bank</span>
        </div>
      </div>
    ),
  },
  {
    id: 'cbd',
    name: 'Commercial Bank of Dubai',
    arabicName: 'بنك دبي التجاري',
    category: 'Conventional',
    specialty: 'Competitive Fixed Rates',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 46 40" className="h-8 w-auto shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* CBD Dual Chevron Diamonds */}
          <polygon points="6,20 18,8 30,20 18,32" fill="#003865" />
          <polygon points="18,20 30,8 42,20 30,32" fill="#9ACD32" />
        </svg>
        <div className="flex flex-col text-left">
          <span className="text-[17px] font-black text-[#003865] tracking-tight leading-none">CBD</span>
          <span className="text-[8.5px] font-semibold text-slate-600 leading-tight">Commercial Bank of Dubai</span>
          <span className="text-[8.5px] font-arabic text-slate-500">بنك دبي التجاري</span>
        </div>
      </div>
    ),
  },
  {
    id: 'emirates-islamic',
    name: 'Emirates Islamic',
    arabicName: 'الإسلامي',
    category: 'Islamic',
    specialty: 'Sharia-Compliant Financing',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 40 40" className="h-9 w-auto shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Emirates Islamic Geometric Purple Emblem */}
          <rect x="4" y="4" width="32" height="32" rx="4" fill="#582C83" />
          <path d="M12 20L20 12L28 20L20 28Z" fill="#C5A059" />
          <circle cx="20" cy="20" r="3" fill="#FFFFFF" />
        </svg>
        <div className="flex flex-col text-left">
          <span className="text-[13px] font-black text-[#582C83] tracking-wider uppercase leading-tight">EMIRATES ISLAMIC</span>
          <span className="text-[10px] font-bold text-[#582C83] font-arabic leading-none mt-0.5">الإسلامي</span>
        </div>
      </div>
    ),
  },
  {
    id: 'adcb',
    name: 'Abu Dhabi Commercial Bank',
    arabicName: 'بنك أبوظبي التجاري',
    category: 'Conventional',
    specialty: 'Tier-1 UAE Home Loans',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 42 42" className="h-8 w-auto shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* ADCB Crimson Knot */}
          <circle cx="21" cy="21" r="19" fill="#C8102E" />
          <path d="M13 17C13 13 17 13 21 13C25 13 29 13 29 17C29 21 21 21 21 25M21 29V28" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <div className="flex flex-col text-left">
          <span className="text-[18px] font-black tracking-tight text-[#C8102E] leading-none">ADCB</span>
          <span className="text-[8.5px] font-bold text-slate-600 leading-tight mt-0.5">Abu Dhabi Commercial Bank</span>
          <span className="text-[8.5px] font-arabic text-slate-500">بنك أبوظبي التجاري</span>
        </div>
      </div>
    ),
  },
  {
    id: 'enbd',
    name: 'Emirates NBD',
    arabicName: 'بنك الإمارات دبي الوطني',
    category: 'Conventional',
    specialty: 'UAE Largest Banking Group',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 42 42" className="h-8 w-auto shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* ENBD Blue Dynamic Shield */}
          <rect x="4" y="4" width="34" height="34" rx="6" fill="#002D62" />
          <path d="M11 11H31L21 31Z" fill="#F4B41A" opacity="0.9" />
          <path d="M16 16H26L21 26Z" fill="#FFFFFF" />
        </svg>
        <div className="flex flex-col text-left">
          <span className="text-[15px] font-black tracking-tight text-[#002D62] leading-none">Emirates NBD</span>
          <span className="text-[8.5px] font-arabic text-slate-600 mt-0.5">بنك الإمارات دبي الوطني</span>
        </div>
      </div>
    ),
  },
  {
    id: 'ajman-bank',
    name: 'Ajman Bank',
    arabicName: 'مصرف عجمان',
    category: 'Islamic',
    specialty: 'Northern Emirates & Free Zone Finance',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 42 42" className="h-8 w-auto shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ajman Bank Gold & Blue Crescent */}
          <circle cx="21" cy="21" r="18" fill="#0D2C4A" />
          <path d="M12 21C12 15 16 10 23 10C18 13 16 17 16 21C16 25 18 29 23 32C16 32 12 27 12 21Z" fill="#C5A059" />
          <circle cx="25" cy="21" r="4" fill="#C5A059" />
        </svg>
        <div className="flex flex-col text-left">
          <span className="text-[14px] font-black text-[#0D2C4A] leading-tight">Ajman Bank</span>
          <span className="text-[11px] font-bold text-[#C5A059] font-arabic leading-none">مصرف عجمان</span>
        </div>
      </div>
    ),
  },
];

export default function BankLogosTicker() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative bg-gradient-to-b from-navy-deep via-[#0A1128] to-navy-deep py-14 overflow-hidden border-y border-white/10">
      {/* CityMortgage Inspired Trust Bar Header in Capital Value Navy & Gold */}
      <div className="max-w-[1240px] mx-auto px-6 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Stat 1 */}
          <div className="relative group overflow-hidden rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-gold-primary/50 p-6 transition-all backdrop-blur-md">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">25+</span>
              <span className="w-8 h-8 rounded-full bg-gold-primary/20 text-gold-light flex items-center justify-center text-xs font-bold">
                ✓
              </span>
            </div>
            <div className="text-sm font-bold text-gold-light uppercase tracking-wider mb-1">
              UAE Lenders Compared
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Evaluating loan-to-value caps, rate structures and bank criteria across prime UAE financial institutions.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="relative group overflow-hidden rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-gold-primary/50 p-6 transition-all backdrop-blur-md">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-white/10 text-white">
                FZE LLC
              </span>
              <Shield className="w-5 h-5 text-gold-light" />
            </div>
            <div className="text-sm font-bold text-gold-light uppercase tracking-wider mb-1">
              Registered UAE Advisory
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Capital Value Mortgage Consulting FZE LLC • Registered in Ajman NuVentures Centre Free Zone.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="relative group overflow-hidden rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-gold-primary/50 p-6 transition-all backdrop-blur-md">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">100%</span>
              <Building2 className="w-5 h-5 text-gold-light" />
            </div>
            <div className="text-sm font-bold text-gold-light uppercase tracking-wider mb-1">
              Independent Guidance
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              We work for you — not the bank — comparing financing structures to suit your specific profile.
            </p>
          </div>
        </div>
      </div>

      {/* Eyebrow Label matching CityMortgage reference */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-primary/10 border border-gold-primary/30 text-gold-light text-xs font-bold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>UAE LENDERS WE WORK WITH</span>
        </div>
        <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-lg mx-auto">
          Illustrative comparison across major UAE commercial banks, Islamic finance windows, and private lenders.
        </p>
      </div>

      {/* Infinite Animated Moving Ticker Container */}
      <div
        className="relative w-full overflow-hidden py-3"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Soft Left and Right Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#060A1A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#060A1A] to-transparent z-10 pointer-events-none" />

        {/* Marquee Track (Double Array for seamless infinite loop) */}
        <div
          className={`flex items-center gap-5 sm:gap-6 w-max ${
            isPaused ? '' : 'animate-marquee'
          }`}
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {/* First loop */}
          {banks.map((bank, idx) => (
            <div
              key={`bank-1-${bank.id}-${idx}`}
              className="group relative flex items-center justify-center min-w-[240px] sm:min-w-[270px] h-[92px] px-6 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-gold-primary/60 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_10px_30px_rgba(197,160,89,0.25)] transition-all duration-300 hover:scale-[1.03] cursor-pointer"
            >
              {bank.renderLogo()}

              {/* Category pill indicator */}
              <div className="absolute top-2 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-900 text-gold-light">
                  {bank.category}
                </span>
              </div>
            </div>
          ))}

          {/* Duplicate loop for continuous seamless infinite transition */}
          {banks.map((bank, idx) => (
            <div
              key={`bank-2-${bank.id}-${idx}`}
              className="group relative flex items-center justify-center min-w-[240px] sm:min-w-[270px] h-[92px] px-6 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-gold-primary/60 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_10px_30px_rgba(197,160,89,0.25)] transition-all duration-300 hover:scale-[1.03] cursor-pointer"
            >
              {bank.renderLogo()}

              {/* Category pill indicator */}
              <div className="absolute top-2 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-900 text-gold-light">
                  {bank.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Marquee Controls & Disclaimer */}
      <div className="max-w-[1240px] mx-auto px-6 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 text-xs transition-colors"
            title={isPaused ? 'Resume scrolling' : 'Pause scrolling'}
          >
            {isPaused ? <Play className="w-3 h-3 text-gold-light" /> : <Pause className="w-3 h-3 text-gold-light" />}
            <span>{isPaused ? 'Resume Animation' : 'Hover or Click to Pause'}</span>
          </button>
          <span className="text-slate-500 hidden sm:inline">•</span>
          <span className="text-slate-400 hidden sm:inline">Smooth continuous ticker</span>
        </div>

        <div className="text-[11px] text-slate-500 text-center sm:text-right">
          Trademarks and logos belong to their respective registered UAE financial institutions.
        </div>
      </div>
    </section>
  );
}

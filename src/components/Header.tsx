'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onOpenMenu: () => void;
}

export default function Header({ onOpenMenu }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 pt-[env(safe-area-inset-top,0px)] ${
        scrolled
          ? 'h-[76px] sm:h-[80px] bg-navy-deep/95 shadow-xl border-b border-navy-border backdrop-blur-md'
          : 'h-[88px] sm:h-[96px] bg-navy-deep/85 border-b border-white/10 backdrop-blur-md'
      }`}
    >
      <div className="max-w-[1240px] mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center py-1 shrink-0">
          <Image
            src="/logo.png"
            alt="Capital Value Mortgage Consulting FZE LLC"
            width={240}
            height={85}
            className={`w-auto object-contain transition-all duration-300 ${
              scrolled ? 'h-[48px] sm:h-[56px] md:h-[62px]' : 'h-[58px] sm:h-[68px] md:h-[76px]'
            }`}
            priority
          />
        </Link>

        {/* Desktop Nav (shown on large screens 1024px+ for clean tablet layout) */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          <Link href="/" className="text-slate-200 hover:text-gold-light font-medium text-[15px] transition-colors">
            Home
          </Link>
          <Link href="/mortgages" className="text-slate-200 hover:text-gold-light font-medium text-[15px] transition-colors">
            Mortgages
          </Link>
          <Link href="/real-estate" className="text-slate-200 hover:text-gold-light font-medium text-[15px] transition-colors">
            Real Estate
          </Link>
          <Link href="/golden-visa" className="text-slate-200 hover:text-gold-light font-medium text-[15px] transition-colors">
            Golden Visa
          </Link>

          {/* About Us Dropdown with Founder & Leadership */}
          <div
            className="relative group"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="flex items-center gap-1.5 text-slate-200 group-hover:text-gold-light font-medium text-[15px] transition-colors py-2"
              aria-expanded={aboutOpen}
            >
              <span>About Us</span>
              <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
            </button>

            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 w-64 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
              <div className="bg-[#0A1128] border border-white/15 rounded-2xl shadow-2xl p-2.5 backdrop-blur-xl">
                <Link
                  href="/about"
                  className="flex flex-col p-3 rounded-xl hover:bg-white/10 transition-colors group/item"
                >
                  <span className="text-sm font-bold text-white group-hover/item:text-gold-light">
                    About Capital Value
                  </span>
                  <span className="text-xs text-slate-400 mt-0.5">
                    Our story, advisory mission &amp; leadership
                  </span>
                </Link>

                <div className="h-[1px] bg-white/10 my-1" />

                <Link
                  href="/leadership"
                  className="flex flex-col p-3 rounded-xl hover:bg-white/10 transition-colors group/item"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white group-hover/item:text-gold-light">
                      Founder &amp; Leadership
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gold-primary/20 text-gold-light border border-gold-primary/30">
                      Amit Kulkarni
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 mt-0.5">
                    Founder profile, business vision &amp; principles
                  </span>
                </Link>

                <div className="h-[1px] bg-white/10 my-1" />

                <Link
                  href="/team"
                  className="flex flex-col p-3 rounded-xl hover:bg-white/10 transition-colors group/item"
                >
                  <span className="text-sm font-bold text-white group-hover/item:text-gold-light">
                    The Team &amp; Ethos
                  </span>
                  <span className="text-xs text-slate-400 mt-0.5">
                    Our advisors, values, and consulting principles
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <Link href="/contact" className="text-slate-200 hover:text-gold-light font-medium text-[15px] transition-colors">
            Contact
          </Link>
        </nav>


        {/* Action Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenMenu}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-gold-primary text-white hover:text-gold-light text-sm font-semibold transition-all"
            aria-label="Open Explore Navigation Menu"
          >
            <Menu className="w-4 h-4" />
            <span>Menu</span>
          </button>

          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-bold gold-gradient-btn transition-all"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}

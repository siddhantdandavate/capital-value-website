import React from 'react';
import Image from 'next/image';
import { Download, Palette, Type, Check, Shield } from 'lucide-react';
import PageHero from '@/components/PageHero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brand Identity & Assets | Capital Value Mortgage Consulting',
  description:
    'Official brand assets, typography guidelines, and color palettes for Capital Value Mortgage Consulting FZE LLC.',
};

export default function BrandAssetsPage() {
  return (
    <div>
      <PageHero
        badge="Company / Brand Assets"
        title="Brand Identity & Assets"
        description="Official identity assets, logo packages, and visual design standards for Capital Value Mortgage Consulting FZE LLC."
      />

      {/* Main Assets Content */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1000px] mx-auto px-6">
          {/* Logo Showcase Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm text-center mb-12">
            <div className="py-10 px-6 bg-[#060A1A] rounded-2xl flex items-center justify-center mb-8 border border-navy-border">
              <Image
                src="/logo.png"
                alt="Capital Value Official Logo"
                width={360}
                height={160}
                className="h-28 w-auto object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-navy-deep mb-3">Official Primary Corporate Emblem</h3>
            <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed mb-8">
              High-resolution 3D Metallic Royal Blue & Champagne Gold Monogram with Dubai Skyline Silhouette and "We Value Your Need" registered corporate motto.
            </p>
            <a
              href="/logo.png"
              download="Capital-Value-Logo.png"
              className="inline-flex items-center px-8 py-4 bg-navy-deep hover:bg-navy-light text-white font-bold rounded-xl shadow-card transition-all"
            >
              <Download className="w-4 h-4 mr-2 text-gold-light" />
              Download Official PNG Asset
            </a>
          </div>

          {/* Palette & Typography */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Color Palette */}
            <div className="bg-[#060A1A] rounded-2xl p-8 text-white border border-navy-border shadow-sm">
              <div className="flex items-center gap-2 text-gold-light font-bold mb-6">
                <Palette className="w-5 h-5" />
                <h4 className="text-lg">Brand Color Palette</h4>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#060A1A] border border-white/30" />
                    <div>
                      <div className="text-sm font-bold text-white">Midnight Navy</div>
                      <div className="text-xs text-slate-400">Primary Deep Surface</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-300">#060A1A</span>
                </div>
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#1C51D9]" />
                    <div>
                      <div className="text-sm font-bold text-white">Financial Blue</div>
                      <div className="text-xs text-slate-400">Primary Accent</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-300">#1C51D9</span>
                </div>
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#C5A059]" />
                    <div>
                      <div className="text-sm font-bold text-white">Champagne Gold</div>
                      <div className="text-xs text-slate-400">Prestige Accent</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-300">#C5A059</span>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-2 text-navy-deep font-bold mb-4">
                <Type className="w-5 h-5 text-blue-primary" />
                <h4 className="text-lg">Typography System</h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Our primary typeface is <span className="font-bold text-navy-deep">Plus Jakarta Sans</span>, selected for its editorial clarity, clean geometric proportions, and financial authority.
              </p>
              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Headings:</strong> Bold (700) & ExtraBold (800)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Navigation & Subheadings:</strong> SemiBold (600)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Body Copy:</strong> Regular (400) & Medium (500)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

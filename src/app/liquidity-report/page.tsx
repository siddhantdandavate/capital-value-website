import React from 'react';
import Link from 'next/link';
import { TrendingUp, BarChart3, PieChart, ShieldAlert, ArrowRight, FileText } from 'lucide-react';
import PageHero from '@/components/PageHero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UAE Mortgage Liquidity Report | Capital Value Mortgage Consulting',
  description:
    'Institutional analysis on UAE property debt market liquidity, mortgage transaction volumes, and lending trends across Dubai and Abu Dhabi.',
};

export default function LiquidityReportPage() {
  return (
    <div>
      <PageHero
        badge="Company / Market Research"
        title="UAE Mortgage Liquidity Report"
        description="Institutional insights into property debt market liquidity, mortgage transaction volumes, and lending trends across Dubai and the UAE."
      />

      {/* Main Content */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-primary bg-blue-subtle px-3 py-1 rounded-full border border-blue-primary/20 inline-block mb-4">
              Executive Briefing · Market Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-deep tracking-tight mb-6">
              Dubai Property Debt Market Dynamics
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              <p>
                Throughout recent quarters, mortgage transaction volumes across Dubai have maintained robust activity, driven by end-user demand for villas, established community townhouses, and expatriates transitioning from tenancy to freehold home ownership.
              </p>
              <p>
                Licensed UAE commercial banks continue to provide active liquidity across fixed-term borrowing products (ranging from 1-year through 5-year fixed tenures), before transitioning to variable spreads benchmarked against the Central Bank of the UAE Emirates Interbank Offered Rate (EIBOR).
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mt-10 pt-8 border-t border-slate-100">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70">
                <div className="flex items-center gap-2 text-gold-dark font-bold mb-2">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider">Volume Trend</span>
                </div>
                <div className="text-lg font-extrabold text-navy-deep">End-User Demand</div>
                <div className="text-xs text-slate-500 mt-1">High conversion in secondary market</div>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70">
                <div className="flex items-center gap-2 text-blue-primary font-bold mb-2">
                  <BarChart3 className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider">Rate Structures</span>
                </div>
                <div className="text-lg font-extrabold text-navy-deep">Fixed & Variable</div>
                <div className="text-xs text-slate-500 mt-1">Options benchmarked to EIBOR</div>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70">
                <div className="flex items-center gap-2 text-emerald-600 font-bold mb-2">
                  <PieChart className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider">Central Bank LTV</span>
                </div>
                <div className="text-lg font-extrabold text-navy-deep">80% Res / 60% Non-Res</div>
                <div className="text-xs text-slate-500 mt-1">Governed by Central Bank caps</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-navy-deep hover:bg-navy-light text-white font-bold rounded-xl shadow-card transition-all"
            >
              Request Full Advisory Briefing
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import Link from 'next/link';
import { Briefcase, CreditCard, TrendingUp, ArrowRight, ShieldCheck } from 'lucide-react';
import PageHero from '@/components/PageHero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Advance: Brokerage Liquidity Solutions | Capital Value Mortgage Consulting',
  description:
    'Working capital and credit consulting for established real estate agencies across Dubai.',
};

export default function AdvancePage() {
  return (
    <div>
      <PageHero
        badge="Business / Advance"
        title="Advance: Brokerage Liquidity Solutions"
        description="Working capital and credit consulting for established real estate agencies across Dubai."
      />

      {/* Main Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm text-center mb-12">
            <div className="w-14 h-14 rounded-2xl bg-blue-subtle text-blue-primary flex items-center justify-center mx-auto mb-6 border border-blue-primary/20">
              <TrendingUp className="w-7 h-7" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-deep tracking-tight mb-4">
              Agency Working Capital & Debt Advisory
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base max-w-2xl mx-auto mb-10">
              Supporting established brokerages with commercial financing, corporate lines of credit, and working capital solutions structured through UAE commercial banking partners.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto mb-10">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70">
                <CreditCard className="w-6 h-6 text-gold-dark mb-3" />
                <h4 className="font-bold text-navy-deep text-base mb-1">Credit Line Structuring</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Arranging revolving working capital facilities secured against agency revenue streams and contract receivables.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70">
                <Briefcase className="w-6 h-6 text-blue-primary mb-3" />
                <h4 className="font-bold text-navy-deep text-base mb-1">Commercial Office Mortgages</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Financing freehold corporate office premises for expanding real estate agencies and advisory firms.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-navy-deep hover:bg-navy-light text-white font-bold rounded-xl shadow-card transition-all"
            >
              Contact Brokerage Desk
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

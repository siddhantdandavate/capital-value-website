import React from 'react';
import Link from 'next/link';
import { Sparkles, Coins, Landmark, ArrowRight, ShieldCheck } from 'lucide-react';
import PageHero from '@/components/PageHero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mint: Asset-Backed Debt & Liquidity | Capital Value Mortgage Consulting',
  description:
    'Structuring collateralized property borrowing and asset-backed financing strategies for high-net-worth investors in Dubai.',
};

export default function MintPage() {
  return (
    <div>
      <PageHero
        badge="Invest / Mint"
        title="Mint: Asset-Backed Debt & Liquidity"
        description="Structuring collateralized property borrowing and asset-backed financing strategies for high-net-worth investors in Dubai."
      />

      {/* Main Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm text-center mb-12">
            <div className="w-14 h-14 rounded-2xl bg-gold-subtle text-gold-dark flex items-center justify-center mx-auto mb-6 border border-gold-primary/20">
              <Sparkles className="w-7 h-7" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-deep tracking-tight mb-4">
              Precious Asset & Real Estate Collateral Advisory
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base max-w-2xl mx-auto mb-10">
              Explore customized borrowing arrangements leveraging physical assets, institutional liquidity instruments, and unencumbered UAE real estate titles through registered private banking desks and licensed non-bank financial institutions.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto mb-10">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70">
                <Coins className="w-6 h-6 text-gold-dark mb-3" />
                <h4 className="font-bold text-navy-deep text-base mb-1">Cross-Collateral Structuring</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Leveraging multiple property titles to negotiate consolidated commercial borrowing rates and flexible drawdown limits.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70">
                <Landmark className="w-6 h-6 text-blue-primary mb-3" />
                <h4 className="font-bold text-navy-deep text-base mb-1">Private Banking Channels</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Facilitating access to bespoke Lombard facilities and private wealth credit lines across UAE financial institutions.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-navy-deep hover:bg-navy-light text-white font-bold rounded-xl shadow-card transition-all"
            >
              Schedule Private Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

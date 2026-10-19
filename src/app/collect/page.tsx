import React from 'react';
import Link from 'next/link';
import { Landmark, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import PageHero from '@/components/PageHero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Collect: Escrow & Disbursement Coordination | Capital Value Mortgage Consulting',
  description:
    'Harmonizing mortgage releases with developer escrow accounts and Dubai Land Department trust accounts.',
};

export default function CollectPage() {
  return (
    <div>
      <PageHero
        badge="Business / Collect"
        title="Collect: Escrow & Disbursement Coordination"
        description="Harmonizing mortgage releases with developer escrow accounts and Dubai Land Department trust accounts."
      />

      {/* Main Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm text-center mb-12">
            <div className="w-14 h-14 rounded-2xl bg-blue-subtle text-blue-primary flex items-center justify-center mx-auto mb-6 border border-blue-primary/20">
              <Landmark className="w-7 h-7" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-deep tracking-tight mb-4">
              Institutional Settlement & Fund Transfers
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base max-w-2xl mx-auto mb-10">
              Ensuring mortgage drawdown checks, manager cheques, and equity transfers are coordinated seamlessly between bank legal teams, registration trustees, and master developers to eliminate transaction closing delays.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto mb-10">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70">
                <ShieldCheck className="w-6 h-6 text-emerald-600 mb-3" />
                <h4 className="font-bold text-navy-deep text-base mb-1">Escrow Law Compliance</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                  Verification that all drawdown payments strictly comply with Law No. 8 of 2007 regulating developer escrow accounts.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70">
                <Landmark className="w-6 h-6 text-blue-primary mb-3" />
                <h4 className="font-bold text-navy-deep text-base mb-1">Trustee Office Clearance</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                  Direct coordination with Dubai Land Department registration trustee centers for instant title deed issuance.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-navy-deep hover:bg-navy-light text-white font-bold rounded-xl shadow-card transition-all"
            >
              Connect with Corporate Desk
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import Link from 'next/link';
import { Layers, Users2, ShieldCheck, ArrowRight, Building, CheckCircle2 } from 'lucide-react';
import PageHero from '@/components/PageHero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blocks: Co-Investment & Co-Borrowing | Capital Value Mortgage Consulting',
  description:
    'Consulting on co-ownership debt structures, shared equity mortgages, and fractional real estate finance in Dubai.',
};

export default function BlocksPage() {
  return (
    <div>
      <PageHero
        badge="Invest / Blocks"
        title="Blocks: Property Co-Investment Advisory"
        description="Consulting on co-ownership debt structures, shared-equity mortgages, and multi-party property finance in Dubai."
      />

      {/* Main Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm mb-12">
            <div className="w-14 h-14 rounded-2xl bg-gold-subtle text-gold-dark flex items-center justify-center mb-6 border border-gold-primary/20">
              <Layers className="w-7 h-7" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-deep tracking-tight mb-4">
              Fractional Ownership & Co-Borrowing Guidance
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              <p>
                Capital Value advises investor syndicates, business partners, and family co-buyers on structuring multiple-borrower mortgage agreements under UAE financial institution guidelines.
              </p>
              <p>
                Co-ownership frameworks allow multiple partners to pool down-payment capital, optimize borrowing capacity, and register clean property title deeds with clearly documented contractual equity splits.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-8 pt-8 border-t border-slate-100">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70">
                <Users2 className="w-6 h-6 text-blue-primary mb-3" />
                <h4 className="font-bold text-navy-deep text-base mb-2">Joint Liability Structuring</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Aligning joint-and-several mortgage obligations with partner shareholder agreements to safeguard individual investor risk.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70">
                <ShieldCheck className="w-6 h-6 text-emerald-600 mb-3" />
                <h4 className="font-bold text-navy-deep text-base mb-2">DLD Title Allocation</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Ensuring Dubai Land Department title deeds accurately represent exact percentage shares and inheritance rights for all co-owners.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-navy-deep hover:bg-navy-light text-white font-bold rounded-xl shadow-card transition-all"
            >
              Enquire on Co-Investment
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

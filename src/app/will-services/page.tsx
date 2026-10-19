import React from 'react';
import Link from 'next/link';
import { Scroll, ShieldCheck, Scale, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';
import PageHero from '@/components/PageHero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UAE Property Succession & Will Services | Capital Value Mortgage Consulting',
  description:
    'Safeguard your real estate investments, family inheritance, and wealth distribution through legal Will registration in Dubai and the UAE.',
};

const willFrameworks = [
  {
    title: 'DIFC Real Estate Will',
    coverage: 'Up to 5 Properties',
    desc: 'Bespoke common-law Will registered via DIFC Courts specifically covering real estate assets situated in Dubai and Ras Al Khaimah.',
  },
  {
    title: 'DIFC Full Will',
    coverage: 'Comprehensive UAE Assets',
    desc: 'Covers all movable and immovable UAE assets including bank accounts, company shares, vehicles, and minor child guardianship provisions.',
  },
  {
    title: 'ADJD Civil Wills',
    coverage: 'UAE Federal Recognition',
    desc: 'Streamlined civil succession registration under Abu Dhabi Judicial Department non-Muslim personal status law, recognized across all seven emirates.',
  },
];

export default function WillServicesPage() {
  return (
    <div>
      <PageHero
        badge="Personal / Will Services"
        title="UAE Property Succession & Will Advisory"
        description="Safeguard your real estate investments, family inheritance, and wealth distribution through legally recognized Will registration in Dubai."
      />

      {/* Main Content */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm mb-12">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-gold-dark bg-gold-subtle px-3 py-1 rounded-full border border-gold-primary/30 inline-block mb-3">
                  Estate & Title Preservation
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-deep tracking-tight mb-4">
                  Protecting UAE Freehold Real Estate Holdings
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-4">
                  Under UAE legislation, non-Muslim property owners have the legal right to register testamentary Wills under common-law principles via the DIFC Courts Wills Service or Abu Dhabi Judicial Department (ADJD).
                </p>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-6">
                  Without a registered Will, real estate assets and bank balances are subject to statutory distribution proceedings. Capital Value guides property owners on harmonizing mortgage debt, title deeds, and succession planning.
                </p>

                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Clear title transfer to nominated beneficiaries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Mortgage liability succession coordination</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>DIFC and ADJD registration options</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {willFrameworks.map((w, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-navy-deep text-sm">{w.title}</h3>
                      <span className="text-xs font-semibold text-blue-primary bg-blue-subtle px-2.5 py-0.5 rounded-full border border-blue-primary/20">
                        {w.coverage}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{w.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-navy-deep hover:bg-navy-light text-white font-bold rounded-xl shadow-card transition-all"
            >
              Enquire on Will Coordination
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

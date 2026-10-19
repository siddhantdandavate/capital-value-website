import React from 'react';
import Link from 'next/link';
import { Award, CheckCircle, Shield, FileText, Users, ArrowRight, AlertCircle, Building } from 'lucide-react';
import PageHero from '@/components/PageHero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UAE Golden Visa via Property Investment | Capital Value Mortgage Consulting',
  description:
    'Property financing considerations and bank NOC coordination for UAE 10-Year Golden Visa enquiries. Clear distinction between property finance advisory and official immigration processing.',
};

const criteria = [
  {
    title: 'AED 2,000,000 Valuation Threshold',
    desc: 'Property must reflect an official Dubai Land Department purchase value or valuation certificate of at least AED 2M. Multiple properties under single ownership can typically be combined.',
  },
  {
    title: 'Mortgaged Properties Criteria',
    desc: 'Under UAE immigration guidelines, mortgaged freehold properties qualify provided the financing bank issues an official No Objection Certificate (NOC) confirming the account standing.',
  },
  {
    title: 'Completed & Eligible Off-Plan',
    desc: 'Both completed title deeds and approved off-plan properties (Oqood) from master developers can qualify, subject to developer milestones and minimum paid equity thresholds.',
  },
  {
    title: 'Family Sponsorship Scope',
    desc: 'Residency permits can extend to the primary applicant’s spouse and children of any age, subject to standard medical fitness and GDRFA clearances.',
  },
];

const roadmapSteps = [
  {
    step: '01',
    title: 'Equity & Title Verification',
    desc: 'Reviewing your Title Deed or Oqood contract against DLD valuation standards and verifying qualifying equity.',
  },
  {
    step: '02',
    title: 'Bank NOC Coordination',
    desc: 'Liaising with your mortgage lending bank to obtain the formal Golden Visa Bank NOC letter without procedural delay.',
  },
  {
    step: '03',
    title: 'DLD / GDRFA Application',
    desc: 'Submitting documentation through the Dubai Land Department Cube or GDRFA immigration channels.',
  },
  {
    step: '04',
    title: 'Medical Fitness & Emirates ID',
    desc: 'Completing required medical screening, biometric registration, and receiving the 10-year residency Emirates ID.',
  },
];

export default function GoldenVisaPage() {
  return (
    <div>
      <PageHero
        badge="Personal / Golden Visa"
        title="10-Year UAE Golden Visa Advisory"
        description="Property financing considerations, bank NOC coordination, and equity thresholds for property-backed Golden Visa enquiries in Dubai."
      />

      {/* Regulatory Distinction Alert */}
      <section className="bg-amber-50/80 border-b border-amber-200/80 py-4">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="flex items-start gap-3 text-xs sm:text-sm text-amber-900 leading-relaxed">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Important Immigration Disclaimer: </span>
              Capital Value Mortgage Consulting FZE LLC provides property finance and bank NOC coordination advisory. This page is provided for general informational purposes. All visa approvals, security clearances, and residency issuance remain under the sovereign jurisdiction of the General Directorate of Residency and Foreigners Affairs (GDRFA) and the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP).
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Key Criteria */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-dark bg-gold-subtle px-3 py-1 rounded-full border border-gold-primary/30 inline-block mb-3">
              Regulatory Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-deep tracking-tight mb-4">
              Property Investor Golden Visa Parameters
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Key requirements established by the General Directorate of Residency and Foreigners Affairs (GDRFA) and the Dubai Land Department.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {criteria.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm flex gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-subtle text-gold-dark flex items-center justify-center shrink-0 border border-gold-primary/20">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-deep mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Roadmap */}
          <div className="mt-20">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-primary bg-blue-subtle px-3 py-1 rounded-full border border-blue-primary/20 inline-block mb-3">
                Process Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-deep tracking-tight mb-4">
                Structured Application Roadmap
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                General sequence from initial property equity verification through to Emirates ID issuance.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {roadmapSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm relative flex flex-col justify-between"
                >
                  <div>
                    <span className="text-3xl font-black text-gold-primary/30 block mb-3 font-mono">{step.step}</span>
                    <h4 className="text-base font-bold text-navy-deep mb-2">{step.title}</h4>
                    <p className="text-slate-600 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-[#060A1A] rounded-3xl p-10 text-center text-white border border-navy-border">
            <h3 className="text-2xl font-bold mb-4">Discuss Property Finance for Golden Visa</h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-8 text-sm leading-relaxed">
              Our consultants can review your title deeds, mortgaged status, and financing options to help structure an appropriate borrowing plan for Golden Visa qualifying properties.
            </p>
            <Link
              href="/contact?service=golden_visa"
              className="inline-flex items-center px-8 py-4 bg-gold-primary hover:bg-gold-light text-navy-deep font-bold rounded-xl shadow-gold transition-all"
            >
              Request Advisory Call
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

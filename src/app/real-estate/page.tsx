import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Building, ShieldCheck, MapPin, Calculator, ArrowRight, FileCheck } from 'lucide-react';
import PageHero from '@/components/PageHero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Real Estate Finance & Acquisition Advisory | Capital Value Mortgage Consulting',
  description:
    'Aligning property selection with intelligent borrowing structures across Dubai freehold communities. Independent mortgage due diligence before you commit.',
};

const advisorySteps = [
  {
    icon: Calculator,
    title: 'Pre-Acquisition Borrowing Feasibility',
    desc: 'Assessing your true purchasing power, borrowing headroom, and mortgage eligibility before you enter binding contract negotiations.',
  },
  {
    icon: ShieldCheck,
    title: 'Bank Valuation & Down-Payment Protection',
    desc: 'Understanding valuation risk to ensure bank appraised value matches transaction price, avoiding unexpected cash shortfalls before transfer.',
  },
  {
    icon: FileCheck,
    title: 'Closing Cost & DLD Fee Budgeting',
    desc: 'Transparent modeling of the 4% Dubai Land Department transfer fee, trustee fees, mortgage registration costs, and bank appraisal charges.',
  },
];

const primeDistricts = [
  'Palm Jumeirah & Waterfront',
  'Downtown Dubai & DIFC',
  'Dubai Hills Estate',
  'Dubai Marina & JBR',
  'Arabian Ranches & Tilal Al Ghaf',
  'Business Bay & Canal Front',
];

export default function RealEstatePage() {
  return (
    <div>
      <PageHero
        badge="Personal / Real Estate"
        title="Real Estate Finance & Acquisition Advisory"
        description="Aligning property selection with intelligent borrowing structures across Dubai’s most prestigious freehold communities."
        badgeVariant="blue"
      />

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-primary bg-blue-subtle px-3 py-1 rounded-full border border-blue-primary/20 inline-block mb-3">
                Pre-Purchase Mortgage Advisory
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-deep tracking-tight mb-6">
                Objective Financial Due Diligence Before Transaction Commitment
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4 text-base">
                Acquiring freehold property in Dubai represents a significant capital commitment. Whether purchasing completed luxury inventory in Palm Jumeirah or transitioning from off-plan contracts to handed-over properties, Capital Value provides objective mortgage analysis before transaction commitment.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8 text-base">
                We ensure buyers understand bank valuation risks, Dubai Land Department (DLD) transfer fees, developer no-objection certificate (NOC) requirements, and mortgage registration charges prior to signing Form F (MOU).
              </p>

              <div className="space-y-4">
                {advisorySteps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="w-10 h-10 rounded-lg bg-blue-subtle text-blue-primary flex items-center justify-center shrink-0 border border-blue-primary/20">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-navy-deep mb-1">{step.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <Image
                src="/villa.jpg"
                alt="Dubai Freehold Villa and Real Estate Architecture"
                width={700}
                height={520}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-gold-light mb-1">
                    Freehold Advisory
                  </div>
                  <div className="text-lg font-bold">Dubai Prime Residential & Commercial</div>
                </div>
              </div>
            </div>
          </div>

          {/* Prime Freehold Locations */}
          <div className="mt-20 pt-12 border-t border-slate-200">
            <div className="max-w-2xl mx-auto text-center mb-8">
              <h3 className="text-2xl font-bold text-navy-deep mb-2">
                Active Advisory Across Dubai Prime Communities
              </h3>
              <p className="text-sm text-slate-600">
                Independent financing evaluations for properties situated in recognized freehold investment zones.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {primeDistricts.map((district, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-gold-primary/30 transition-all"
                >
                  <MapPin className="w-5 h-5 text-gold-dark shrink-0" />
                  <span className="text-sm font-semibold text-navy-dark">{district}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Callout CTA */}
          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-navy-deep hover:bg-navy-light text-white font-bold rounded-xl shadow-card transition-all"
            >
              Book Real Estate Mortgage Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

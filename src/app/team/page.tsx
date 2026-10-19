import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Users, Award, ShieldCheck, Compass, ArrowRight, CheckCircle2, Building, Scale } from 'lucide-react';
import PageHero from '@/components/PageHero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us & The Team | Capital Value Mortgage Consulting',
  description:
    'Learn about Capital Value Mortgage Consulting FZE LLC. Independent property finance advisors committed to transparency, regulatory rigor, and client value.',
};

const pillars = [
  {
    icon: Compass,
    title: 'Independent Advisory',
    desc: 'We are not tied to any single lending institution. We evaluate products across tier-1 UAE commercial banks, Islamic finance windows, and private lenders to present objective financing comparisons.',
  },
  {
    icon: ShieldCheck,
    title: 'Fiduciary Integrity',
    desc: 'Our registered corporate motto "We Value Your Need" is our working principle. We provide clear, objective disclosures regarding interest margins, early redemption fees, and lifetime financing costs.',
  },
  {
    icon: Scale,
    title: 'UAE Regulatory Rigor',
    desc: 'Comprehensive understanding of Central Bank of the UAE regulatory frameworks, Dubai Land Department registration procedures, and bank underwriting criteria for resident and non-resident borrowers.',
  },
  {
    icon: Building,
    title: 'End-to-End Execution',
    desc: 'From initial pre-approval and property valuation through to final mortgage sign-off at the registration trustee office, our advisors manage the complete administrative journey.',
  },
];

export default function TeamPage() {
  return (
    <div>
      <PageHero
        badge="Company / About Us"
        title="About Capital Value Mortgage Consulting"
        description="A specialized property finance consultancy established in the United Arab Emirates, dedicated to delivering independent, transparent, and structured mortgage advice."
      />

      {/* Ethos & Story */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-dark bg-gold-subtle px-3 py-1 rounded-full border border-gold-primary/30 inline-block mb-3">
              Our Ethos
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-deep tracking-tight mb-6">
              "We Value Your Need."
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
              Capital Value Mortgage Consulting FZE LLC was established to bring clarity and structure to the UAE mortgage ecosystem. Navigating property finance in Dubai involves understanding benchmark interest rates (EIBOR), Central Bank loan-to-value caps, closing costs, and varied banking criteria.
            </p>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              We provide objective, independent analysis so home buyers, expatriates, and investors can make confident financial decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl p-8 border border-slate-200/80 hover:border-gold-primary/40 hover:shadow-card transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy-deep text-gold-light flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-deep mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Founder & Leadership Spotlight Card */}
          <div className="mt-16 bg-gradient-to-r from-navy-deep via-[#0A1128] to-navy-deep rounded-3xl p-6 sm:p-10 border border-gold-primary/30 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 shrink-0 rounded-2xl overflow-hidden border-2 border-gold-primary/60 shadow-[0_8px_25px_rgba(0,0,0,0.5)]">
                <Image
                  src="/amit-kulkarni.jpg"
                  alt="Amit Dattatraya Kulkarni - Founder & Director"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="space-y-1.5 max-w-xl">
                <span className="text-[11px] font-bold uppercase tracking-widest text-gold-light px-3 py-1 rounded-full bg-gold-primary/20 border border-gold-primary/30 inline-block mb-1">
                  Founder &amp; Director
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Amit Dattatraya Kulkarni
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-gold-light uppercase tracking-wide">
                  Founder &amp; Owner, Capital Value Mortgage Consulting FZE LLC
                </p>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pt-1">
                  Leading an independent, client-focused property-finance practice delivering structured mortgage guidance across the United Arab Emirates.
                </p>
              </div>
            </div>
            <Link
              href="/leadership"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-bold gold-gradient-btn shrink-0 transition-all w-full sm:w-auto"
            >
              <span>View Leadership Profile</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Corporate Transparency Panel */}
          <div className="mt-12 bg-slate-50 rounded-2xl p-8 border border-slate-200 text-sm text-slate-600 leading-relaxed">
            <h4 className="font-bold text-navy-deep text-base mb-2">Corporate Entity & Regulatory Status</h4>
            <p className="mb-2">
              Capital Value Mortgage Consulting FZE LLC is registered as a Free Zone Establishment limited liability company in the United Arab Emirates.
            </p>
            <p>
              Capital Value operates strictly as an independent consultancy providing advisory and documentation coordination. Underwriting determinations, loan sanction letters, and final facility approvals are governed entirely by licensed lending institutions under the regulatory oversight of the Central Bank of the UAE.
            </p>
          </div>

          {/* Connect CTA */}
          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-navy-deep hover:bg-navy-light text-white font-bold rounded-xl shadow-card transition-all"
            >
              Get in Touch with Our Advisors
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

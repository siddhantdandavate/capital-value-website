import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Compass,
  Scale,
  Building2,
  ArrowRight,
  Sparkles,
  Award,
  FileCheck2,
} from 'lucide-react';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'About Capital Value & Leadership | Director Amit Dattatraya Kulkarni',
  description:
    'Learn about Capital Value Mortgage Consulting FZE LLC and Founder & Director Amit Dattatraya Kulkarni. Independent UAE property-finance advisory in Ajman and Dubai.',
};

export default function AboutPage() {
  const principles = [
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
      icon: Building2,
      title: 'End-to-End Execution',
      desc: 'From initial pre-approval and property valuation through to final mortgage sign-off at the registration trustee office, our advisors manage the complete administrative journey.',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHero
        badge="Company / About Us"
        title="About Capital Value & Leadership"
        description="An independent UAE property-finance consultancy dedicated to clarity, discretion, and structured mortgage execution for buyers, expatriates, and investors."
      />

      {/* Main Director & About Spotlight Section */}
      <section className="py-20 bg-[#060A1A] text-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#DFC07D_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Director Executive Card with Amit's Photograph */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[420px] rounded-3xl p-1 bg-gradient-to-b from-gold-light/40 via-white/10 to-gold-primary/30 shadow-2xl">
                <div className="w-full rounded-[23px] bg-[#0A1128] overflow-hidden relative flex flex-col p-6 sm:p-7 border border-white/10">
                  {/* Top Status */}
                  <div className="relative z-10 flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-gold-primary/20 text-gold-light border border-gold-primary/30 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-gold-light" />
                      <span>About Director</span>
                    </span>
                    <span className="text-xs text-slate-400 font-mono">UAE • FZE LLC</span>
                  </div>

                  {/* Photo Display */}
                  <div className="relative w-full aspect-[4/3] sm:aspect-square mb-5 rounded-2xl overflow-hidden border-2 border-gold-primary/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group">
                    <Image
                      src="/amit-kulkarni.jpg"
                      alt="Amit Dattatraya Kulkarni - Founder & Director, Capital Value Mortgage Consulting"
                      fill
                      className="object-cover object-[center_35%] transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/85 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                      <span className="font-bold drop-shadow">Amit Dattatraya Kulkarni</span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-gold-primary text-[#060A1A]">
                        Founder &amp; Director
                      </span>
                    </div>
                  </div>

                  {/* Founder Details */}
                  <div className="relative z-10 text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-1">
                      Amit Dattatraya Kulkarni
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-gold-light tracking-wide uppercase mb-2">
                      Founder &amp; Owner
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      Capital Value Mortgage Consulting FZE LLC • Ajman NuVentures Centre Free Zone
                    </p>
                  </div>

                  {/* Verified Accreditation Tag */}
                  <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 text-gold-light font-medium">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Verified Leadership</span>
                    </span>
                    <span className="font-mono text-[11px] text-slate-500">Ajman, UAE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Narrative & Director's Vision */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full section-tag-dark text-xs font-bold uppercase tracking-wider mb-6">
                Director&apos;s Message
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
                Building Trust Through Clarity in UAE Property Finance
              </h2>

              <p className="text-lg text-slate-200 font-semibold mb-6 leading-relaxed">
                Under the leadership of Founder &amp; Director Amit Dattatraya Kulkarni, Capital Value Mortgage Consulting was established to deliver clear, unbiased, and structured mortgage advice across the UAE.
              </p>

              <p className="text-slate-400 text-base leading-relaxed mb-8">
                Securing a mortgage in the United Arab Emirates is one of the most critical financial decisions an expatriate, resident, or international investor makes. Rather than navigating institutional bank bureaucracy alone, Capital Value coordinates the entire mortgage pathway with complete discretion and documentation readiness.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 text-gold-light font-bold text-sm mb-1">
                    <Award className="w-4 h-4" />
                    <span>Independent Advice</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Objective product analysis across leading UAE commercial &amp; Islamic banks.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 text-gold-light font-bold text-sm mb-1">
                    <FileCheck2 className="w-4 h-4" />
                    <span>Documentation Ready</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Rigorous pre-assessment minimising turnaround delays and underwriting friction.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/leadership"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-bold gold-gradient-btn transition-all text-center"
                >
                  <span>Explore Founder &amp; Leadership Profile</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold border border-white/20 text-white hover:bg-white/10 transition-all text-center"
                >
                  Book an Advisory Discussion
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Principles */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full section-tag-light text-xs font-bold uppercase tracking-wider mb-4">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Built on Discipline, Not Speculation
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Every recommendation we make is grounded in regulatory compliance, real affordability, and transparent lender comparisons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-gold-primary/40 hover:shadow-card transition-all"
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

          {/* Corporate Transparency Panel */}
          <div className="mt-16 bg-white rounded-2xl p-8 border border-slate-200 text-sm text-slate-600 leading-relaxed shadow-sm">
            <h4 className="font-bold text-navy-deep text-base mb-2">Corporate Entity &amp; Regulatory Status</h4>
            <p className="mb-2">
              Capital Value Mortgage Consulting FZE LLC is registered as a Free Zone Establishment limited liability company in the United Arab Emirates under the trade license authority of Ajman NuVentures Centre Free Zone.
            </p>
            <p>
              Capital Value operates strictly as an independent consultancy providing advisory and documentation coordination. Underwriting determinations, loan sanction letters, and final facility approvals are governed entirely by licensed lending institutions under the regulatory oversight of the Central Bank of the UAE.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold gold-gradient-btn transition-all"
            >
              <span>Schedule a Confidential Consultation</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

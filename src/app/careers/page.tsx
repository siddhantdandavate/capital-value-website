import React from 'react';
import Link from 'next/link';
import { Briefcase, Mail, ShieldCheck, Award, Users, ArrowRight, Building, CheckCircle2 } from 'lucide-react';
import PageHero from '@/components/PageHero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers & Talent | Capital Value Mortgage Consulting',
  description:
    'Explore professional opportunities and expressions of interest with Capital Value Mortgage Consulting FZE LLC in Dubai.',
};

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Fiduciary Independence',
    desc: 'We are committed to unbiased, client-centric property finance consulting. Our advisors work in our clients’ best interests, not sales quotas.',
  },
  {
    icon: Building,
    title: 'Tier-1 Banking Reach',
    desc: 'Direct channels with leading UAE commercial banks, Islamic finance institutions, and private lenders for structured credit solutions.',
  },
  {
    icon: Award,
    title: 'High-Value Practice',
    desc: 'Work on prime residential freehold acquisitions, Golden Visa investments, commercial facilities, and complex multi-property debt portfolios.',
  },
  {
    icon: Users,
    title: 'Collaborative Environment',
    desc: 'A meritocratic, supportive advisory team based in Dubai with continuous professional development and strong back-office case coordination.',
  },
];

const advisoryProfiles = [
  {
    title: 'Independent Mortgage Consultants',
    focus: 'Residential & Commercial Advisory',
    desc: 'Seasoned professionals with in-depth knowledge of UAE Central Bank lending guidelines, credit criteria, and prime Dubai freehold communities.',
  },
  {
    title: 'Credit Underwriters & Case Officers',
    focus: 'Documentation & Bank Submissions',
    desc: 'Detail-oriented specialists managing banking document checklists, affordability assessments, and title trustee coordination.',
  },
  {
    title: 'Broker & Developer Desk Coordinators',
    focus: 'Institutional Partnerships',
    desc: 'Relationship professionals liaising with licensed Dubai real estate brokerages, master developers, and private family offices.',
  },
];

export default function CareersPage() {
  return (
    <div>
      <PageHero
        badge="Company / Careers & Talent"
        title="Careers & Advisory Practice at Capital Value"
        description="Join an established UAE mortgage advisory firm built on fiduciary transparency, deep banking relationships, and genuine client care."
      />

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-primary bg-blue-subtle px-3 py-1 rounded-full border border-blue-primary/20 inline-block mb-3">
              Our Advisory Culture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-deep tracking-tight mb-4">
              A Platform Built for Dedicated Mortgage Professionals
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              At Capital Value Mortgage Consulting FZE LLC, our guiding principle is <span className="font-semibold text-navy-dark">"We Value Your Need."</span> We believe that property buyers in Dubai deserve transparent, knowledgeable advice. We provide our consultants with the analytical tools, case-management support, and institutional relationships needed to excel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl p-7 border border-slate-200/80 hover:border-gold-primary/40 hover:shadow-card transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy-deep text-gold-light flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-deep mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advisory Disciplines */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/70">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-dark bg-gold-subtle px-3 py-1 rounded-full border border-gold-primary/30 inline-block mb-3">
              Practice Areas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-deep tracking-tight mb-4">
              Disciplines We Engage With
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We continually welcome experienced mortgage brokers, credit underwriters, and multilingual advisory professionals to our network.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advisoryProfiles.map((p, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-primary block mb-2">
                    {p.focus}
                  </span>
                  <h3 className="text-xl font-bold text-navy-deep mb-3">{p.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{p.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Confidential Engagement</span>
                </div>
              </div>
            ))}
          </div>

          {/* Transparent Expression of Interest Box */}
          <div className="mt-16 bg-[#060A1A] rounded-3xl p-8 sm:p-12 text-white border border-navy-border relative overflow-hidden">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-light bg-gold/10 px-3 py-1 rounded-full border border-gold/30 inline-block mb-4">
                Confidential Talent Inquiries
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Submit an Expression of Interest
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Capital Value considers candidate applications with discretion. If you have demonstrable experience in UAE property finance, retail mortgage lending, or commercial credit packaging, we invite you to share your profile directly with our leadership team.
              </p>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-8 max-w-xl text-xs text-slate-300 space-y-1">
                <p className="font-semibold text-gold-light">Notice regarding mandate openings:</p>
                <p>Specific mandate briefs and partner-desk openings are shared directly with verified candidates upon introductory consultation.</p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="mailto:careers@capitalvalue.ae?subject=Confidential%20Expression%20of%20Interest%20-%20Capital%20Value"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gold-primary hover:bg-gold-light text-navy-deep font-bold text-sm shadow-gold transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Profile to careers@capitalvalue.ae</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 transition-all"
                >
                  <span>General Contact</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

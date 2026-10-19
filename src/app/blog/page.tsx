import React from 'react';
import Link from 'next/link';
import { BookOpen, Calendar, ArrowRight, Tag } from 'lucide-react';
import PageHero from '@/components/PageHero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blogs & Market Articles | Capital Value Mortgage Consulting',
  description:
    'Strategic perspectives, regulatory insights, and mortgage guidelines for property buyers and investors in the United Arab Emirates.',
};

const articles = [
  {
    title: 'Navigating UAE EIBOR & Lending Rate Cycles',
    category: 'Rate Analysis',
    date: 'Market Briefing',
    desc: 'How Central Bank of the UAE benchmark rates impact fixed vs variable mortgage products for residential buyers in Dubai, and when to consider switching.',
    link: '/contact?inquiry=eibor_article',
  },
  {
    title: 'Off-Plan to Ready Handover Financing Roadmap',
    category: 'Guides',
    date: 'Advisory Guide',
    desc: 'A structured timeline on when and how to secure bank pre-approval as your off-plan property approaches physical completion and handover notice.',
    link: '/contact?inquiry=handover_financing',
  },
  {
    title: 'UAE Golden Visa Guidelines for Mortgaged Properties',
    category: 'Residency',
    date: 'Immigration Policy',
    desc: 'Understanding the AED 2,000,000 threshold, obtaining Bank NOC letters, and navigating Dubai Land Department property investor visa criteria.',
    link: '/contact?inquiry=golden_visa_article',
  },
  {
    title: 'Expatriate vs Non-Resident Mortgage Requirements',
    category: 'Eligibility',
    date: 'Borrower Criteria',
    desc: 'A side-by-side comparison of loan-to-value caps, required income documentation, and international banking checks for UAE residents and overseas investors.',
    link: '/contact?inquiry=expat_mortgage_article',
  },
];

export default function BlogPage() {
  return (
    <div>
      <PageHero
        badge="Company / Insights"
        title="Blogs & Market Articles"
        description="Strategic perspectives, regulatory briefings, and mortgage financing guidelines for property owners and investors across the United Arab Emirates."
      />

      {/* Articles Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-primary bg-blue-subtle px-3 py-1 rounded-full border border-blue-primary/20 inline-block mb-3">
              Market Intelligence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-deep tracking-tight mb-4">
              Property Debt Briefings & Advisory Guides
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Curated perspectives on UAE lending regulations, interest benchmarks, and property transfer processes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-card hover:border-gold-primary/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-4">
                    <span className="text-gold-dark uppercase tracking-wider bg-gold-subtle px-2.5 py-0.5 rounded-full border border-gold-primary/20">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <Tag className="w-3.5 h-3.5 text-blue-primary" />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-navy-deep mb-3 leading-snug">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{item.desc}</p>
                </div>
                <Link
                  href={item.link}
                  className="inline-flex items-center text-sm font-bold text-blue-primary hover:text-navy-deep transition-colors group pt-4 border-t border-slate-100"
                >
                  Request Full Advisory Briefing
                  <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          {/* Consultation Callout */}
          <div className="mt-16 bg-[#060A1A] rounded-3xl p-10 text-center text-white border border-navy-border">
            <h3 className="text-2xl font-bold mb-4">Looking for Tailored Market Analysis?</h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-8 text-sm leading-relaxed">
              Our consultants can provide customized financing assessments based on your specific purchase timeline, property valuation, and residency profile.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gold-primary hover:bg-gold-light text-navy-deep font-bold rounded-xl shadow-gold transition-all"
            >
              Consult an Advisor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

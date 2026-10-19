import React from 'react';
import Link from 'next/link';
import { Home, RefreshCw, Globe, Building2, Landmark, CheckCircle2, ArrowRight, ShieldCheck, Scale } from 'lucide-react';
import PageHero from '@/components/PageHero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgages in Dubai & UAE | Capital Value Mortgage Consulting',
  description:
    'Explore residential, commercial, refinancing, and non-resident mortgage solutions in Dubai and the UAE with Capital Value Mortgage Consulting.',
};

const mortgageSolutions = [
  {
    icon: Home,
    title: 'First-Time Home Buyers',
    desc: 'For UAE residents purchasing their primary residence. Benefit from minimum down payments starting at 20% for expatriates and 15% for UAE nationals under UAE Central Bank guidelines.',
    highlight: 'Up to 80% LTV for Residents',
    link: '/contact?service=first_home',
  },
  {
    icon: RefreshCw,
    title: 'Mortgage Refinance & Buyout',
    desc: 'Transfer your existing mortgage balance to a new lender offering more competitive variable or fixed rates. We evaluate early settlement fees, valuation costs, and mortgage registration charges to ensure a genuine net benefit.',
    highlight: 'Rate optimization & restructuring',
    link: '/contact?service=refinance',
  },
  {
    icon: Globe,
    title: 'Non-Resident Mortgages',
    desc: 'Specialized advisory for overseas investors purchasing property in Dubai without UAE residency. Lenders generally offer loan-to-value financing of 50% to 60% with verified international income proof.',
    highlight: 'Available for international buyers',
    link: '/contact?service=nonresident',
  },
  {
    icon: Building2,
    title: 'Commercial Real Estate Finance',
    desc: 'Financing retail spaces, corporate offices, industrial warehouses, and plots. Loan tenors typically extend up to 15 years with down payments varying from 30% to 40% depending on entity financials.',
    highlight: 'Bespoke corporate underwriting',
    link: '/contact?service=commercial',
  },
  {
    icon: Landmark,
    title: 'Equity Release & Cash-Out',
    desc: 'Unlock accumulated capital from your unencumbered or partially paid property to fund new investments, business expansion, or lifestyle enhancements without liquidating the underlying asset.',
    highlight: 'Up to 80% equity extraction',
    link: '/contact?service=equity',
  },
  {
    icon: CheckCircle2,
    title: 'Islamic Home Finance',
    desc: 'Sharia-compliant financing structures including Ijarah (lease-to-own) and Murabaha (cost-plus markup) arrangements managed through established UAE Islamic banking windows.',
    highlight: '100% Sharia compliant structures',
    link: '/contact?service=islamic',
  },
];

const ltvRules = [
  { category: 'UAE National (First Property < AED 5M)', maxLtv: '85%', minDownPayment: '15%' },
  { category: 'UAE National (Property > AED 5M)', maxLtv: '75%', minDownPayment: '25%' },
  { category: 'Expatriate Resident (First Property < AED 5M)', maxLtv: '80%', minDownPayment: '20%' },
  { category: 'Expatriate Resident (Property > AED 5M)', maxLtv: '70%', minDownPayment: '30%' },
  { category: 'Second / Investment Property (All Residents)', maxLtv: '65%', minDownPayment: '35%' },
  { category: 'Non-Resident Overseas Buyer', maxLtv: '50% - 60%', minDownPayment: '40% - 50%' },
];

export default function MortgagesPage() {
  return (
    <div>
      <PageHero
        badge="Personal / Mortgages"
        title="Comprehensive UAE Mortgage Guidance"
        description="Independent, tailored guidance for UAE nationals, resident expatriates, and overseas investors navigating property finance across Dubai and the Emirates."
      />

      {/* Solutions Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-primary bg-blue-subtle px-3 py-1 rounded-full border border-blue-primary/20 inline-block mb-3">
              Approved Financing Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-deep tracking-tight mb-4">
              Mortgage Pathways in the UAE
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Clear parameters, eligibility criteria, and borrowing regulations across licensed UAE banks and financial institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mortgageSolutions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-card hover:border-gold-primary/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-subtle text-blue-primary flex items-center justify-center mb-6 border border-blue-primary/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-gold-dark uppercase tracking-wider block mb-2">
                      {item.highlight}
                    </span>
                    <h3 className="text-xl font-bold text-navy-deep mb-3">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{item.desc}</p>
                  </div>
                  <Link
                    href={item.link}
                    className="inline-flex items-center text-sm font-bold text-blue-primary hover:text-navy-deep transition-colors group"
                  >
                    Discuss Eligibility
                    <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Central Bank LTV Guidelines Table */}
          <div className="mt-20 bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/90 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-6 h-6 text-gold-dark" />
              <h3 className="text-2xl font-bold text-navy-deep">
                UAE Central Bank Loan-to-Value (LTV) Framework
              </h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              The Central Bank of the UAE establishes maximum loan-to-value borrowing caps to promote market stability. Below is a summary of standard regulatory caps applicable across commercial lenders:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-700">
                <thead className="bg-slate-50 text-navy-deep font-bold border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Borrower Profile</th>
                    <th className="py-3 px-4">Maximum LTV</th>
                    <th className="py-3 px-4">Minimum Down Payment</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {ltvRules.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-50/60">
                      <td className="py-3.5 px-4 font-medium text-navy-dark">{row.category}</td>
                      <td className="py-3.5 px-4 font-bold text-blue-primary">{row.maxLtv}</td>
                      <td className="py-3.5 px-4 text-slate-600">{row.minDownPayment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 leading-relaxed">
              *Note: Central Bank limits are subject to official regulatory decrees. Final underwriting, rate confirmation, and approvals remain the sole prerogative of the licensed lending bank.
            </div>
          </div>

          {/* Advisory Callout CTA */}
          <div className="mt-16 bg-[#060A1A] rounded-3xl p-10 text-center text-white border border-navy-border relative overflow-hidden">
            <div className="max-w-2xl mx-auto relative z-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
                Schedule a Structured Advisory Call
              </h3>
              <p className="text-slate-300 mb-8 text-base leading-relaxed">
                Speak directly with an experienced mortgage consultant to review your profile and explore current lending options.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold-primary hover:bg-gold-light text-navy-deep font-bold rounded-xl shadow-gold transition-all"
              >
                Book Your Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

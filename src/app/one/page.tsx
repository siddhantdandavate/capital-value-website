import React from 'react';
import Link from 'next/link';
import { Handshake, Zap, ShieldCheck, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import PageHero from '@/components/PageHero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'One: Partner Network for Real Estate Agents | Capital Value Mortgage Consulting',
  description:
    'Empowering UAE real estate brokers with expedited bank pre-approvals, dedicated case coordination, and transparent referral tracking.',
};

export default function OnePage() {
  return (
    <div>
      <PageHero
        badge="Business / One for Agents"
        title="One: Partner Network for Real Estate Agents"
        description="Empowering UAE real estate brokers and agencies with expedited bank pre-approvals, dedicated case coordination, and transparent client progression."
        badgeVariant="blue"
      />

      {/* Main Content */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-card transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-subtle text-blue-primary flex items-center justify-center mb-6 border border-blue-primary/20">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-deep mb-3">Fast-Track Bank Pre-Approvals</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Keep transactions moving smoothly. We package and submit buyer applications to the most appropriate UAE lenders to secure pre-approvals rapidly, minimizing deal fallout.
              </p>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Upfront buyer affordability calculations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Reduced processing turnaround times</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-card transition-all">
              <div className="w-12 h-12 rounded-xl bg-gold-subtle text-gold-dark flex items-center justify-center mb-6 border border-gold-primary/20">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-deep mb-3">Dedicated Broker Desk</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Direct point of contact for your agency to get upfront eligibility advice and loan-to-value limits before taking clients on property viewings.
              </p>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Regular case milestone notifications</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Trustee office transfer coordination</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#060A1A] rounded-3xl p-10 text-center text-white border border-navy-border">
            <h3 className="text-2xl font-bold mb-4">Partner with Capital Value</h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-8 text-sm leading-relaxed">
              Join Dubai real estate agencies who rely on Capital Value to deliver unbiased mortgage solutions and swift closing support for their buyers.
            </p>
            <Link
              href="/contact?inquiry=partner_desk"
              className="inline-flex items-center px-8 py-4 bg-gold-primary hover:bg-gold-light text-navy-deep font-bold rounded-xl shadow-gold transition-all"
            >
              Join the Partner Network
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

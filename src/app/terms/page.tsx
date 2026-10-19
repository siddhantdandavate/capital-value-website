import React from 'react';
import Link from 'next/link';
import { Scale, AlertCircle, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service & Regulatory Disclosures | Capital Value Mortgage Consulting',
  description:
    'Terms governing website access and consultancy engagements with Capital Value Mortgage Consulting FZE LLC. Independent advisory status & credit decision authority.',
};

export default function TermsPage() {
  return (
    <div>
      <PageHero
        badge="Legal / Terms of Service"
        title="Terms of Service & Regulatory Disclosures"
        description="Terms governing digital advisory access and client representation with Capital Value Mortgage Consulting FZE LLC."
      />

      {/* Main Legal Content */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-14 border border-slate-200/90 shadow-sm space-y-10 text-slate-700 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-navy-deep mb-4">1. Independent Advisory Status</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                Capital Value Mortgage Consulting FZE LLC is a Free Zone Establishment limited liability company incorporated in the United Arab Emirates. We operate as an independent property finance consultancy providing advisory, eligibility assessments, document preparation, and bank coordination services. Capital Value is not a commercial bank, depository institution, or direct lender.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-deep mb-4">2. Credit Decision Authority & Underwriting</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                All credit decisions, facility sanctions, interest or profit rates, loan-to-value limits, independent property valuation appraisals, and mortgage contracts are solely determined and executed by licensed UAE lending banks in full compliance with Central Bank of the UAE regulatory decrees.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-deep mb-4">3. No Representation of Guaranteed Approval</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                While our specialists exercise professional diligence to optimize application packaging and bank matching, neither website materials nor preliminary consultations constitute a commitment, guarantee, or warranty of loan sanction. Lending institutions reserve full underwriting discretion.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-deep mb-4">4. Intellectual Property</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                The Capital Value 3D emblem, registered tagline "We Value Your Need", layout designs, and published content are the exclusive intellectual property of Capital Value Mortgage Consulting FZE LLC. Unauthorized reproduction is strictly prohibited.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200">
              <h2 className="text-xl font-bold text-navy-deep mb-2">5. Jurisdiction & Applicable Law</h2>
              <p className="text-sm sm:text-base leading-relaxed mb-4">
                These terms are governed by and construed in accordance with the federal laws of the United Arab Emirates. Any disputes arising out of website usage or advisory services are subject to the exclusive jurisdiction of the competent courts of the United Arab Emirates.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-bold text-navy-deep">
                <span>Corporate Inquiries: </span>
                <a href="mailto:info@capitalvalue.ae" className="text-blue-primary hover:underline">
                  info@capitalvalue.ae
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

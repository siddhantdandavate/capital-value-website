import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Mail, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy & Data Protection | Capital Value Mortgage Consulting',
  description:
    'Compliance with UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection (PDPL) and Central Bank confidentiality regulations.',
};

export default function PrivacyPage() {
  return (
    <div>
      <PageHero
        badge="Legal / Privacy Policy"
        title="Privacy Policy & Data Protection"
        description="How Capital Value Mortgage Consulting FZE LLC collects, handles, and protects your personal and financial information under UAE Federal Decree-Law No. 45 of 2021 (PDPL)."
      />

      {/* Main Legal Content */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-14 border border-slate-200/90 shadow-sm space-y-10 text-slate-700 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-navy-deep mb-4">1. Introduction & Statutory Scope</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                Capital Value Mortgage Consulting FZE LLC ("Capital Value", "we", "us") respects your confidentiality and is strictly committed to protecting your personal data in accordance with UAE Federal Decree-Law No. 45 of 2021 regarding Personal Data Protection (PDPL), Dubai consumer protection mandates, and Central Bank confidentiality guidelines.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-deep mb-4">2. Information We Collect</h2>
              <p className="text-sm sm:text-base leading-relaxed mb-3">
                Through our advisory enquiry forms, consultation requests, and direct communication, we collect basic contact information (full name, email address, phone number) and high-level property financing parameters (employment status, estimated property value, residency type).
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                We do not collect sensitive identity documents (such as physical copies of passports, Emirates IDs, or full bank statements) through unencrypted public web forms. Document transfer for banking pre-approvals occurs exclusively through encrypted, secure bilateral channels once client representation is established.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-deep mb-4">3. Use and Processing of Information</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                Information provided is processed solely to: (i) evaluate initial property financing feasibility; (ii) arrange scheduled telephone or in-person advisory consultations; and (iii) formulate mortgage product comparisons across licensed UAE financial institutions under your explicit instruction. We do not sell, license, or disclose your contact details to third-party marketing brokers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-deep mb-4">4. Data Security and Retention</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                We implement industry-standard administrative, physical, and technical safeguards—including TLS/SSL transit encryption and access-controlled servers—to protect client records against unauthorized access, alteration, or disclosure.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200">
              <h2 className="text-xl font-bold text-navy-deep mb-2">5. Data Protection Officer Contact</h2>
              <p className="text-sm sm:text-base leading-relaxed mb-4">
                If you have questions regarding your personal information or wish to exercise your data rights, please contact our compliance team:
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-bold text-blue-primary hover:text-navy-deep transition-colors">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@capitalvalue.ae">info@capitalvalue.ae</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

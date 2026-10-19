import React from 'react';
import Link from 'next/link';
import { Lock, FileCheck, Bell, Shield, ArrowRight, UserCheck } from 'lucide-react';
import PageHero from '@/components/PageHero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Owners Portal | Capital Value Mortgage Consulting',
  description:
    'Case coordination and milestone progression for active Capital Value property finance clients.',
};

export default function OwnersPortalPage() {
  return (
    <div>
      <PageHero
        badge="Personal / Owners Portal"
        title="Client Owners Portal"
        description="Case coordination and milestone progression tracking for active mortgage and property finance clients."
      />

      {/* Main Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm text-center">
            <div className="w-16 h-16 rounded-2xl bg-blue-subtle text-blue-primary flex items-center justify-center mx-auto mb-6 border border-blue-primary/20">
              <Lock className="w-8 h-8" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-deep mb-4">
              Client Case Progression & Milestones
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base max-w-2xl mx-auto mb-10">
              The Capital Value Owners Portal provides active clients with structured updates regarding bank underwriter milestones, property appraisal dispatches, final offer letters, and trustee transfer appointments.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-10 text-left">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70">
                <FileCheck className="w-6 h-6 text-gold-dark mb-3" />
                <h4 className="text-sm font-bold text-navy-deep uppercase tracking-wider">Document Checklist</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">Encrypted review and verification of bank underwriting packages.</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70">
                <Bell className="w-6 h-6 text-blue-primary mb-3" />
                <h4 className="text-sm font-bold text-navy-deep uppercase tracking-wider">Milestone Notices</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">Direct alerts upon bank sanction, appraisal completion, and NOC release.</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70">
                <Shield className="w-6 h-6 text-emerald-600 mb-3" />
                <h4 className="text-sm font-bold text-navy-deep uppercase tracking-wider">Confidentiality</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">Strict adherence to UAE Federal Personal Data Protection Law (PDPL).</p>
              </div>
            </div>

            <div className="p-6 bg-blue-subtle border border-blue-primary/20 rounded-2xl text-left text-xs text-slate-700 leading-relaxed mb-8 max-w-2xl mx-auto">
              <span className="font-bold text-navy-deep">Notice for Active Clients: </span>
              Authentication and case file references are assigned directly upon commencement of formal advisory representation. If you are an active client requiring milestone updates, please contact your designated mortgage advisor or reach out to client support.
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-navy-deep hover:bg-navy-light text-white font-bold rounded-xl shadow-card transition-all"
            >
              Contact Advisory Desk
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

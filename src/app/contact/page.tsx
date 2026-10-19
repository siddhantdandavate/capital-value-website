import React from 'react';
import { Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import ConsultationForm from '@/components/ConsultationForm';
import PageHero from '@/components/PageHero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us & Book Consultation | Capital Value Mortgage Consulting',
  description:
    'Connect with Capital Value Mortgage Consulting FZE LLC in Dubai. Book a confidential mortgage advisory session or submit your property finance enquiry.',
};

export default function ContactPage() {
  return (
    <div>
      <PageHero
        badge="Company / Contact Us"
        title="Connect With Capital Value"
        description="Schedule a confidential mortgage consultation or enquire directly with our UAE property finance advisory team in Dubai."
      />

      {/* Main Section with Form */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Info Side */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-primary bg-blue-subtle px-3 py-1 rounded-full border border-blue-primary/20 inline-block mb-3">
                  Direct Advisory Channels
                </span>
                <h2 className="text-3xl font-extrabold text-navy-deep tracking-tight mb-4">
                  Let's Discuss Your Financing Objectives
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Whether acquiring a primary home, evaluating a commercial property, or refinancing existing mortgages, our advisors provide structured, independent guidance.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-blue-subtle text-blue-primary flex items-center justify-center shrink-0 border border-blue-primary/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Official Email</span>
                    <a
                      href="mailto:info@capitalvalue.ae"
                      className="text-base font-bold text-navy-deep hover:text-blue-primary transition-colors"
                    >
                      info@capitalvalue.ae
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-blue-subtle text-blue-primary flex items-center justify-center shrink-0 border border-blue-primary/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Corporate Office</span>
                    <span className="text-base font-bold text-navy-deep">Dubai, United Arab Emirates</span>
                    <span className="text-xs text-slate-500 block mt-0.5">Free Zone Establishment (FZE LLC)</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-blue-subtle text-blue-primary flex items-center justify-center shrink-0 border border-blue-primary/20">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Advisory Hours</span>
                    <span className="text-base font-bold text-navy-deep">Monday – Friday</span>
                    <span className="text-xs text-slate-500 block mt-0.5">9:00 AM – 6:00 PM (Gulf Standard Time, GST)</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#060A1A] text-white text-xs leading-relaxed border border-navy-border space-y-2">
                <div className="flex items-center gap-2 text-gold-light font-bold uppercase tracking-wider text-xs">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Advisory & Compliance Notice</span>
                </div>
                <p className="text-slate-300">
                  Capital Value Mortgage Consulting FZE LLC operates as an independent consultancy. All loan underwriting, rate determinations, and credit facility approvals are made directly by licensed UAE lending banks in accordance with Central Bank regulations.
                </p>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-7">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

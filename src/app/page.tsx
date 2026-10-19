'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Home as HomeIcon,
  Building,
  RefreshCw,
  Coins,
  Briefcase,
  Globe2,
  Moon,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Mail,
  MapPin,
  Clock,
  Sparkles,
} from 'lucide-react';
import ConsultationForm from '@/components/ConsultationForm';
import MortgageCalculator from '@/components/MortgageCalculator';
import BankLogosTicker from '@/components/BankLogosTicker';

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'What is a mortgage in the UAE?',
      a: 'In the UAE, a mortgage is a secured loan provided by a licensed bank or financial institution to help an individual or corporate entity purchase real estate. The property itself serves as security for the borrowed capital until the financing is repaid across an agreed tenure in regular instalments.',
    },
    {
      q: 'How does the mortgage consultation process work?',
      a: 'Our consultation begins by reviewing your property target, residency, employment or business income, and financing goals. We then outline the relevant lending parameters, help prepare the necessary documentation, and guide you through subsequent stages as your application is evaluated by financial institutions.',
    },
    {
      q: 'Can non-residents enquire about UAE property finance?',
      a: 'Yes. Several UAE financial institutions provide mortgage solutions to non-resident overseas buyers purchasing freehold real estate. Non-resident criteria typically include specific minimum down-payment levels, proof of overseas income, and international bank statements.',
    },
    {
      q: 'What information may be required for an initial consultation?',
      a: 'For an exploratory initial conversation, you only need to provide high-level details: your employment or business status (salaried or self-employed), residency status, estimated monthly income, target purchase price, and intended down payment. Sensitive identity or banking documents are not required for an initial discussion.',
    },
    {
      q: 'Can I discuss refinancing an existing mortgage?',
      a: 'Yes. If you currently hold a mortgage on a UAE property, we can review the feasibility of a mortgage buyout or restructuring with an alternative lender to assess whether term adjustments or equity release options align with your objectives.',
    },
    {
      q: 'Does a consultation guarantee mortgage approval?',
      a: 'No. Capital Value is an independent consulting firm, not a lender. All mortgage underwriting decisions, eligibility criteria, profit or interest rates, and final credit approvals remain strictly subject to the independent policies of licensed UAE banks and financial institutions, as well as UAE Central Bank regulations.',
    },
    {
      q: 'How can I contact Capital Value?',
      a: 'You may submit an enquiry via our website consultation form, reach out via our WhatsApp contact link, or email us directly at info@capitalvalue.ae. Our advisory team will respond promptly to schedule an exploratory discussion.',
    },
  ];

  return (
    <>
      {/* ==========================================================================
           HERO SECTION
           ========================================================================== */}
      <section className="relative min-h-[92vh] flex items-center pt-[120px] sm:pt-[130px] lg:pt-[140px] pb-16 sm:pb-24 bg-navy-deep overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Dubai Luxury Architecture and Skyline"
            fill
            className="object-cover object-center brightness-95 contrast-105"
            priority
          />
        </div>

        {/* Refined Split Overlay */}
        <div className="absolute inset-0 z-1 bg-gradient-to-r from-navy-deep/90 via-navy-deep/70 to-navy-deep/35" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-navy-deep to-transparent z-1" />

        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Eyebrow, Headline, Paragraph, CTAs */}
            <div className="lg:col-span-7 xl:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full section-tag-dark mb-4 sm:mb-6">
                <span className="w-2 h-2 rounded-full bg-gold-light shadow-[0_0_8px_#DFC07D]" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gold-light">
                  UAE MORTGAGE &amp; PROPERTY FINANCE
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-white leading-[1.16] tracking-tight mb-4 sm:mb-6">
                Your Property Goals.<br />
                <span className="highlight-gold">A Clearer Path to Finance.</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed mb-6 sm:mb-8 max-w-xl">
                Explore your UAE property-finance options with personalised guidance through the mortgage journey. Independent, client-focused advisory designed to bring structure, transparency, and clarity to your financing decisions.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold gold-gradient-btn transition-all text-center"
                >
                  Book a Consultation
                </a>
                <Link
                  href="/mortgages"
                  className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all text-center"
                >
                  Explore Mortgage Solutions
                </Link>
              </div>

              <div className="flex items-center gap-3 pt-6 border-t border-white/15 text-slate-300 text-xs sm:text-sm">
                <ShieldCheck className="w-5 h-5 text-gold-light shrink-0" />
                <span>Personalised guidance. Clear next steps. A more informed property-finance journey.</span>
              </div>
            </div>

            {/* Right Column: Mortgage Calculator */}
            <div className="lg:col-span-5 xl:col-span-5 w-full">
              <MortgageCalculator />
            </div>
          </div>

          {/* Highlights Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-14 pt-8 border-t border-white/10">
              <div className="bg-navy-surface/85 border border-white/10 backdrop-blur-md p-6 rounded-xl hover:border-gold-primary/40 transition-all">
                <div className="flex items-center gap-2.5 font-bold text-white text-base mb-2">
                  <Building className="w-5 h-5 text-gold-light shrink-0" />
                  <span>Residential & Commercial</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Guidance for completed freehold residences, off-plan handovers, and commercial investments.
                </p>
              </div>

              <div className="bg-navy-surface/85 border border-white/10 backdrop-blur-md p-6 rounded-xl hover:border-gold-primary/40 transition-all">
                <div className="flex items-center gap-2.5 font-bold text-white text-base mb-2">
                  <Globe2 className="w-5 h-5 text-gold-light shrink-0" />
                  <span>Residents & Non-Residents</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Structured borrowing support for UAE nationals, resident expatriates, and overseas buyers.
                </p>
              </div>

              <div className="bg-navy-surface/85 border border-white/10 backdrop-blur-md p-6 rounded-xl hover:border-gold-primary/40 transition-all">
                <div className="flex items-center gap-2.5 font-bold text-white text-base mb-2">
                  <Sparkles className="w-5 h-5 text-gold-light shrink-0" />
                  <span>Conventional & Islamic</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Navigating diverse borrowing structures to match your personal ethical and financial criteria.
                </p>
              </div>
            </div>
          </div>
      </section>

      {/* ==========================================================================
           UAE LENDERS TICKER & ACCREDITATION BANNER (ANIMATED CAROUSEL)
           ========================================================================== */}
      <BankLogosTicker />
      {/* ==========================================================================
           MORTGAGE SOLUTIONS (SERVICES - CRISP LIGHT SURFACE)
           ========================================================================== */}
      <section className="py-24 bg-white" id="solutions">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full section-tag-light text-xs font-bold uppercase tracking-wider mb-4">
              Mortgage Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Structured Property-Finance Guidance
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Proposed service categories tailored to individual client scenarios across Dubai and the UAE. Each case is evaluated with complete confidentiality and personal attention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-navy-deep text-gold-light flex items-center justify-center mb-6">
                  <HomeIcon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Residential Mortgage Guidance</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed mb-6">
                  Comprehensive advisory for individuals purchasing residential villas, townhouses, and luxury apartments across freehold UAE communities.
                </p>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-blue-primary pt-4 border-t border-slate-100 group">
                <span>Discuss Requirements</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-navy-deep text-gold-light flex items-center justify-center mb-6">
                  <Building className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Property Purchase Finance</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed mb-6">
                  Navigating initial deposit requirements, loan-to-value parameters, and pre-approval readiness before signing sales agreements.
                </p>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-blue-primary pt-4 border-t border-slate-100 group">
                <span>Discuss Requirements</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-navy-deep text-gold-light flex items-center justify-center mb-6">
                  <RefreshCw className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Refinancing & Buyout Guidance</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed mb-6">
                  Reviewing options to transfer existing mortgages between UAE lenders to adjust repayment horizons or explore more competitive terms.
                </p>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-blue-primary pt-4 border-t border-slate-100 group">
                <span>Discuss Requirements</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-navy-deep text-gold-light flex items-center justify-center mb-6">
                  <Coins className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Equity Release Guidance</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed mb-6">
                  Advisory on accessing accumulated equity from existing mortgage-free or partially mortgaged residential assets in the UAE.
                </p>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-blue-primary pt-4 border-t border-slate-100 group">
                <span>Discuss Requirements</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 5 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-navy-deep text-gold-light flex items-center justify-center mb-6">
                  <Briefcase className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Commercial Property Finance</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed mb-6">
                  Guidance on financing commercial offices, industrial warehouses, and business premises for entrepreneurs and institutional investors.
                </p>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-blue-primary pt-4 border-t border-slate-100 group">
                <span>Discuss Requirements</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 6 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-navy-deep text-gold-light flex items-center justify-center mb-6">
                  <Globe2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Non-Resident Mortgage Guidance</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed mb-6">
                  Dedicated support for international clients, overseas investors, and expatriates seeking property finance in Dubai and the UAE.
                </p>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-blue-primary pt-4 border-t border-slate-100 group">
                <span>Discuss Requirements</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="mt-14 p-6 bg-slate-50 border-l-4 border-gold-primary rounded-r-xl text-slate-600 text-sm leading-relaxed">
            <strong className="text-slate-800">Important Advisory Notice:</strong> The services listed above represent proposed advisory categories. Final credit approval, underwriting terms, profit/interest rates, eligibility criteria, and maximum loan-to-value limits are determined solely by the respective licensed UAE financial institutions in accordance with UAE Central Bank regulations.
          </div>
        </div>
      </section>

      {/* ==========================================================================
           ABOUT CAPITAL VALUE (EDITORIAL SECTION - LARGE IMAGE + NARRATIVE)
           ========================================================================== */}
      <section className="py-24 bg-navy-deep text-white relative" id="about">
        <div className="max-w-[1240px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Visual Column: Founder & Director Spotlight */}
            <div className="flex flex-col gap-4">
              <div className="relative h-[440px] sm:h-[480px] rounded-3xl overflow-hidden border border-gold-primary/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
                <Image
                  src="/amit-kulkarni.jpg"
                  alt="Amit Dattatraya Kulkarni - Founder & Director, Capital Value Mortgage Consulting"
                  fill
                  className="object-cover object-[center_35%] transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060A1A] via-[#060A1A]/30 to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="px-3.5 py-1.5 rounded-full bg-gold-primary text-navy-deep font-black text-xs uppercase tracking-wider shadow-lg backdrop-blur-sm flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Founder &amp; Director</span>
                  </span>
                </div>

                {/* Bottom Director Identifier */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="p-4 rounded-2xl bg-[#0A1128]/95 border border-gold-primary/30 backdrop-blur-md shadow-xl">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                        Amit Dattatraya Kulkarni
                      </h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-gold-primary/20 text-gold-light border border-gold-primary/30">
                        Owner
                      </span>
                    </div>
                    <p className="text-xs text-gold-light font-medium tracking-wide">
                      Founder &amp; Owner • Capital Value Mortgage Consulting FZE LLC
                    </p>
                    <p className="text-[11px] text-slate-300 mt-1.5 leading-relaxed">
                      Independent UAE property-finance practice delivering structured mortgage guidance aligned with client goals.
                    </p>
                  </div>
                </div>
              </div>

              {/* Leadership Principle Tag */}
              <div className="bg-navy-surface/90 border border-gold-primary/30 p-4 rounded-2xl shadow-xl backdrop-blur-md">
                <div className="text-xs font-bold uppercase tracking-widest text-gold-light mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-gold-light" />
                  <span>Director&apos;s Principle</span>
                </div>
                <div className="text-xs text-slate-300 leading-relaxed italic">
                  &ldquo;Structured, transparent property-finance guidance committed to client value across the United Arab Emirates.&rdquo;
                </div>
              </div>
            </div>

            {/* Narrative Column */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full section-tag-dark text-xs font-bold uppercase tracking-wider mb-6">
                About Capital Value
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
                Dedicated to Clarity in UAE Property Finance
              </h2>

              <p className="text-lg text-slate-200 font-semibold mb-6 leading-relaxed">
                Capital Value Mortgage Consulting FZE LLC assists clients in understanding their property-finance options with precision, discretion, and structure.
              </p>

              <p className="text-slate-400 text-base leading-relaxed mb-8">
                Navigating the mortgage landscape in the United Arab Emirates requires careful attention to lending parameters, documentation readiness, and institutional procedures. Founded by Amit Dattatraya Kulkarni, our role as an independent mortgage consultancy is to demystify borrowing criteria, explain the steps involved, and support you from initial evaluation through to formal settlement.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-gold-primary/20 text-gold-light flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">Personalised Evaluation</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Every client profile is examined based on unique income structures, residency status, and specific property objectives.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-gold-primary/20 text-gold-light flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">Clear & Disciplined Communication</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Transparent explanations without misleading jargon or unrealistic promises regarding lender turnaround times.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-gold-primary/20 text-gold-light flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">Documentation Preparedness</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Guidance in assembling the precise paperwork required by lending institutions to minimise unnecessary delays.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-bold gold-gradient-btn transition-all text-center"
                >
                  Schedule an Advisory Discussion
                </Link>
                <Link
                  href="/leadership"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold border border-gold-primary/40 text-gold-light hover:bg-gold-primary/10 transition-all text-center"
                >
                  <span>Meet Director Amit Kulkarni</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           HOW IT WORKS (NUMBERED PROGRESSIVE TIMELINE)
           ========================================================================== */}
      <section className="py-24 bg-slate-50" id="process">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full section-tag-light text-xs font-bold uppercase tracking-wider mb-4">
              The Advisory Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              How It Works
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              A structured, transparent four-step journey designed to help you navigate property finance in the UAE with complete confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-white border-2 border-blue-primary text-blue-primary text-xl font-extrabold flex items-center justify-center shadow-md">
                  01
                </div>
                <div className="hidden lg:block h-0.5 bg-slate-300 flex-grow" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Share Your Requirements</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Detail your property goals, target budget, timeframe, and preferred financing type through our consultation form or a direct conversation.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-white border-2 border-blue-primary text-blue-primary text-xl font-extrabold flex items-center justify-center shadow-md">
                  02
                </div>
                <div className="hidden lg:block h-0.5 bg-slate-300 flex-grow" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Discuss Circumstances & Options</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We review your income structure, residency status, and borrowing scope to explain the general options available across UAE lenders.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-white border-2 border-blue-primary text-blue-primary text-xl font-extrabold flex items-center justify-center shadow-md">
                  03
                </div>
                <div className="hidden lg:block h-0.5 bg-slate-300 flex-grow" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Review Documentation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Receive a structured checklist of documentation required by financial institutions to ensure complete and accurate submission.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-white border-2 border-blue-primary text-blue-primary text-xl font-extrabold flex items-center justify-center shadow-md">
                  04
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Guidance Through Progression</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Benefit from continuous guidance as your case advances through valuation, lender review, offer issuance, and final disbursement.
              </p>
            </div>
          </div>

          <div className="mt-14 text-center text-xs text-slate-500 bg-white border border-slate-200 rounded-xl p-4">
            <strong>Transparency Disclosure:</strong> Lender decisions, underwriting eligibility, valuation results, and actual processing times are governed entirely by the individual financial institution and subject to Central Bank of the UAE regulatory parameters.
          </div>
        </div>
      </section>

      {/* ==========================================================================
           CONSULTATION CTA BANNER
           ========================================================================== */}
      <section className="py-20 bg-navy-deep">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="relative rounded-3xl bg-gradient-to-r from-navy-surface to-navy-card border border-gold-primary/35 p-10 sm:p-16 text-center shadow-2xl overflow-hidden">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Ready to Discuss Your Property-Finance Plans?
            </h2>
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed">
              Connect with Capital Value for a structured, confidential consultation tailored to your residential or commercial mortgage requirements in the UAE.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="#contact" className="px-8 py-4 rounded-lg text-base font-bold gold-gradient-btn transition-all">
                Book an Initial Consultation
              </a>
              <a
                href="https://wa.me/971500000000?text=Hello%20Capital%20Value"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-lg text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/25 transition-all"
              >
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           FAQ ACCORDION SECTION
           ========================================================================== */}
      <section className="py-24 bg-white" id="faq">
        <div className="max-w-[860px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full section-tag-light text-xs font-bold uppercase tracking-wider mb-4">
              Clarifications
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Clear, qualified answers to common questions regarding mortgage consulting and property finance in the UAE.
            </p>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq, idx) => (
              <div key={idx} className="py-6">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 text-left font-bold text-lg text-slate-900 hover:text-blue-primary transition-colors"
                  aria-expanded={activeFaq === idx}
                >
                  <span>{faq.q}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      activeFaq === idx
                        ? 'bg-blue-primary text-white rotate-180'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {activeFaq === idx && (
                  <div className="pt-4 text-slate-600 text-base leading-relaxed animate-fadeIn">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================================
           CONTACT & CONSULTATION FORM SECTION
           ========================================================================== */}
      <section className="py-24 bg-slate-50 border-t border-slate-200" id="contact">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Info Column */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full section-tag-light text-xs font-bold uppercase tracking-wider mb-4">
                Get in Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Schedule Your Consultation
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                Discuss your mortgage or property-finance requirements with an independent consultant. Fill out the form or reach us via official channels.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-xl">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-primary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-slate-500 tracking-wide mb-1">Official Email</div>
                    <a href="mailto:info@capitalvalue.ae" className="text-base font-bold text-slate-900 hover:text-blue-primary">
                      info@capitalvalue.ae
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-xl">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-slate-500 tracking-wide mb-1">Corporate Office</div>
                    <div className="text-base font-bold text-slate-900">Dubai, United Arab Emirates</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-xl">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-primary flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-slate-500 tracking-wide mb-1">Advisory Hours</div>
                    <div className="text-base font-bold text-slate-900">Monday – Friday: 9:00 AM – 6:00 PM (GST)</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-500">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Safe & Confidential: We never request passport copies, Emirates ID numbers, or bank passwords through public web forms.</span>
              </div>
            </div>

            {/* Right Form Column */}
            <div>
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

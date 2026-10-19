'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  Building,
  Target,
  Compass,
  Award,
  ArrowRight,
  CheckCircle2,
  FileText,
  Briefcase,
  Layers,
  Scale,
  Sparkles,
  MessageSquare,
  Mail,
  Calendar,
  MapPin,
  Coins,
  ChevronRight,
  UserCheck,
} from 'lucide-react';

export default function LeadershipPage() {
  const [photoError, setPhotoError] = useState(false);

  const principles = [
    {
      num: '01',
      title: 'Client-Focused Guidance',
      desc: 'Understand each client’s unique needs, financial profile, and long-term intentions before discussing suitable property-finance structures.',
      icon: Target,
    },
    {
      num: '02',
      title: 'Clarity and Transparency',
      desc: 'Communicate the process, documentary requirements, and relevant borrowing considerations with complete candour and zero ambiguity.',
      icon: Compass,
    },
    {
      num: '03',
      title: 'Professional Relationships',
      desc: 'Build enduring professional relationships through responsible communication, objective counsel, and the highest standards of professional conduct.',
      icon: UserCheck,
    },
    {
      num: '04',
      title: 'A Structured Journey',
      desc: 'Help clients navigate every stage of the property-finance process systematically, from initial feasibility to final institutional completion.',
      icon: Layers,
    },
  ];

  const primaryServices = [
    {
      title: 'Mortgage & Property Finance',
      desc: 'Independent advisory assisting buyers, investors, and homeowners across the United Arab Emirates in understanding and navigating borrowing options.',
    },
    {
      title: 'Residential Mortgage Guidance',
      desc: 'Personalised assessment for purchasing freehold villas, townhouses, and luxury apartments across Dubai and Abu Dhabi communities.',
    },
    {
      title: 'Property-Purchase Finance Guidance',
      desc: 'Structuring initial down payments, navigating UAE Central Bank loan-to-value (LTV) limits, and preparing institutional pre-approval files.',
    },
    {
      title: 'Personalised Journey Assistance',
      desc: 'End-to-end advisory coordination through property valuation, document verification, and final mortgage execution at the trustee office.',
    },
  ];

  const registeredActivities = [
    { name: 'Commercial Brokers', desc: 'Commercial brokerage coordination and deal structuring in the UAE.' },
    { name: 'Banking Consultant', desc: 'Financial structuring and documentation advisory for corporate and individual requirements.' },
    { name: 'General Trading', desc: 'Registered trading activity across authorized commercial goods.' },
    { name: 'E-Commerce', desc: 'Digital platform operations and electronic commercial service facilitation.' },
  ];

  const officialDetails = [
    { label: 'Company Name', value: 'Capital Value Mortgage Consulting FZE LLC' },
    { label: 'Corporate Entity', value: 'Free Zone Establishment with Limited Liability' },
    { label: 'Jurisdiction & Location', value: 'Ajman NuVentures Centre Free Zone, United Arab Emirates' },
    { label: 'Stated Incorporation Date', value: '7 October 2026' },
    { label: 'Stated Share Capital', value: 'AED 100,000' },
    { label: 'Founder & Owner', value: 'Amit Dattatraya Kulkarni' },
  ];

  return (
    <div className="bg-[#040714] text-slate-100 min-h-screen">
      {/* ==========================================================================
           1. EXECUTIVE HERO: INTRODUCING THE FOUNDER
           ========================================================================== */}
      <section className="relative pt-[140px] pb-24 overflow-hidden bg-gradient-to-b from-[#060A1A] via-[#0A1128] to-[#040714] border-b border-white/10">
        {/* Subtle Ambient Radial Glows */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-gold-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-primary/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Column: Eyebrow, Headings, Bio */}
            <div className="lg:col-span-7 xl:col-span-7 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-primary/15 border border-gold-primary/35">
                <span className="w-2 h-2 rounded-full bg-gold-light shadow-[0_0_8px_#DFC07D]" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-gold-light">
                  LEADERSHIP • CAPITAL VALUE
                </span>
              </div>

              <div>
                <h1 className="text-2xl sm:text-4xl lg:text-[54px] font-black tracking-tight text-white leading-[1.14] mb-2 sm:mb-3">
                  Meet Amit Dattatraya Kulkarni
                </h1>
                <div className="text-base sm:text-xl font-bold text-gold-light tracking-wide flex flex-wrap items-center gap-2">
                  <span>Founder &amp; Owner</span>
                  <span className="text-white/30 hidden sm:inline">•</span>
                  <span className="text-slate-300 font-medium text-sm sm:text-lg block sm:inline">
                    Capital Value Mortgage Consulting FZE LLC
                  </span>
                </div>
              </div>

              {/* Gold Divider */}
              <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-gold-light via-gold-primary to-transparent rounded-full" />

              <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Building a client-focused business dedicated to helping people navigate their property-finance journey with greater clarity, thoughtful guidance and a professional approach.
              </p>

              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href="#contact-founder"
                  className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold gold-gradient-btn transition-all text-center"
                >
                  Book a Consultation
                </a>
                <Link
                  href="/team"
                  className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all text-center"
                >
                  Explore Advisory Team
                </Link>
              </div>

              {/* Verified Owner Badge */}
              <div className="flex items-center gap-3 pt-6 border-t border-white/10 text-xs sm:text-sm text-slate-400">
                <ShieldCheck className="w-5 h-5 text-gold-light shrink-0" />
                <span>
                  Official entity profile established in accordance with UAE commercial registration records.
                </span>
              </div>
            </div>

            {/* Right Column: Premium Executive Portrait Area */}
            <div className="lg:col-span-5 xl:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[420px] rounded-3xl p-1 bg-gradient-to-b from-gold-light/40 via-white/10 to-gold-primary/30 shadow-2xl">
                <div className="w-full rounded-[23px] bg-[#0A1128] overflow-hidden relative flex flex-col p-6 sm:p-7 border border-white/10">
                  {/* Subtle Background Pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(#DFC07D_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

                  {/* Top Status */}
                  <div className="relative z-10 flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-gold-primary/20 text-gold-light border border-gold-primary/30">
                      Director Profile
                    </span>
                    <span className="text-xs text-slate-400 font-mono">UAE • FZE LLC</span>
                  </div>

                  {/* Photo Display */}
                  <div className="relative w-full aspect-[4/3] sm:aspect-square mb-5 rounded-2xl overflow-hidden border-2 border-gold-primary/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                    <Image
                      src="/amit-kulkarni.jpg"
                      alt="Amit Dattatraya Kulkarni - Founder & Director, Capital Value Mortgage Consulting"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                      <span className="font-bold drop-shadow">Amit Dattatraya Kulkarni</span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-gold-primary text-[#060A1A]">
                        Founder
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
          </div>
        </div>
      </section>

      {/* ==========================================================================
           2. FOUNDER'S VISION (EDITORIAL SECTION WITH GENERATION OF REFINED COPY)
           ========================================================================== */}
      <section className="py-24 bg-[#060A1A] relative overflow-hidden border-b border-white/10">
        <div className="max-w-[1040px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-primary/10 border border-gold-primary/30 text-xs font-bold uppercase tracking-widest text-gold-light mb-4">
              Vision &amp; Approach
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6">
              A Vision Built Around Your Needs
            </h2>
            <div className="w-16 h-1 bg-gold-light mx-auto rounded-full mb-6" />
            <p className="text-xs text-slate-400 uppercase tracking-widest font-mono">
              Draft brand philosophy prepared for owner review
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-14 backdrop-blur-md relative shadow-2xl">
            {/* Large Decorative Quote Graphic */}
            <div className="text-gold-light/20 text-7xl font-serif absolute top-6 left-8 select-none">
              “
            </div>

            <div className="relative z-10 space-y-6 text-base sm:text-lg text-slate-200 leading-relaxed">
              <p>
                At Capital Value, our approach begins with understanding each client's property goals, circumstances and priorities. We aim to make the property-finance journey easier to navigate through clear communication, a structured process and a focus on individual needs.
              </p>
              <p>
                Our vision is to build lasting professional relationships through transparency, responsible guidance and a commitment to understanding the needs of the people we serve.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold text-white tracking-wide">
                  Amit Dattatraya Kulkarni
                </div>
                <div className="text-xs text-gold-light">
                  Founder &amp; Owner • Capital Value Mortgage Consulting FZE LLC
                </div>
              </div>

              <div className="text-[11px] text-slate-400 font-mono italic">
                * Note: Draft corporate mission statement pending founder sign-off
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           3. BUSINESS FOCUS (PROMINENT MORTGAGE & REGISTERED ACTIVITIES)
           ========================================================================== */}
      <section className="py-24 bg-white text-slate-900">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full section-tag-light text-xs font-bold uppercase tracking-wider mb-4">
              Corporate Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Our Primary Advisory Focus
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Mortgage and property finance sits at the core of Capital Value's client practice, supplemented by our officially registered commercial business activities in the United Arab Emirates.
            </p>
          </div>

          {/* Primary Focus Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {primaryServices.map((svc, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-gold-primary/50 hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-navy-deep text-gold-light flex items-center justify-center font-black text-sm mb-5">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{svc.title}</h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{svc.desc}</p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center text-xs font-bold text-blue-primary">
                  <span>Core Consulting Practice</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>

          {/* Additional Registered Activities Panel */}
          <div className="bg-[#0A1128] text-white rounded-3xl p-8 sm:p-12 border border-white/10 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-bold text-gold-light uppercase tracking-widest block mb-1">
                  Official Trade License Scope
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Additional Registered Business Activities
                </h3>
              </div>
              <span className="text-xs text-slate-400 max-w-sm">
                Corporate activities officially recorded on Capital Value Mortgage Consulting FZE LLC trade documentation.
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {registeredActivities.map((act, idx) => (
                <div
                  key={idx}
                  className="bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:border-gold-primary/40 transition-all"
                >
                  <Briefcase className="w-6 h-6 text-gold-light mb-3" />
                  <h4 className="font-bold text-white text-base mb-2">{act.name}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{act.desc}</p>
                </div>
              ))}
            </div>

            {/* Regulatory Notice */}
            <div className="mt-8 pt-6 border-t border-white/10 text-xs leading-relaxed text-slate-400 flex items-start gap-3">
              <Scale className="w-5 h-5 text-gold-light shrink-0 mt-0.5" />
              <span>
                <strong>Regulatory Compliance Disclosure:</strong> Mortgage and property finance guidance is presented as our primary advisory domain. Official commercial registration establishes corporate capacity under UAE free zone regulations, but does not imply independent authorization for every specialized, bank-exclusive or Central Bank regulated deposit/lending activity. Final credit facility issuance remains the exclusive jurisdiction of licensed UAE financial institutions.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           4. LEADERSHIP PRINCIPLES (4 PRINCIPLES GRID)
           ========================================================================== */}
      <section className="py-24 bg-[#081326] relative border-b border-white/10">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-primary/10 border border-gold-primary/30 text-xs font-bold uppercase tracking-widest text-gold-light mb-4">
              Governing Values
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              Leadership Principles
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              The four operational commitments guiding our consultations, relationship building, and client representation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-[#0D1733] border border-white/10 hover:border-gold-primary/50 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-2xl font-black text-gold-light/40 group-hover:text-gold-light transition-colors font-mono">
                        {principle.num}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-white/[0.05] group-hover:bg-gold-primary/20 text-gold-light flex items-center justify-center transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-light transition-colors">
                      {principle.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{principle.desc}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-bold tracking-wider uppercase text-gold-light/80">
                    Capital Value Standard
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================================================
           5. VERIFIED COMPANY INFORMATION (FROM OFFICIAL CORPORATE DOCUMENTS)
           ========================================================================== */}
      <section className="py-24 bg-[#060A1A] relative border-b border-white/10">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-primary/10 border border-gold-primary/30 text-xs font-bold uppercase tracking-widest text-gold-light mb-4">
              Corporate Transparency
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
              Corporate Entity &amp; Registration
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Official corporate details supported by company registration documentation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-[#0A1128] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {officialDetails.map((detail, idx) => (
                <div key={idx} className="pb-5 border-b border-white/10">
                  <span className="text-xs font-bold text-gold-light uppercase tracking-wider block mb-1">
                    {detail.label}
                  </span>
                  <span className="text-base sm:text-lg font-bold text-white block">
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Strict Document & Privacy Protection Note */}
            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-slate-400 leading-relaxed flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-gold-light shrink-0 mt-0.5" />
              <span>
                <strong>Confidentiality &amp; Compliance Protocol:</strong> In accordance with UAE data protection standards and cyber security guidelines, personal identification numbers, passport copies, share certificate numbers, and private residential addresses are held confidentially and not disclosed on public web properties.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           6. A NOTE FROM THE FOUNDER
           ========================================================================== */}
      <section className="py-20 bg-gradient-to-r from-[#081326] via-[#101E38] to-[#081326] border-b border-white/10 relative">
        <div className="max-w-[960px] mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-primary/15 border border-gold-primary/30 text-xs font-bold uppercase tracking-widest text-gold-light mb-6">
            Company Message
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-8">
            A Commitment to Understanding Your Needs
          </h2>

          <div className="relative bg-white/[0.04] border border-white/15 rounded-2xl p-8 sm:p-12 backdrop-blur-md">
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-serif italic mb-6">
              Every property journey is different. Our aim is to listen carefully, explain the available next steps clearly and help clients navigate their property-finance decisions with a more structured approach.
            </p>

            <div className="text-sm font-bold text-gold-light tracking-wide">
              Capital Value Mortgage Consulting FZE LLC
            </div>
            <div className="text-xs text-slate-400 mt-1">
              (Draft statement submitted for founder sign-off)
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           7. CALL TO ACTION: CONNECT WITH CAPITAL VALUE
           ========================================================================== */}
      <section id="contact-founder" className="py-24 bg-white text-slate-900">
        <div className="max-w-[1040px] mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full section-tag-light text-xs font-bold uppercase tracking-wider mb-4">
            Direct Consultation
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-6">
            Let's Discuss Your Property Goals
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Connect with Capital Value to discuss your property-finance requirements and arrange an initial confidential consultation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-navy-deep hover:bg-navy-light shadow-card transition-all"
            >
              Book a Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>

            <Link
              href="/contact#form"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all"
            >
              Contact Us
            </Link>

            <a
              href="https://wa.me/971500000000?text=Hello%20Amit%20and%20Capital%20Value%20Team%2C%20I%20would%20like%20to%20discuss%20a%20property%20finance%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-md transition-all"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              WhatsApp Direct
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-slate-200 max-w-2xl mx-auto text-left text-xs text-slate-600">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-gold-dark shrink-0" />
              <span>info@capitalvalue.ae</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-gold-dark shrink-0" />
              <span>Ajman &amp; Dubai, UAE</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Confidential Consultations</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

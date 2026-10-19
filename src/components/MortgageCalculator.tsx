'use client';

import React, { useState, useId } from 'react';
import { Calculator, ArrowRight, Info, ShieldCheck } from 'lucide-react';

export default function MortgageCalculator() {
  // Input states
  const [propertyPrice, setPropertyPrice] = useState<number>(1500000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [loanTermYears, setLoanTermYears] = useState<number>(25);
  const [annualRate, setAnnualRate] = useState<number>(4.0);

  const priceId = useId();
  const downPaymentId = useId();
  const termId = useId();
  const rateId = useId();

  // Calculations
  const downPaymentAmount = Math.round(propertyPrice * (downPaymentPercent / 100));
  const loanAmount = Math.max(0, propertyPrice - downPaymentAmount);
  const monthlyRate = annualRate / 12 / 100;
  const totalMonths = loanTermYears * 12;

  let monthlyRepayment = 0;
  if (totalMonths > 0) {
    if (monthlyRate === 0) {
      monthlyRepayment = Math.round(loanAmount / totalMonths);
    } else {
      const compounding = Math.pow(1 + monthlyRate, totalMonths);
      monthlyRepayment = Math.round(
        loanAmount * ((monthlyRate * compounding) / (compounding - 1))
      );
    }
  }

  // Estimated Dubai Land Department 4% transfer fee
  const estimatedDldFee = Math.round(propertyPrice * 0.04);

  // Helper for dynamic slider gradient track
  const getSliderTrack = (val: number, min: number, max: number) => {
    const pct = ((val - min) / (max - min)) * 100;
    return `linear-gradient(to right, #DFC07D 0%, #C5A059 ${pct}%, #1E293B ${pct}%, #1E293B 100%)`;
  };

  // Format currency
  const formatAed = (val: number) => `AED ${val.toLocaleString('en-US')}`;

  const handleApplyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If the contact section is on the same page, smooth scroll
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      e.preventDefault();
      contactEl.scrollIntoView({ behavior: 'smooth' });

      // If consultation form has property price field, update it
      const propInput = document.getElementById('consultationPropertyVal') as HTMLInputElement | null;
      if (propInput) {
        propInput.value = `AED ${propertyPrice.toLocaleString()}`;
      }
    }
  };

  return (
    <div className="relative bg-[#0A1428]/90 border border-white/15 backdrop-blur-xl rounded-3xl p-6 sm:p-7 shadow-2xl text-white overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-start justify-between gap-4 border-b border-white/10 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-6 h-6 rounded-lg bg-gold/15 text-gold-light flex items-center justify-center border border-gold/30">
              <Calculator className="w-3.5 h-3.5" />
            </span>
            <h3 className="text-xl font-extrabold text-white tracking-tight">
              Mortgage Calculator
            </h3>
          </div>
          <p className="text-xs text-slate-300">
            Estimate your monthly property-finance payments in Dubai
          </p>
        </div>
        <span className="text-[11px] font-bold uppercase tracking-wider text-gold-light bg-gold/10 px-2.5 py-1 rounded-full border border-gold/30 whitespace-nowrap">
          Live Estimate
        </span>
      </div>

      <div className="relative z-10 space-y-5">
        {/* Input 1: Property Purchase Price */}
        <div>
          <div className="flex items-center justify-between text-xs mb-2">
            <label htmlFor={priceId} className="font-semibold text-slate-300 uppercase tracking-wider">
              Purchase Price
            </label>
            <span className="font-bold text-sm text-gold-light font-mono">
              {formatAed(propertyPrice)}
            </span>
          </div>
          <input
            id={priceId}
            type="range"
            min={200000}
            max={10000000}
            step={50000}
            value={propertyPrice}
            onChange={(e) => setPropertyPrice(Number(e.target.value))}
            className="gold-slider w-full"
            style={{ background: getSliderTrack(propertyPrice, 200000, 10000000) }}
            aria-label="Property Purchase Price"
          />
          <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
            <span>AED 200k</span>
            <span>AED 10M</span>
          </div>
        </div>

        {/* Input 2: Down Payment */}
        <div>
          <div className="flex items-center justify-between text-xs mb-2">
            <label htmlFor={downPaymentId} className="font-semibold text-slate-300 uppercase tracking-wider">
              Down Payment
            </label>
            <span className="font-bold text-sm text-white font-mono">
              <span className="text-gold-light">{downPaymentPercent}%</span> — {formatAed(downPaymentAmount)}
            </span>
          </div>
          <input
            id={downPaymentId}
            type="range"
            min={20}
            max={80}
            step={1}
            value={downPaymentPercent}
            onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
            className="gold-slider w-full"
            style={{ background: getSliderTrack(downPaymentPercent, 20, 80) }}
            aria-label="Down Payment Percentage"
          />
          <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
            <span>20% (Min expat)</span>
            <span>80%</span>
          </div>
        </div>

        {/* Input 3: Loan Term */}
        <div>
          <div className="flex items-center justify-between text-xs mb-2">
            <label htmlFor={termId} className="font-semibold text-slate-300 uppercase tracking-wider">
              Loan Term
            </label>
            <span className="font-bold text-sm text-gold-light font-mono">
              {loanTermYears} {loanTermYears === 1 ? 'year' : 'years'}
            </span>
          </div>
          <input
            id={termId}
            type="range"
            min={5}
            max={25}
            step={1}
            value={loanTermYears}
            onChange={(e) => setLoanTermYears(Number(e.target.value))}
            className="gold-slider w-full"
            style={{ background: getSliderTrack(loanTermYears, 5, 25) }}
            aria-label="Loan Term in Years"
          />
          <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
            <span>5 yrs</span>
            <span>25 yrs</span>
          </div>
        </div>

        {/* Input 4: Annual Interest Rate */}
        <div>
          <div className="flex items-center justify-between text-xs mb-2">
            <label htmlFor={rateId} className="font-semibold text-slate-300 uppercase tracking-wider">
              Illustrative Interest Rate
            </label>
            <span className="font-bold text-sm text-gold-light font-mono">
              {annualRate.toFixed(2)}%
            </span>
          </div>
          <input
            id={rateId}
            type="range"
            min={1.0}
            max={10.0}
            step={0.05}
            value={annualRate}
            onChange={(e) => setAnnualRate(Number(e.target.value))}
            className="gold-slider w-full"
            style={{ background: getSliderTrack(annualRate, 1.0, 10.0) }}
            aria-label="Illustrative Annual Interest Rate"
          />
          <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
            <span>1.00%</span>
            <span>10.00%</span>
          </div>
        </div>

        {/* Result Highlight Box */}
        <div className="mt-6 rounded-2xl bg-gradient-to-br from-[#101E38] to-[#0A1428] border border-gold-primary/30 p-5 shadow-inner">
          <div className="text-[11px] font-bold uppercase tracking-widest text-gold-light mb-1">
            Estimated Monthly Repayment
          </div>
          <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight mb-1">
            {formatAed(monthlyRepayment)}
          </div>
          <div className="text-xs text-slate-300">
            Estimated at {annualRate.toFixed(2)}% rate over {loanTermYears} years
          </div>

          {/* Quick Metrics Breakdown */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-4 pt-4 border-t border-white/10 text-[11px]">
            <div className="bg-white/5 rounded-lg p-2 border border-white/5">
              <span className="text-slate-400 block text-[10px] uppercase">Loan Amount</span>
              <span className="font-bold text-white font-mono">{formatAed(loanAmount)}</span>
            </div>
            <div className="bg-white/5 rounded-lg p-2 border border-white/5">
              <span className="text-slate-400 block text-[10px] uppercase">Down Payment</span>
              <span className="font-bold text-white font-mono">{formatAed(downPaymentAmount)}</span>
            </div>
            <div className="bg-white/5 rounded-lg p-2 border border-white/5 col-span-2 sm:col-span-1">
              <span className="text-slate-400 block text-[10px] uppercase">Est. DLD (4%)</span>
              <span className="font-bold text-gold-light font-mono">{formatAed(estimatedDldFee)}</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <a
          href="#contact"
          onClick={handleApplyClick}
          className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gold-primary hover:bg-gold-light text-navy-deep font-bold text-sm shadow-gold transition-all"
        >
          <span>Discuss This Calculation With an Advisor</span>
          <ArrowRight className="w-4 h-4" />
        </a>

        {/* Footnote Disclaimer */}
        <div className="flex items-start gap-2 text-[10px] text-slate-400 leading-relaxed pt-1">
          <Info className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
          <span>
            Illustrative estimate only. Excludes bank processing fees, valuation charges, property insurance, and registration fees. Actual repayments depend on lender terms and underwriting.
          </span>
        </div>
      </div>
    </div>
  );
}

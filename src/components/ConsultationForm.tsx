'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    countryCode: '+971',
    phone: '',
    enquiryCategory: '',
    message: '',
    privacyConsent: false,
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (!formData.fullName.trim()) {
      setStatus({ type: 'error', message: 'Please enter your full name.' });
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStatus({ type: 'error', message: 'Please provide a valid email address.' });
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 6) {
      setStatus({ type: 'error', message: 'Please enter a valid contact phone number.' });
      return;
    }
    if (!formData.enquiryCategory) {
      setStatus({ type: 'error', message: 'Please select an enquiry category.' });
      return;
    }
    if (!formData.privacyConsent) {
      setStatus({ type: 'error', message: 'Please acknowledge the privacy consent to proceed.' });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({ type: 'success', message: data.message });
        setFormData({
          fullName: '',
          email: '',
          countryCode: '+971',
          phone: '',
          enquiryCategory: '',
          message: '',
          privacyConsent: false,
        });
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to submit enquiry. Please try again.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Connection error. Please try again or reach us via WhatsApp.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-11 shadow-card">
      <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Consultation Enquiry</h3>
      <p className="text-sm text-slate-500 mb-8">
        Provide your details and an independent mortgage consultant will connect with you.
      </p>

      {status && (
        <div
          className={`p-4 rounded-xl mb-6 text-sm flex items-start gap-3 ${
            status.type === 'success'
              ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
              : 'bg-rose-50 border border-rose-200 text-rose-800'
          }`}
          role="alert"
        >
          {status.type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          )}
          <div className="leading-relaxed">{status.message}</div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div>
          <label htmlFor="fullName" className="block text-sm font-bold text-slate-900 mb-2">
            Full Name <span className="text-rose-600">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Tariq Al Mansoori"
            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-base focus:outline-none focus:border-blue-primary focus:bg-white focus:ring-2 focus:ring-blue-primary/10 transition-all"
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-2">
              Email Address <span className="text-rose-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@example.com"
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-base focus:outline-none focus:border-blue-primary focus:bg-white focus:ring-2 focus:ring-blue-primary/10 transition-all"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-bold text-slate-900 mb-2">
              Phone Number <span className="text-rose-600">*</span>
            </label>
            <div className="flex gap-2">
              <select
                id="countryCode"
                value={formData.countryCode}
                onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                className="w-28 px-3 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium focus:outline-none focus:border-blue-primary focus:bg-white"
              >
                <option value="+971">+971 (UAE)</option>
                <option value="+966">+966 (KSA)</option>
                <option value="+974">+974 (Qatar)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+1">+1 (US/CA)</option>
                <option value="+91">+91 (India)</option>
              </select>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="50 123 4567"
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-base focus:outline-none focus:border-blue-primary focus:bg-white"
                required
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="enquiryCategory" className="block text-sm font-bold text-slate-900 mb-2">
            Enquiry Category <span className="text-rose-600">*</span>
          </label>
          <select
            id="enquiryCategory"
            value={formData.enquiryCategory}
            onChange={(e) => setFormData({ ...formData, enquiryCategory: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-base focus:outline-none focus:border-blue-primary focus:bg-white"
            required
          >
            <option value="" disabled>Select financing category</option>
            <option value="Residential Mortgage Guidance">Residential Mortgage Guidance</option>
            <option value="Property Purchase Finance">Property Purchase Finance</option>
            <option value="Mortgage Refinancing & Buyout">Mortgage Refinancing & Buyout Guidance</option>
            <option value="Equity Release Guidance">Equity Release Guidance</option>
            <option value="Commercial Property Finance">Commercial Property Finance</option>
            <option value="Non-Resident Mortgage Guidance">Non-Resident Mortgage Guidance</option>
            <option value="Islamic Home-Finance Guidance">Islamic Home-Finance Guidance</option>
            <option value="Golden Visa Property Financing">Golden Visa Property Financing</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-bold text-slate-900 mb-2">
            Property or Financing Notes (Optional)
          </label>
          <textarea
            id="message"
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Briefly describe your target property, purchase price, or key questions..."
            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-base focus:outline-none focus:border-blue-primary focus:bg-white"
          />
        </div>

        <div className="flex items-start gap-3 pt-2">
          <input
            type="checkbox"
            id="privacyConsent"
            checked={formData.privacyConsent}
            onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
            className="mt-1 w-4 h-4 rounded text-blue-primary focus:ring-blue-primary"
            required
          />
          <label htmlFor="privacyConsent" className="text-xs text-slate-500 leading-relaxed cursor-pointer">
            I agree that Capital Value Mortgage Consulting FZE LLC may contact me regarding this enquiry in accordance with standard privacy practices.
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg text-base font-bold gold-gradient-btn transition-all disabled:opacity-70"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Recording Request...</span>
            </>
          ) : (
            <>
              <span>Submit Consultation Request</span>
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

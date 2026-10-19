import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#040714] text-slate-400 border-t border-white/10 pt-20 pb-10">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-5">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Capital Value Mortgage Consulting FZE LLC"
                width={280}
                height={100}
                className="h-20 sm:h-24 w-auto object-contain drop-shadow-md hover:opacity-95 transition-opacity"
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Capital Value Mortgage Consulting FZE LLC provides professional, independent property-finance guidance across the United Arab Emirates.
            </p>
            <div className="text-sm text-gold-light font-bold tracking-wide">
              We Value Your Need.
            </div>
          </div>

          {/* Col 2: Company */}
          <div>
            <h4 className="text-white text-base font-bold mb-5 tracking-wide">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-gold-light transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-gold-light transition-colors">About Us</Link></li>
              <li><Link href="/leadership" className="hover:text-gold-light transition-colors text-gold-light font-medium">Founder &amp; Leadership</Link></li>
              <li><Link href="/team" className="hover:text-gold-light transition-colors">The Team</Link></li>
              <li><Link href="/blog" className="hover:text-gold-light transition-colors">Blogs & Articles</Link></li>
              <li><Link href="/careers" className="hover:text-gold-light transition-colors">Careers</Link></li>
              <li><Link href="/brand-assets" className="hover:text-gold-light transition-colors">Brand Assets</Link></li>
              <li><Link href="/liquidity-report" className="hover:text-gold-light transition-colors">Liquidity Report</Link></li>
              <li><Link href="/contact" className="hover:text-gold-light transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3: Personal & Solutions */}
          <div>
            <h4 className="text-white text-base font-bold mb-5 tracking-wide">Personal & Solutions</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/mortgages" className="hover:text-gold-light transition-colors">Mortgage Guidance</Link></li>
              <li><Link href="/real-estate" className="hover:text-gold-light transition-colors">Real Estate Advisory</Link></li>
              <li><Link href="/golden-visa" className="hover:text-gold-light transition-colors">Golden Visa</Link></li>
              <li><Link href="/will-services" className="hover:text-gold-light transition-colors">Will Services</Link></li>
              <li><Link href="/owners-portal" className="hover:text-gold-light transition-colors">Owners Portal</Link></li>
              <li><Link href="/blocks" className="hover:text-gold-light transition-colors">Blocks (Invest)</Link></li>
              <li><Link href="/one" className="hover:text-gold-light transition-colors">One (for Agents)</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-white text-base font-bold mb-5 tracking-wide">Official Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold-light shrink-0 mt-1" />
                <a href="mailto:info@capitalvalue.ae" className="hover:text-gold-light transition-colors">
                  info@capitalvalue.ae
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-light shrink-0 mt-1" />
                <span>Dubai, United Arab Emirates</span>
              </div>
              <div className="flex items-start gap-3">
                <MessageSquare className="w-4 h-4 text-gold-light shrink-0 mt-1" />
                <a
                  href="https://wa.me/971500000000?text=Hello%20Capital%20Value"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-light transition-colors"
                >
                  WhatsApp Direct
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimer */}
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 mb-10 text-xs leading-relaxed text-slate-500">
          <strong className="text-slate-400">Regulatory & Advisory Disclaimer:</strong> Capital Value Mortgage Consulting FZE LLC is an independent mortgage advisory consultancy established in the United Arab Emirates. We provide consulting and coordination services for property finance; we are not a bank, deposit-taking institution, or direct lender. Final loan approvals, interest/profit rates, financing ratios, and terms are strictly at the discretion of licensed lending institutions in the UAE and subject to UAE Central Bank regulations.
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Capital Value Mortgage Consulting FZE LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-gold-light transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold-light transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

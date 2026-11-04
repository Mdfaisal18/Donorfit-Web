import React from 'react';
import { useModal } from '../context/ModalContext.tsx';
import BrandLogo from './BrandLogo.tsx';
import { ArrowRight, ShieldCheck, Heart, Globe, Lock } from 'lucide-react';

export default function Footer() {
  const { openGetStarted, openBookDemo, navigateTo, openCookieSettings } = useModal();

  const handleNavigate = (path: string) => {
    navigateTo(path);
  };

  return (
    <footer className="relative overflow-hidden bg-neutral-900 bg-dark-glow text-neutral-300 pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Footer Pre-CTA Banner */}
        <div className="relative rounded-2xl bg-neutral-800/80 border border-neutral-700/80 p-8 sm:p-12 mb-16 overflow-hidden">
          <div aria-hidden="true" className="accent-hairline absolute inset-x-8 top-0 h-px pointer-events-none" />
          <div aria-hidden="true" className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl animate-glow-slow pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                Built specifically for NGOs and charities
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Ready to modernize your fundraising?
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Bring donations, sponsorships, memberships, and donor relationships together into one connected platform. Less administrative work. Stronger donor relationships. More impact.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => openBookDemo()}
                className="px-5 py-2.5 bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg text-sm font-semibold transition-colors cursor-pointer"
              >
                Book a Demo
              </button>
              <button
                onClick={() => openGetStarted()}
                className="btn-gradient-light inline-flex items-center gap-2 px-6 py-2.5 text-neutral-950 font-bold rounded-lg cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-12 border-b border-neutral-800 text-xs">
          {/* Col 1: Brand & Positioning */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 space-y-4">
            <button
              onClick={() => handleNavigate('/')}
              className="inline-flex cursor-pointer rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
              aria-label="Donorfit — go to homepage"
            >
              <BrandLogo onDark className="h-8 sm:h-9" alt="Donorfit" />
            </button>
            <p className="text-neutral-400 leading-relaxed">
              Fundraising technology built specifically for non-governmental organizations, registered charities, and foundations across Europe and worldwide.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>EU Sovereign Data Hosting · GDPR Compliant</span>
            </div>
          </div>

          {/* Col 2: Products */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">Product</div>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNavigate('/')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Donorfit Platform
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('/pricing')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('/sponsorship')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Sponsorship
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('/orphan-sponsorship')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Orphan Sponsorship
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('/money-pool')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Money Pool
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('/membership')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Membership
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('/donations')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Donations
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('/recurring-giving')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Recurring Giving
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('/donor-management')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Donor Management
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('/reporting-and-insights')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Reporting & Insights
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Solutions */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">Solutions</div>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNavigate('/solutions/ngos')} className="hover:text-white transition-colors cursor-pointer text-left">
                  For NGOs
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('/solutions/charities')} className="hover:text-white transition-colors cursor-pointer text-left">
                  For Charities
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('/solutions/foundations')} className="hover:text-white transition-colors cursor-pointer text-left">
                  For Foundations
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('/solutions/sponsorship-organizations')} className="hover:text-white transition-colors cursor-pointer text-left">
                  For Sponsorship Orgs
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('/solutions/membership-organizations')} className="hover:text-white transition-colors cursor-pointer text-left">
                  For Membership Orgs
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('/solutions/international-organizations')} className="hover:text-white transition-colors cursor-pointer text-left">
                  For International Orgs
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources & Company */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">Resources</div>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNavigate('/blog')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Blog & Resource Center
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('/guides')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Guides & Toolkits
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('/case-studies')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('/faqs')} className="hover:text-white transition-colors cursor-pointer text-left">
                  FAQs
                </button>
              </li>
              <li className="pt-2 text-xs font-bold uppercase tracking-wider text-white">Company</li>
              <li>
                <button onClick={() => handleNavigate('/about')} className="hover:text-white transition-colors cursor-pointer text-left">
                  About Donorfit
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('/contact')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('/partners')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Partners
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Trust and Legal */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">Trust & Legal</div>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNavigate('/security')} className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5 font-medium text-emerald-400">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Security & Trust</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('/privacy-policy')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('/cookie-policy')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Cookie Policy
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('/terms')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('/impressum')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Impressum / Legal Notice
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('/accessibility')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Accessibility Statement
                </button>
              </li>
              <li className="pt-2">
                <button
                  type="button"
                  onClick={openCookieSettings}
                  className="text-neutral-400 hover:text-white underline underline-offset-2 transition-colors cursor-pointer"
                >
                  Cookie Preferences
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © {new Date().getFullYear()} Donorfit. All rights reserved. Technology + Humanity + Trust.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span>Primary Focus: European Union & International Nonprofits</span>
            <span>·</span>
            <span>Headquarters: Frankfurt am Main, Germany</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

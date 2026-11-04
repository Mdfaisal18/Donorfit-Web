import React, { useState } from 'react';
import { useModal } from '../context/ModalContext.tsx';
import ProductMockup from '../components/ProductMockup.tsx';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Lock, 
  Globe2, 
  TrendingUp, 
  Layers, 
  Heart, 
  Users, 
  Coins, 
  Calendar, 
  BarChart3, 
  ChevronDown,
  Sparkles,
  HelpCircle,
  Clock,
  ArrowUpRight,
  Sliders,
  Award,
  Zap,
  Check,
  Building2,
  RefreshCw
} from 'lucide-react';
import { BLOG_POSTS, CASE_STUDIES, FAQS_DATA } from '../data/content.ts';

type ShowcaseTab = 'donations' | 'sponsorship' | 'moneypool' | 'membership' | 'reporting';

export default function HomePage() {
  const { openBookDemo, openGetStarted, navigateTo } = useModal();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeShowcase, setActiveShowcase] = useState<ShowcaseTab>('donations');
  
  // Interactive Non-Profit Savings Estimator
  const [donorCount, setDonorCount] = useState<number>(1500);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  // Calculations for interactive savings estimator
  const adminHoursSaved = Math.round(donorCount * 0.024);
  const recoveredRevenue = Math.round(donorCount * 3.8);

  return (
    <div className="space-y-24 sm:space-y-32 lg:space-y-36 pb-24">
      
      {/* 1. HERO SECTION: BOLD, LAYERED & VISUALLY STUNNING */}
      <section className="relative isolate pt-10 sm:pt-16 lg:pt-20 overflow-hidden bg-subtle-grid">
        <div aria-hidden="true" className="absolute inset-0 bg-hero-glow pointer-events-none -z-10"></div>
        {/* Ambient atmospheric gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-emerald-400/15 via-teal-300/10 to-transparent blur-3xl pointer-events-none -z-10 animate-glow-slow"></div>
        <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-emerald-500/10 blur-2xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-12 sm:mb-16">
            
            {/* Interactive Hero Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-emerald-200/90 shadow-xs backdrop-blur-md text-emerald-800 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Fundraising Technology Built Specifically for Nonprofits</span>
              <span className="hidden sm:inline text-neutral-300">|</span>
              <span className="hidden sm:inline text-neutral-600 font-normal">European SEPA & GDPR Compliant</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-950 font-display leading-[1.06] text-balance">
              Fundraising technology built for <span className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent">nonprofits</span>.
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto text-balance">
              Manage donations, sponsorships, memberships and donor relationships in one connected platform built for NGOs and charities.
            </p>

            {/* Emotional Positioning Pill Strip */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-2 px-4 rounded-2xl bg-neutral-100/90 border border-neutral-200 text-xs sm:text-sm text-neutral-800 font-medium">
              <span className="flex items-center gap-1.5 text-emerald-800 font-bold">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3]" /> Less administrative work.
              </span>
              <span className="text-neutral-300 hidden sm:inline">·</span>
              <span className="flex items-center gap-1.5 text-neutral-900 font-bold">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3]" /> Stronger donor relationships.
              </span>
              <span className="text-neutral-300 hidden sm:inline">·</span>
              <span className="flex items-center gap-1.5 text-neutral-950 font-bold">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3]" /> More impact.
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => openGetStarted()}
                className="btn-gradient inline-flex items-center gap-2.5 px-8 py-4 font-bold text-sm sm:text-base rounded-xl cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => openBookDemo()}
                className="px-7 py-4 bg-white hover:bg-neutral-50 text-neutral-900 font-semibold text-sm sm:text-base rounded-xl border border-neutral-300/90 shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                Book a Demo
              </button>
            </div>

            {/* Trust Markers */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs text-neutral-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>EU Sovereign Hosting (Frankfurt)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Automated Tax Certificates</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-emerald-600" />
                <span>100% Data Portability (Zero Lock-In)</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Composition: Real SaaS Headquarters + Live Analytics Overlay */}
          <div className="relative max-w-6xl mx-auto mt-6">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-200/90 shadow-2xl bg-neutral-900">
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-950 text-white border-b border-neutral-800 text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <span className="text-[11px] tabular-nums text-neutral-400 pl-3">donorfit.com/platform/mission-hub</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-emerald-400 font-medium">European Hub · Real-Time Sync</span>
                </div>
              </div>

              {/* Composition Image */}
              <div className="relative">
                <img
                  src="/src/assets/images/saas_hero_fundraising_platform_1793682092168.jpg"
                  alt="Modern European nonprofit leadership team analyzing live fundraising analytics display"
                  className="w-full h-80 sm:h-120 object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient Scrim for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent"></div>

                {/* Floating Glassmorphic Metric Cards */}
                <div className="absolute bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  <div className="p-4 rounded-xl bg-neutral-900/90 backdrop-blur-md border border-neutral-700/80 text-white shadow-xl">
                    <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider block">Predictable Giving</span>
                    <div className="text-xl sm:text-2xl font-bold tabular-nums mt-1 text-emerald-400">€248,500 / mo</div>
                    <span className="text-[11px] text-neutral-300 mt-1 block">+18.4% recurring retention</span>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-900/90 backdrop-blur-md border border-neutral-700/80 text-white shadow-xl">
                    <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider block">Active Beneficiaries</span>
                    <div className="text-xl sm:text-2xl font-bold tabular-nums mt-1 text-blue-400">3,842 Children</div>
                    <span className="text-[11px] text-neutral-300 mt-1 block">Supported across 18 missions</span>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-900/90 backdrop-blur-md border border-neutral-700/80 text-white shadow-xl hidden sm:block">
                    <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider block">Admin Time Returned</span>
                    <div className="text-xl sm:text-2xl font-bold tabular-nums mt-1 text-purple-400">65% Saved</div>
                    <span className="text-[11px] text-neutral-300 mt-1 block">Zero manual CSV reconciliation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LOGO / ECOSYSTEM TRUST STRIP */}
      <section className="border-y border-neutral-200/80 bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider block">Native European Ecosystem</span>
              <span className="text-sm font-bold text-neutral-900 font-display">Trusted Banking & Non-Profit Integrations</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-semibold text-neutral-700">
              <span className="px-3.5 py-2 rounded-xl bg-neutral-50 border border-neutral-200/80 hover:border-neutral-300 transition-colors">
                SEPA Direct Debit (EPC pain.008)
              </span>
              <span className="px-3.5 py-2 rounded-xl bg-neutral-50 border border-neutral-200/80 hover:border-neutral-300 transition-colors">
                Stripe & Apple Pay Non-Profit
              </span>
              <span className="px-3.5 py-2 rounded-xl bg-neutral-50 border border-neutral-200/80 hover:border-neutral-300 transition-colors">
                PayPal Giving Fund
              </span>
              <span className="px-3.5 py-2 rounded-xl bg-neutral-50 border border-neutral-200/80 hover:border-neutral-300 transition-colors">
                DATEV & German Accounting Export
              </span>
              <span className="px-3.5 py-2 rounded-xl bg-neutral-50 border border-neutral-200/80 hover:border-neutral-300 transition-colors">
                Salesforce Non-Profit Cloud
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE PRODUCT SHOWCASE (STRIPE / LINEAR STYLE INTERACTIVE TABS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
            Connected Platform Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 font-display text-balance">
            Everything your fundraising operation needs, unified.
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed">
            Click through our dedicated modules to see how Donorfit simplifies administration while multiplying supporter generosity.
          </p>
        </div>

        {/* Interactive Segmented Switcher */}
        <div className="flex items-center justify-center mb-8 overflow-x-auto pb-2">
          <div className="flex p-1.5 bg-neutral-200/80 rounded-2xl gap-1 shrink-0">
            <button
              onClick={() => setActiveShowcase('donations')}
              className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeShowcase === 'donations'
                  ? 'bg-white text-neutral-950 shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Online Giving & SEPA
            </button>
            <button
              onClick={() => setActiveShowcase('sponsorship')}
              className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeShowcase === 'sponsorship'
                  ? 'bg-white text-neutral-950 shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Child & Orphan Sponsorship
            </button>
            <button
              onClick={() => setActiveShowcase('moneypool')}
              className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeShowcase === 'moneypool'
                  ? 'bg-white text-neutral-950 shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Money Pool & Groups
            </button>
            <button
              onClick={() => setActiveShowcase('membership')}
              className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeShowcase === 'membership'
                  ? 'bg-white text-neutral-950 shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Membership Dues
            </button>
            <button
              onClick={() => setActiveShowcase('reporting')}
              className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeShowcase === 'reporting'
                  ? 'bg-white text-neutral-950 shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Cohort CRM & Analytics
            </button>
          </div>
        </div>

        {/* Dynamic Showcase Panel */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-neutral-200/90 shadow-xl">
          {activeShowcase === 'donations' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  Frictionless Checkout
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 font-display">
                  Increase donation completion by 34% with native European checkout.
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Eliminate outdated multi-page forms. Donorfit provides clean 2-step checkout with instant SEPA Direct Debit, Apple Pay, cards, and automated German/French/UK tax receipting.
                </p>
                <ul className="space-y-2.5 text-xs text-neutral-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>82% of supporters voluntarily cover payment transaction fees.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Instant German Geldzuwendungsbestätigung and French Reçu Fiscal generation.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Embed into WordPress, Webflow, Squarespace, or custom React apps in 5 minutes.</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <button
                    onClick={() => navigateTo('/donations')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
                  >
                    <span>Read full Donations specifications</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="lg:col-span-6">
                <ProductMockup type="donations" />
              </div>
            </div>
          )}

          {activeShowcase === 'sponsorship' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                  Dignified Humanitarian Care
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 font-display">
                  Sponsorship management that protects child dignity and automates recurring care.
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Manage hundreds or thousands of child sponsorships with strict safeguarding, role-based caseworker permissions, and automated SEPA monthly debits that ensure schooling is never interrupted.
                </p>
                <ul className="space-y-2.5 text-xs text-neutral-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Encrypted beneficiary profiles compliant with international child protection standards.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Digital update portal for verified school report cards and seasonal greetings.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>88% average multi-year sponsor retention achieved.</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <button
                    onClick={() => navigateTo('/orphan-sponsorship')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800"
                  >
                    <span>Read full Orphan & Child Sponsorship specifications</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="lg:col-span-6">
                <ProductMockup type="sponsorship" />
              </div>
            </div>
          )}

          {activeShowcase === 'moneypool' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                  Collective Momentum
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 font-display">
                  Empower grassroots communities to rally together around shared goals.
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Enable volunteer groups, mosques, churches, and alumni to crowdfund for specific water wells, emergency food packages, or school renovations with live progress and zero escrow risk.
                </p>
                <ul className="space-y-2.5 text-xs text-neutral-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>100% direct charity settlement into the NGO’s verified bank account.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Public celebratory contributor wall with optional anonymous dedication tags.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Each contributor receives an individual compliant tax deduction certificate.</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <button
                    onClick={() => navigateTo('/money-pool')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800"
                  >
                    <span>Read full Money Pool specifications</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="lg:col-span-6">
                <ProductMockup type="moneypool" />
              </div>
            </div>
          )}

          {activeShowcase === 'membership' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold text-purple-700 uppercase tracking-wider">
                  Automated Association Operations
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 font-display">
                  Stop chasing annual dues. Automate renewals and assembly voter rolls.
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Cut late dues by up to 78%. Donorfit handles annual SEPA direct debits, tiered membership plans (student, institutional, patron), and produces certified voter roll call reports with one click.
                </p>
                <ul className="space-y-2.5 text-xs text-neutral-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>Automated SEPA B2C/B2B pre-notifications and bank file exports.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>Self-service member portal to update IBANs and download annual fee certificates.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>Real-time assembly lists of members in good standing for statutory meetings.</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <button
                    onClick={() => navigateTo('/membership')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 hover:text-purple-800"
                  >
                    <span>Read full Membership specifications</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="lg:col-span-6">
                <ProductMockup type="membership" />
              </div>
            </div>
          )}

          {activeShowcase === 'reporting' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  Non-Profit Intelligence
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 font-display">
                  Cohort retention curves and restricted fund ledgers ready for board review.
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Understand donor lifetime value (LTV) and multi-year retention without hiring external data consultants. Generate clean statutory ledgers separating unrestricted gifts from restricted project endowments.
                </p>
                <ul className="space-y-2.5 text-xs text-neutral-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>1-click board brief generation with visual impact charts and retention curves.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Audit-compliant CSV & DATEV export formats for external financial auditors.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Automated dunning logs showing recovered recurring donor pledges.</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <button
                    onClick={() => navigateTo('/reporting-and-insights')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
                  >
                    <span>Read full Reporting & CRM specifications</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="lg:col-span-6">
                <ProductMockup type="reporting" />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. ASYMMETRIC BENTO GRID: HUMANITY + TECHNOLOGY IN ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
            Operational Transformation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 font-display text-balance">
            Designed for the humanitarian frontlines.
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed">
            See how Donorfit bridges the gap between field programs, community care, and digital fundraising.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Bento Item 1: Community Food Aid (Col 7) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-neutral-200/90 bg-white shadow-xs flex flex-col justify-between group">
            <div className="relative h-64 sm:h-72 overflow-hidden">
              <img
                src="/src/assets/images/community_food_relief_aid_1793682091868.jpg"
                alt="NGO volunteers and community members packaging fresh produce hampers in sunny community center"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-neutral-900 border border-neutral-200/80 shadow-xs">
                  Community Relief Operations
                </span>
              </div>
            </div>
            <div className="p-6 sm:p-8 space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 font-display">
                Grassroots coordination without administrative bottlenecks
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Empower regional coordinators to register relief food drives and community appeals with instant online giving links and QR codes, freeing staff from manual ledger entry.
              </p>
              <div className="pt-2 flex items-center justify-between border-t border-neutral-100">
                <span className="text-xs text-neutral-500">Automated Contributor Receipts</span>
                <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                  100% Tax Compliant <CheckCircle2 className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

          {/* Bento Item 2: Healthcare & Clinic Care (Col 5) */}
          <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-neutral-200/90 bg-white shadow-xs flex flex-col justify-between group">
            <div className="relative h-64 sm:h-72 overflow-hidden">
              <img
                src="/src/assets/images/medical_aid_clinic_care_1793682092589.jpg"
                alt="Compassionate healthcare doctor examining a smiling healthy child in medical clinic"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-neutral-900 border border-neutral-200/80 shadow-xs">
                  Healthcare & Medical Aid
                </span>
              </div>
            </div>
            <div className="p-6 sm:p-8 space-y-3">
              <h3 className="text-xl font-bold text-neutral-950 font-display">
                Ethical Safeguarding & Dignity First
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Beneficiary records and medical wellness milestones are safeguarded with strict role-based access, ensuring sensitive community data is never compromised.
              </p>
              <div className="pt-2 border-t border-neutral-100 text-xs text-neutral-500">
                <span>Article 9 GDPR Sensitive Category Safeguards</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. INTERACTIVE NON-PROFIT SAVINGS CALCULATOR */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900 bg-dark-glow text-white border border-neutral-800 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 space-y-8">
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                Impact & Administrative Savings Calculator
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display">
                Estimate the operational hours and funds your NGO will recover.
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300">
                Adjust the slider to match your current active donor and member community:
              </p>
            </div>

            {/* Slider */}
            <div className="space-y-4 p-6 rounded-2xl bg-neutral-800/90 border border-neutral-700">
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-neutral-200">Active Donors & Members:</span>
                <span className="text-2xl font-extrabold text-emerald-400 tabular-nums">{donorCount.toLocaleString()} Donors</span>
              </div>
              <input
                type="range"
                min="200"
                max="10000"
                step="100"
                value={donorCount}
                onChange={(e) => setDonorCount(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer h-2 bg-neutral-700 rounded-lg"
              />
              <div className="flex justify-between text-xs text-neutral-400 tabular-nums">
                <span>200 Donors (Emerging NGO)</span>
                <span>5,000 Donors (Established Charity)</span>
                <span>10,000+ Donors (International Aid)</span>
              </div>
            </div>

            {/* Calculated Output Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-neutral-800/60 border border-neutral-700/80 space-y-1">
                <span className="text-xs text-neutral-400 block">Estimated Admin Hours Saved Annually:</span>
                <div className="text-3xl sm:text-4xl font-extrabold tabular-nums text-emerald-400 tabular-nums">
                  {adminHoursSaved * 12} Hours
                </div>
                <p className="text-xs text-neutral-300 pt-1">
                  ~{adminHoursSaved} hours per month previously spent on manual CSV reconciliations and tax certificate PDFs.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-800/60 border border-neutral-700/80 space-y-1">
                <span className="text-xs text-neutral-400 block">Estimated Involuntary Churn Recovered:</span>
                <div className="text-3xl sm:text-4xl font-extrabold tabular-nums text-emerald-400 tabular-nums">
                  €{recoveredRevenue.toLocaleString()} / mo
                </div>
                <p className="text-xs text-neutral-300 pt-1">
                  Retained through smart SEPA retry schedules and automated card account refresh algorithms.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-800 text-xs">
              <span className="text-neutral-400">Ready to put these savings toward your mission?</span>
              <button
                onClick={() => openBookDemo()}
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-bold rounded-xl transition-colors cursor-pointer"
              >
                Schedule a 20-Min Setup Walkthrough
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMPARATIVE FEATURE MATRIX: LEGACY TOOLS VS DONORFIT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
            Clear Advantage
          </span>
          <h2 className="text-3xl font-extrabold text-neutral-950 font-display">
            How Donorfit compares to legacy methods
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed">
            Eliminate the friction of fragmented software and manual spreadsheets.
          </p>
        </div>

        <div className="rounded-3xl border border-neutral-200 bg-white overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-neutral-200 bg-neutral-50 text-xs font-bold text-neutral-700 py-3.5 px-6">
            <div className="md:col-span-5">Fundraising & Operational Capability</div>
            <div className="md:col-span-3 text-rose-700">Fragmented Tools & Spreadsheets</div>
            <div className="md:col-span-4 text-emerald-700">Donorfit Connected Platform</div>
          </div>

          <div className="divide-y divide-neutral-100 text-xs">
            <div className="grid grid-cols-1 md:grid-cols-12 py-4 px-6 items-center gap-2">
              <div className="md:col-span-5 font-semibold text-neutral-900">European Direct Debit (SEPA Mandates)</div>
              <div className="md:col-span-3 text-neutral-500">Manual bank file exports, high churn rates</div>
              <div className="md:col-span-4 font-bold text-emerald-700 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" /> Automated XML CAMT / pain.008 + retries
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 py-4 px-6 items-center gap-2 bg-neutral-50/40">
              <div className="md:col-span-5 font-semibold text-neutral-900">Charitable Tax Deduction Certificates</div>
              <div className="md:col-span-3 text-neutral-500">Weeks of manual Word / PDF retyping</div>
              <div className="md:col-span-4 font-bold text-emerald-700 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" /> Instant compliant German / EU certificates
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 py-4 px-6 items-center gap-2">
              <div className="md:col-span-5 font-semibold text-neutral-900">Child & Orphan Safeguarding (GDPR)</div>
              <div className="md:col-span-3 text-neutral-500">Shared unencrypted Excel sheets across inboxes</div>
              <div className="md:col-span-4 font-bold text-emerald-700 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" /> Role-based access with encrypted dossiers
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 py-4 px-6 items-center gap-2 bg-neutral-50/40">
              <div className="md:col-span-5 font-semibold text-neutral-900">Membership Dues Collection</div>
              <div className="md:col-span-3 text-neutral-500">Paper invoices, high delinquency rates</div>
              <div className="md:col-span-4 font-bold text-emerald-700 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" /> Automated annual renewals + assembly rolls
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 py-4 px-6 items-center gap-2">
              <div className="md:col-span-5 font-semibold text-neutral-900">Data Ownership & Exportability</div>
              <div className="md:col-span-3 text-neutral-500">Vendor lock-in, proprietary formats</div>
              <div className="md:col-span-4 font-bold text-emerald-700 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" /> 100% open CSV / JSON export anytime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. COMMUNITY & DONOR STEWARDSHIP: EVENING RECEPTION SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-neutral-200 shadow-xl">
            <img
              src="/src/assets/images/nonprofit_gala_fundraising_1793682093614.jpg"
              alt="Inspiring charity fundraising reception with philanthropic leaders and supporters conversing warmly"
              className="w-full h-96 object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
              <Award className="w-3.5 h-3.5 text-emerald-600" />
              <span>Philanthropic Stewardship</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 font-display leading-tight text-balance">
              Nurture lifelong champions, from first gift to major benefactors.
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Donorfit tracks complete supporter histories across every campaign, gala, and monthly commitment. Cultivate major philanthropists with discrete communication notes while automating grateful recognition for grassroots donors.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-neutral-100 border border-neutral-200/80">
                <div className="text-xl font-extrabold tabular-nums text-neutral-900">5.4x</div>
                <div className="text-xs text-neutral-600 mt-0.5">Higher lifetime value from recurring champions</div>
              </div>
              <div className="p-4 rounded-xl bg-neutral-100 border border-neutral-200/80">
                <div className="text-xl font-extrabold tabular-nums text-neutral-900">0%</div>
                <div className="text-xs text-neutral-600 mt-0.5">Disjointed records across spreadsheets</div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => navigateTo('/donor-management')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer"
              >
                <span>Explore Donor CRM & Profiles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CASE STUDY HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
              Proven European Outcomes
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-950 font-display">
              Real results for European nonprofit teams.
            </h2>
          </div>
          <button
            onClick={() => navigateTo('/case-studies')}
            className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer shrink-0"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((cs) => (
            <div key={cs.id} className="p-8 rounded-3xl bg-white border border-neutral-200/90 shadow-sm flex flex-col justify-between space-y-6 hover-lift">
              <div className="space-y-3">
                <div className="text-xs text-neutral-500 font-medium">
                  {cs.organization} · {cs.location}
                </div>
                <h3 className="text-base font-bold text-neutral-900 font-display leading-snug">
                  {cs.headline}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {cs.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {cs.results.slice(0, 2).map((r, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-200/60">
                      <div className="text-base font-extrabold text-neutral-950 tabular-nums tabular-nums">{r.metric}</div>
                      <div className="text-[11px] text-neutral-500">{r.label}</div>
                    </div>
                  ))}
                </div>
                {cs.quote && (
                  <blockquote className="text-xs italic text-neutral-700 border-l-2 border-emerald-500 pl-3 py-0.5">
                    &ldquo;{cs.quote.text}&rdquo;
                    <span className="block not-italic text-[11px] text-neutral-500 mt-1">— {cs.quote.author}, {cs.quote.role}</span>
                  </blockquote>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. EUROPEAN DATA SOVEREIGNTY & SECURITY BANNER */}
      <section className="bg-neutral-950 text-white py-20 rounded-3xl mx-4 sm:mx-6 lg:mx-8 border border-neutral-800 shadow-2xl relative overflow-hidden bg-dark-glow-grid">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 shadow-inner">
            <Lock className="w-7 h-7" />
          </div>
          <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">
            European Data Sovereignty & GDPR Compliance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display max-w-2xl mx-auto text-balance">
            Your supporters entrust you with their goodwill. We safeguard that trust.
          </h2>
          <p className="text-sm text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            All production databases and application clusters are hosted exclusively within the European Union (Frankfurt & Dublin) in ISO/IEC 27001-certified facilities. Complete Article 28 DPA execution and zero unauthorized data transfers.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigateTo('/security')}
              className="px-6 py-3 bg-white hover:bg-neutral-100 text-neutral-950 font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              Read Full Security Architecture & DPA
            </button>
          </div>
        </div>
      </section>

      {/* 10. LATEST GUIDES & RESOURCES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
              Resource Center
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-950 font-display">
              Practical guides for modern fundraising teams.
            </h2>
          </div>
          <button
            onClick={() => navigateTo('/blog')}
            className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer shrink-0"
          >
            <span>Visit Knowledge Base</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.slice(0, 3).map((post) => (
            <article key={post.slug} className="p-8 rounded-3xl bg-white border border-neutral-200/90 shadow-xs flex flex-col justify-between space-y-4 group hover-lift">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <span className="font-semibold text-emerald-700">{post.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readingTime}</span>
                </div>
                <h3 className="text-base font-bold text-neutral-950 font-display group-hover:text-emerald-700 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs text-neutral-500">{post.publishedAt}</span>
                <button
                  onClick={() => navigateTo(`/blog/${post.slug}`)}
                  className="text-xs font-semibold text-neutral-900 group-hover:text-emerald-700 flex items-center gap-1 cursor-pointer"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 11. FAQS ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
            Clear Answers
          </span>
          <h2 className="text-3xl font-extrabold text-neutral-950 font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-neutral-600">
            Have questions about SEPA mandates, data migration, or European compliance?
          </p>
        </div>

        <div className="space-y-3">
          {FAQS_DATA.slice(0, 6).map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx} 
                className="rounded-2xl border border-neutral-200/90 bg-white overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left font-bold text-sm sm:text-base text-neutral-900 font-display flex items-center justify-between gap-4 hover:bg-neutral-50/50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-neutral-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center pt-8">
          <button
            onClick={() => navigateTo('/faqs')}
            className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 underline underline-offset-4 cursor-pointer"
          >
            Explore the complete FAQ directory →
          </button>
        </div>
      </section>

    </div>
  );
}

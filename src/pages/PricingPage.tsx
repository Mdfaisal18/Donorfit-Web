import React, { useId, useState } from 'react';
import { useModal } from '../context/ModalContext.tsx';
import { APP_SIGNUP_URL } from '../data/links.ts';
import {
  ArrowRight,
  BadgePercent,
  BellRing,
  Check,
  ChevronDown,
  CreditCard,
  Database,
  Globe2,
  GraduationCap,
  HandHeart,
  IdCard,
  Layers,
  MessageSquare,
  Moon,
  Receipt,
  RefreshCcw,
  Repeat,
  TrendingUp,
  Zap,
  type LucideIcon,
} from 'lucide-react';

/* ------------------------------------------------------------------ *
 * Content source: https://donorfit.com/en/pricing-plan/
 * Plan features, add-on names, stats and footnotes use the reference
 * wording. Add-ons link to an existing page only where one exists.
 * ------------------------------------------------------------------ */

const PLAN_FEATURES: { text: string; footnote?: boolean }[] = [
  { text: 'No platform fee' },
  { text: 'No transaction fee' },
  { text: 'Access basic reports and dashboards' },
  { text: 'Embedded Donation Forms with customisation' },
  { text: 'Multiple payment methods like PayPal, Credit Card, Google Pay, Apple Pay, SEPA, Bancontact, EPS, iDEAL' },
  { text: 'Create touchpoints for all your channels' },
  { text: 'Generate QR codes to load donation box' },
  { text: 'Basic email functionality for system notifications (on/off)' },
  { text: 'Predefined donation tax receipt templates for automatic generation' },
  { text: 'Flexible Cover the Fee model', footnote: true },
  { text: 'Access to API + webhooks for real-time integration workflows' },
  { text: 'Automated reconciliation possibilities' },
  { text: 'Custom email provider' },
  { text: 'Import functionality' },
  { text: 'Dedicated donor portal' },
  { text: 'Multiple team users' },
  { text: 'Internal team chat support' },
  { text: 'Integration with Brevo, Mailchimp for newsletters' },
  { text: 'WhatsApp and SMS communication' },
  { text: '5 languages – 39 currencies' },
];

interface AddOn {
  name: string;
  description: string;
  icon: LucideIcon;
  href: string | null;
}

const ADD_ONS: AddOn[] = [
  { name: 'CRM', description: 'Centralised donor records, interaction history and segmentation.', icon: Database, href: '/donor-management' },
  { name: 'Recurring Subscription', description: 'Monthly and annual giving with automated collection.', icon: Repeat, href: '/recurring-giving' },
  { name: 'Sponsorship', description: 'Manage sponsors, beneficiaries and progress updates.', icon: HandHeart, href: '/sponsorship' },
  { name: 'Membership', description: 'Member registration, dues collection and renewals.', icon: IdCard, href: '/membership' },
  { name: 'School', description: 'Fundraising and fee collection for school projects.', icon: GraduationCap, href: null },
  { name: 'Qurbani', description: 'Seasonal Qurbani giving campaigns and allocation.', icon: Moon, href: null },
];

const STATS = [
  { value: '1k+', label: 'Active Members' },
  { value: '€1M+', label: 'Transaction volume' },
  { value: '1k+', label: 'Total active user base' },
];

const BILLING_FEATURES: { label: string; icon: LucideIcon }[] = [
  { label: 'Automated Billing', icon: Zap },
  { label: 'Easy Payment Processing', icon: CreditCard },
  { label: 'Smart Dunning', icon: BellRing },
  { label: 'Invoicing', icon: Receipt },
  { label: 'Subscription Management', icon: Layers },
  { label: 'Recurring Billing', icon: RefreshCcw },
  { label: 'Scalability', icon: TrendingUp },
  { label: 'Global Compliance', icon: Globe2 },
];

const PRICING_FAQS = [
  {
    q: 'What is Donorfit and how can it benefit us?',
    a: 'Donorfit is a fundraising platform that helps nonprofits collect donations, manage donors, track interactions and personalise outreach — so you can increase giving and keep supporters engaged for longer.',
  },
  {
    q: 'How easy is it to set up and use Donorfit?',
    a: 'Getting started takes three steps: configure your cause settings, connect a payment gateway, and add the donation box to your website.',
  },
  {
    q: 'What are the payment options available for donation in Donorfit?',
    a: 'Donorfit supports more than 15 donation payment methods through payment gateways such as Stripe, GoCardless, Mollie and PayPal.',
  },
  {
    q: 'Can I accept international donations with Donorfit?',
    a: 'Yes. Through the same payment gateways you can accept contributions in more than 135 currencies.',
  },
];

/* ------------------------------------------------------------------ */

function SignupLink({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <a href={APP_SIGNUP_URL} className={`btn-gradient inline-flex items-center justify-center gap-2 font-bold rounded-xl ${className}`}>
      {children}
      <ArrowRight className="w-4 h-4" aria-hidden="true" />
    </a>
  );
}

export default function PricingPage() {
  const { openBookDemo, navigateTo } = useModal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const uid = useId();

  const goContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigateTo('/contact');
  };

  return (
    <div className="space-y-24 sm:space-y-32 lg:space-y-36 pb-24">
      {/* 1. HERO */}
      <section className="pt-12 sm:pt-20 lg:pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
            <BadgePercent className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
            <span>Pricing</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 font-display leading-[1.08]">
            More Donations for Your Mission.{' '}
            <span className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Less Spent on Fees.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed">
            Everything your nonprofit needs to collect donations, manage donors, and simplify fundraising — all in one place.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            {['0% platform fee', '0% transaction fee'].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-neutral-200 shadow-xs text-sm font-bold text-neutral-900"
              >
                <Check className="w-4 h-4 text-emerald-600 stroke-[3]" aria-hidden="true" />
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <SignupLink className="px-8 py-4 text-sm sm:text-base">Start Fundraising For Free</SignupLink>
            <button
              type="button"
              onClick={() => openBookDemo()}
              className="px-7 py-4 bg-white hover:bg-neutral-50 text-neutral-900 font-semibold text-sm sm:text-base rounded-xl border border-neutral-300/90 shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      {/* 2. PLAN */}
      <section aria-labelledby={`${uid}-plan`} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Simple, transparent pricing</span>
          <h2 id={`${uid}-plan`} className="text-3xl sm:text-4xl font-extrabold text-neutral-950 font-display">
            Complete Fundraising Solutions to Scale With Any Sized Organizations.
          </h2>
        </div>

        <div className="relative rounded-3xl bg-white border border-emerald-200 shadow-xl shadow-neutral-900/5 overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0 bg-hero-glow pointer-events-none" />
          <div aria-hidden="true" className="accent-hairline absolute inset-x-10 top-0 h-px" />

          <div className="relative grid lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
            {/* Price column */}
            <div className="p-8 sm:p-10 lg:border-r border-b lg:border-b-0 border-neutral-200/80 flex flex-col gap-6">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold ring-1 ring-emerald-200">
                  Zero fees
                </span>
                <h3 className="text-xl font-bold text-neutral-950 font-display">
                  All-in-one fundraising platform with zero fees
                </h3>
              </div>

              <div className="flex items-end gap-2">
                <span className="text-6xl font-extrabold tracking-tight text-neutral-950 font-display tabular-nums leading-none">€0</span>
                <span className="text-sm font-medium text-neutral-500 pb-1.5">/ month</span>
              </div>

              <SignupLink className="w-full px-6 py-3.5 text-sm">Get Started Now</SignupLink>

              <div className="space-y-2 text-xs text-neutral-600 leading-relaxed border-t border-neutral-200/80 pt-5 mt-auto">
                <p>*Option to let donors cover transaction fees so your organization receives the full amount.</p>
                <p>
                  *To get the exclusive features{' '}
                  <a href="/contact" onClick={goContact} className="font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-800">
                    contact us
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="p-8 sm:p-10">
              <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-6">Everything included</h3>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3.5">
                {PLAN_FEATURES.map((f) => (
                  <li key={f.text} className="flex items-start gap-3 text-sm text-neutral-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-200">
                      <Check className="w-3 h-3 text-emerald-700 stroke-[3]" aria-hidden="true" />
                    </span>
                    <span>
                      {f.text}
                      {f.footnote && <span aria-label="see note">*</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ADD-ONS */}
      <section aria-labelledby={`${uid}-addons`} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Add-ons</span>
            <h2 id={`${uid}-addons`} className="text-3xl sm:text-4xl font-extrabold text-neutral-950 font-display">
              Extend your platform as you grow.
            </h2>
            <p className="text-base text-neutral-600 leading-relaxed">
              Add specialised modules to the free platform whenever your organisation needs them. Add-ons are purchased separately.
            </p>
          </div>
          <a
            href="/contact"
            onClick={goContact}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800 shrink-0"
          >
            Ask about add-on pricing <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ADD_ONS.map((addon) => {
            const Icon = addon.icon;
            const body = (
              <>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <span className="block space-y-1.5">
                  <span className="flex items-center gap-2 text-lg font-bold text-neutral-950 font-display">
                    {addon.name}
                    {!addon.href && (
                      <span className="rounded-full bg-neutral-100 px-2 py-px text-[11px] leading-4 font-semibold uppercase tracking-wide text-neutral-600 ring-1 ring-neutral-200">
                        Add-on
                      </span>
                    )}
                  </span>
                  <span className="block text-sm text-neutral-600 leading-relaxed">{addon.description}</span>
                </span>
                {addon.href && (
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 group-hover:text-emerald-800">
                    Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                )}
              </>
            );
            const cardClass = 'group flex h-full flex-col gap-4 p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200 shadow-xs';
            const href = addon.href;
            return (
              <li key={addon.name}>
                {href ? (
                  <a
                    href={href}
                    onClick={(e) => {
                      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
                      e.preventDefault();
                      navigateTo(href);
                    }}
                    className={`${cardClass} hover-lift`}
                  >
                    {body}
                  </a>
                ) : (
                  <div className={cardClass}>{body}</div>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      {/* 4. STATS */}
      <section aria-label="Donorfit in numbers" className="bg-neutral-950 bg-dark-glow text-white py-16 sm:py-20 rounded-3xl mx-4 sm:mx-6 lg:mx-8 border border-neutral-800 shadow-2xl">
        <dl className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-3 gap-10 text-center">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col-reverse gap-2">
              <dt className="text-sm font-semibold text-neutral-300 uppercase tracking-wider">{s.label}</dt>
              <dd className="text-5xl sm:text-6xl font-extrabold font-display text-white tabular-nums tracking-tight">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 5. GET STARTED — BILLING FEATURES */}
      <section aria-labelledby={`${uid}-billing`} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Get started with Donorfit</span>
          <h2 id={`${uid}-billing`} className="text-3xl sm:text-4xl font-extrabold text-neutral-950 font-display">
            Expand your donors and grow.
          </h2>
        </div>
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {BILLING_FEATURES.map(({ label, icon: Icon }) => (
            <li key={label} className="hover-lift flex items-center gap-3 p-5 rounded-2xl bg-white border border-neutral-200 shadow-xs">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <Icon className="w-5 h-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-bold text-neutral-900">{label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 6. FAQ */}
      <section aria-labelledby={`${uid}-faq`} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">FAQ</span>
          <h2 id={`${uid}-faq`} className="text-3xl sm:text-4xl font-extrabold text-neutral-950 font-display">
            Frequently asked questions
          </h2>
        </div>
        <div className="space-y-3">
          {PRICING_FAQS.map((faq, i) => {
            const open = openFaq === i;
            const panelId = `${uid}-faq-${i}`;
            return (
              <div key={faq.q} className="rounded-xl border border-neutral-200/90 bg-white overflow-hidden">
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full p-5 text-left font-bold text-base text-neutral-900 font-display flex items-center justify-between gap-4 hover:bg-neutral-50/60 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-neutral-500 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>
                </h3>
                <div id={panelId} hidden={!open} className="px-5 pb-5 pt-1 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100">
                  <p className="pt-3">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-8 text-center text-sm text-neutral-600">
          More questions?{' '}
          <a
            href="/faqs"
            onClick={(e) => {
              if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
              e.preventDefault();
              navigateTo('/faqs');
            }}
            className="font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
          >
            Visit the full FAQ
          </a>
          .
        </p>
      </section>

      {/* 7. CLOSING CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative p-8 sm:p-12 rounded-3xl bg-neutral-900 bg-dark-glow text-white border border-neutral-800 shadow-2xl overflow-hidden text-center space-y-6">
          <div aria-hidden="true" className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <h2 className="relative text-3xl sm:text-4xl font-extrabold font-display text-balance">
            Keep more of every donation for your mission.
          </h2>
          <p className="relative text-base text-neutral-300 max-w-xl mx-auto leading-relaxed">
            No platform fee. No transaction fee. Start collecting donations today.
          </p>
          <div className="relative flex flex-wrap items-center justify-center gap-4 pt-2">
            <SignupLink className="px-8 py-4 text-sm sm:text-base">Start Fundraising For Free</SignupLink>
            <a
              href="/contact"
              onClick={goContact}
              className="inline-flex items-center gap-2 px-6 py-4 bg-neutral-700 hover:bg-neutral-600 text-white font-semibold text-sm sm:text-base rounded-xl transition-colors"
            >
              <MessageSquare className="w-4 h-4" aria-hidden="true" />
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

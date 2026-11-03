import React from 'react';
import { useModal } from '../context/ModalContext.tsx';
import { Handshake, CheckCircle2, ArrowRight, Building2, ShieldCheck, Globe } from 'lucide-react';

export default function PartnersPage() {
  const { navigateTo, openBookDemo } = useModal();

  const partnerTypes = [
    {
      title: 'Digital Non-Profit Agencies',
      description: 'Web development agencies and digital strategists implementing custom donation sites and campaign architectures for charities across Europe.',
      benefits: ['Dedicated sandbox environments', 'Direct technical escalation channel', 'Partner co-marketing opportunities']
    },
    {
      title: 'Fundraising Consultants',
      description: 'Independent fundraising advisors helping NGOs optimize recurring giving strategies, direct mail campaigns, and donor stewardship programs.',
      benefits: ['Comprehensive platform certifications', 'Client referral benefits', 'Strategy & cohort retention toolkits']
    },
    {
      title: 'Technology & CRM Integrators',
      description: 'Specialists connecting Donorfit with enterprise accounting ledgers (DATEV, SAP), CRM hubs (Salesforce Non-Profit Cloud), and marketing automation.',
      benefits: ['Open REST API and webhook access', 'Custom data schema support', 'Co-development advisory board']
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* Hero */}
      <section className="pt-12 sm:pt-20 lg:pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
            <Handshake className="w-3.5 h-3.5 text-emerald-600" />
            <span>Donorfit Partner Network</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 font-display leading-[1.12]">
            Partnering to Empower the Non-Profit Sector
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            We collaborate with digital agencies, fundraising advisors, and integration specialists who share our dedication to nonprofit impact, European data sovereignty, and ethical fundraising.
          </p>
        </div>
      </section>

      {/* Partner Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partnerTypes.map((pt, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-white border border-neutral-200 shadow-xs space-y-6 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                  0{idx + 1}
                </div>
                <h2 className="text-xl font-bold text-neutral-900 font-display">{pt.title}</h2>
                <p className="text-xs text-neutral-600 leading-relaxed">{pt.description}</p>
              </div>

              <div className="pt-4 border-t border-neutral-100 space-y-2">
                <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">Partner Perks:</span>
                <ul className="space-y-1.5 text-xs text-neutral-700">
                  {pt.benefits.map((b, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Verified Ecosystem Integrations */}
      <section className="bg-neutral-900 text-white py-16 rounded-3xl mx-4 sm:mx-6 lg:mx-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">
            Verified Ecosystem Integrations
          </span>
          <h2 className="text-3xl font-extrabold font-display">
            Built to connect with the tools you already rely on.
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto leading-relaxed">
            Donorfit supports bidirectional integrations and export formats for leading non-profit accounting, CRM, and marketing platforms.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-3 text-xs font-medium text-neutral-300">
            <span className="px-3.5 py-1.5 rounded-lg bg-neutral-800 border border-neutral-700">SEPA Direct Debit (EPC)</span>
            <span className="px-3.5 py-1.5 rounded-lg bg-neutral-800 border border-neutral-700">Stripe & Apple Pay</span>
            <span className="px-3.5 py-1.5 rounded-lg bg-neutral-800 border border-neutral-700">PayPal for Nonprofits</span>
            <span className="px-3.5 py-1.5 rounded-lg bg-neutral-800 border border-neutral-700">DATEV Accounting</span>
            <span className="px-3.5 py-1.5 rounded-lg bg-neutral-800 border border-neutral-700">Mailchimp & Brevo</span>
            <span className="px-3.5 py-1.5 rounded-lg bg-neutral-800 border border-neutral-700">Salesforce Nonprofit Cloud</span>
            <span className="px-3.5 py-1.5 rounded-lg bg-neutral-800 border border-neutral-700">Zapier & Webhooks</span>
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 font-display">
          Join the Donorfit Partner Network
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 max-w-lg mx-auto leading-relaxed">
          Help your non-profit clients transition away from manual spreadsheets and legacy software to modern, connected fundraising technology.
        </p>
        <div>
          <button
            onClick={() => navigateTo('/contact')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            <span>Inquire About Partnership</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

    </div>
  );
}

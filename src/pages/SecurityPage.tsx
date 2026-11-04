import React, { useState } from 'react';
import { useModal } from '../context/ModalContext.tsx';
import { 
  ShieldCheck, 
  Lock, 
  Server, 
  KeyRound, 
  FileCheck2, 
  CreditCard, 
  ChevronDown, 
  Mail, 
  Building2, 
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function SecurityPage() {
  const { openBookDemo, navigateTo } = useModal();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const securityFaqs = [
    {
      question: 'Where is Donorfit platform data physically hosted?',
      answer: 'All production databases, application servers, and backups are hosted within the European Union (Germany and Ireland) in ISO/IEC 27001, SOC 2 Type II, and PCI-DSS compliant data center facilities. We maintain strict EU data sovereignty.'
    },
    {
      question: 'Does Donorfit store donor credit card numbers or banking passwords?',
      answer: 'No. Donorfit never stores raw credit card numbers or sensitive payment authentication credentials on our application servers. All payment handling is tokenized through certified Level 1 PCI-DSS payment gateways (such as Stripe and European banking direct debit rails).'
    },
    {
      question: 'How do you handle Data Processing Agreements (DPA)?',
      answer: 'Every nonprofit organization using Donorfit enters into a legally binding Data Processing Agreement (DPA) under Article 28 of the GDPR, with standardized technical and organizational measures (TOMs) clearly defined.'
    },
    {
      question: 'How do you protect sensitive child and beneficiary data in sponsorship programs?',
      answer: 'Sponsorship modules enforce strict role-based access control (RBAC). Field caseworkers, country directors, and finance teams have distinct permission boundaries. Sensitive records such as medical notes or exact guardian locations can be restricted so only authorized safeguarding officers can view them.'
    },
    {
      question: 'What is your incident response protocol?',
      answer: 'In the unlikely event of a security or data breach, our incident response plan requires notification to affected data controllers within 24 to 72 hours in strict alignment with GDPR statutory mandates, alongside immediate containment measures.'
    }
  ];

  return (
    <div className="space-y-24 sm:space-y-32 lg:space-y-36 pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="pt-12 sm:pt-20 lg:pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Trust & Compliance Portal</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 font-display leading-[1.12] text-balance">
            Security, Privacy, and Data Protection at Donorfit
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Nonprofits protect vulnerable communities and steward generous public support. We hold ourselves to the highest standards of transparency, data privacy, and technological resilience.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-500 pt-2">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              EU Sovereign Hosting
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Full GDPR Article 28 DPA
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              PCI-DSS Level 1 Gateway Architecture
            </span>
          </div>
        </div>
      </section>

      {/* 2. APPROACH TO DATA PROTECTION & CORE PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="hover-lift p-8 rounded-2xl bg-white border border-neutral-200 shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              <Server className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-neutral-900 font-display">
              European Data Sovereignty
            </h2>
            <p className="text-xs text-neutral-600 leading-relaxed">
              All core application infrastructure and relational databases are hosted strictly inside the European Union. We do not transfer non-profit supporter databases or beneficiary dossiers to foreign jurisdictions without explicit adequacy safeguards.
            </p>
          </div>

          <div className="hover-lift p-8 rounded-2xl bg-white border border-neutral-200 shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
              <KeyRound className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-neutral-900 font-display">
              Strict Access Controls
            </h2>
            <p className="text-xs text-neutral-600 leading-relaxed">
              We employ strict Role-Based Access Control (RBAC), multi-factor authentication (MFA), and mandatory session timeouts. Your organization controls exactly which staff members, volunteers, or auditors can access specific records.
            </p>
          </div>

          <div className="hover-lift p-8 rounded-2xl bg-white border border-neutral-200 shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-neutral-900 font-display">
              Zero Lock-In & Portability
            </h2>
            <p className="text-xs text-neutral-600 leading-relaxed">
              You own your organization’s data completely. In accordance with GDPR Article 20, you can export full donor files, giving histories, and active direct debit mandates in standard open formats at any time.
            </p>
          </div>

        </div>
      </section>

      {/* 3. TECHNICAL & ORGANIZATIONAL MEASURES (TOMS) */}
      <section className="bg-neutral-900 bg-dark-glow text-white py-20 rounded-3xl mx-4 sm:mx-6 lg:mx-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              Technical Verification
            </span>
            <h2 className="text-3xl font-extrabold font-display">
              Our Security Architecture & Infrastructure Safeguards
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed">
              We practice defense-in-depth across the application lifecycle to defend non-profit operations from unauthorized access, disruption, or data loss.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-800/80 border border-neutral-700 space-y-3">
              <div className="flex items-center gap-2 font-bold text-white text-base">
                <Lock className="w-5 h-5 text-emerald-400" />
                <span>Encryption in Transit & at Rest</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                All data transmitted between browsers, mobile devices, and Donorfit servers is protected with Transport Layer Security (TLS 1.3). Sensitive databases and backup snapshots are encrypted using AES-256 standard encryption keys.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-800/80 border border-neutral-700 space-y-3">
              <div className="flex items-center gap-2 font-bold text-white text-base">
                <CreditCard className="w-5 h-5 text-emerald-400" />
                <span>Payment & Banking Rail Security</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Donations and recurring pledges are processed via PCI-DSS certified European payment facilitators. Bank direct debits follow European EPC SEPA Direct Debit scheme rules with validated IBAN checksums and cryptographically secure mandate IDs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-800/80 border border-neutral-700 space-y-3">
              <div className="flex items-center gap-2 font-bold text-white text-base">
                <Server className="w-5 h-5 text-emerald-400" />
                <span>Redundancy & Automated Backups</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Application state is continuously backed up with point-in-time recovery capabilities across isolated availability zones in the EU. Disaster recovery plans and data restoration simulations are conducted periodically.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-800/80 border border-neutral-700 space-y-3">
              <div className="flex items-center gap-2 font-bold text-white text-base">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>Child & Beneficiary Safeguarding</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                For orphan and child sponsorship initiatives, sensitive location metrics and family identities are isolated behind strict role boundaries. Publicly visible profiles require affirmative consent logs and automated identifier redaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GDPR & COMPLIANCE FRAMEWORK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-white border border-neutral-200 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
              Legal Compliance
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 font-display">
              GDPR Rights & Data Controller Alignment
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-3xl">
              Under European privacy legislation (EU Regulation 2016/679), your nonprofit acts as the Data Controller, and Donorfit functions as the Data Processor. We provide the technical tooling necessary for you to fulfill all statutory data subject rights.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1">
              <span className="text-xs font-bold text-neutral-900 block">Right to Access (Art. 15)</span>
              <p className="text-xs text-neutral-500">Generate comprehensive donor data dossiers with one click.</p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1">
              <span className="text-xs font-bold text-neutral-900 block">Right to Erasure (Art. 17)</span>
              <p className="text-xs text-neutral-500">Permanent data deletion tools while respecting statutory tax retention laws.</p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1">
              <span className="text-xs font-bold text-neutral-900 block">Portability (Art. 20)</span>
              <p className="text-xs text-neutral-500">Export clean, structured CSV and JSON packages without vendor lock-in.</p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1">
              <span className="text-xs font-bold text-neutral-900 block">Consent Logs (Art. 7)</span>
              <p className="text-xs text-neutral-500">Immutable timestamped records of communication and marketing opt-ins.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECURITY FAQS */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
            Clear Transparency
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 font-display">
            Security & Trust Questions
          </h2>
        </div>

        <div className="space-y-3">
          {securityFaqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div key={idx} className="rounded-xl border border-neutral-200/90 bg-white overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left font-bold text-sm text-neutral-900 font-display flex items-center justify-between gap-4 hover:bg-neutral-50/50 cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-neutral-500 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs text-neutral-600 leading-relaxed border-t border-neutral-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. SECURITY CONTACT INFORMATION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-neutral-100 border border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-emerald-700" />
              <h3 className="text-lg font-bold text-neutral-950 font-display">Security Inquiries & Vulnerability Disclosure</h3>
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed">
              If your security or compliance team requires a custom security questionnaire, DPA review, or wishes to report a potential vulnerability, contact our dedicated security team directly:
            </p>
            <div className="pt-1 text-xs tabular-nums font-semibold text-neutral-900">
              security@donorfit.com · PGP Key available upon request
            </div>
          </div>

          <button
            onClick={() => navigateTo('/contact')}
            className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer shrink-0"
          >
            Contact Compliance Desk
          </button>
        </div>
      </section>

    </div>
  );
}

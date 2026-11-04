import React from 'react';
import { useModal } from '../context/ModalContext.tsx';
import { ShieldCheck, FileText, CheckCircle2, Lock, ArrowLeft } from 'lucide-react';

interface LegalPageProps {
  type: 'privacy' | 'cookies' | 'impressum' | 'terms' | 'accessibility';
}

export default function LegalPage({ type }: LegalPageProps) {
  const { navigateTo, openCookieSettings } = useModal();

  if (type === 'privacy') {
    return (
      <div className="py-12 sm:py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <button
          onClick={() => navigateTo('/')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-neutral-900 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>

        <header className="space-y-3 border-b border-neutral-200 pb-6">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">GDPR & EU Regulation 2016/679</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 font-display">
            Privacy Policy
          </h1>
          <p className="text-xs text-neutral-500">Last updated: October 2026 · Valid across all Donorfit European platforms</p>
        </header>

        <div className="space-y-6 text-xs sm:text-sm text-neutral-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-neutral-900 font-display">1. Information on the Collection of Personal Data</h2>
            <p>
              The protection of personal data is of utmost importance to Donorfit. Below we inform you about the collection of personal data when using our website and platform in accordance with the European General Data Protection Regulation (GDPR) and national data protection laws.
            </p>
            <p>
              Personal data means any information relating to an identified or identifiable natural person (e.g., name, address, email addresses, IP address, user behavior).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-neutral-900 font-display">2. Name and Address of the Data Controller</h2>
            <p>
              The controller within the meaning of Article 4(7) GDPR is:
            </p>
            <div className="p-4 bg-neutral-100 rounded-xl tabular-nums text-xs text-neutral-800 space-y-1">
              <div>Donorfit Technologies GmbH (i.G.)</div>
              <div>Bockenheimer Landstraße 101</div>
              <div>60325 Frankfurt am Main, Germany</div>
              <div>Email: privacy@donorfit.com</div>
              <div>Website: https://donorfit.com</div>
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-neutral-900 font-display">3. Role Distinction: Controller vs. Processor</h2>
            <p>
              When nonprofit organizations use Donorfit to collect donations, manage sponsorships, and organize supporter records, the nonprofit organization acts as the <strong>Data Controller</strong>. Donorfit processes supporter data strictly on behalf of and according to the instructions of the nonprofit as a <strong>Data Processor</strong> under Article 28 GDPR. A formal Data Processing Agreement (DPA) is executed with every client organization.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-neutral-900 font-display">4. Data Processing on This Marketing Website</h2>
            <p>
              When you visit our website for informational purposes only, we collect only the personal data that your browser transmits to our server (server log files), including IP address, date and time of request, time zone difference to GMT, content of request, HTTP status code, and browser type. The legal basis is Art. 6(1)(f) GDPR (legitimate interest in delivering website stability and security).
            </p>
            <p>
              When you submit an inquiry form (e.g., booking a demo or requesting onboarding), data submitted (name, organization name, email, country, message) is processed under Art. 6(1)(b) GDPR for the purpose of taking steps prior to entering into a contract.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-neutral-900 font-display">5. Storage Location and Data Security</h2>
            <p>
              All customer databases and web services are hosted exclusively in European data centers located in Frankfurt, Germany and Dublin, Ireland. We utilize TLS 1.3 encryption in transit and AES-256 encryption at rest.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-neutral-900 font-display">6. Rights of Data Subjects</h2>
            <p>You have the right to request access to your personal data (Art. 15 GDPR), rectification (Art. 16 GDPR), erasure (Art. 17 GDPR), restriction of processing (Art. 18 GDPR), and data portability (Art. 20 GDPR). You also have the right to lodge a complaint with a supervisory authority.</p>
          </section>
        </div>
      </div>
    );
  }

  if (type === 'cookies') {
    return (
      <div className="py-12 sm:py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <button
          onClick={() => navigateTo('/')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-neutral-900 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>

        <header className="space-y-3 border-b border-neutral-200 pb-6">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">ePrivacy Directive & GDPR</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 font-display">
            Cookie Policy
          </h1>
          <p className="text-xs text-neutral-500">Clear explanations of how Donorfit utilizes cookies and local storage</p>
        </header>

        <div className="space-y-6 text-xs sm:text-sm text-neutral-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-neutral-900 font-display">1. What are Cookies?</h2>
            <p>
              Cookies are small text files stored on your computer or mobile device when you access websites. They allow web applications to identify your browser session, remember preferences, and ensure secure authentication.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-neutral-900 font-display">2. Cookie Categories Used by Donorfit</h2>
            <div className="space-y-3">
              <div className="p-4 bg-white rounded-xl border border-neutral-200">
                <span className="font-bold text-neutral-900 text-xs">Strictly Necessary Cookies</span>
                <p className="text-xs text-neutral-600 mt-1">
                  Required for core platform security, anti-CSRF token verification, and session state. These cookies do not store personally identifiable marketing information and cannot be disabled.
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-neutral-200">
                <span className="font-bold text-neutral-900 text-xs">Functional & Preference Cookies</span>
                <p className="text-xs text-neutral-600 mt-1">
                  Remember your chosen language, selected currency, and form field progress.
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-neutral-200">
                <span className="font-bold text-neutral-900 text-xs">Privacy-Centric Analytics Cookies</span>
                <p className="text-xs text-neutral-600 mt-1">
                  Collect aggregated, anonymized insights regarding page load speeds, popular guides, and donation completion rates. These cookies are never set without your prior affirmative consent.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-neutral-900 font-display">3. Managing Your Cookie Preferences</h2>
            <p>
              You can review, modify, or revoke your cookie choices at any time by clicking the button below:
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={openCookieSettings}
                className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
              >
                Open Cookie Preferences Manager
              </button>
            </div>
          </section>
        </div>
      </div>
    );
  }

  if (type === 'impressum') {
    return (
      <div className="py-12 sm:py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <button
          onClick={() => navigateTo('/')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-neutral-900 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>

        <header className="space-y-3 border-b border-neutral-200 pb-6">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 font-display">
            Impressum / Legal Notice
          </h1>
          <p className="text-xs text-neutral-500">Statutory provider identification for European Union digital services</p>
        </header>

        <div className="space-y-6 text-xs sm:text-sm text-neutral-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-neutral-900 font-display">Service Provider</h2>
            <div className="p-5 bg-white rounded-2xl border border-neutral-200 tabular-nums text-xs space-y-1">
              <div className="font-bold text-neutral-900">Donorfit Technologies GmbH (i.G.)</div>
              <div>Bockenheimer Landstraße 101</div>
              <div>60325 Frankfurt am Main</div>
              <div>Federal Republic of Germany</div>
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-neutral-900 font-display">Contact / Kontakt</h2>
            <div className="p-4 bg-neutral-50 rounded-xl space-y-1 text-xs">
              <div>Email: contact@donorfit.com</div>
              <div>Support: support@donorfit.com</div>
              <div>Security: security@donorfit.com</div>
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-neutral-900 font-display">Represented By / Vertretungsberechtigte</h2>
            <p>Managing Director: Faisal & Executive Leadership</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-neutral-900 font-display">Register Entry / Registereintrag</h2>
            <p>Amtsgericht Frankfurt am Main · Commercial Register HRB (in registration)</p>
            <p>VAT Identification Number (USt-IdNr.): DE-PENDING</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-neutral-900 font-display">Online Dispute Resolution (ODR)</h2>
            <p>
              The European Commission provides a platform for online dispute resolution (ODR):{' '}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">
                https://ec.europa.eu/consumers/odr/
              </a>. We are neither obligated nor willing to participate in dispute settlement proceedings before a consumer arbitration board.
            </p>
          </section>
        </div>
      </div>
    );
  }

  if (type === 'terms') {
    return (
      <div className="py-12 sm:py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <button
          onClick={() => navigateTo('/')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-neutral-900 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>

        <header className="space-y-3 border-b border-neutral-200 pb-6">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">General Terms of Service</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 font-display">
            Terms & Conditions
          </h1>
          <p className="text-xs text-neutral-500">Governing nonprofit platform access, payment processing, and usage rights</p>
        </header>

        <div className="space-y-6 text-xs sm:text-sm text-neutral-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-neutral-900 font-display">1. Scope of Application</h2>
            <p>
              These Terms & Conditions govern the provision of software-as-a-service (SaaS) fundraising and donor management software by Donorfit to non-governmental organizations, registered charities, foundations, and non-profit associations.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-neutral-900 font-display">2. Service Description</h2>
            <p>
              Donorfit provides software tools for online donation collection, recurring giving management, sponsorship administration, money pool coordination, membership management, and donor CRM records. Donorfit does not act as a bank or custodial escrow provider; all financial transactions are executed through authorized payment service providers directly to the nonprofit’s merchant accounts.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-neutral-900 font-display">3. Nonprofit Obligations</h2>
            <p>
              Nonprofits warrant that they possess legal authorization to conduct fundraising activities under applicable local legislation and that all published campaign details, beneficiary descriptions, and tax receipt representations are truthful and accurate.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-neutral-900 font-display">4. Data Ownership & Availability</h2>
            <p>
              The nonprofit retains exclusive ownership of all donor and contribution records. Donorfit undertakes to maintain a 99.9% target system availability, excluding scheduled maintenance.
            </p>
          </section>
        </div>
      </div>
    );
  }

  // Accessibility
  return (
    <div className="py-12 sm:py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <button
        onClick={() => navigateTo('/')}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-neutral-900 cursor-pointer"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Home</span>
      </button>

      <header className="space-y-3 border-b border-neutral-200 pb-6">
        <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">WCAG 2.2 AA Conformance</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 font-display">
          Accessibility Statement
        </h1>
        <p className="text-xs text-neutral-500">Our commitment to inclusive, barrier-free digital fundraising</p>
      </header>

      <div className="space-y-6 text-xs sm:text-sm text-neutral-700 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-neutral-900 font-display">1. Conformance Target</h2>
          <p>
            Donorfit is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply the relevant accessibility standards targeting the <strong>Web Content Accessibility Guidelines (WCAG) 2.2 Level AA</strong>.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-neutral-900 font-display">2. Measures Taken</h2>
          <ul className="list-disc pl-5 space-y-1.5 text-xs">
            <li>Semantic HTML elements (`header`, `main`, `nav`, `section`, `article`, `footer`) throughout our architecture.</li>
            <li>High color contrast ratios exceeding 4.5:1 for standard body text and 3:1 for large display elements.</li>
            <li>Full keyboard navigation capability with visible focus outlines (`focus-visible`).</li>
            <li>Accessible forms with explicit labels, aria-attributes, and meaningful validation feedback.</li>
            <li>Dignified descriptive alt-text attributes on all photographic and illustrative assets.</li>
            <li>Respect for user `prefers-reduced-motion` settings.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-neutral-900 font-display">3. Feedback & Contact</h2>
          <p>
            If you encounter accessibility barriers on any part of our website or donation checkout widgets, please contact our team at <span className="tabular-nums text-neutral-900">accessibility@donorfit.com</span>. We welcome your input and will remediate issues promptly.
          </p>
        </section>
      </div>
    </div>
  );
}

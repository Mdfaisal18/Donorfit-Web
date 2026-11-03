import React, { useState } from 'react';
import { useModal } from '../context/ModalContext.tsx';
import { 
  Mail, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle, 
  ShieldCheck,
  Building2,
  Clock
} from 'lucide-react';

export default function ContactPage() {
  const { navigateTo } = useModal();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orgName: '',
    inquiryType: 'sales',
    message: '',
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message || !formData.consent) return;
    setSubmitted(true);
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="pt-12 sm:pt-20 lg:pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
            <span>Direct Communication</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 font-display leading-[1.12] text-balance">
            Get in touch with the Donorfit team.
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Whether you have questions about implementing SEPA recurring donations, need assistance with child sponsorship workflows, or want to discuss a partnership, we’re here to help.
          </p>
        </div>
      </section>

      {/* 2. CONTACT GRID: FORM & DIRECT DESKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-neutral-200 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center border border-emerald-100">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900 font-display">Inquiry Received</h2>
                <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, <span className="font-semibold text-neutral-900">{formData.name || 'there'}</span>. Your inquiry has been routed to our <span className="font-semibold text-neutral-900">{formData.inquiryType}</span> desk.
                </p>
                <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-xs text-neutral-600 max-w-sm mx-auto text-left space-y-1">
                  <div className="font-semibold text-neutral-900">What happens next:</div>
                  <p>1. Our European team reviews your organization details.</p>
                  <p>2. A specialist replies to {formData.email} within 4 to 8 business hours.</p>
                  <p>3. No spam, no sales pressure—just direct, helpful guidance.</p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2 text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h2 className="text-xl font-bold text-neutral-950 font-display mb-1">
                    Send Us a Message
                  </h2>
                  <p className="text-xs text-neutral-500">
                    Fill out the fields below and our European non-profit team will respond promptly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Thomas Weber"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-neutral-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-hidden text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Work / NGO Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="thomas@ngo-initiative.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-neutral-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-hidden text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Organization Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Save the Wetlands e.V."
                      value={formData.orgName}
                      onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-neutral-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-hidden text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Inquiry Category *
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-neutral-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-hidden text-sm bg-white"
                    >
                      <option value="sales">Sales & Product Demo</option>
                      <option value="general">General Inquiry</option>
                      <option value="product">Product & Technical Questions</option>
                      <option value="partnership">Partnership & Agency Inquiries</option>
                      <option value="support">Customer Support Direction</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    How can we assist you? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your organization, current fundraising software, or specific questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-neutral-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-hidden text-sm"
                  ></textarea>
                </div>

                <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent-box"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="w-4 h-4 text-emerald-600 rounded border-neutral-300 focus:ring-emerald-500 mt-0.5"
                  />
                  <label htmlFor="consent-box" className="text-xs text-neutral-600 leading-relaxed cursor-pointer">
                    I agree that Donorfit may process my submitted contact details in accordance with the{' '}
                    <button
                      type="button"
                      onClick={() => navigateTo('/privacy-policy')}
                      className="text-emerald-700 underline font-medium"
                    >
                      Privacy Policy
                    </button>{' '}
                    to respond to this inquiry. We never share your data.
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    <span>Submit Inquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Desks & Office Information */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-4">
              <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider block">
                Direct Contact Desks
              </span>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="font-bold text-neutral-900">General & Product Inquiries</div>
                  <div className="text-neutral-600 font-mono text-[11px] mt-0.5">contact@donorfit.com</div>
                </div>

                <div className="pt-2 border-t border-neutral-200">
                  <div className="font-bold text-neutral-900">Sales & Nonprofit Demos</div>
                  <div className="text-neutral-600 font-mono text-[11px] mt-0.5">sales@donorfit.com</div>
                </div>

                <div className="pt-2 border-t border-neutral-200">
                  <div className="font-bold text-neutral-900">Security & GDPR Inquiries</div>
                  <div className="text-neutral-600 font-mono text-[11px] mt-0.5">security@donorfit.com</div>
                </div>

                <div className="pt-2 border-t border-neutral-200">
                  <div className="font-bold text-neutral-900">Support Direction</div>
                  <div className="text-neutral-600 mt-0.5 leading-relaxed">
                    Existing organizations can reach their dedicated support desk via the help link in their administrative workspace or by emailing <span className="font-mono">support@donorfit.com</span>.
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-neutral-200 space-y-3 text-xs">
              <div className="flex items-center gap-2 font-bold text-neutral-900">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>European Headquarters</span>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                Donorfit Technologies<br />
                Bockenheimer Landstraße 101<br />
                60325 Frankfurt am Main<br />
                Germany
              </p>
              <div className="pt-2 flex items-center gap-2 text-[11px] text-neutral-500">
                <Clock className="w-3.5 h-3.5 text-neutral-400" />
                <span>Office Hours: Mon – Fri, 09:00 – 18:00 CET</span>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

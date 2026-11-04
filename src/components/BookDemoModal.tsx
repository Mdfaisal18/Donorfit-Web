import React, { useState } from 'react';
import { useModal } from '../context/ModalContext.tsx';
import { X, CheckCircle2, Calendar, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import BrandLogo from './BrandLogo.tsx';

export default function BookDemoModal() {
  const { isBookDemoOpen, closeBookDemo, selectedModule } = useModal();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    organizationName: '',
    orgType: 'ngo',
    country: 'DE',
    annualVolume: '100k-500k',
    interest: selectedModule || 'general',
    preferredDate: '',
    preferredTime: '10:00 AM CET',
    notes: '',
  });

  if (!isBookDemoOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.workEmail || !formData.organizationName) return;
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    closeBookDemo();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-neutral-950/60 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-neutral-50/70">
          <div className="flex items-center gap-3">
            <BrandLogo variant="icon" className="h-10 shrink-0" alt="" />
            <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">Live Demonstration</span>
            <h2 id="modal-headline" className="text-lg font-bold text-neutral-950 font-display">
              Schedule a 1-on-1 Product Demo
            </h2>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1.5 text-neutral-400 hover:text-neutral-700 rounded-lg hover:bg-neutral-100 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 mx-auto bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center border border-emerald-100">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 font-display">Demo Request Confirmed</h3>
            <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-neutral-900">{formData.fullName || 'there'}</span>. A Donorfit non-profit specialist will connect with you at <span className="font-semibold text-neutral-900">{formData.workEmail}</span> within 4 business hours to confirm your calendar invite.
            </p>
            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-left text-xs text-neutral-600 space-y-1.5 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-neutral-500">Organization:</span>
                <span className="font-medium text-neutral-800">{formData.organizationName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Requested Focus:</span>
                <span className="font-medium text-neutral-800 capitalize">{formData.interest}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Selected Window:</span>
                <span className="font-medium text-neutral-800">{formData.preferredDate || 'Next available slot'} · {formData.preferredTime}</span>
              </div>
            </div>
            <div className="pt-2">
              <button
                onClick={resetAndClose}
                className="px-6 py-2.5 bg-neutral-900 text-white rounded-lg text-sm font-semibold hover:bg-neutral-800 transition-colors"
              >
                Close & Return to Website
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-sm text-neutral-800">
            <p className="text-xs text-neutral-600 leading-relaxed">
              See how Donorfit streamlines recurring donations, sponsorships, and donor stewardship for your organization. Tailored to European NGOs and charities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Sarah Jansen"
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
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  placeholder="sarah@charity-initiative.org"
                  className="w-full px-3 py-2 rounded-lg border border-neutral-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-hidden text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Organization Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.organizationName}
                  onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                  placeholder="e.g. Clean Oceans Foundation"
                  className="w-full px-3 py-2 rounded-lg border border-neutral-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-hidden text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Organization Type
                </label>
                <select
                  value={formData.orgType}
                  onChange={(e) => setFormData({ ...formData, orgType: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-neutral-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-hidden text-sm bg-white"
                >
                  <option value="ngo">Non-Governmental Org (NGO)</option>
                  <option value="charity">Registered Charity / e.V.</option>
                  <option value="foundation">Public / Private Foundation</option>
                  <option value="sponsorship">Sponsorship / Child Care Org</option>
                  <option value="membership">Membership Association</option>
                  <option value="humanitarian">International Humanitarian Aid</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Primary Interest
                </label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-neutral-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-hidden text-sm bg-white"
                >
                  <option value="general">Complete Donorfit Platform</option>
                  <option value="sponsorship">Sponsorship Management</option>
                  <option value="orphan-sponsorship">Orphan Sponsorship Program</option>
                  <option value="recurring-giving">Recurring Giving & SEPA</option>
                  <option value="donor-management">Donor Management CRM</option>
                  <option value="money-pool">Money Pool & Group Giving</option>
                  <option value="membership">Membership Dues Automation</option>
                  <option value="campaigns">Emergency & Goal Campaigns</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Annual Fundraising Volume
                </label>
                <select
                  value={formData.annualVolume}
                  onChange={(e) => setFormData({ ...formData, annualVolume: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-neutral-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-hidden text-sm bg-white"
                >
                  <option value="under-100k">Under €100,000</option>
                  <option value="100k-500k">€100,000 – €500,000</option>
                  <option value="500k-2m">€500,000 – €2 Million</option>
                  <option value="2m-10m">€2 Million – €10 Million</option>
                  <option value="over-10m">Over €10 Million</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-neutral-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-hidden text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Preferred Time Window
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-neutral-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-hidden text-sm bg-white"
                >
                  <option value="09:00 AM CET">09:00 AM – 11:00 AM CET</option>
                  <option value="11:00 AM CET">11:00 AM – 01:00 PM CET</option>
                  <option value="02:00 PM CET">02:00 PM – 04:00 PM CET</option>
                  <option value="04:00 PM CET">04:00 PM – 06:00 PM CET</option>
                </select>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-neutral-500 border-t border-neutral-100">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>GDPR Compliant · No Obligation</span>
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                <span>Confirm Demo Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

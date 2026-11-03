import React from 'react';
import { useModal } from '../context/ModalContext.tsx';
import { Compass, ArrowRight, Home, Search } from 'lucide-react';

export default function NotFoundPage() {
  const { navigateTo } = useModal();

  return (
    <div className="py-24 sm:py-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
      <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100">
        <Compass className="w-8 h-8" />
      </div>

      <div className="space-y-3">
        <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest">Error 404</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 font-display">
          Page Not Found
        </h1>
        <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
          The non-profit fundraising resource or page you requested could not be located. It may have been moved or updated during our website redesign.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <button
          onClick={() => navigateTo('/')}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </button>
        <button
          onClick={() => navigateTo('/sponsorship')}
          className="px-4 py-2.5 bg-white hover:bg-neutral-50 text-neutral-800 font-semibold text-xs rounded-xl border border-neutral-300 transition-colors cursor-pointer"
        >
          Explore Sponsorship
        </button>
        <button
          onClick={() => navigateTo('/faqs')}
          className="px-4 py-2.5 bg-white hover:bg-neutral-50 text-neutral-800 font-semibold text-xs rounded-xl border border-neutral-300 transition-colors cursor-pointer"
        >
          Search FAQs
        </button>
      </div>

      <div className="pt-12 border-t border-neutral-200 text-xs text-neutral-500">
        Looking for a specific solution? Check our{' '}
        <button onClick={() => navigateTo('/solutions/ngos')} className="text-emerald-700 underline font-medium">NGO Solutions</button>
        {' '}or{' '}
        <button onClick={() => navigateTo('/contact')} className="text-emerald-700 underline font-medium">contact our support team</button>.
      </div>
    </div>
  );
}

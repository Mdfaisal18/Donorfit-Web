import React, { useState } from 'react';
import { useModal } from '../context/ModalContext.tsx';
import { GUIDES_DATA } from '../data/content.ts';
import { FileText, Download, CheckCircle2, ArrowRight, ShieldCheck, X } from 'lucide-react';

export default function GuidesPage() {
  const { openBookDemo, openGetStarted } = useModal();
  const [downloadingGuide, setDownloadingGuide] = useState<string | null>(null);
  const [emailInput, setEmailInput] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setDownloadSuccess(true);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* Hero */}
      <section className="pt-12 sm:pt-20 lg:pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
            <FileText className="w-3.5 h-3.5 text-emerald-600" />
            <span>Operational Toolkits & Frameworks</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 font-display leading-[1.12]">
            Comprehensive Fundraising Toolkits & Guides
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            In-depth operational manuals, statutory compliance templates, and retention frameworks prepared by European nonprofit specialists.
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {GUIDES_DATA.map((guide) => (
            <div
              key={guide.id}
              className="p-8 rounded-2xl bg-white border border-neutral-200 shadow-xs flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                    {guide.category}
                  </span>
                  <span className="text-neutral-400 font-mono">{guide.format} · {guide.pageCount}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-neutral-950 font-display leading-snug">
                  {guide.title}
                </h2>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {guide.description}
                </p>

                <div className="pt-2">
                  <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider block mb-2">
                    Key Topics Covered:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {guide.keyTopics.map((topic, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-neutral-50 border border-neutral-200 rounded-md text-[11px] text-neutral-700 font-medium"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs text-neutral-500">Free PDF Toolkit for NGOs</span>
                <button
                  onClick={() => {
                    setDownloadingGuide(guide.title);
                    setDownloadSuccess(false);
                    setEmailInput('');
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Guide</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Download Modal */}
      {downloadingGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/60 backdrop-blur-xs">
          <div className="relative w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl border border-neutral-200 space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Download Resource</span>
              <button
                onClick={() => setDownloadingGuide(null)}
                className="text-neutral-400 hover:text-neutral-700 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {downloadSuccess ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-bold text-neutral-900 font-display">Guide Delivered</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  We have dispatched <span className="font-semibold text-neutral-900">{downloadingGuide}</span> to <span className="font-semibold text-neutral-900">{emailInput}</span>. You can also download the PDF directly below:
                </p>
                <div className="pt-2">
                  <a
                    href="#download"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Simulated download: PDF successfully generated for non-profit study.');
                      setDownloadingGuide(null);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white rounded-lg text-xs font-semibold hover:bg-emerald-700 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Save PDF Document</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleDownload} className="space-y-4 text-xs">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 font-display mb-1">
                    {downloadingGuide}
                  </h3>
                  <p className="text-neutral-500">
                    Enter your work email to receive the full toolkit and implementation checklist:
                  </p>
                </div>

                <div>
                  <label className="block font-semibold text-neutral-700 mb-1">Work / Non-Profit Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="director@charity-initiative.org"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-hidden"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between text-neutral-500">
                  <span className="text-[11px]">Instant access · No spam</span>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer"
                  >
                    Receive PDF Guide
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

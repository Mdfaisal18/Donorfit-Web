import React, { useState } from 'react';
import { useModal } from '../context/ModalContext.tsx';
import { PRODUCTS_DATA } from '../data/content.ts';
import ProductMockup from '../components/ProductMockup.tsx';
import { 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  ShieldCheck, 
  Sparkles,
  Layers,
  ArrowUpRight,
  Lock,
  TrendingUp,
  Check
} from 'lucide-react';

interface ProductPageProps {
  slug: string;
}

export default function ProductPage({ slug }: ProductPageProps) {
  const product = PRODUCTS_DATA[slug];
  const { openBookDemo, openGetStarted, navigateTo } = useModal();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!product) {
    return (
      <div className="py-24 text-center max-w-xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-neutral-900 mb-2">Product Not Found</h1>
        <p className="text-sm text-neutral-600 mb-6">The product you requested does not exist or has been relocated.</p>
        <button
          onClick={() => navigateTo('/')}
          className="px-4 py-2 bg-neutral-900 text-white rounded-lg text-xs font-semibold cursor-pointer"
        >
          Return to Platform Home
        </button>
      </div>
    );
  }

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  // Map product to appropriate authentic visual asset
  const getProductImage = () => {
    if (slug === 'sponsorship' || slug === 'orphan-sponsorship') {
      return {
        src: '/src/assets/images/sponsorship_community_1793444726701.jpg',
        alt: 'Empowered children learning in bright educational community center'
      };
    }
    if (slug === 'money-pool' || slug === 'donations') {
      return {
        src: '/src/assets/images/community_food_relief_aid_1793682091868.jpg',
        alt: 'Dedicated volunteers packaging food hampers in community hall'
      };
    }
    if (slug === 'membership' || slug === 'campaign-management') {
      return {
        src: '/src/assets/images/nonprofit_gala_fundraising_1793682093614.jpg',
        alt: 'Philanthropic gala reception with nonprofit champions celebrating community progress'
      };
    }
    if (slug === 'recurring-giving') {
      return {
        src: '/src/assets/images/saas_hero_fundraising_platform_1793682092168.jpg',
        alt: 'Nonprofit leadership reviewing recurring donor retention metrics'
      };
    }
    return {
      src: '/src/assets/images/donor_relationships_1793444728253.jpg',
      alt: 'Thoughtful nonprofit team collaborating in modern office'
    };
  };

  const heroImage = getProductImage();

  return (
    <div className="space-y-24 sm:space-y-32 lg:space-y-36 pb-24">
      
      {/* 1. HERO SECTION: DUAL-PANE WITH VISUAL ASSET & INTERACTIVE MOCKUP */}
      <section className="relative pt-12 sm:pt-20 lg:pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              <span>{product.heroKicker}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 font-display leading-[1.12] text-balance">
              {product.h1}
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl">
              {product.subheadline}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => openGetStarted(product.id)}
                className="btn-gradient inline-flex items-center gap-2 px-7 py-3.5 font-bold text-xs sm:text-sm rounded-xl cursor-pointer"
              >
                <span>Get Started with {product.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => openBookDemo(product.id)}
                className="px-6 py-3.5 bg-white hover:bg-neutral-50 text-neutral-900 font-semibold text-xs sm:text-sm rounded-xl border border-neutral-300 transition-colors cursor-pointer"
              >
                Book a Demo
              </button>
            </div>

            <div className="pt-2 flex items-center gap-6 text-xs text-neutral-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>EU GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Automated Tax Certificates</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            {/* Visual Hero Mockup */}
            <ProductMockup type={product.mockupType} />
          </div>

        </div>
      </section>

      {/* 2. CONTEXTUAL STORYTELLING: IMPACT PHOTOGRAPHY STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden border border-neutral-200 relative shadow-xl">
          <img
            src={heroImage.src}
            alt={heroImage.alt}
            className="w-full h-72 sm:h-96 object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/30 to-transparent flex items-end p-6 sm:p-10">
            <div className="text-white max-w-2xl space-y-2">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Mission in Action</span>
              <h2 className="text-xl sm:text-3xl font-bold font-display text-balance">
                Connecting generous European donors with verified, tangible impact.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROBLEMS ADDRESSED */}
      <section className="bg-neutral-100/70 py-20 border-y border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">
              Operational Friction
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 font-display text-balance">
              The fundraising challenges {product.title} resolves.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.problemsAddressed.map((p, i) => (
              <div key={i} className="hover-lift p-8 rounded-3xl bg-white border border-neutral-200/90 shadow-xs space-y-3">
                <div className="text-xs tabular-nums font-bold text-rose-600">Challenge 0{i + 1}</div>
                <h3 className="text-lg font-bold text-neutral-900 font-display">{p.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WORKFLOW / HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
            Clear Workflow
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 font-display text-balance">
            How {product.title} works in three steps.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {product.howItWorks.map((step) => (
            <div key={step.step} className="p-8 rounded-3xl bg-white border border-neutral-200/80 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 font-extrabold text-base flex items-center justify-center border border-emerald-100">
                {step.step}
              </div>
              <h3 className="text-lg font-bold text-neutral-900 font-display">{step.title}</h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CAPABILITIES & ORGANIZATIONAL BENEFITS: DARK CONTRAST SECTION */}
      <section className="bg-neutral-950 bg-dark-glow text-white py-20 rounded-3xl mx-4 sm:mx-6 lg:mx-8 border border-neutral-800 shadow-2xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div>
            <div className="max-w-2xl space-y-3 mb-10">
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                Product Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display">
                Engineered specifically for non-profit operational workflows.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {product.features.map((f, i) => (
                <div key={i} className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 space-y-2">
                  <div className="font-bold text-white text-base flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{f.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pl-6">{f.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-neutral-800">
            <div className="max-w-2xl space-y-3 mb-8">
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                Measurable Value
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display">
                Organizational benefits you can rely on.
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {product.benefits.map((b, i) => (
                <div key={i} className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-2">
                  <h4 className="font-bold text-emerald-400 text-sm">{b.title}</h4>
                  <p className="text-xs text-neutral-300 leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. FAQS */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
            Questions & Answers
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 font-display">
            Common questions about {product.title}
          </h2>
        </div>

        <div className="space-y-3">
          {product.faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div key={idx} className="rounded-2xl border border-neutral-200/90 bg-white overflow-hidden shadow-xs">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left font-bold text-sm text-neutral-900 font-display flex items-center justify-between gap-4 hover:bg-neutral-50/50 cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-neutral-500 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-neutral-600 leading-relaxed border-t border-neutral-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. RELATED SOLUTIONS & ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-100 border border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 font-display">
              Ready to explore {product.title}?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Schedule a focused 20-minute demonstration with our European nonprofit specialists or request instant platform onboarding.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => openBookDemo(product.id)}
              className="px-6 py-3 bg-white hover:bg-neutral-50 text-neutral-900 font-semibold text-xs rounded-xl border border-neutral-300 cursor-pointer"
            >
              Book a Demo
            </button>
            <button
              onClick={() => openGetStarted(product.id)}
              className="inline-flex items-center gap-1.5 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Related products */}
        <div className="pt-12 border-t border-neutral-200 mt-12">
          <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider block mb-4">
            Related Non-Profit Solutions
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {product.relatedProductIds.map((relId) => {
              const rel = PRODUCTS_DATA[relId];
              if (!rel) return null;
              return (
                <button
                  key={rel.id}
                  onClick={() => navigateTo(rel.slug.startsWith('/') ? rel.slug : `/${rel.slug}`)}
                  className="p-5 rounded-2xl bg-white border border-neutral-200 hover:border-neutral-300 text-left transition-all group cursor-pointer shadow-xs"
                >
                  <div className="font-bold text-neutral-900 text-xs group-hover:text-emerald-700 flex items-center justify-between">
                    <span>{rel.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-emerald-600" />
                  </div>
                  <p className="text-xs text-neutral-500 mt-1 line-clamp-1">{rel.shortDescription}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}

import React, { useState, useRef, useEffect } from 'react';
import { useModal } from '../context/ModalContext.tsx';
import { 
  ChevronDown, 
  Menu, 
  X, 
  HeartHandshake, 
  Sparkles, 
  Users, 
  Coins, 
  CreditCard, 
  BarChart3, 
  FileCheck2, 
  ShieldCheck, 
  Globe2, 
  Building2, 
  BookOpen, 
  Layers
} from 'lucide-react';

export default function Navbar() {
  const { openBookDemo, openGetStarted, navigateTo, currentRoute } = useModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'products' | 'solutions' | 'resources' | 'company' | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: 'products' | 'solutions' | 'resources' | 'company') => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleNavigate = (path: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    navigateTo(path);
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-white/85 backdrop-blur-xl border-b border-neutral-200/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-8">
          
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleNavigate('/')}
            className="flex items-center gap-2.5 text-left group cursor-pointer shrink-0"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-extrabold text-lg shadow-xs group-hover:bg-emerald-700 transition-colors">
              D
            </div>
            <span className="text-xl font-bold tracking-tight text-neutral-950 font-display whitespace-nowrap">
              Donorfit
            </span>
          </button>

          {/* Zone 2: Navigation Links & Dropdowns */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-neutral-700">
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`flex items-center gap-1 px-3 py-2 rounded-lg hover:text-neutral-950 hover:bg-neutral-100/70 transition-colors whitespace-nowrap cursor-pointer ${
                  activeDropdown === 'products' ? 'text-neutral-950 bg-neutral-100/70' : ''
                }`}
                onClick={() => setActiveDropdown(activeDropdown === 'products' ? null : 'products')}
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'products' && (
                <div 
                  className="absolute left-0 top-full pt-2 w-140 z-50 animate-in fade-in-50 zoom-in-95 duration-150"
                  onMouseEnter={() => handleMouseEnter('products')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white rounded-2xl shadow-2xl border border-neutral-200 p-4 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleNavigate('/sponsorship')}
                      className="p-3 text-left rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer group"
                    >
                      <div className="font-semibold text-neutral-900 text-sm group-hover:text-emerald-700 flex items-center gap-1.5">
                        <span>Sponsorship</span>
                      </div>
                      <p className="text-xs text-neutral-500 mt-0.5 line-clamp-1">Manage sponsors, beneficiaries & milestones</p>
                    </button>

                    <button
                      onClick={() => handleNavigate('/orphan-sponsorship')}
                      className="p-3 text-left rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer group"
                    >
                      <div className="font-semibold text-neutral-900 text-sm group-hover:text-emerald-700 flex items-center gap-1.5">
                        <span>Orphan Sponsorship</span>
                      </div>
                      <p className="text-xs text-neutral-500 mt-0.5 line-clamp-1">Ethical child care with strict safeguarding</p>
                    </button>

                    <button
                      onClick={() => handleNavigate('/money-pool')}
                      className="p-3 text-left rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer group"
                    >
                      <div className="font-semibold text-neutral-900 text-sm group-hover:text-emerald-700 flex items-center gap-1.5">
                        <span>Money Pool</span>
                      </div>
                      <p className="text-xs text-neutral-500 mt-0.5 line-clamp-1">Group giving and collective fundraising</p>
                    </button>

                    <button
                      onClick={() => handleNavigate('/membership')}
                      className="p-3 text-left rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer group"
                    >
                      <div className="font-semibold text-neutral-900 text-sm group-hover:text-emerald-700 flex items-center gap-1.5">
                        <span>Membership</span>
                      </div>
                      <p className="text-xs text-neutral-500 mt-0.5 line-clamp-1">Automated annual dues and member rolls</p>
                    </button>

                    <button
                      onClick={() => handleNavigate('/donations')}
                      className="p-3 text-left rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer group"
                    >
                      <div className="font-semibold text-neutral-900 text-sm group-hover:text-emerald-700 flex items-center gap-1.5">
                        <span>Donations</span>
                      </div>
                      <p className="text-xs text-neutral-500 mt-0.5 line-clamp-1">High-converting forms with SEPA & cards</p>
                    </button>

                    <button
                      onClick={() => handleNavigate('/recurring-giving')}
                      className="p-3 text-left rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer group"
                    >
                      <div className="font-semibold text-neutral-900 text-sm group-hover:text-emerald-700 flex items-center gap-1.5">
                        <span>Recurring Giving</span>
                      </div>
                      <p className="text-xs text-neutral-500 mt-0.5 line-clamp-1">Automated dunning & card churn recovery</p>
                    </button>

                    <button
                      onClick={() => handleNavigate('/donor-management')}
                      className="p-3 text-left rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer group"
                    >
                      <div className="font-semibold text-neutral-900 text-sm group-hover:text-emerald-700 flex items-center gap-1.5">
                        <span>Donor Management</span>
                      </div>
                      <p className="text-xs text-neutral-500 mt-0.5 line-clamp-1">Centralized European non-profit CRM</p>
                    </button>

                    <button
                      onClick={() => handleNavigate('/campaign-management')}
                      className="p-3 text-left rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer group"
                    >
                      <div className="font-semibold text-neutral-900 text-sm group-hover:text-emerald-700 flex items-center gap-1.5">
                        <span>Campaign Management</span>
                      </div>
                      <p className="text-xs text-neutral-500 mt-0.5 line-clamp-1">Emergency appeals & matched campaigns</p>
                    </button>

                    <button
                      onClick={() => handleNavigate('/reporting-and-insights')}
                      className="p-3 text-left rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer group col-span-2 bg-neutral-50/70 border border-neutral-100"
                    >
                      <div className="font-semibold text-neutral-900 text-sm group-hover:text-emerald-700 flex items-center gap-1.5">
                        <BarChart3 className="w-4 h-4 text-emerald-600" />
                        <span>Reporting & Insights</span>
                      </div>
                      <p className="text-xs text-neutral-500 mt-0.5">Cohort retention, statutory tax ledgers & board briefs</p>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`flex items-center gap-1 px-3 py-2 rounded-lg hover:text-neutral-950 hover:bg-neutral-100/70 transition-colors whitespace-nowrap cursor-pointer ${
                  activeDropdown === 'solutions' ? 'text-neutral-950 bg-neutral-100/70' : ''
                }`}
                onClick={() => setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'solutions' && (
                <div 
                  className="absolute left-0 top-full pt-2 w-120 z-50 animate-in fade-in-50 zoom-in-95 duration-150"
                  onMouseEnter={() => handleMouseEnter('solutions')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white rounded-2xl shadow-2xl border border-neutral-200 p-4 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleNavigate('/solutions/ngos')}
                      className="p-3 text-left rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer group"
                    >
                      <span className="font-semibold text-neutral-900 text-sm group-hover:text-emerald-700 block">For NGOs</span>
                      <p className="text-xs text-neutral-500 mt-0.5">Cross-border field & donor coordination</p>
                    </button>

                    <button
                      onClick={() => handleNavigate('/solutions/charities')}
                      className="p-3 text-left rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer group"
                    >
                      <span className="font-semibold text-neutral-900 text-sm group-hover:text-emerald-700 block">For Charities</span>
                      <p className="text-xs text-neutral-500 mt-0.5">Automated tax receipts & local appeals</p>
                    </button>

                    <button
                      onClick={() => handleNavigate('/solutions/foundations')}
                      className="p-3 text-left rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer group"
                    >
                      <span className="font-semibold text-neutral-900 text-sm group-hover:text-emerald-700 block">For Foundations</span>
                      <p className="text-xs text-neutral-500 mt-0.5">Restricted fund stewardship & boards</p>
                    </button>

                    <button
                      onClick={() => handleNavigate('/solutions/sponsorship-organizations')}
                      className="p-3 text-left rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer group"
                    >
                      <span className="font-semibold text-neutral-900 text-sm group-hover:text-emerald-700 block">For Sponsorship Orgs</span>
                      <p className="text-xs text-neutral-500 mt-0.5">Child & community recurring care</p>
                    </button>

                    <button
                      onClick={() => handleNavigate('/solutions/membership-organizations')}
                      className="p-3 text-left rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer group"
                    >
                      <span className="font-semibold text-neutral-900 text-sm group-hover:text-emerald-700 block">For Membership Orgs</span>
                      <p className="text-xs text-neutral-500 mt-0.5">Annual dues & verified roll calls</p>
                    </button>

                    <button
                      onClick={() => handleNavigate('/solutions/international-organizations')}
                      className="p-3 text-left rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer group"
                    >
                      <span className="font-semibold text-neutral-900 text-sm group-hover:text-emerald-700 block">For International Orgs</span>
                      <p className="text-xs text-neutral-500 mt-0.5">Multi-entity & global currencies</p>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`flex items-center gap-1 px-3 py-2 rounded-lg hover:text-neutral-950 hover:bg-neutral-100/70 transition-colors whitespace-nowrap cursor-pointer ${
                  activeDropdown === 'resources' ? 'text-neutral-950 bg-neutral-100/70' : ''
                }`}
                onClick={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')}
              >
                <span>Resources</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'resources' && (
                <div 
                  className="absolute left-0 top-full pt-2 w-72 z-50 animate-in fade-in-50 zoom-in-95 duration-150"
                  onMouseEnter={() => handleMouseEnter('resources')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white rounded-2xl shadow-2xl border border-neutral-200 p-3 space-y-1">
                    <button
                      onClick={() => handleNavigate('/blog')}
                      className="w-full p-2.5 text-left rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer group flex items-start gap-2.5"
                    >
                      <BookOpen className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-semibold text-neutral-900 text-sm group-hover:text-emerald-700 block">Resource Center & Blog</span>
                        <p className="text-xs text-neutral-500">Fundraising guides & retention strategies</p>
                      </div>
                    </button>
                    <button
                      onClick={() => handleNavigate('/guides')}
                      className="w-full p-2.5 text-left rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer group flex items-start gap-2.5"
                    >
                      <FileCheck2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-semibold text-neutral-900 text-sm group-hover:text-emerald-700 block">Practical Guides</span>
                        <p className="text-xs text-neutral-500">Downloadable SEPA & tax handbooks</p>
                      </div>
                    </button>
                    <button
                      onClick={() => handleNavigate('/case-studies')}
                      className="w-full p-2.5 text-left rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer group flex items-start gap-2.5"
                    >
                      <Sparkles className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-semibold text-neutral-900 text-sm group-hover:text-emerald-700 block">Case Studies</span>
                        <p className="text-xs text-neutral-500">Proven non-profit impact stories</p>
                      </div>
                    </button>
                    <button
                      onClick={() => handleNavigate('/faqs')}
                      className="w-full p-2.5 text-left rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer group flex items-start gap-2.5"
                    >
                      <Layers className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-semibold text-neutral-900 text-sm group-hover:text-emerald-700 block">Frequently Asked Questions</span>
                        <p className="text-xs text-neutral-500">Answers to implementation & banking</p>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('company')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`flex items-center gap-1 px-3 py-2 rounded-lg hover:text-neutral-950 hover:bg-neutral-100/70 transition-colors whitespace-nowrap cursor-pointer ${
                  activeDropdown === 'company' ? 'text-neutral-950 bg-neutral-100/70' : ''
                }`}
                onClick={() => setActiveDropdown(activeDropdown === 'company' ? null : 'company')}
              >
                <span>Company</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'company' && (
                <div 
                  className="absolute left-0 top-full pt-2 w-64 z-50 animate-in fade-in-50 zoom-in-95 duration-150"
                  onMouseEnter={() => handleMouseEnter('company')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white rounded-2xl shadow-2xl border border-neutral-200 p-3 space-y-1">
                    <button
                      onClick={() => handleNavigate('/about')}
                      className="w-full p-2.5 text-left rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer group block"
                    >
                      <span className="font-semibold text-neutral-900 text-sm group-hover:text-emerald-700 block">About Donorfit</span>
                      <p className="text-xs text-neutral-500">Mission, heritage & non-profit focus</p>
                    </button>
                    <button
                      onClick={() => handleNavigate('/security')}
                      className="w-full p-2.5 text-left rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer group flex items-start gap-2"
                    >
                      <div>
                        <span className="font-semibold text-neutral-900 text-sm group-hover:text-emerald-700 block">Security & Trust</span>
                        <p className="text-xs text-neutral-500">GDPR, EU hosting & data safety</p>
                      </div>
                    </button>
                    <button
                      onClick={() => handleNavigate('/partners')}
                      className="w-full p-2.5 text-left rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer group block"
                    >
                      <span className="font-semibold text-neutral-900 text-sm group-hover:text-emerald-700 block">Partners</span>
                      <p className="text-xs text-neutral-500">Advisors, agencies & integrations</p>
                    </button>
                    <button
                      onClick={() => handleNavigate('/contact')}
                      className="w-full p-2.5 text-left rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer group block"
                    >
                      <span className="font-semibold text-neutral-900 text-sm group-hover:text-emerald-700 block">Contact</span>
                      <p className="text-xs text-neutral-500">Direct inquiries & European office</p>
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavigate('/security')}
              className={`px-3 py-2 rounded-lg hover:text-neutral-950 hover:bg-neutral-100/70 transition-colors whitespace-nowrap cursor-pointer ${
                currentRoute === '/security' ? 'text-neutral-950 font-semibold' : ''
              }`}
            >
              Security
            </button>
          </nav>

          {/* Zone 3: CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => openBookDemo()}
              className="px-4 py-2 text-xs font-semibold text-neutral-800 hover:text-neutral-950 hover:bg-neutral-100 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            >
              Book a Demo
            </button>
            <button
              onClick={() => openGetStarted()}
              className="px-4.5 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-xs transition-colors whitespace-nowrap cursor-pointer"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => openGetStarted()}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-emerald-600 rounded-lg"
            >
              Get Started
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-700 hover:text-neutral-900 rounded-lg focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-4 pt-2 pb-6 space-y-4 max-h-[85vh] overflow-y-auto">
          <div className="space-y-1">
            <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider px-3 py-1">Products</div>
            <button
              onClick={() => handleNavigate('/sponsorship')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-neutral-800 rounded-lg hover:bg-neutral-100"
            >
              Sponsorship
            </button>
            <button
              onClick={() => handleNavigate('/orphan-sponsorship')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-neutral-800 rounded-lg hover:bg-neutral-100"
            >
              Orphan Sponsorship
            </button>
            <button
              onClick={() => handleNavigate('/money-pool')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-neutral-800 rounded-lg hover:bg-neutral-100"
            >
              Money Pool
            </button>
            <button
              onClick={() => handleNavigate('/membership')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-neutral-800 rounded-lg hover:bg-neutral-100"
            >
              Membership
            </button>
            <button
              onClick={() => handleNavigate('/donations')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-neutral-800 rounded-lg hover:bg-neutral-100"
            >
              Donations
            </button>
            <button
              onClick={() => handleNavigate('/recurring-giving')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-neutral-800 rounded-lg hover:bg-neutral-100"
            >
              Recurring Giving
            </button>
            <button
              onClick={() => handleNavigate('/donor-management')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-neutral-800 rounded-lg hover:bg-neutral-100"
            >
              Donor Management
            </button>
            <button
              onClick={() => handleNavigate('/campaign-management')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-neutral-800 rounded-lg hover:bg-neutral-100"
            >
              Campaign Management
            </button>
            <button
              onClick={() => handleNavigate('/reporting-and-insights')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-neutral-800 rounded-lg hover:bg-neutral-100"
            >
              Reporting & Insights
            </button>
          </div>

          <div className="space-y-1 pt-2 border-t border-neutral-100">
            <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider px-3 py-1">Solutions</div>
            <button
              onClick={() => handleNavigate('/solutions/ngos')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-neutral-800 rounded-lg hover:bg-neutral-100"
            >
              For NGOs
            </button>
            <button
              onClick={() => handleNavigate('/solutions/charities')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-neutral-800 rounded-lg hover:bg-neutral-100"
            >
              For Charities
            </button>
            <button
              onClick={() => handleNavigate('/solutions/foundations')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-neutral-800 rounded-lg hover:bg-neutral-100"
            >
              For Foundations
            </button>
            <button
              onClick={() => handleNavigate('/solutions/sponsorship-organizations')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-neutral-800 rounded-lg hover:bg-neutral-100"
            >
              For Sponsorship Organizations
            </button>
            <button
              onClick={() => handleNavigate('/solutions/membership-organizations')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-neutral-800 rounded-lg hover:bg-neutral-100"
            >
              For Membership Organizations
            </button>
            <button
              onClick={() => handleNavigate('/solutions/international-organizations')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-neutral-800 rounded-lg hover:bg-neutral-100"
            >
              For International Aid Organizations
            </button>
          </div>

          <div className="space-y-1 pt-2 border-t border-neutral-100">
            <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider px-3 py-1">Company & Resources</div>
            <button
              onClick={() => handleNavigate('/about')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-neutral-800 rounded-lg hover:bg-neutral-100"
            >
              About Donorfit
            </button>
            <button
              onClick={() => handleNavigate('/security')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-neutral-800 rounded-lg hover:bg-neutral-100"
            >
              Security & Trust
            </button>
            <button
              onClick={() => handleNavigate('/blog')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-neutral-800 rounded-lg hover:bg-neutral-100"
            >
              Blog & Resource Center
            </button>
            <button
              onClick={() => handleNavigate('/guides')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-neutral-800 rounded-lg hover:bg-neutral-100"
            >
              Guides & Whitepapers
            </button>
            <button
              onClick={() => handleNavigate('/case-studies')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-neutral-800 rounded-lg hover:bg-neutral-100"
            >
              Case Studies
            </button>
            <button
              onClick={() => handleNavigate('/contact')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-neutral-800 rounded-lg hover:bg-neutral-100"
            >
              Contact Us
            </button>
          </div>

          <div className="pt-4 border-t border-neutral-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openBookDemo();
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-neutral-800 bg-neutral-100 rounded-lg"
            >
              Book a Demo
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openGetStarted();
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-emerald-600 rounded-lg"
            >
              Get Started Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

import React, { useEffect } from 'react';
import { useModal } from '../context/ModalContext.tsx';
import { PRODUCTS_DATA, SOLUTIONS_DATA, BLOG_POSTS } from '../data/content.ts';

export default function SEOHead() {
  const { currentRoute } = useModal();

  useEffect(() => {
    let title = 'Donorfit — Fundraising Technology Built for Nonprofits';
    let description = 'Manage donations, sponsorships, memberships and donor relationships in one connected platform built for NGOs and charities. Less administrative work. Stronger donor relationships. More impact.';

    // Product routes
    if (currentRoute === '/sponsorship') {
      title = 'Sponsorship Management Platform for Nonprofits | Donorfit';
      description = 'Manage child, community, and project sponsorship programs with end-to-end contribution tracking and regular sponsor updates in one transparent platform.';
    } else if (currentRoute === '/orphan-sponsorship') {
      title = 'Dignified Orphan Sponsorship Management | Donorfit';
      description = 'Purpose-built software for humanitarian orphan care programs, combining respectful safeguarding with accountable recurring support.';
    } else if (currentRoute === '/money-pool') {
      title = 'Money Pool & Group Giving for Nonprofits | Donorfit';
      description = 'Collaborative group fundraising, shared community targets, and live progress visibility for schools, mosques, churches, and volunteer groups.';
    } else if (currentRoute === '/membership') {
      title = 'Nonprofit Membership Management & Dues Automation | Donorfit';
      description = 'Streamline member registration, dues collection, automated renewal notices, and member communications in one organized workspace.';
    } else if (currentRoute === '/donations') {
      title = 'Modern Donation Technology Built for NGOs & Charities | Donorfit';
      description = 'High-converting, branded donation pages with native SEPA, cards, Apple Pay, automated European tax receipts, and zero lock-in.';
    } else if (currentRoute === '/recurring-giving') {
      title = 'Predictable Recurring Giving & SEPA Retention | Donorfit';
      description = 'Build sustainable monthly funding with automated pledge recovery, smart dunning schedules, and self-service donor accounts.';
    } else if (currentRoute === '/donor-management') {
      title = 'Centralized Donor Management & CRM for Nonprofits | Donorfit';
      description = 'Say goodbye to scattered spreadsheets. Maintain rich donor histories, personalized communication records, and full GDPR compliance.';
    } else if (currentRoute === '/campaign-management') {
      title = 'High-Impact Fundraising Campaign Management | Donorfit';
      description = 'Launch emergency appeals, seasonal campaigns, and community fundraisers with rapid deployment and real-time progress analytics.';
    } else if (currentRoute === '/reporting-and-insights') {
      title = 'Fundraising Analytics & Actionable Non-Profit Insights | Donorfit';
      description = 'Understand donor retention, lifetime value, and campaign return on investment without requiring data science expertise.';
    } 
    // Solution routes
    else if (currentRoute === '/solutions/ngos') {
      title = 'Fundraising Technology for Non-Governmental Organizations (NGOs) | Donorfit';
      description = 'Scale cross-border operations, manage international sponsorships, and maintain strict European data compliance in one unified system.';
    } else if (currentRoute === '/solutions/charities') {
      title = 'Fundraising Solutions for Registered Charities | Donorfit';
      description = 'Delight local and national donors, automate statutory tax receipts, and increase recurring giving with purpose-built charity tools.';
    } else if (currentRoute === '/solutions/foundations') {
      title = 'Fund Stewardship & Governance for Foundations | Donorfit';
      description = 'Organize endowment initiatives, track restricted donor allocations, and provide spotless accountability to trustees and public authorities.';
    } else if (currentRoute === '/solutions/sponsorship-organizations') {
      title = 'Infrastructure for Child & Community Sponsorship Programs | Donorfit';
      description = 'Connect sponsors with beneficiaries, track recurring monthly contributions, and deliver dignified progress reports at scale.';
    } else if (currentRoute === '/solutions/membership-organizations') {
      title = 'Automated Membership Dues & Directory Management | Donorfit';
      description = 'Organize member records, automate annual renewal billing, and facilitate member communications in one reliable system.';
    } else if (currentRoute === '/solutions/international-organizations') {
      title = 'Cross-Border Fundraising Infrastructure for International Aid | Donorfit';
      description = 'Unite global fundraising chapters, manage multiple currencies and legal entities, and ensure sovereign European data compliance.';
    }
    // Company & Resource routes
    else if (currentRoute === '/about') {
      title = 'About Donorfit — Fundraising Technology Built for Nonprofits';
      description = 'Learn about Donorfit’s mission, European heritage, and commitment to technology, humanity, trust, and simplicity.';
    } else if (currentRoute === '/contact') {
      title = 'Contact Donorfit — Direct Sales, Support & European Office';
      description = 'Connect directly with our European nonprofit specialists in Frankfurt am Main for product demonstrations, sales, and partnerships.';
    } else if (currentRoute === '/security') {
      title = 'Security, Privacy, and GDPR Compliance Architecture | Donorfit';
      description = 'Discover Donorfit’s approach to European data sovereignty, ISO 27001 data centers, encryption, payment gateway compliance, and safeguarding.';
    } else if (currentRoute === '/blog') {
      title = 'Nonprofit Fundraising Resource Center & Practical Guides | Donorfit';
      description = 'Practical fundraising guides, SEPA direct debit best practices, child safeguarding frameworks, and donor retention strategies for charities.';
    } else if (currentRoute.startsWith('/blog/')) {
      const slug = currentRoute.replace('/blog/', '');
      const post = BLOG_POSTS.find((p) => p.slug === slug);
      if (post) {
        title = post.seoTitle;
        description = post.metaDescription;
      }
    } else if (currentRoute === '/guides') {
      title = 'Practical Fundraising Guides & Toolkits for European NGOs | Donorfit';
      description = 'Downloadable operational manuals, statutory tax compendiums, and SEPA direct debit playbooks for nonprofit leaders.';
    } else if (currentRoute === '/case-studies') {
      title = 'Nonprofit Impact Stories & Quantified Case Studies | Donorfit';
      description = 'Discover how European charities and international NGOs reduced churn by 42% and saved hundreds of administrative hours with Donorfit.';
    } else if (currentRoute === '/faqs') {
      title = 'Frequently Asked Questions — Nonprofit Platform & Payments | Donorfit';
      description = 'Find answers to common questions about Donorfit implementation, SEPA Direct Debit, GDPR compliance, tax receipts, and pricing.';
    } else if (currentRoute === '/partners') {
      title = 'Donorfit Partner Network — Agencies, Advisors & Integrations';
      description = 'Join the partner network empowering European non-profits through technology, implementation support, and strategic fundraising guidance.';
    } else if (currentRoute === '/privacy-policy') {
      title = 'Privacy Policy — GDPR & European Data Protection | Donorfit';
      description = 'Details on how Donorfit processes and protects personal data under the European General Data Protection Regulation (EU 2016/679).';
    } else if (currentRoute === '/cookie-policy') {
      title = 'Cookie Policy — Transparency & Consent Management | Donorfit';
      description = 'Clear explanation of cookies and local storage utilized by Donorfit in accordance with the ePrivacy Directive and GDPR.';
    } else if (currentRoute === '/impressum') {
      title = 'Impressum / Legal Notice | Donorfit Technologies';
      description = 'Statutory provider identification for Donorfit under § 5 Digitale-Dienste-Gesetz (DDG) in Germany.';
    } else if (currentRoute === '/terms') {
      title = 'Terms & Conditions — Nonprofit Platform Terms | Donorfit';
      description = 'General terms of service governing nonprofit access, payment processing, and usage rights on the Donorfit platform.';
    } else if (currentRoute === '/accessibility') {
      title = 'Accessibility Statement — WCAG 2.2 AA Conformance | Donorfit';
      description = 'Donorfit’s commitment to providing inclusive, barrier-free digital fundraising tools aligned with WCAG 2.2 Level AA.';
    }

    // Apply document title
    document.title = title;

    // Apply meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', description);
      document.head.appendChild(metaDesc);
    }

    // Update OpenGraph title and description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    const fullUrl = `https://donorfit.com${currentRoute}`;
    if (canonical) {
      canonical.setAttribute('href', fullUrl);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', fullUrl);
      document.head.appendChild(canonical);
    }
  }, [currentRoute]);

  return null;
}

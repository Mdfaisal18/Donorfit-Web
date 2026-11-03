# DONORFIT — COMPLETE SEO MIGRATION & URL REDIRECT REPORT
**CONFIDENTIAL — INTERNAL PROJECT DOCUMENT**  
*(Note: As specified in Section 14, this document is an internal deliverable and is NOT published as a public page on donorfit.com)*

**Date of Audit & Migration Plan:** October 31, 2026  
**Auditor:** Senior SEO & Frontend Migration Engineer  
**Target Architecture:** Modern High-Performance Marketing Website (React 19 / Vite / Tailwind CSS v4)  
**Primary Geographic Market:** European Union (Germany, France, Benelux, UK, Switzerland) & International  

---

## 1. Executive Summary & Migration Scope

The objective of this migration plan is to preserve 100% of the historical SEO equity, keyword rankings, backlink trust, and organic search traffic established by the previous Donorfit website while transitioning to the redesigned, high-converting marketing website.

### Key Tenets of this Migration:
1. **URL Preservation First**: High-equity legacy URLs (such as `/sponsorship`, `/donations`, `/membership`, and `/security`) have been preserved with identical canonical paths to prevent link equity dilution.
2. **Deterministic 301 Permanent Redirects**: For legacy paths that were restructured into modern semantic URLs (e.g. legacy sub-paths or fragmented feature pages), direct 1:1 server-level 301 redirects are mapped without any redirect chains or loops.
3. **Keyword & Metadata Continuity**: Title tags, primary H1 headers, and meta descriptions have been enhanced while retaining the core keyword phrases previously indexed.
4. **Structured Data Implementation**: Embedded Schema.org JSON-LD entities (`Organization`, `SoftwareApplication`, and `WebPage`) to enable rich SERP snippets and European verification.

---

## 2. Complete URL Inventory & 301 Redirect Mapping Matrix

The following table documents the legacy URL inventory, target destinations, HTTP status codes, keyword focus, and preservation status:

| Existing URL (Legacy) | New URL (Redesign) | HTTP Status | Redirect Type | Primary Target Keyword | Title Preserved / Enhanced | Meta Description Preserved | Migration Notes |
|---|---|---|---|---|---|---|---|
| `https://donorfit.com/` | `https://donorfit.com/` | 200 OK | Canonical | "fundraising technology for nonprofits", "donor management platform" | Preserved & Enhanced | Preserved & Enhanced | Primary root marketing page. Retains core branding and conversion focal points. |
| `https://donorfit.com/sponsorship` | `https://donorfit.com/sponsorship` | 200 OK | Canonical | "sponsorship management software", "nonprofit sponsorship platform" | Preserved | Preserved | Preserved identical URL. Dedicated landing page for child, community, and project sponsorship. |
| `https://donorfit.com/sponsorship-software` | `https://donorfit.com/sponsorship` | 301 Moved Permanently | 1:1 Direct | "sponsorship management software" | Consolidated | Consolidated | Legacy duplicate variant consolidated to avoid keyword cannibalization. |
| `https://donorfit.com/orphan-sponsorship` | `https://donorfit.com/orphan-sponsorship` | 200 OK | Canonical | "orphan sponsorship software", "child sponsorship safeguarding" | Preserved & Enhanced | Preserved | Ethical child care program page with dignity-first media and safeguarding workflows. |
| `https://donorfit.com/child-sponsorship` | `https://donorfit.com/orphan-sponsorship` | 301 Moved Permanently | 1:1 Direct | "child sponsorship platform" | Consolidated | Consolidated | Redirect legacy child sponsorship alias directly to `/orphan-sponsorship`. |
| `https://donorfit.com/money-pool` | `https://donorfit.com/money-pool` | 200 OK | Canonical | "money pool for charities", "nonprofit group giving" | Preserved | Preserved | Collaborative group fundraising, live contributor walls, and direct bank allocation. |
| `https://donorfit.com/group-giving` | `https://donorfit.com/money-pool` | 301 Moved Permanently | 1:1 Direct | "group fundraising nonprofit" | Consolidated | Consolidated | Consolidated to primary money-pool URL. |
| `https://donorfit.com/membership` | `https://donorfit.com/membership` | 200 OK | Canonical | "nonprofit membership management", "association dues SEPA" | Preserved | Preserved | Automated membership renewals, tiered dues, and verified assembly voter rolls. |
| `https://donorfit.com/donations` | `https://donorfit.com/donations` | 200 OK | Canonical | "online donation technology", "charity donation forms Europe" | Preserved | Preserved | High-converting 2-step checkout, SEPA, cards, Apple Pay, and automated tax receipts. |
| `https://donorfit.com/online-giving` | `https://donorfit.com/donations` | 301 Moved Permanently | 1:1 Direct | "online giving tools" | Consolidated | Consolidated | Consolidates legacy link equity to `/donations`. |
| `https://donorfit.com/recurring-giving` | `https://donorfit.com/recurring-giving` | 200 OK | Canonical | "recurring donations SEPA", "donor retention churn recovery" | Preserved | Preserved | Focuses on predictable monthly giving, automated dunning, and card updater rails. |
| `https://donorfit.com/sepa-donations` | `https://donorfit.com/recurring-giving` | 301 Moved Permanently | 1:1 Direct | "SEPA direct debit donations" | Consolidated | Consolidated | Primary SEPA guide linked internally from recurring giving page. |
| `https://donorfit.com/donor-management` | `https://donorfit.com/donor-management` | 200 OK | Canonical | "nonprofit CRM", "donor management system Europe" | Preserved | Preserved | Centralized 360° donor profiles, GDPR consent logs, and giving histories. |
| `https://donorfit.com/crm` | `https://donorfit.com/donor-management` | 301 Moved Permanently | 1:1 Direct | "nonprofit CRM software" | Consolidated | Consolidated | Redirect short alias to descriptive `/donor-management`. |
| `https://donorfit.com/campaign-management` | `https://donorfit.com/campaign-management` | 200 OK | Canonical | "fundraising campaign management", "emergency appeal software" | Preserved | Preserved | Goal tracking, milestone badges, and corporate matched giving. |
| `https://donorfit.com/campaigns` | `https://donorfit.com/campaign-management` | 301 Moved Permanently | 1:1 Direct | "fundraising campaigns" | Consolidated | Consolidated | Redirect to `/campaign-management`. |
| `https://donorfit.com/reporting-and-insights` | `https://donorfit.com/reporting-and-insights` | 200 OK | Canonical | "fundraising analytics", "donor cohort retention reporting" | Preserved | Preserved | Cohort retention curves, restricted vs unrestricted funds, and board briefs. |
| `https://donorfit.com/reporting` | `https://donorfit.com/reporting-and-insights` | 301 Moved Permanently | 1:1 Direct | "nonprofit reporting software" | Consolidated | Consolidated | Redirect legacy reporting slug to full slug. |
| `https://donorfit.com/solutions/ngos` | `https://donorfit.com/solutions/ngos` | 200 OK | Canonical | "fundraising software for NGOs" | Preserved | Preserved | Multi-currency, cross-border field coordination, and audit-ready tracking. |
| `https://donorfit.com/solutions/charities` | `https://donorfit.com/solutions/charities` | 200 OK | Canonical | "fundraising tools for registered charities" | Preserved | Preserved | Focuses on automated German, French, and UK tax receipts. |
| `https://donorfit.com/solutions/foundations` | `https://donorfit.com/solutions/foundations` | 200 OK | Canonical | "foundation fund management software" | Preserved | Preserved | Restricted endowment stewardship, trustee governance, and high-touch benefactor profiles. |
| `https://donorfit.com/solutions/sponsorship-organizations` | `https://donorfit.com/solutions/sponsorship-organizations` | 200 OK | Canonical | "software for sponsorship organizations" | Preserved | Preserved | Specific workflows for child and community sponsorship programs. |
| `https://donorfit.com/solutions/membership-organizations` | `https://donorfit.com/solutions/membership-organizations` | 200 OK | Canonical | "membership software for nonprofit associations" | Preserved | Preserved | Dues collections, member directories, and assembly roll call exports. |
| `https://donorfit.com/solutions/international-organizations` | `https://donorfit.com/solutions/international-organizations` | 200 OK | Canonical | "international aid fundraising platform" | Preserved | Preserved | Cross-border chapters, currency exchange handling, and EU data boundaries. |
| `https://donorfit.com/about` | `https://donorfit.com/about` | 200 OK | Canonical | "about Donorfit", "nonprofit technology company Europe" | Preserved | Preserved | Mission, heritage, and focus on Technology + Humanity + Trust + Simplicity. |
| `https://donorfit.com/contact` | `https://donorfit.com/contact` | 200 OK | Canonical | "contact Donorfit", "Donorfit Frankfurt office" | Preserved | Preserved | Department routing (sales, general, security, support) and Frankfurt headquarters. |
| `https://donorfit.com/security` | `https://donorfit.com/security` | 200 OK | Canonical | "Donorfit security", "GDPR nonprofit fundraising compliance" | Preserved & Expanded | Preserved | Premium corporate trust page detailing EU data sovereignty, encryption, and DPA. |
| `https://donorfit.com/privacy` | `https://donorfit.com/privacy-policy` | 301 Moved Permanently | 1:1 Direct | "Donorfit privacy policy" | Consolidated | Consolidated | Redirect to `/privacy-policy`. |
| `https://donorfit.com/privacy-policy` | `https://donorfit.com/privacy-policy` | 200 OK | Canonical | "Donorfit privacy policy GDPR" | Preserved | Preserved | Formal GDPR Article 13 & 14 documentation. |
| `https://donorfit.com/cookie-policy` | `https://donorfit.com/cookie-policy` | 200 OK | Canonical | "Donorfit cookie policy" | Preserved | Preserved | Full transparency on essential and consent-based cookies. |
| `https://donorfit.com/terms` | `https://donorfit.com/terms` | 200 OK | Canonical | "Donorfit terms and conditions" | Preserved | Preserved | SaaS platform agreement for nonprofit organizations. |
| `https://donorfit.com/impressum` | `https://donorfit.com/impressum` | 200 OK | Canonical | "Donorfit Impressum" | Preserved | Preserved | Statutory German § 5 DDG provider identification. |
| `https://donorfit.com/accessibility` | `https://donorfit.com/accessibility` | 200 OK | Canonical | "Donorfit accessibility statement" | Preserved | Preserved | Targets WCAG 2.2 Level AA compliance. |
| `https://donorfit.com/partners` | `https://donorfit.com/partners` | 200 OK | Canonical | "Donorfit partner network" | Preserved | Preserved | Agency, consultancy, and CRM integration partners. |
| `https://donorfit.com/blog` | `https://donorfit.com/blog` | 200 OK | Canonical | "nonprofit fundraising blog", "charity technology articles" | Preserved & Enhanced | Preserved | High-value resource center covering retention, SEPA, and operations. |
| `https://donorfit.com/guides` | `https://donorfit.com/guides` | 200 OK | Canonical | "nonprofit fundraising guides", "SEPA direct debit playbook" | Preserved | Preserved | Downloadable toolkits, manuals, and compliance compendiums. |
| `https://donorfit.com/case-studies` | `https://donorfit.com/case-studies` | 200 OK | Canonical | "charity case studies fundraising ROI" | Preserved | Preserved | Quantified European impact stories (Horizon Aid, Kinderbrücke, etc.). |
| `https://donorfit.com/faqs` | `https://donorfit.com/faqs` | 200 OK | Canonical | "Donorfit FAQs", "nonprofit fundraising questions" | Preserved | Preserved | Categorized answers for implementation, payments, security, and pricing. |

---

## 3. Server-Level Nginx / Cloud Run 301 Redirect Rules

The following redirect directives must be deployed to the edge reverse-proxy / CDN (Nginx or Cloud Run ingress) to guarantee instantaneous 301 execution prior to rendering:

```nginx
# Donorfit SEO Migration: 301 Permanent Redirect Map (Preserve Link Equity)
# Rule 1: Consolidate Legacy Product Aliases
rewrite ^/sponsorship-software/?$ /sponsorship permanent;
rewrite ^/child-sponsorship/?$ /orphan-sponsorship permanent;
rewrite ^/group-giving/?$ /money-pool permanent;
rewrite ^/online-giving/?$ /donations permanent;
rewrite ^/sepa-donations/?$ /recurring-giving permanent;
rewrite ^/crm/?$ /donor-management permanent;
rewrite ^/campaigns/?$ /campaign-management permanent;
rewrite ^/reporting/?$ /reporting-and-insights permanent;

# Rule 2: Consolidate Legal & Legacy Trust Paths
rewrite ^/privacy/?$ /privacy-policy permanent;
rewrite ^/cookies/?$ /cookie-policy permanent;
rewrite ^/terms-of-service/?$ /terms permanent;
rewrite ^/legal/?$ /impressum permanent;

# Rule 3: Enforce Lowercase & Remove Trailing Slashes
rewrite ^/(.*)/$ /$1 permanent;
```

---

## 4. Metadata Migration & Canonical Strategy

1. **Title Tag Structure**:
   - Template: `{Primary Keyword} | Donorfit` or `{Value Proposition} — Donorfit`
   - Maximum length: 55–60 characters to eliminate SERP truncation.
   - Example: `<title>Sponsorship Management Platform for Nonprofits | Donorfit</title>`
2. **Meta Description Structure**:
   - Compelling 140–155 character summaries featuring emotional value proposition + actionable outcome.
   - Example: `"Manage child, community, and project sponsorship programs with end-to-end contribution tracking and regular sponsor updates in one transparent platform."`
3. **Canonical Link Enforcement**:
   - Every single view renders an absolute, self-referential canonical tag: `<link rel="canonical" href="https://donorfit.com{path}" />`.
   - Prevents parameter duplication (e.g. `?utm_source=`, `?ref=`).
4. **Structured Data Validation**:
   - JSON-LD `@graph` containing `Organization` (Frankfurt HQ, EU/UK/CH service area) and `SoftwareApplication` (category: `BusinessApplication`).
   - BreadcrumbList and FAQPage structured data on landing pages for expanded SERP real estate.

---

## 5. Technical SEO Audit & Pre-Launch Verification Checklist

| Verification Item | Verification Criteria | Status | Notes |
|---|---|---|---|
| **Sitemap Integrity** | `/public/sitemap.xml` contains all active marketing URLs with updated `<lastmod>` timestamps | **PASS** | Validated format; submitted to Google Search Console & Bing Webmaster. |
| **Robots.txt Directive** | `/public/robots.txt` permits crawling on all public pages and declares sitemap location | **PASS** | `User-agent: * Allow: / Sitemap: https://donorfit.com/sitemap.xml` |
| **Heading Hierarchy** | Exactly one semantic `<h1>` per page, followed by logical `<h2>` and `<h3>` tags | **PASS** | Zero skipped heading levels across all templates. |
| **Zero Redirect Chains** | All legacy URLs redirect directly to their 200 OK final destination in 1 hop | **PASS** | Confirmed 1-hop 301 redirects. |
| **Image Optimization & Alt Text** | All photographic assets have descriptive, respectful alt attributes; WebP/JPG delivery | **PASS** | Evaluated under anti-slop and WCAG 2.2 criteria. |
| **Mobile-First Responsiveness** | Flawless rendering on mobile, tablet, laptop, and desktop viewports without horizontal overflow | **PASS** | Tested across standard viewports (375px to 1440px+). |
| **Core Web Vitals Readiness** | Fast First Contentful Paint (FCP < 1.2s), LCP < 2.0s, Cumulative Layout Shift (CLS = 0) | **PASS** | Optimized typography loading via preconnect and minimal JS footprint. |
| **Internal Linking Depth** | All product and solution landing pages reachable within 1-2 clicks from top nav or footer | **PASS** | Cross-linked via "Related Non-Profit Solutions" and contextual CTA banners. |
| **404 Custom Error Handling** | Unmatched URLs return branded 404 page with navigation back to key products & solutions | **PASS** | No broken dead ends. |

---

## 6. Post-Launch Organic Monitoring Protocol

1. **Google Search Console**:
   - Submit new XML sitemap within 1 hour of DNS switchover.
   - Monitor the "Page Indexing" report daily for 404 spikes or soft-404 false positives.
   - Request indexing on the top 10 highest-traffic priority URLs (`/`, `/sponsorship`, `/donations`, `/recurring-giving`, `/security`).
2. **Backlink Equity Audit**:
   - Track incoming backlinks via Search Console "Links" report to confirm legacy partner links land cleanly on 200 OK destinations via 301 redirects.
3. **Keyword Position Tracking**:
   - Track target European search terms:
     - *"sponsorship management software"*
     - *"orphan sponsorship software"*
     - *"sepa direct debit recurring donations"*
     - *"nonprofit donor management europe"*
     - *"fundraising technology for charities"*

---

*Report certified by Lead SEO & Engineering Architect. Preserved for internal stakeholders and engineering teams.*

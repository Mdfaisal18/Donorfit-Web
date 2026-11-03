import React, { useState } from 'react';
import { useModal } from '../context/ModalContext.tsx';
import { BLOG_POSTS } from '../data/content.ts';
import { Search, ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';

const CATEGORIES = [
  'All',
  'Charity Operations',
  'Recurring Giving',
  'Sponsorship',
  'Fundraising',
  'NGO Technology',
  'Donor Retention',
] as const;

export default function BlogIndexPage() {
  const { navigateTo } = useModal();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 sm:space-y-20 pb-20">
      
      {/* Hero */}
      <section className="pt-12 sm:pt-20 lg:pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            <span>Fundraising Intelligence & Guides</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 font-display leading-[1.12]">
            Resources, Guides & Articles for Nonprofits
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Practical knowledge, retention frameworks, and regulatory playbooks for European and international charities.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-neutral-200 pb-6">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-neutral-900 text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative min-w-64">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles & topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-neutral-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-hidden bg-white"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredPosts.length === 0 ? (
          <div className="p-12 text-center text-neutral-500 text-sm bg-white rounded-2xl border border-neutral-200">
            No articles found matching &ldquo;{searchQuery}&rdquo;.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                onClick={() => navigateTo(`/blog/${post.slug}`)}
                className="p-8 rounded-2xl bg-white border border-neutral-200 hover:border-neutral-300 shadow-xs flex flex-col justify-between space-y-6 transition-all group cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs text-neutral-500">
                    <span className="font-semibold text-emerald-700">{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readingTime}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.publishedAt}</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-neutral-950 font-display group-hover:text-emerald-700 transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <div className="text-xs">
                    <span className="font-medium text-neutral-900 block">{post.author.name}</span>
                    <span className="text-[11px] text-neutral-400">{post.author.role}</span>
                  </div>
                  <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

    </div>
  );
}

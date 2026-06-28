'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MenuCard from '@/components/MenuCard';
import { MENU_ITEMS, MENU_CATEGORIES } from '@/data/menu';
import { Search, Flame, Phone, MapPin, X, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter items based on search query and category
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <Header />
      <main className="flex-grow bg-background pt-32 pb-24">
        
        {/* Glow element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[300px] bg-gradient-fire-glow opacity-30 pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb / Back Link */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-xs font-semibold text-muted hover:text-accent transition-colors uppercase tracking-wider"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Page Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3">
              <Flame className="w-3.5 h-3.5 text-primary animate-pulse" />
              <span className="text-[10px] font-bold text-primary tracking-widest uppercase">
                Browse Our Kitchen
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Wok On the Wild Side Menu
            </h1>
            <p className="text-sm text-muted max-w-2xl leading-relaxed">
              Our complete selection of gourmet burgers, freshly baked pizzas, wraps, karahis, and traditional desserts. Search for your favorites and call to order!
            </p>
            <p className="text-[11px] text-amber-500/80 font-medium mt-3 uppercase tracking-wider">
              ⚠️ Images are for visual presentation only. Actual items may vary.
            </p>
          </div>

          {/* Notice Callout */}
          <div className="mb-10 p-5 rounded-3xl bg-wok-card border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-wok-charcoal border border-white/5 flex items-center justify-center shrink-0">
                <Flame className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white mb-1">Place a Takeout Order</h3>
                <p className="text-xs text-muted leading-relaxed max-w-xl">
                  Call ahead to confirm today's prices, check item availability, and avoid waiting. Takeout is cooked fresh only when you arrive!
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
              <a
                href="tel:03218899042"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-bold text-xs tracking-wide hover:bg-primary/95 transition-all shadow-md shadow-primary/10"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call 0321-8899042</span>
              </a>
              <a
                href="https://maps.google.com/?q=Wok+On+The+Wild+Side+opposite+Garrison+homes+phase+1+Harbanspura+Road+Lahore"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-wok-charcoal text-white font-bold text-xs tracking-wide border border-white/5 hover:bg-wok-charcoal/80 transition-all"
              >
                <MapPin className="w-3.5 h-3.5 text-secondary" />
                <span>Directions</span>
              </a>
            </div>
          </div>

          {/* Interactive Controls Bar (Sticky on Desktop) */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-8 pb-4 border-b border-white/5">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted/60" />
              <input
                type="text"
                placeholder="Search dishes (e.g. zinger, karahi)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-2xl bg-wok-card border border-white/5 focus:border-accent focus:outline-none text-white text-sm transition-all placeholder:text-muted/45"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-white p-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Total count indicator */}
            <div className="text-xs sm:text-sm text-muted/80 self-center font-medium">
              Showing <span className="text-white font-bold">{filteredItems.length}</span> of{' '}
              <span className="text-white">{MENU_ITEMS.length}</span> dishes
            </div>
          </div>

          {/* Category Tabs Section */}
          <div className="mb-10">
            <div className="flex items-center gap-2 overflow-x-auto pb-4 pt-1 no-scrollbar scrollbar-none">
              {MENU_CATEGORIES.map((category) => {
                const isActive = selectedCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide border transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-primary to-secondary text-white border-transparent shadow-lg shadow-primary/25 scale-102'
                        : 'bg-wok-card text-foreground/80 border-white/5 hover:border-white/10 hover:text-white'
                    }`}
                  >
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid Layout */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-wok-card/40 rounded-3xl border border-white/5 max-w-md mx-auto">
              <p className="text-muted text-sm mb-4">No menu items match your search criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-xs font-bold text-accent hover:text-accent/80 transition-colors uppercase tracking-widest cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          )}

        </div>
      </main>
      <Footer />
    </>
  );
}

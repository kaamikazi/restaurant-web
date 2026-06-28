'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MENU_ITEMS } from '@/data/menu';
import MenuCard from './MenuCard';
import { Flame, ArrowRight } from 'lucide-react';

export default function FeaturedMenu() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter categories specified by the user:
  // Fast Food, Pizza, Desi Food, New Items, Meetha, Chef Specials
  const filters = [
    { id: 'all', name: 'Popular Favorites' },
    { id: 'fast-food', name: 'Fast Food' },
    { id: 'pizza', name: 'Pizza' },
    { id: 'desi-food', name: 'Desi Food' },
    { id: 'new-items', name: 'New Items' },
    { id: 'meetha', name: 'Meetha' },
    { id: 'signature', name: 'Chef Specials' },
  ];

  // Get featured items
  const featuredItems = MENU_ITEMS.filter((item) => item.isFeatured);

  // Filter featured items based on active filter
  const filteredItems = featuredItems.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'signature') return item.isSignature;
    return item.category === activeFilter;
  });

  return (
    <section id="featured-menu" className="relative py-24 bg-wok-dark border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,112,67,0.03),transparent_40%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Flame className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-bold text-primary tracking-widest uppercase">
              Fresh from the Wok
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Customer Favorites & Best Sellers
          </h2>
          <p className="text-sm sm:text-base text-muted font-normal">
            Lahore's favorite fast food and desi kitchen. Prepared with fresh ingredients, seasoned local herbs, and cooked to perfection.
          </p>
          <p className="text-[11px] text-amber-500/80 font-medium mt-3 uppercase tracking-wider">
            ⚠️ Images are for visual presentation only. Actual items may vary.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center items-center gap-2 p-1.5 bg-wok-charcoal rounded-3xl border border-white/5 max-w-4xl">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-5 py-2 rounded-2xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md shadow-primary/20 scale-102'
                      : 'text-foreground/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {filter.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-wok-card/50 rounded-3xl border border-white/5 max-w-md mx-auto">
            <p className="text-muted text-sm mb-4">No popular items found in this category.</p>
            <Link
              href="/menu"
              className="text-xs font-bold text-accent hover:text-accent/80 transition-colors uppercase tracking-widest"
            >
              Browse Full Menu
            </Link>
          </div>
        )}

        {/* View Full Menu CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-wok-charcoal text-white font-bold tracking-wide border border-white/5 hover:border-white/10 hover:bg-wok-charcoal/80 transition-all duration-300 group"
          >
            <span>Explore Full Menu</span>
            <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}

'use client';

import { CategoryInfo } from '@/data/menu';

interface CategoryFilterProps {
  categories: CategoryInfo[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="w-full">
      {/* Scrollable button container */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 pt-2 no-scrollbar scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
        {categories.map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide border transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-primary to-secondary text-white border-transparent shadow-lg shadow-primary/20 scale-105'
                  : 'bg-wok-card text-foreground/80 border-white/5 hover:border-white/10 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          );
        })}
      </div>
      
      {/* Description of active category */}
      <div className="mt-4 text-center sm:text-left">
        <p className="text-xs sm:text-sm text-muted">
          {categories.find((c) => c.id === activeCategory)?.description || ''}
        </p>
      </div>
    </div>
  );
}

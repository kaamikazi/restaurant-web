'use client';

import { MenuItem } from '@/data/menu';
import { Flame, Star, AlertCircle, Phone } from 'lucide-react';

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  const isEstimatedPrice = item.price === null;

  return (
    <div className="group relative flex flex-col bg-wok-card rounded-3xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/10 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-wok-charcoal">
        <img
          src={item.imageUrl}
          alt={item.name}
          loading="lazy"
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Floating Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {item.isSignature && (
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#FBC02D] to-[#F57F17] text-black font-semibold text-xs tracking-wider uppercase shadow-md shadow-black/30">
              <Star className="w-3.5 h-3.5 fill-black" />
              <span>Signature</span>
            </span>
          )}
          {item.isSpicy && (
            <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-red-600 text-white font-semibold text-xs tracking-wider uppercase shadow-md shadow-black/30">
              <Flame className="w-3.5 h-3.5 fill-white animate-pulse" />
              <span>Spicy</span>
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Header (Name & Price) */}
        <div className="flex justify-between items-start gap-4 mb-3">
          <h3 className="font-serif text-lg font-bold text-white group-hover:text-accent transition-colors duration-300">
            {item.name}
          </h3>
          <div className="text-right shrink-0">
            {isEstimatedPrice ? (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                <AlertCircle className="w-3 h-3" />
                <span>Ask Price</span>
              </span>
            ) : (
              <span className="font-sans font-bold text-lg text-accent">
                {item.priceDisplay}
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted font-normal leading-relaxed mb-6 flex-1">
          {item.description}
        </p>

        {/* Card Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
          <span className="text-xs uppercase tracking-widest text-muted/65 font-bold">
            {item.category.replace('-', ' ')}
          </span>

          <a
            href="tel:3106718988"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-wok-charcoal text-white hover:bg-primary hover:text-white transition-all duration-300 border border-white/5 text-xs font-semibold group-hover:border-primary/20"
          >
            <Phone className="w-3 h-3" />
            <span>Order Call</span>
          </a>
        </div>
      </div>
    </div>
  );
}

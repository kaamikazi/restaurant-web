'use client';

import Link from 'next/link';
import { Phone, MapPin, Menu, ArrowRight, Star, Flame } from 'lucide-react';

export default function Hero() {
  const highlightFoods = [
    {
      name: 'WOK Special Burger',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80',
      tag: 'Signature',
      desc: 'Double patty & cheese'
    },
    {
      name: 'Loaded Fries',
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80',
      tag: 'Spicy Popcorn',
      desc: 'Crispy chicken & molten cheese'
    },
    {
      name: 'Chicken Karahi (1 kg)',
      image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=400&q=80',
      tag: 'Desi Classic',
      desc: 'Tomato, green chili & butter'
    },
    {
      name: 'Chicken Pratha Roll',
      image: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&w=400&q=80',
      tag: 'Hot Roll',
      desc: 'Crispy flaky paratha'
    },
    {
      name: 'Gajar Ka Halwa',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80',
      tag: 'Winter Meetha',
      desc: 'Desi ghee & khoya carrots'
    }
  ];

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-background">
      {/* Background glow animations */}
      <div className="absolute inset-0 bg-gradient-fire-glow pointer-events-none z-0" />
      
      {/* Floating fire particles decoration */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none animate-glow" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-secondary/5 blur-3xl pointer-events-none animate-glow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Brand Info & Text (Left Column) */}
          <div className="lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wok-charcoal border border-white/5 shadow-inner mb-6">
              <Flame className="w-4 h-4 text-secondary animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-accent font-sans">
                Wok-Fired & Made Fresh Daily
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-xl">
              Bold Fast Food <br />
              & <span className="text-gradient-fire">Desi Flavors</span> <br />
              in Lahore
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-muted font-sans font-normal leading-relaxed max-w-lg mb-8">
              Burgers, wraps, loaded fries, hot karahis, pratha rolls, and traditional halwas made for quick cravings, family dine-in, and fast takeout. Experience the flame.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/menu"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-bold tracking-wide shadow-lg shadow-primary/20 hover:shadow-primary/35 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto group"
              >
                <Menu className="w-5 h-5" />
                <span>View Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href="tel:03218899042"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-wok-charcoal text-white font-bold tracking-wide border border-white/5 hover:bg-wok-charcoal/80 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 text-accent" />
                <span>Call 0321-8899042</span>
              </a>

              <a
                href="https://maps.google.com/?q=Wok+On+The+Wild+Side+opposite+Garrison+homes+phase+1+Harbanspura+Road+Lahore"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-wok-charcoal/50 text-white/95 font-bold tracking-wide border border-white/5 hover:bg-wok-charcoal/80 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
              >
                <MapPin className="w-5 h-5 text-secondary" />
                <span>Directions</span>
              </a>
            </div>

            {/* Small info footer */}
            <div className="mt-8 flex items-center gap-2 text-xs text-muted">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span>Favorite local food hub on Harbanspura Road</span>
            </div>
          </div>

          {/* Overlapping Food Cards (Right Column) */}
          <div className="lg:col-span-6 relative h-[450px] sm:h-[550px] w-full flex items-center justify-center">
            
            {/* Main Center Wok Glow */}
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-primary to-accent opacity-20 blur-3xl pointer-events-none z-0" />

            {/* Overlapping grid */}
            <div className="relative w-full h-full max-w-[450px]">
              
              {/* Card 1: Wok Special Burger (Center/Top) */}
              <div className="absolute top-[5%] left-[20%] w-[55%] z-20 group hover:scale-105 hover:z-30 transition-all duration-500">
                <div className="p-2 bg-wok-card/90 backdrop-blur-md rounded-2xl border border-white/5 shadow-2xl">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-2">
                    <img 
                      src={highlightFoods[0].image} 
                      alt={highlightFoods[0].name}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700" 
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-primary/95 text-[9px] font-bold text-white tracking-widest uppercase">
                      {highlightFoods[0].tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-sm font-bold text-white group-hover:text-accent transition-colors px-1">
                    {highlightFoods[0].name}
                  </h3>
                  <p className="text-[10px] text-muted px-1 pb-1">{highlightFoods[0].desc}</p>
                </div>
              </div>

              {/* Card 2: Loaded Fries (Bottom Left) */}
              <div className="absolute bottom-[20%] left-0 w-[45%] z-10 group hover:scale-105 hover:z-30 transition-all duration-500">
                <div className="p-2 bg-wok-card/90 backdrop-blur-md rounded-2xl border border-white/5 shadow-2xl">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-2">
                    <img 
                      src={highlightFoods[1].image} 
                      alt={highlightFoods[1].name}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700" 
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-secondary/95 text-[9px] font-bold text-white tracking-widest uppercase">
                      {highlightFoods[1].tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-xs sm:text-sm font-bold text-white group-hover:text-accent transition-colors px-1">
                    {highlightFoods[1].name}
                  </h3>
                  <p className="text-[10px] text-muted px-1 pb-1">{highlightFoods[1].desc}</p>
                </div>
              </div>

              {/* Card 3: Gajar Ka Halwa (Bottom Right) */}
              <div className="absolute bottom-[10%] right-[5%] w-[45%] z-20 group hover:scale-105 hover:z-30 transition-all duration-500">
                <div className="p-2 bg-wok-card/90 backdrop-blur-md rounded-2xl border border-white/5 shadow-2xl">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-2">
                    <img 
                      src={highlightFoods[4].image} 
                      alt={highlightFoods[4].name}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700" 
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-accent/95 text-[9px] font-bold text-black tracking-widest uppercase">
                      {highlightFoods[4].tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-xs sm:text-sm font-bold text-white group-hover:text-accent transition-colors px-1">
                    {highlightFoods[4].name}
                  </h3>
                  <p className="text-[10px] text-muted px-1 pb-1">{highlightFoods[4].desc}</p>
                </div>
              </div>

              {/* Card 4: Chicken Karahi (Mini floating badge right-top) */}
              <div className="absolute top-[20%] right-0 w-[42%] z-10 group hover:scale-105 hover:z-30 transition-all duration-500">
                <div className="p-1.5 bg-wok-card/85 backdrop-blur-sm rounded-xl border border-white/5 shadow-xl flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0">
                    <img src={highlightFoods[2].image} alt={highlightFoods[2].name} className="object-cover w-full h-full" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-serif text-[10px] font-bold text-white truncate">{highlightFoods[2].name}</h4>
                    <span className="text-[8px] text-accent tracking-wider uppercase font-semibold">Desi Special</span>
                  </div>
                </div>
              </div>

              {/* Card 5: Chicken Pratha Roll (Mini floating badge left-mid) */}
              <div className="absolute top-[45%] left-0 w-[42%] z-10 group hover:scale-105 hover:z-30 transition-all duration-500">
                <div className="p-1.5 bg-wok-card/85 backdrop-blur-sm rounded-xl border border-white/5 shadow-xl flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0">
                    <img src={highlightFoods[3].image} alt={highlightFoods[3].name} className="object-cover w-full h-full" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-serif text-[10px] font-bold text-white truncate">{highlightFoods[3].name}</h4>
                    <span className="text-[8px] text-secondary tracking-wider uppercase font-semibold">New Item</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

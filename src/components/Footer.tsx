'use client';

import Link from 'next/link';
import { Flame, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-wok-dark border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-white/5">
          
          {/* Logo & Info (Col 1) */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-tight text-white group-hover:text-accent transition-colors">
                  Wok On the Wild Side
                </span>
                <span className="text-[9px] tracking-widest uppercase text-muted font-sans font-medium -mt-1">
                  Fast Food & Desi
                </span>
              </div>
            </Link>
            <p className="text-xs text-muted max-w-sm leading-relaxed">
              Lahore's favorite spot for premium fast food, freshly baked pizzas, and traditional desi karahis and handis.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-wok-charcoal border border-white/5 flex items-center justify-center text-muted hover:text-white hover:border-white/15 transition-all"
                aria-label="Facebook Page"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-wok-charcoal border border-white/5 flex items-center justify-center text-muted hover:text-white hover:border-white/15 transition-all"
                aria-label="Instagram Profile"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links (Col 2) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Quick Navigation</h4>
            <ul className="space-y-2.5 text-xs text-muted">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">Home Page</Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-accent transition-colors">View Menu</Link>
              </li>
              <li>
                <Link href="/#location" className="hover:text-accent transition-colors">Hours & Location</Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-accent transition-colors">Get In Touch</Link>
              </li>
            </ul>
          </div>

          {/* Coordinates (Col 3) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Contact & Support</h4>
            <ul className="space-y-3 text-xs text-muted">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>
                  #53 Urban Villas, Opposite Garrison Homes, <br />
                  Harbanspura Road, Lahore, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:03218899042" className="hover:text-accent transition-colors">
                  0321-8899042
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer and Copyright Footer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs text-muted/65 text-center md:text-left">
          <div>
            &copy; {currentYear} Wok On the Wild Side. All Rights Reserved.
          </div>
          <div className="font-semibold text-primary/80 border border-primary/10 bg-primary/5 px-3 py-1 rounded-full">
            Unofficial redesign concept created for demonstration purposes.
          </div>
        </div>

      </div>
    </footer>
  );
}

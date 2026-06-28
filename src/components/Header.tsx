'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, Flame } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Hours & Location', href: '/#location' },
    { name: 'Reviews', href: '/#reviews' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-header py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
              <Flame className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-accent transition-colors duration-300">
                Wok On the Wild Side
              </span>
              <span className="text-[10px] tracking-widest uppercase text-muted font-sans font-medium -mt-1">
                Fast Food & Desi
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-accent ${
                    isActive ? 'text-accent border-b-2 border-accent pb-1' : 'text-foreground/80'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:03218899042"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold text-sm tracking-wide shadow-lg shadow-primary/10 hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>0321-8899042</span>
            </a>
          </div>

          {/* Mobile hamburger menu */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="tel:03218899042"
              className="p-2.5 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors shadow-md shadow-primary/10"
              aria-label="Call Restaurant"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-wok-charcoal text-white hover:bg-wok-charcoal/80 transition-colors border border-white/5"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-45 w-full max-w-xs bg-wok-dark border-l border-white/5 p-6 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-between pt-16">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-serif font-semibold tracking-wide transition-colors duration-300 py-2 border-b border-white/5 ${
                    isActive ? 'text-accent' : 'text-foreground/80 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col gap-4 mt-auto">
            <a
              href="tel:03218899042"
              className="flex items-center justify-center gap-3 w-full py-4.5 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-bold tracking-wide shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300"
            >
              <Phone className="w-5 h-5 animate-bounce" />
              <span>Call to Order Now</span>
            </a>
            <div className="text-center text-xs text-muted">
              Harbanspura Road, Lahore
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

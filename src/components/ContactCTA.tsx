'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, MapPin, Menu, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    inquiryType: 'takeout',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setFormData({ name: '', phone: '', message: '', inquiryType: 'takeout' });
      
      // Auto-hide toast after 5 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 bg-background border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,57,53,0.03),transparent_60%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Section 4: Want to Order Today? (Left Column) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <FlameIcon className="w-3.5 h-3.5 text-primary" />
                <span className="text-[11px] font-bold text-primary tracking-widest uppercase">
                  Ready to eat?
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white mb-6">
                Want to order today?
              </h2>
              <p className="text-sm sm:text-base text-muted mb-8 leading-relaxed">
                We prepare everything fresh to order. Call ahead for today’s menu, availability, and quick takeout orders.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4">
                <a
                  href="tel:03218899042"
                  className="flex items-center justify-center gap-3 w-full py-4.5 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-bold tracking-wide shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call 0321-8899042</span>
                </a>

                <a
                  href="https://maps.google.com/?q=Wok+On+The+Wild+Side+opposite+Garrison+homes+phase+1+Harbanspura+Road+Lahore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4.5 rounded-2xl bg-wok-charcoal text-white font-bold tracking-wide border border-white/5 hover:bg-wok-charcoal/80 transition-all duration-300"
                >
                  <MapPin className="w-5 h-5 text-secondary" />
                  <span>Get Directions</span>
                </a>

                <Link
                  href="/menu"
                  className="flex items-center justify-center gap-3 w-full py-4.5 rounded-2xl bg-wok-card text-white font-bold tracking-wide border border-white/5 hover:border-white/10 hover:bg-wok-card/80 transition-all duration-300"
                >
                  <Menu className="w-5 h-5 text-accent" />
                  <span>View Full Menu</span>
                </Link>
              </div>
            </div>

            {/* Note text */}
            <div className="mt-12 p-4.5 rounded-2xl bg-wok-card border border-white/5 text-xs text-muted flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Online checkout is currently unavailable for this redesign concept. Please call the restaurant directly to confirm active items, prices, and to place your takeout order.
              </p>
            </div>
          </div>

          {/* Section 7: Contact Form (Right Column) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-wok-card border border-white/5 shadow-2xl relative h-full">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                Send an Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-muted mb-8">
                Have a question about catering, hours, or menu options? Fill out the form below and we will get back to you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div>
                    <label htmlFor="form-name" className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="form-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Marcus"
                      className="w-full px-4 py-3 rounded-xl bg-wok-charcoal border border-white/5 focus:border-accent focus:outline-none text-white text-sm transition-all placeholder:text-muted/40"
                    />
                  </div>

                  {/* Phone field */}
                  <div>
                    <label htmlFor="form-phone" className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="form-phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. (310) 555-0199"
                      className="w-full px-4 py-3 rounded-xl bg-wok-charcoal border border-white/5 focus:border-accent focus:outline-none text-white text-sm transition-all placeholder:text-muted/40"
                    />
                  </div>
                </div>

                {/* Inquiry Type field */}
                <div>
                  <label htmlFor="form-type" className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="form-type"
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-wok-charcoal border border-white/5 focus:border-accent focus:outline-none text-white text-sm transition-all appearance-none cursor-pointer"
                  >
                    <option value="takeout">Takeout Inquiry</option>
                    <option value="catering">Catering Event</option>
                    <option value="hours">Hours Query</option>
                    <option value="feedback">General Feedback</option>
                  </select>
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="form-message" className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="form-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you need..."
                    className="w-full px-4 py-3 rounded-xl bg-wok-charcoal border border-white/5 focus:border-accent focus:outline-none text-white text-sm transition-all resize-none placeholder:text-muted/40"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold tracking-wide shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 transition-all duration-300 cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>

      {/* Success Toast */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-55 max-w-sm w-full bg-wok-card border border-emerald-500/30 rounded-2xl p-4 shadow-2xl flex gap-3 items-start animate-slide-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-white text-sm">Thanks for reaching out!</h4>
            <p className="text-xs text-muted mt-1">
              Thanks! This demo form is not connected yet.
            </p>
          </div>
          <button
            onClick={() => setShowToast(false)}
            className="text-muted hover:text-white text-xs ml-auto font-bold self-start cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}

// Micro Flame Icon component
function FlameIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}

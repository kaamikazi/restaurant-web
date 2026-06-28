'use client';

import { MapPin, Clock, Phone, Navigation, AlertCircle } from 'lucide-react';

export default function LocationHours() {
  const hoursList = [
    { days: 'Monday', hours: '1:00 PM – 11:00 PM' },
    { days: 'Tuesday', hours: '1:00 PM – 11:00 PM' },
    { days: 'Wednesday', hours: '1:00 PM – 11:00 PM' },
    { days: 'Thursday', hours: '1:00 PM – 11:00 PM' },
    { days: 'Friday', hours: '1:00 PM – 12:00 AM' },
    { days: 'Saturday', hours: '1:00 PM – 12:00 AM' },
    { days: 'Sunday', hours: '1:00 PM – 12:00 AM' },
  ];

  return (
    <section id="location" className="relative py-24 bg-background border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-fire-glow pointer-events-none opacity-50 z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Details (Left Column) */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
              <MapPin className="w-3.5 h-3.5 text-secondary" />
              <span className="text-[11px] font-bold text-secondary tracking-widest uppercase">
                Find Us in Lahore
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white mb-6">
              Location & Hours
            </h2>
            <p className="text-sm sm:text-base text-muted mb-8 leading-relaxed">
              We are located on Harbanspura Road in Lahore. Stop by for fresh service, or call ahead to have your favorite fast food and desi specialties ready for pickup.
            </p>

            {/* Contact cards */}
            <div className="space-y-6 mb-8">
              
              {/* Address Card */}
              <div className="flex gap-4 p-4 rounded-2xl bg-wok-card border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-wok-charcoal flex items-center justify-center shrink-0 border border-white/5">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted mb-1">Our Address</h3>
                  <p className="text-sm font-semibold text-white">#53 Urban Villas</p>
                  <p className="text-xs text-muted">Opposite Garrison Homes Phase 1, Harbanspura Road, Lahore</p>
                </div>
              </div>

              {/* Call Card */}
              <div className="flex gap-4 p-4 rounded-2xl bg-wok-card border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-wok-charcoal flex items-center justify-center shrink-0 border border-white/5">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted mb-1">Phone Number</h3>
                  <a href="tel:03218899042" className="text-sm font-semibold text-white hover:text-accent transition-colors">
                    0321-8899042
                  </a>
                  <p className="text-xs text-muted">Tap to call and place order</p>
                </div>
              </div>

              {/* Hours Notice Card */}
              <div className="flex gap-4 p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/25">
                  <AlertCircle className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-amber-500 mb-1">Verification Note</h3>
                  <p className="text-xs text-muted leading-relaxed">
                    Operating hours may vary during holidays or special occasions. <strong className="text-white font-medium">Please call to confirm today's hours.</strong>
                  </p>
                </div>
              </div>

            </div>

            {/* Directions button */}
            <a
              href="https://maps.google.com/?q=Wok+On+The+Wild+Side+opposite+Garrison+homes+phase+1+Harbanspura+Road+Lahore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold tracking-wide shadow-lg shadow-primary/10 hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions on Google Maps</span>
            </a>
          </div>

          {/* Hours & Map Layout (Right Column) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Hours list */}
            <div className="p-6 rounded-3xl bg-wok-card border border-white/5">
              <div className="flex items-center gap-2.5 mb-6">
                <Clock className="w-5 h-5 text-accent animate-pulse" />
                <h3 className="font-serif text-lg font-bold text-white">Opening Schedule</h3>
              </div>
              <div className="divide-y divide-white/5 space-y-3.5">
                {hoursList.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center pt-3.5 first:pt-0">
                    <span className="text-sm font-semibold text-foreground/80">{item.days}</span>
                    <span className="text-xs font-sans text-white">
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Styled Map Container */}
            <div className="h-[250px] w-full rounded-3xl border border-white/5 overflow-hidden shadow-2xl relative group bg-wok-card">
              <iframe
                title="Wok On The Wild Side Location Map"
                src="https://maps.google.com/maps?q=Urban%20Villas,%20Harbanspura%20Road,%20Lahore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full grayscale opacity-75 contrast-125 border-0 hover:grayscale-0 hover:opacity-90 transition-all duration-700"
                allowFullScreen={false}
                loading="lazy"
              />
              <div className="absolute bottom-3 right-3 bg-wok-dark/95 border border-white/5 py-1.5 px-3 rounded-xl pointer-events-none text-[10px] text-muted font-sans font-medium tracking-wide">
                Harbanspura Road, Lahore
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

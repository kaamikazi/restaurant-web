'use client';

import { Star, MessageSquareQuote } from 'lucide-react';

// SAMPLE COPY: The following review data consists of design placeholders
// created for portfolio demonstration purposes to reflect typical customer feedback.
interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  text: string;
  source: 'Google Review' | 'Yelp Review';
}

export default function ReviewCards() {
  const sampleReviews: Review[] = [
    {
      id: 1,
      author: 'Marcus K.',
      rating: 5,
      date: '2 weeks ago',
      text: 'The WOK Special Burger is huge and delicious! Honestly, their portion sizes are massive and the prices are very reasonable. Definitely the best fast food spot on Harbanspura Road.',
      source: 'Google Review',
    },
    {
      id: 2,
      author: 'Sarah M.',
      rating: 5,
      date: '1 month ago',
      text: 'You have to try the Chicken Karahi. It is cooked fresh in the wok with fresh tomatoes and green chilies. It comes out sizzling hot and tastes amazing with hot naan!',
      source: 'Yelp Review',
    },
    {
      id: 3,
      author: 'David L.',
      rating: 4,
      date: '3 weeks ago',
      text: 'Awesome food. The Loaded Fries with chicken popcorn and cheese toppings are the kids favorite. Super quick counter service and friendly staff.',
      source: 'Google Review',
    },
  ];

  return (
    <section id="reviews" className="relative py-24 bg-wok-dark border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(251,192,45,0.03),transparent_40%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <Star className="w-3.5 h-3.5 fill-accent text-accent animate-pulse" />
            <span className="text-[11px] font-bold text-accent tracking-widest uppercase">
              What Guests Say
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Loved by the Lahore Community
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2 text-sm text-muted">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < 5 ? 'fill-accent text-accent' : 'text-wok-charcoal fill-wok-charcoal'}`} />
              ))}
            </div>
            <span>
              Rated <strong className="text-white">4.5</strong> on Google by local guests
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sampleReviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col bg-wok-card p-8 rounded-3xl border border-white/5 shadow-xl relative transition-all duration-300 hover:border-white/10"
            >
              {/* Quote Mark Icon */}
              <div className="absolute top-6 right-6 text-white/5">
                <MessageSquareQuote className="w-12 h-12" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < review.rating ? 'fill-accent text-accent' : 'text-wok-charcoal'
                    }`}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-muted/90 font-normal leading-relaxed italic mb-6 flex-1">
                "{review.text}"
              </p>

              {/* Author Info */}
              <div className="flex justify-between items-center pt-4 border-t border-white/5">
                <div>
                  <h4 className="text-sm font-semibold text-white">{review.author}</h4>
                  <span className="text-[10px] text-muted">{review.date}</span>
                </div>
                <span className="text-[10px] font-bold text-accent tracking-wider uppercase bg-accent/5 border border-accent/15 px-2 py-0.5 rounded">
                  {review.source}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

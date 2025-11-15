import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  text: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "You have been a great therapist to me, and helped me understand compassion for myself, your presence is calming and v warm. I also believe that you are an excellent and intelligent therapist well versed in your field.",
      rating: 5
    },
    {
      id: 2,
      text: "Great and helpful",
      rating: 5
    },
    {
      id: 3,
      text: "Rimjhim is very understanding, supportive and a great listener. I can talk to her about really terrible things, about things I can never speak in front of anyone else, or even the most mundane and trivial sounding stuff, and it never becomes wierd, or trivialised. She has a very positive outlook on situations, and a very validating view of feelings.",
      rating: 5
    },
    {
      id: 4,
      text: "Talking to Rimjhim is like talking to a friend who really cares about you and will help you with whatever you're facing.",
      rating: 5
    }
  ];

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationId: number;
    let scrollPosition = 0;
    // Smooth scroll velocity - adjusts based on screen size for optimal viewing
    const getScrollSpeed = () => {
      if (window.innerWidth < 640) return 0.3; // Mobile: slower
      if (window.innerWidth < 1024) return 0.5; // Tablet: medium
      return 0.7; // Desktop: faster
    };

    const scroll = () => {
      if (!isPaused && container) {
        const scrollSpeed = getScrollSpeed();
        scrollPosition += scrollSpeed;
        
        // Reset scroll position when reaching the end of first set for seamless loop
        const maxScroll = container.scrollWidth / 2;
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
        
        container.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    // Handle window resize to adjust scroll speed
    const handleResize = () => {
      // Scroll speed will adjust on next frame
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isPaused]);

  return (
    <section id="testimonials" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[var(--kunj-java)]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[var(--kunj-pink)]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          {/* Label with decorative bar */}
          <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
            <div className="h-0.5 w-12 sm:w-16 bg-gradient-to-r from-transparent to-[var(--kunj-java)]"></div>
            <span className="text-xs sm:text-sm font-bold text-[var(--kunj-java)] uppercase tracking-[0.2em]">
              Client Stories
            </span>
            <div className="h-6 w-1 bg-gradient-to-b from-amber-400 to-amber-500 rounded-full"></div>
            <div className="h-0.5 w-12 sm:w-16 bg-gradient-to-l from-transparent to-[var(--kunj-java)]"></div>
          </div>
          
          {/* Main heading with decorative elements */}
          <div className="relative inline-block mb-6 sm:mb-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-2 px-2 sm:px-0 leading-tight">
              <span className="block text-slate-800">What Our</span>
              <span className="block relative">
                <span className="bg-gradient-to-r from-[var(--kunj-eb)] via-[var(--kunj-java)] via-[var(--kunj-pink)] to-[var(--kunj-eb)] bg-clip-text text-transparent animate-gradient">
                  Clients Say
                </span>
                {/* Decorative underline */}
                <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-[var(--kunj-eb)] via-[var(--kunj-java)] to-[var(--kunj-pink)] rounded-full opacity-30"></span>
              </span>
            </h2>
            {/* Decorative quote marks */}
            <div className="absolute -top-4 -left-4 sm:-left-8 text-6xl sm:text-8xl font-serif text-[var(--kunj-java)]/10 leading-none">
              "
            </div>
            <div className="absolute -bottom-8 -right-4 sm:-right-8 text-6xl sm:text-8xl font-serif text-[var(--kunj-pink)]/10 leading-none rotate-180">
              "
            </div>
          </div>
          
          {/* Description */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-2 sm:px-0 leading-relaxed">
            Real experiences from those who have found healing and growth with Ms. Rimjhim
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div
            ref={scrollContainerRef}
            className="flex gap-6 sm:gap-8 overflow-x-hidden scrollbar-hide py-4"
            style={{
              scrollBehavior: 'auto',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-[90vw] sm:w-[420px] md:w-[480px] lg:w-[540px]"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm group overflow-hidden relative">
                  {/* Gradient accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--kunj-eb)] via-[var(--kunj-java)] to-[var(--kunj-pink)]"></div>
                  
                  {/* Decorative quote background */}
                  <div className="absolute top-8 right-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <Quote className="h-32 w-32 text-[var(--kunj-java)]" />
                  </div>

                  <CardContent className="p-8 sm:p-10 h-full flex flex-col relative z-10">
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[var(--kunj-eb)]/10 via-[var(--kunj-java)]/10 to-[var(--kunj-pink)]/10 group-hover:from-[var(--kunj-eb)]/20 group-hover:via-[var(--kunj-java)]/20 group-hover:to-[var(--kunj-pink)]/20 transition-all duration-500 mb-4">
                        <Quote className="h-7 w-7 text-[var(--kunj-java)]" />
                      </div>
                    </div>
                    
                    <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed mb-6 sm:mb-8 flex-grow font-medium italic">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 sm:h-6 sm:w-6 fill-amber-400 text-amber-400 drop-shadow-sm"
                          />
                        ))}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-400 font-medium">
                        Verified Client
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Enhanced gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 lg:w-40 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent pointer-events-none z-20"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 lg:w-40 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent pointer-events-none z-20"></div>
        </div>

        {/* Mobile swipe indicator */}
        <div className="flex items-center justify-center gap-2 mt-8 sm:hidden">
          <span className="text-xs text-slate-500 flex items-center gap-2 animate-pulse">
            <ChevronRight className="h-4 w-4 text-[var(--kunj-java)]" />
            Swipe to view more
            <ChevronRight className="h-4 w-4 text-[var(--kunj-java)]" />
          </span>
        </div>
      </div>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;


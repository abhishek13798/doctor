import React from 'react';

const Hero: React.FC = () => (
  <section id="home" className="py-12 sm:py-16 lg:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight">
            Find Clarity, Cultivate Well‑being
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0">
            Compassionate support for your mental health journey with Ms. Rimjhim — Licensed Clinical Psychologist (RCI), trained at Government Medical College & Hospital, Chandigarh. Specialized in emotional regulation, stress management, suicide prevention, and personality disorders.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <a 
              href="#services" 
              className="btn-primary px-6 py-3 font-medium shadow-md text-center"
            >
              Book a Session
            </a>
            <a 
              href="#resources" 
              className="px-6 py-3 font-medium border border-[var(--kunj-eb)] text-[var(--kunj-eb)] rounded-xl text-center"
            >
              Explore Resources
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/3] bg-[var(--kunj-light)] rounded-2xl lg:rounded-3xl ring-1 ring-slate-200 shadow-md overflow-hidden">
          <img 
            src="/src/photos/founder.png" 
            alt="Ms. Rimjhim, Clinical Psychologist" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 sm:p-4">
            <p className="text-white text-xs sm:text-sm font-medium">Ms. Rimjhim, Clinical Psychologist</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;

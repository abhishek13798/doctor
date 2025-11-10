import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => (
  <section id="home" className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
    {/* Background decoration */}
    <div className="absolute inset-0 bg-gradient-to-br from-[var(--kunj-light)]/50 via-transparent to-[var(--kunj-light)]/30"></div>
    <div className="absolute top-20 right-10 w-72 h-72 bg-[var(--kunj-java)]/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 left-10 w-64 h-64 bg-[var(--kunj-eb)]/10 rounded-full blur-2xl"></div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="text-center lg:text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--kunj-light)] border border-[var(--kunj-eb)]/20 text-sm font-medium text-[var(--kunj-eb)]">
            <Sparkles className="h-4 w-4" />
            Licensed Clinical Psychologist (RCI)
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Find Clarity,{' '}
            <span className="bg-gradient-to-r from-[var(--kunj-eb)] via-[var(--kunj-java)] to-[var(--kunj-eb)] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Cultivate Well‑being
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Compassionate support for your mental health journey with <strong>Ms. Rimjhim</strong> — Licensed Clinical Psychologist (RCI), trained at Government Medical College & Hospital, Chandigarh. Specialized in emotional regulation, stress management, suicide prevention, and personality disorders.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[var(--kunj-eb)] to-[var(--kunj-java)] hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              <a href="#services" onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('services');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}>
                Book a Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 hover:bg-[var(--kunj-light)] hover:border-[var(--kunj-eb)] cursor-pointer"
            >
              <a href="#ai-assistant" onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('ai-assistant');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}>
                Explore Resources
              </a>
            </Button>
          </div>
        </div>
        
        <a 
          href="#about" 
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById('about');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}
          className="relative group block cursor-pointer"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-[var(--kunj-eb)] to-[var(--kunj-java)] rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
          <div className="relative aspect-[4/3] bg-gradient-to-br from-[var(--kunj-light)] to-white rounded-2xl lg:rounded-3xl ring-2 ring-slate-200 shadow-2xl overflow-hidden">
            <img 
              src="/founder.JPG" 
              alt="Ms. Rimjhim, Clinical Psychologist" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="text-white text-lg sm:text-xl font-bold mb-1">Ms. Rimjhim</p>
              <p className="text-white/90 text-sm sm:text-base">Clinical Psychologist (RCI)</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
);

export default Hero;

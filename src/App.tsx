import React, { Suspense, lazy } from 'react';
import Shell from './components/Shell';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';

// Lazy load below-the-fold components
const Services = lazy(() => import('./components/Services'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const AIHealthAssistant = lazy(() => import('./components/AIHealthAssistant'));
const TechniqueVideos = lazy(() => import('./components/TechniqueVideos'));
const ReachOut = lazy(() => import('./components/ReachOut'));
const FloatingAIButton = lazy(() => import('./components/FloatingAIButton'));

/**
 * KunjCare — Psychotherapy Web App (React + Tailwind)
 * Therapist: Ms. Rimjhim, Licensed Clinical Psychologist (RCI)
 * Website: www.kunjcare.com | Email: kunjcare@gmail.com | Phone: +91-6006763586
 */

const App: React.FC = () => {
  return (
    <Shell>
      <NavBar />
      <Hero />
      <About />
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><div className="animate-pulse text-muted-foreground">Loading...</div></div>}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><div className="animate-pulse text-muted-foreground">Loading...</div></div>}>
        <Services />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><div className="animate-pulse text-muted-foreground">Loading...</div></div>}>
        <AIHealthAssistant />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><div className="animate-pulse text-muted-foreground">Loading...</div></div>}>
        <TechniqueVideos />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><div className="animate-pulse text-muted-foreground">Loading...</div></div>}>
        <ReachOut />
      </Suspense>
      <footer className="py-6 sm:py-8 lg:py-10 text-center border-t bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs sm:text-sm text-muted-foreground px-2">
            © {new Date().getFullYear()} <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('home');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="font-semibold text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              KunjCare
            </a> • <a href="mailto:kunjcare@gmail.com" className="hover:text-primary transition-colors cursor-pointer">Ms. Rimjhim</a>, Clinical Psychologist (RCI)
          </p>
          <div className="mt-3 sm:mt-4 flex flex-wrap justify-center gap-3 sm:gap-4 text-xs text-muted-foreground px-2">
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('home');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('about');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              About
            </a>
            <a 
              href="#testimonials" 
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('testimonials');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Testimonials
            </a>
            <a 
              href="#services" 
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('services');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Services
            </a>
            <a 
              href="#ai-assistant" 
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('ai-assistant');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              AI Assistant
            </a>
            <a 
              href="#reachout" 
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('reachout');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Contact
            </a>
            <a href="https://www.kunjcare.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors cursor-pointer">Website</a>
          </div>
        </div>
      </footer>
      <Suspense fallback={null}>
        <FloatingAIButton />
      </Suspense>
    </Shell>
  );
};

export default App;

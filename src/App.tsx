import React from 'react';
import Shell from './components/Shell';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import AIHealthAssistant from './components/AIHealthAssistant';
import ReachOut from './components/ReachOut';
import FloatingAIButton from './components/FloatingAIButton';

/**
 * KunjCare — Psychotherapy Web App (React + Tailwind)
 * Therapist: Ms. Rimjhim, Licensed Clinical Psychologist (RCI)
 * Website: www.kunjcare.com | Email: kunjcare@gmail.com | Phone: +91-9103034279
 */

const App: React.FC = () => {
  return (
    <Shell>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <AIHealthAssistant />
      <ReachOut />
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
      <FloatingAIButton />
    </Shell>
  );
};

export default App;

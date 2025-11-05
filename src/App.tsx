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
      <footer className="py-8 sm:py-10 text-center border-t bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} <span className="font-semibold text-foreground">KunjCare</span> • Ms. Rimjhim, Clinical Psychologist (RCI)
          </p>
        </div>
      </footer>
      <FloatingAIButton />
    </Shell>
  );
};

export default App;

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
      <footer className="py-8 sm:py-10 text-center text-xs sm:text-sm text-slate-500 px-4">
        © {new Date().getFullYear()} KunjCare • Ms. Rimjhim, Clinical Psychologist (RCI)
      </footer>
      <FloatingAIButton />
    </Shell>
  );
};

export default App;

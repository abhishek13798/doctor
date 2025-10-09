import React, { useState } from 'react';
import { Mail, MessageCircle, Menu, X } from 'lucide-react';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="KunjCare Logo" 
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
          />
          <div>
            <p className="text-base sm:text-lg font-semibold">KunjCare</p>
            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-slate-500">Psychotherapy</p>
          </div>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-[15px]">
          {["Home", "About", "Services", "AI Assistant", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, '')}`} className="text-slate-700 hover:text-slate-900">{l}</a>
          ))}
        </nav>

        {/* Desktop Contact Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <a href="https://wa.me/919103034279" target="_blank" className="btn-primary px-3 py-2 flex items-center gap-2 text-sm">
            <MessageCircle size={16}/> WhatsApp
          </a>
          <a href="mailto:kunjcare@gmail.com" className="border rounded-xl px-3 py-2 text-sm flex items-center gap-2 border-[var(--kunj-eb)] text-[var(--kunj-eb)]">
            <Mail size={16}/> Email
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-slate-900"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100">
          <nav className="px-4 py-4 space-y-3">
            {["Home", "About", "Services", "AI Assistant", "Contact"].map((l) => (
              <a 
                key={l} 
                href={`#${l.toLowerCase().replace(/\s+/g, '')}`} 
                className="block text-slate-700 hover:text-slate-900 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {l}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <a 
                href="https://wa.me/919103034279" 
                target="_blank" 
                className="btn-primary w-full px-4 py-3 flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle size={16}/> WhatsApp
              </a>
              <a 
                href="mailto:kunjcare@gmail.com" 
                className="border w-full px-4 py-3 flex items-center justify-center gap-2 text-sm border-[var(--kunj-eb)] text-[var(--kunj-eb)] rounded-xl"
              >
                <Mail size={16}/> Email
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;

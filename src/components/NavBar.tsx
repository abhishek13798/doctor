import React, { useState } from 'react';
import { Mail, MessageCircle, Menu, X, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const navItems = ["Home", "About", "Services", "AI Assistant", "Techniques", "Contact"];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
    e.preventDefault();
    setActiveLink(item);
    
    // Map navigation items to section IDs
    let sectionId = '';
    const itemLower = item.toLowerCase();
    
    if (itemLower === 'home') {
      sectionId = 'home';
    } else if (itemLower === 'about') {
      sectionId = 'about';
    } else if (itemLower === 'services') {
      sectionId = 'services';
    } else if (itemLower === 'ai assistant') {
      sectionId = 'ai-assistant';
    } else if (itemLower === 'techniques') {
      sectionId = 'techniques';
    } else if (itemLower === 'contact') {
      sectionId = 'reachout';
    } else {
      // Fallback: try to convert to ID format
      sectionId = itemLower.replace(/\s+/g, '-');
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn(`Section with id "${sectionId}" not found`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a 
            href="#home" 
            className="flex items-center gap-3 group transition-transform duration-200 hover:scale-105 cursor-pointer"
            onClick={(e) => handleNavClick(e, 'Home')}
          >
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="KunjCare Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition-all duration-300 group-hover:rotate-3"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-base sm:text-lg font-bold bg-gradient-to-r from-[var(--kunj-eb)] to-[var(--kunj-java)] bg-clip-text text-transparent">
                KunjCare
              </p>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-slate-500 font-medium">
                Psychotherapy
              </p>
            </div>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                onClick={(e) => handleNavClick(e, item)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer",
                  activeLink === item
                    ? "text-[var(--kunj-eb)] bg-[var(--kunj-light)]"
                    : "text-slate-700 hover:text-[var(--kunj-eb)] hover:bg-slate-50"
                )}
              >
                {item}
                {activeLink === item && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[var(--kunj-eb)] rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Desktop Contact Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              variant="default"
              size="sm"
              className="bg-gradient-to-r from-[var(--kunj-eb)] to-[var(--kunj-java)] hover:shadow-lg flex items-center justify-center"
            >
              <a href="https://wa.me/916006763586" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <MessageCircle className="mr-2 h-4 w-4 flex-shrink-0" />
                WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="flex items-center justify-center"
            >
              <a href="mailto:kunjcare@gmail.com" className="flex items-center justify-center">
                <Mail className="mr-2 h-4 w-4 flex-shrink-0" />
                Email
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="flex items-center justify-center"
            >
              <a href="https://www.linkedin.com/in/rimjhim-417977199?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <Linkedin className="mr-2 h-4 w-4 flex-shrink-0" />
                LinkedIn
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t bg-white animate-in slide-in-from-top duration-200">
          <nav className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                onClick={(e) => {
                  handleNavClick(e, item);
                  setIsMenuOpen(false);
                }}
                className={cn(
                  "block px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer",
                  activeLink === item
                    ? "text-[var(--kunj-eb)] bg-[var(--kunj-light)]"
                    : "text-slate-700 hover:bg-slate-50"
                )}
              >
                {item}
              </a>
            ))}
            <div className="pt-4 mt-4 border-t space-y-2">
              <Button
                asChild
                variant="default"
                className="w-full bg-gradient-to-r from-[var(--kunj-eb)] to-[var(--kunj-java)] flex items-center justify-center"
              >
                <a href="https://wa.me/916006763586" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <MessageCircle className="mr-2 h-4 w-4 flex-shrink-0" />
                  WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full flex items-center justify-center"
              >
                <a href="mailto:kunjcare@gmail.com" className="flex items-center justify-center">
                  <Mail className="mr-2 h-4 w-4 flex-shrink-0" />
                  Email
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full flex items-center justify-center"
              >
                <a href="https://www.linkedin.com/in/rimjhim-417977199?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <Linkedin className="mr-2 h-4 w-4 flex-shrink-0" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;

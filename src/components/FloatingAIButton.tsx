import React, { useState } from 'react';
import { MessageCircle, X, Bot } from 'lucide-react';

const FloatingAIButton: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollToAI = () => {
    const aiSection = document.getElementById('ai-assistant');
    if (aiSection) {
      aiSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsExpanded(false);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Expanded Menu */}
          {isExpanded && (
            <div className="absolute bottom-16 right-0 mb-2 bg-white rounded-2xl shadow-large border border-slate-200 p-4 min-w-[280px]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-gradient-to-r from-[var(--kunj-eb)] to-[var(--kunj-java)] rounded-full flex items-center justify-center">
                  <Bot size={16} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">AI Health Assistant</h4>
                  <p className="text-xs text-slate-600">Ask me anything about health!</p>
                </div>
              </div>
              <button
                onClick={scrollToAI}
                className="w-full bg-gradient-to-r from-[var(--kunj-eb)] to-[var(--kunj-java)] text-white py-2 px-4 rounded-xl text-sm font-medium hover:shadow-md transition-all duration-300"
              >
                Start Chat
              </button>
            </div>
          )}

          {/* Main Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-14 h-14 bg-gradient-to-r from-[var(--kunj-eb)] to-[var(--kunj-java)] text-white rounded-full shadow-large hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          >
            {isExpanded ? (
              <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
            ) : (
              <MessageCircle size={24} className="group-hover:scale-110 transition-transform duration-300" />
            )}
          </button>

          {/* Pulse Animation */}
          {!isExpanded && (
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--kunj-eb)] to-[var(--kunj-java)] rounded-full animate-ping opacity-20"></div>
          )}
        </div>
      </div>

      {/* Mobile Overlay */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </>
  );
};

export default FloatingAIButton;

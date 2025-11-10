import React, { useState } from 'react';
import { MessageCircle, X, Bot, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

const FloatingAIButton: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollToAI = () => {
    const aiSection = document.getElementById('ai-assistant');
    if (aiSection) {
      aiSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsExpanded(false);
    } else {
      console.warn('AI Assistant section not found');
    }
  };

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Expanded Menu */}
          {isExpanded && (
            <Card className="absolute bottom-20 right-0 mb-2 shadow-2xl border-2 min-w-[320px] animate-in slide-in-from-bottom-4 z-50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-[var(--kunj-java)] rounded-full flex items-center justify-center">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">AI Health Assistant</CardTitle>
                    <CardDescription>Ask me anything about health!</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={scrollToAI}
                  className="w-full bg-gradient-to-r from-primary to-[var(--kunj-java)] hover:shadow-lg cursor-pointer"
                  size="lg"
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  Start Chat
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Main Button */}
          <Button
            onClick={handleButtonClick}
            size="icon"
            className={cn(
              "w-14 h-14 rounded-full shadow-2xl hover:shadow-xl transition-all duration-300",
              "bg-gradient-to-r from-primary to-[var(--kunj-java)] hover:scale-110 cursor-pointer"
            )}
            aria-label="AI Assistant Menu"
          >
            {isExpanded ? (
              <X className="h-6 w-6 transition-transform duration-300" />
            ) : (
              <MessageCircle className="h-6 w-6 transition-transform duration-300" />
            )}
          </Button>

          {/* Pulse Animation */}
          {!isExpanded && (
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-[var(--kunj-java)] rounded-full animate-ping opacity-20"></div>
          )}
        </div>
      </div>

      {/* Mobile Overlay */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </>
  );
};

export default FloatingAIButton;

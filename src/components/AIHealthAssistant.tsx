import React, { useState } from 'react';
import { Send, Bot, User, Loader2, Brain } from 'lucide-react';
import OpenAI from 'openai';
import { API_CONFIG, validateApiKey } from '../config/api';
import { findBestResponse } from '../lib/aiKnowledgeBase';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AIHealthAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI Health Assistant. I can help answer general health and mental health questions. Please note that I provide general information only and cannot replace professional medical advice. For specific concerns, please consult with Ms. Rimjhim directly.",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputText;
    setInputText('');
    setIsLoading(true);

    let aiResponse = '';

    // Try OpenAI API first if available
    if (validateApiKey()) {
      try {
        const openai = new OpenAI({
          apiKey: API_CONFIG.OPENAI_API_KEY,
          dangerouslyAllowBrowser: true
        });

        const completion = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: `You are a helpful AI health assistant for KunjCare, a psychotherapy practice led by Ms. Rimjhim, a Licensed Clinical Psychologist (RCI). 

IMPORTANT GUIDELINES:
- Provide general health and mental health information only
- Always emphasize that your advice is not a substitute for professional medical care
- For serious mental health concerns, direct users to contact Ms. Rimjhim directly
- Be empathetic, supportive, and professional
- Focus on mental health, therapy, and general wellness topics
- If asked about specific medical conditions, recommend consulting a healthcare professional
- Keep responses detailed, helpful, and informative (3-4 paragraphs)
- Use a warm, supportive tone appropriate for a therapy practice
- Include practical strategies and coping techniques when relevant

Contact information to mention when appropriate:
- Email: kunjcare@gmail.com
- Phone: +91-9103034279
- WhatsApp: +91-9103034279`
            },
            {
              role: "user",
              content: currentInput
            }
          ],
          max_tokens: 500,
          temperature: 0.7
        });

        aiResponse = completion.choices[0]?.message?.content || '';
      } catch (err) {
        console.error('OpenAI API Error:', err);
        // Fall through to use knowledge base
      }
    }

    // Use knowledge base if OpenAI didn't provide a response
    if (!aiResponse || aiResponse.trim() === '') {
      // Small delay to simulate thinking (better UX)
      await new Promise(resolve => setTimeout(resolve, 500));
      aiResponse = findBestResponse(currentInput);
    }

    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: aiResponse,
      isUser: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, aiMessage]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <section id="ai-assistant" className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 border border-primary/20 text-xs sm:text-sm font-medium text-primary mb-3 sm:mb-4">
            <Brain className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="whitespace-nowrap">AI-Powered Assistant</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2 sm:px-0">
            <span className="bg-gradient-to-r from-primary via-[var(--kunj-java)] to-primary bg-clip-text text-transparent">
              AI Health Assistant
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Ask me about mental health, therapy, anxiety, depression, stress management, or general wellness. 
            I provide detailed, helpful information and practical strategies. Remember to consult with Ms. Rimjhim for professional advice.
          </p>
        </div>

        <Card className="shadow-2xl border-2 overflow-hidden">
          {/* Chat Header */}
          <CardHeader className="bg-gradient-to-r from-primary to-[var(--kunj-java)] text-primary-foreground p-4 sm:p-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                <Brain className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="min-w-0">
                <CardTitle className="text-white text-base sm:text-lg">KunjCare AI Assistant</CardTitle>
                <CardDescription className="text-white/90 text-xs sm:text-sm">
                  Intelligent mental health support • General information only
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          {/* Messages */}
          <div className="h-[300px] sm:h-96 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!message.isUser && (
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[var(--kunj-eb)] rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot size={14} className="sm:w-4 sm:h-4 text-white" />
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[85%] sm:max-w-[85%] p-3 sm:p-4 rounded-xl shadow-sm",
                    message.isUser
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  )}
                >
                  <div className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap space-y-2">
                    {message.text.split('\n').map((line, index) => {
                      // Format bold text (**text**)
                      if (line.startsWith('**') && line.endsWith('**')) {
                        const text = line.slice(2, -2);
                        return (
                          <p key={index} className={cn(
                            "font-semibold mt-2",
                            message.isUser ? 'text-primary-foreground' : 'text-foreground'
                          )}>
                            {text}
                          </p>
                        );
                      }
                      // Format list items
                      if (line.trim().match(/^\d+\./)) {
                        return (
                          <p key={index} className={cn(
                            "ml-2",
                            message.isUser ? 'text-primary-foreground' : 'text-foreground'
                          )}>
                            {line}
                          </p>
                        );
                      }
                      return (
                        <p key={index} className={cn(
                          message.isUser ? 'text-primary-foreground' : 'text-foreground'
                        )}>
                          {line}
                        </p>
                      );
                    })}
                  </div>
                  <p className={cn(
                    "text-xs mt-3 pt-2 border-t",
                    message.isUser 
                      ? 'text-primary-foreground/70 border-primary-foreground/20' 
                      : 'text-muted-foreground border-border'
                  )}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                {message.isUser && (
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-slate-300 rounded-full flex items-center justify-center flex-shrink-0">
                    <User size={14} className="sm:w-4 sm:h-4 text-slate-600" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2 sm:gap-3 justify-start">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[var(--kunj-eb)] rounded-full flex items-center justify-center flex-shrink-0">
                  <Brain size={14} className="sm:w-4 sm:h-4 text-white" />
                </div>
                <div className="bg-muted p-3 sm:p-4 rounded-xl shadow-sm">
                  <div className="flex items-center gap-2">
                    <Loader2 size={14} className="sm:w-4 sm:h-4 animate-spin text-primary" />
                    <span className="text-xs sm:text-sm text-foreground">Thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <CardContent className="border-t p-4 sm:p-6">
            <div className="flex gap-2 sm:gap-3">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about anxiety, depression, stress..."
                className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 border border-input rounded-lg bg-background text-xs sm:text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={isLoading}
              />
              <Button
                onClick={sendMessage}
                disabled={!inputText.trim() || isLoading}
                size="lg"
                className="bg-gradient-to-r from-primary to-[var(--kunj-java)] hover:shadow-lg flex-shrink-0 px-3 sm:px-4"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3 flex items-start gap-2">
              <span>💡</span>
              <span><strong>Remember:</strong> This AI provides general information only. For professional mental health support, 
              please contact Ms. Rimjhim directly.</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AIHealthAssistant;

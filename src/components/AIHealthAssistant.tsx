import React, { useState } from 'react';
import { MessageCircle, Send, Bot, User, Loader2, AlertCircle, Sparkles } from 'lucide-react';
import OpenAI from 'openai';
import { API_CONFIG, validateApiKey } from '../config/api';
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
  const [error, setError] = useState('');

  const sendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);
    setError('');

    try {
      // Check if API key is available
      if (!validateApiKey()) {
        throw new Error('OpenAI API key is not configured. Please set VITE_OPENAI_API_KEY environment variable.');
      }

      // Initialize OpenAI client with your real API key
      const openai = new OpenAI({
        apiKey: API_CONFIG.OPENAI_API_KEY,
        dangerouslyAllowBrowser: true
      });

      // Create chat completion with OpenAI
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
- Keep responses concise but helpful (2-3 paragraphs max)
- Use a warm, supportive tone appropriate for a therapy practice

Contact information to mention when appropriate:
- Email: kunjcare@gmail.com
- Phone: +91-9103034279
- WhatsApp: +91-9103034279`
          },
          {
            role: "user",
            content: inputText
          }
        ],
        max_tokens: 300,
        temperature: 0.7
      });

      const aiResponse = completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.';
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (err) {
      console.error('OpenAI API Error:', err);
      
      // Handle specific error types
      if (err instanceof Error) {
        if (err.message.includes('401') || err.message.includes('Incorrect API key')) {
          setError('Invalid API Key: Please check your OpenAI API key configuration.');
        } else if (err.message.includes('429')) {
          setError('Rate limit exceeded. Please try again in a moment.');
        } else if (err.message.includes('network') || err.message.includes('fetch')) {
          setError('Network error. Please check your internet connection and try again.');
        } else {
          setError(`Sorry, I encountered an error: ${err.message}. Please try again or contact Ms. Rimjhim directly.`);
        }
      } else {
        setError('Sorry, I encountered an unexpected error. Please try again or contact Ms. Rimjhim directly.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <section id="ai-assistant" className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
            <Sparkles className="h-4 w-4" />
            AI-Powered Assistant
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-[var(--kunj-java)] to-primary bg-clip-text text-transparent">
              AI Health Assistant
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ask me general health and mental health questions. I'm powered by AI to provide helpful information and guidance, 
            but remember to consult with Ms. Rimjhim for professional advice.
          </p>
        </div>

        <Card className="shadow-2xl border-2 overflow-hidden">
          {/* Chat Header */}
          <CardHeader className="bg-gradient-to-r from-primary to-[var(--kunj-java)] text-primary-foreground">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-white">KunjCare AI Assistant</CardTitle>
                <CardDescription className="text-white/90">Powered by OpenAI • General health information only</CardDescription>
              </div>
            </div>
          </CardHeader>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!message.isUser && (
                  <div className="w-8 h-8 bg-[var(--kunj-eb)] rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot size={16} className="text-white" />
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[80%] p-4 rounded-xl shadow-sm",
                    message.isUser
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  )}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className={cn(
                    "text-xs mt-2",
                    message.isUser ? 'text-primary-foreground/70' : 'text-muted-foreground'
                  )}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                {message.isUser && (
                  <div className="w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center flex-shrink-0">
                    <User size={16} className="text-slate-600" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 bg-[var(--kunj-eb)] rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot size={16} className="text-white" />
                </div>
                <div className="bg-slate-100 p-3 rounded-2xl">
                  <div className="flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-[var(--kunj-eb)]" />
                    <span className="text-sm text-slate-600">AI is thinking...</span>
                  </div>
                </div>
              </div>
            )}

            {error && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertCircle size={16} className="text-white" />
                </div>
                <div className="bg-red-50 border border-red-200 p-3 rounded-2xl">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <CardContent className="border-t p-6">
            <div className="flex gap-3">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about mental health, therapy, or general wellness..."
                className="flex-1 px-4 py-3 border border-input rounded-lg bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={isLoading}
              />
              <Button
                onClick={sendMessage}
                disabled={!inputText.trim() || isLoading}
                size="lg"
                className="bg-gradient-to-r from-primary to-[var(--kunj-java)] hover:shadow-lg"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3 flex items-center gap-2">
              <span>💡</span>
              <span><strong>Remember:</strong> This AI provides general information only. For professional mental health support, 
              please contact Ms. Rimjhim directly.</span>
            </p>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <Card className="mt-8">
          <CardContent className="pt-6 text-center">
            <p className="text-muted-foreground mb-6">Need professional help? Contact Ms. Rimjhim directly:</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-[var(--kunj-java)] hover:shadow-lg"
              >
                <a href="https://wa.me/919103034279" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2"
              >
                <a href="mailto:kunjcare@gmail.com">
                  <Send className="mr-2 h-4 w-4" />
                  Email
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AIHealthAssistant;

import React, { useState } from 'react';
import { MessageCircle, Send, Bot, User, Loader2, AlertCircle } from 'lucide-react';
import OpenAI from 'openai';
import { API_CONFIG, validateApiKey } from '../config/api';

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
    <section id="ai-assistant" className="bg-gradient-to-br from-[var(--kunj-light)] to-white py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            <span className="bg-gradient-to-r from-[var(--kunj-eb)] to-[var(--kunj-java)] bg-clip-text text-transparent">
              AI Health Assistant
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Ask me general health and mental health questions. I'm powered by AI to provide helpful information and guidance, 
            but remember to consult with Ms. Rimjhim for professional advice.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-large border border-slate-200 overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-[var(--kunj-eb)] to-[var(--kunj-java)] p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-semibold">KunjCare AI Assistant</h3>
                <p className="text-sm opacity-90">Powered by OpenAI • General health information only</p>
              </div>
            </div>
          </div>

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
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.isUser
                      ? 'bg-[var(--kunj-eb)] text-white'
                      : 'bg-slate-100 text-slate-800'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className={`text-xs mt-2 ${
                    message.isUser ? 'text-white/70' : 'text-slate-500'
                  }`}>
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
          <div className="border-t border-slate-200 p-4">
            <div className="flex gap-3">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about mental health, therapy, or general wellness..."
                className="flex-1 px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--kunj-eb)] focus:border-transparent"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={!inputText.trim() || isLoading}
                className="btn-primary px-6 py-3 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              💡 <strong>Remember:</strong> This AI provides general information only. For professional mental health support, 
              please contact Ms. Rimjhim directly.
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-8 text-center">
          <p className="text-slate-600 mb-4">Need professional help? Contact Ms. Rimjhim directly:</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/919103034279"
              className="btn-primary px-6 py-3 flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
            <a
              href="mailto:kunjcare@gmail.com"
              className="border border-[var(--kunj-eb)] text-[var(--kunj-eb)] px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-[var(--kunj-eb)] hover:text-white transition-all duration-300"
            >
              <Send size={18} />
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIHealthAssistant;

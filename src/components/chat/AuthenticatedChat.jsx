import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';
import { Send, Bot, User, Sparkles, Zap, Lightbulb, Star, TrendingUp, X } from 'lucide-react';

export const AuthenticatedChat = () => {
  const { user, profile } = useAuth();
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Listen for external trigger to open chat
  useEffect(() => {
    const handleOpenChat = () => {
      setIsOpen(true);
    };

    window.addEventListener('openChat', handleOpenChat);
    return () => window.removeEventListener('openChat', handleOpenChat);
  }, []);

  // Initialize with welcome message
  useEffect(() => {
    if (user && messages.length === 0) {
      setMessages([
        {
          id: 1,
          type: 'bot',
          text: `Welcome back, ${profile?.full_name || 'there'}! I'm LuminIQ, your AI assistant. How can I help you today?`,
          timestamp: new Date().toISOString()
        }
      ]);
    }
  }, [user, profile, messages.length]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || loading) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: inputMessage,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setLoading(true);

    try {
      // Simulate AI response (replace with actual AI integration)
      const aiResponse = await generateAIResponse(inputMessage);
      
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        text: aiResponse,
        timestamp: new Date().toISOString()
      };

      setTimeout(() => {
        setMessages(prev => [...prev, botMessage]);
        setLoading(false);
      }, 1000);

    } catch (error) {
      console.error('Error generating response:', error);
      const errorMessage = {
        id: Date.now() + 1,
        type: 'bot',
        text: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, errorMessage]);
      setLoading(false);
    }
  };

  const generateAIResponse = async (userInput) => {
    // This is a mock AI response generator
    // Replace with actual AI integration (OpenAI, Claude, etc.)
    const responses = [
      "That's a great question! Let me help you with that.",
      "I understand what you're looking for. Here's what I can suggest...",
      "Based on your query, I recommend the following approach...",
      "I can definitely help you with that. Let me break it down...",
      "That's an interesting point. Here's my analysis..."
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-xl transition-all duration-200 flex items-center justify-center shadow-lg ${
          isOpen
            ? 'bg-white border border-[#E2E8F0] hover:border-slate-300'
            : 'bg-gradient-to-br from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 animate-pulse'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-slate-900" />
        ) : (
          <Bot className="w-6 h-6 text-white animate-blink" />
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[400px] animate-slide-up">
          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-2xl overflow-hidden shadow-2xl border border-[#E2E8F0] relative backdrop-blur-sm">

            {/* Decorative floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
            <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full opacity-40 blur-md"></div>
            <div className="absolute top-16 -left-3 w-8 h-8 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-full opacity-30 blur-sm"></div>
            <div className="absolute top-20 -left-5 w-12 h-12 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-20 blur-lg animate-pulse" style={{ animationDuration: '3s' }}></div>
            <div className="absolute bottom-24 -right-6 w-20 h-20 bg-gradient-to-br from-cyan-300 via-blue-300 to-cyan-400 rounded-full opacity-15 blur-2xl animate-pulse" style={{ animationDuration: '4s' }}></div>

            {/* Floating icon decorations */}
            <div className="absolute top-4 -right-3 w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center animate-bounce border border-blue-100" style={{ animationDuration: '3s' }}>
              <Sparkles className="w-5 h-5 text-blue-500" />
            </div>
            <div className="absolute bottom-32 -left-3 w-9 h-9 bg-white rounded-lg shadow-md flex items-center justify-center animate-bounce border border-cyan-100" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
              <Star className="w-4 h-4 text-cyan-500" />
            </div>

            {/* Header */}
            <div className="bg-gradient-to-r from-slate-50 to-blue-50/50 border-b border-[#E2E8F0] px-6 py-5 flex items-center justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl"></div>
              
              <div className="flex items-center space-x-3 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 flex items-center justify-center shadow-lg relative animate-pulse" style={{ animationDuration: '2s' }}>
                  <Bot className="w-6 h-6 text-white" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm animate-pulse"></div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent"></div>
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold text-lg">LuminIQ Assistant</h3>
                  <div className="flex items-center space-x-1.5">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-sm shadow-green-500/50"></div>
                    <span className="text-slate-600 text-xs font-semibold">Online</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="p-5 bg-gradient-to-b from-white to-slate-50/50 h-[420px] overflow-y-auto space-y-4 relative">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, #0ea5e9 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              {/* Floating decorative icons */}
              <div className="absolute top-6 right-6 opacity-20 animate-pulse" style={{ animationDuration: '2s' }}>
                <Lightbulb className="w-6 h-6 text-blue-500" />
              </div>
              <div className="absolute bottom-20 left-6 opacity-15 animate-bounce" style={{ animationDuration: '4s' }}>
                <Zap className="w-5 h-5 text-cyan-500" />
              </div>
              <div className="absolute top-32 right-8 opacity-10 animate-pulse" style={{ animationDuration: '3s' }}>
                <TrendingUp className="w-5 h-5 text-blue-400" />
              </div>

              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up relative z-10`}
                >
                  {message.type === 'bot' && message.id === 1 && (
                    <div className="absolute -left-3 -top-3 w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center shadow-md animate-bounce border-2 border-white" style={{ animationDuration: '2s' }}>
                      <span className="text-sm">👋</span>
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] rounded-2xl px-5 py-3.5 ${
                      message.type === 'user'
                        ? 'bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-lg shadow-slate-900/20'
                        : 'bg-white text-slate-800 border border-blue-100 shadow-sm'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className="text-xs opacity-60 mt-1">
                      {new Date(message.timestamp).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start animate-slide-up">
                  <div className="bg-white text-slate-800 border border-blue-100 shadow-sm rounded-2xl px-5 py-3.5">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="text-sm text-slate-600">LuminIQ is typing...</span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-5 bg-gradient-to-r from-slate-50 to-blue-50/30 border-t border-[#E2E8F0] relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-400/5 to-cyan-400/5 rounded-full blur-xl"></div>
              
              <div className="flex items-center space-x-3 relative z-10">
                <div className="flex-1 relative">
                  <textarea
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask LuminIQ anything..."
                    className="w-full px-4 py-3 pr-12 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    rows={1}
                    disabled={loading}
                  />
                </div>
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || loading}
                  className="px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};


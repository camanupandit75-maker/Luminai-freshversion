import { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Zap, Lightbulb, Star, TrendingUp } from 'lucide-react';
import { supabase } from '../lib/supabase';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [organization, setOrganization] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Demo messages for unauthenticated users
  const demoMessages = [
    {
      type: 'bot',
      text: "Hi! I'm LuminIQ. I can help you analyze your team's data and conversations!",
      timestamp: new Date()
    },
    {
      type: 'bot',
      text: "I can extract insights from Slack, Telegram, and other platforms. Want to see how?",
      timestamp: new Date()
    },
    {
      type: 'bot',
      text: "Sign in to start chatting with me and unlock the full power of AI-driven insights!",
      timestamp: new Date()
    }
  ];

  // Authenticated messages
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hi! I'm LuminIQ. Ask me anything about your data and insights!",
      timestamp: new Date()
    }
  ]);

  // Listen for external trigger to open chat
  useEffect(() => {
    const handleOpenChat = () => {
      setIsOpen(true);
    };

    window.addEventListener('openChat', handleOpenChat);
    return () => window.removeEventListener('openChat', handleOpenChat);
  }, []);

  // Get user, profile, and organization data
  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
        setIsAuthenticated(true);
        
        // Fetch profile data
        const { data: profileData } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
        setProfile(profileData);
        
        // Fetch organization data if profile exists
        if (profileData?.organization_id) {
          const { data: orgData } = await supabase
            .from('organizations')
            .select('*')
            .eq('id', profileData.organization_id)
            .single();
          setOrganization(orgData);
        }
      } else {
        setIsAuthenticated(false);
      }
    };
    getUser();
  }, []);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      type: 'user',
      text: inputMessage,
      timestamp: new Date()
    };

    // Add user message to appropriate messages array
    if (isAuthenticated) {
      setMessages(prev => [...prev, userMessage]);
    }
    setInputMessage('');
    setIsLoading(true);

    if (!isAuthenticated) {
      // Demo mode - show sign in message
      setTimeout(() => {
        const signInMessage = {
          type: 'bot',
          text: 'Please sign in to use AI chat! I can help you analyze your team\'s data once you\'re authenticated.',
          timestamp: new Date()
        };
        setIsLoading(false);
      }, 1000);
      return;
    }

    // Authenticated mode - use N8N webhook
    try {
      const webhookData = {
        message: inputMessage,
        userEmail: user?.email || profile?.email,
        organization_id: profile?.organization_id,
        organization_code: organization?.slug,
        user_id: user?.id,
        user_name: profile?.full_name
      };
      
      console.log('Sending to N8N:', {
        url: import.meta.env.VITE_N8N_WEBHOOK_URL,
        data: webhookData
      });
      
      // Check if webhook URL is configured
      if (!import.meta.env.VITE_N8N_WEBHOOK_URL) {
        throw new Error('N8N webhook URL not configured');
      }
      
      console.log('Webhook URL:', import.meta.env.VITE_N8N_WEBHOOK_URL);
      console.log('Webhook URL type:', typeof import.meta.env.VITE_N8N_WEBHOOK_URL);
      
      const response = await fetch(import.meta.env.VITE_N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData)
      });

      console.log('N8N Response status:', response.status);
      console.log('N8N Response headers:', response.headers);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('N8N Error response:', errorText);
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }

      // Check if response has content
      const responseText = await response.text();
      console.log('N8N Raw response:', responseText);
      
      let data;
      if (responseText.trim()) {
        try {
          data = JSON.parse(responseText);
          console.log('N8N Parsed data:', data);
        } catch (parseError) {
          console.error('JSON Parse Error:', parseError);
          console.error('Raw response that failed to parse:', responseText);
          throw new Error(`Invalid JSON response: ${responseText}`);
        }
      } else {
        console.log('Empty response from N8N, using default response');
        data = { response: 'I received your message but got an empty response from the server.' };
      }
      
      const botMessage = {
        type: 'bot',
        text: data.response || data.message || data.text || 'Sorry, I couldn\'t process your request.',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = {
        type: 'bot',
        text: `Sorry, I encountered an error: ${error.message}. Please try again.`,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Particle ring effect */}

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
          <MessageCircle className="w-6 h-6 text-white animate-blink" />
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

          <div className="bg-gradient-to-r from-slate-50 to-blue-50/50 border-b border-[#E2E8F0] px-6 py-5 flex items-center justify-between relative overflow-hidden">
            {/* Header background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl"></div>

            <div className="flex items-center space-x-3 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 flex items-center justify-center shadow-lg relative animate-pulse" style={{ animationDuration: '2s' }}>
                <Sparkles className="w-6 h-6 text-white" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm animate-pulse"></div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent"></div>
              </div>
              <div>
                <h3 className="text-slate-900 font-bold text-lg">Ask LuminIQ</h3>
                <div className="flex items-center space-x-1.5">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-sm shadow-green-500/50"></div>
                  <span className="text-slate-600 text-xs font-semibold">Online</span>
                </div>
              </div>
            </div>
          </div>

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

            {(isAuthenticated ? messages : demoMessages).map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up relative z-10`}
              >
                {message.type === 'bot' && index === 0 && (
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
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start animate-slide-up relative z-10">
                <div className="bg-white text-slate-800 border border-blue-100 shadow-sm rounded-2xl px-5 py-3.5">
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
                    <p className="text-sm">
                      {isAuthenticated ? 'LuminIQ is thinking...' : 'Please wait...'}
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {!isAuthenticated && (
              <div className="flex justify-center animate-slide-up relative z-10 mt-4">
                <button
                  onClick={() => window.location.href = '/signin'}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl font-semibold transition-all duration-200 shadow-lg"
                >
                  Sign In to Chat
                </button>
              </div>
            )}
          </div>

          <div className="p-5 bg-gradient-to-r from-slate-50 to-blue-50/30 border-t border-[#E2E8F0] relative overflow-hidden">
            {/* Footer decoration */}
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-400/5 to-cyan-400/5 rounded-full blur-xl"></div>

            <div className="flex space-x-2 relative z-10">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={isAuthenticated ? "Ask LuminIQ anything..." : "Try typing a message..."}
                className="flex-1 px-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="px-4 py-3 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-slate-900/20 group"
              >
                <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;

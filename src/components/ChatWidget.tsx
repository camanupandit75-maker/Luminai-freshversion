import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Sparkles, Zap, Lightbulb, Star, TrendingUp } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [cursorDistance, setCursorDistance] = useState(1000);
  const orbRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (orbRef.current) {
        const rect = orbRef.current.getBoundingClientRect();
        const orbCenterX = rect.left + rect.width / 2;
        const orbCenterY = rect.top + rect.height / 2;
        const distance = Math.sqrt(
          Math.pow(e.clientX - orbCenterX, 2) + Math.pow(e.clientY - orbCenterY, 2)
        );
        setCursorDistance(distance);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const conversation = [
    {
      type: 'bot',
      text: "Hi! I'm LuminIQ. Ask me anything about how I can help your team!",
    },
    {
      type: 'user',
      text: 'How does LuminIQ integrate with our existing tools?',
    },
    {
      type: 'bot',
      text: "Great question! LuminIQ integrates seamlessly with Slack and Telegram. Simply add the bot to your workspace, and it starts learning from your team's conversations immediately. No complex setup required!",
    },
    {
      type: 'user',
      text: 'Is our data secure?',
    },
    {
      type: 'bot',
      text: 'Absolutely! We use enterprise-grade encryption (AES-256), never train models on your data, and are SOC 2 compliant. Your knowledge base stays completely private to your team.',
    },
  ];

  const handleSendMessage = () => {
    if (currentStep < conversation.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(0);
    }
  };

  const displayedMessages = conversation.slice(0, currentStep + 1);

  const isNearCursor = cursorDistance < 200;
  const proximityScale = isNearCursor ? 1 + (200 - cursorDistance) / 200 * 0.15 : 1;
  const glowIntensity = isNearCursor ? Math.min((200 - cursorDistance) / 100, 1) : 0.3;

  // Breathing animation
  const breathingScale = 1 + Math.sin(Date.now() * 0.001) * 0.05;

  return (
    <>
      {/* Particle ring effect */}

      <button
        ref={orbRef}
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

            {displayedMessages.map((message, index) => (
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
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 bg-gradient-to-r from-slate-50 to-blue-50/30 border-t border-[#E2E8F0] relative overflow-hidden">
            {/* Footer decoration */}
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-400/5 to-cyan-400/5 rounded-full blur-xl"></div>

            {currentStep < conversation.length - 1 ? (
              <button
                onClick={handleSendMessage}
                className="w-full flex items-center justify-center space-x-2 px-5 py-3.5 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-slate-900/20 relative z-10 group"
              >
                <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                <span>Continue Demo</span>
              </button>
            ) : (
              <button
                onClick={() => setCurrentStep(0)}
                className="w-full px-5 py-3.5 bg-white border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50/50 text-slate-900 rounded-xl font-semibold transition-all duration-200 relative z-10"
              >
                Restart Demo
              </button>
            )}
          </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;

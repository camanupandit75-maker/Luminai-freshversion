import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

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
      text: "Hi! I'm LuminAI. Ask me anything about how I can help your team!",
    },
    {
      type: 'user',
      text: 'How does LuminAI integrate with our existing tools?',
    },
    {
      type: 'bot',
      text: "Great question! LuminAI integrates seamlessly with Slack and Telegram. Simply add the bot to your workspace, and it starts learning from your team's conversations immediately. No complex setup required!",
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

  return (
    <>
      <button
        ref={orbRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full transition-all duration-300 flex items-center justify-center ${
          isOpen
            ? 'glass-strong hover:scale-105 neon-glow rotate-90'
            : 'bg-gradient-to-br from-violet-500 via-violet-600 to-blue-500'
        }`}
        style={{
          transform: isOpen ? 'rotate(90deg)' : `scale(${proximityScale})`,
          boxShadow: isOpen
            ? '0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(139, 92, 246, 0.1)'
            : `0 0 ${20 + glowIntensity * 40}px rgba(139, 92, 246, ${0.4 + glowIntensity * 0.4}),
               0 0 ${40 + glowIntensity * 60}px rgba(59, 130, 246, ${0.2 + glowIntensity * 0.3}),
               inset 0 0 ${10 + glowIntensity * 20}px rgba(255, 255, 255, ${0.1 + glowIntensity * 0.2})`,
        }}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-gray-900 transition-transform duration-300" />
        ) : (
          <>
            <MessageCircle className="w-6 h-6 text-white transition-transform duration-300" />
            {isNearCursor && (
              <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
            )}
          </>
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] animate-slide-up">
          <div className="absolute -inset-2 bg-gradient-to-r from-violet-500/30 to-blue-500/30 rounded-3xl blur-2xl opacity-60"></div>
          <div className="relative glass-strong rounded-3xl overflow-hidden gradient-shadow neon-glow">
          <div className="glass-dark border-b border-white/20 px-6 py-4 flex items-center justify-between backdrop-blur-xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-blue-500 rounded-xl flex items-center justify-center neon-glow shadow-lg light-sweep">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-gray-900 font-bold">Ask LuminAI</h3>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                  <span className="text-violet-600 text-xs font-semibold">Online</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 glass h-[400px] overflow-y-auto space-y-3">
            {displayedMessages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-violet-500 to-violet-600 text-white neon-glow'
                      : 'glass-strong text-gray-800 neon-glow-blue'
                  } shadow-lg`}
                >
                  <p className="text-sm leading-relaxed font-medium">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 glass-dark border-t border-white/20">
            {currentStep < conversation.length - 1 ? (
              <button
                onClick={handleSendMessage}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700 text-white rounded-xl font-semibold transition-all duration-300 neon-glow hover:scale-105"
              >
                <Send className="w-4 h-4" />
                <span>Continue Demo</span>
              </button>
            ) : (
              <button
                onClick={() => setCurrentStep(0)}
                className="w-full px-4 py-3 glass hover:glass-strong text-gray-800 rounded-xl font-semibold transition-all duration-300 hover:neon-glow hover:scale-105"
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

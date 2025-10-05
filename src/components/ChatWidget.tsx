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
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-xl transition-all duration-200 flex items-center justify-center shadow-xl ${
          isOpen
            ? 'bg-white border-2 border-slate-200 hover:border-slate-300'
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
        <div className="fixed bottom-24 right-6 z-50 w-[380px] animate-slide-up">
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-slate-900 font-bold">Ask LuminIQ</h3>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-slate-600 text-xs font-semibold">Online</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white h-[400px] overflow-y-auto space-y-3">
            {displayedMessages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up`}
              >
                <div
                  className={`max-w-[85%] rounded-lg px-4 py-3 ${
                    message.type === 'user'
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-50 text-slate-800 border border-slate-200'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-200">
            {currentStep < conversation.length - 1 ? (
              <button
                onClick={handleSendMessage}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-semibold transition-colors duration-200 shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>Continue Demo</span>
              </button>
            ) : (
              <button
                onClick={() => setCurrentStep(0)}
                className="w-full px-4 py-3 bg-white border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-900 rounded-lg font-semibold transition-all duration-200"
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

import { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

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

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
          isOpen
            ? 'bg-gray-800 hover:bg-gray-900'
            : 'bg-gradient-to-br from-violet-500 to-blue-500 hover:shadow-xl hover:scale-110'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-slide-up">
          <div className="bg-gradient-to-r from-violet-500 to-blue-500 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Ask LuminAI</h3>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-violet-100 text-xs">Online</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 h-[400px] overflow-y-auto space-y-3">
            {displayedMessages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    message.type === 'user'
                      ? 'bg-violet-500 text-white'
                      : 'bg-white border border-gray-200 text-gray-800'
                  } shadow-sm`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-white border-t border-gray-200">
            {currentStep < conversation.length - 1 ? (
              <button
                onClick={handleSendMessage}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-violet-500 hover:bg-violet-600 text-white rounded-xl font-medium transition-all duration-300"
              >
                <Send className="w-4 h-4" />
                <span>Continue Demo</span>
              </button>
            ) : (
              <button
                onClick={() => setCurrentStep(0)}
                className="w-full px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-all duration-300"
              >
                Restart Demo
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;

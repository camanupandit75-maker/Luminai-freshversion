import { useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export const Toast = ({ message, isVisible, onClose, duration = 4000 }: ToastProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-24 right-6 z-50 animate-slideInRight">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden min-w-[320px] max-w-md">
        <div className="flex items-start p-4 space-x-3">
          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>

          <div className="flex-1 pt-0.5">
            <h3 className="font-semibold text-slate-900 mb-1">Success!</h3>
            <p className="text-sm text-slate-600">{message}</p>
          </div>

          <button
            onClick={onClose}
            className="flex-shrink-0 p-1 hover:bg-slate-100 rounded transition-colors"
          >
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        <div className="h-1 bg-slate-100">
          <div
            className="h-full bg-gradient-to-r from-green-500 to-green-600 animate-shrink"
            style={{ animationDuration: `${duration}ms` }}
          />
        </div>
      </div>

      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes shrink {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
        .animate-slideInRight {
          animation: slideInRight 0.3s ease-out;
        }
        .animate-shrink {
          animation: shrink linear;
        }
      `}</style>
    </div>
  );
};

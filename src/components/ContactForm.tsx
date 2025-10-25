import { useState, FormEvent } from 'react';
import { Mail, User, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
      
      if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error('Supabase configuration not available');
      }
      
      const apiUrl = `${supabaseUrl}/functions/v1/send-contact-email`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${supabaseAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');

      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <section id="contact-us" className="py-24 lg:py-32 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-cyan-50/30"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-200/40 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `
          linear-gradient(to right, #94a3b8 1px, transparent 1px),
          linear-gradient(to bottom, #94a3b8 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px'
      }}></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-5 tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-600 transform -rotate-12 opacity-50 shadow-sm"></div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-teal-500/20 rounded-[2.5rem] blur-2xl group-hover:blur-3xl transition-all duration-500"></div>

          <div className="relative bg-white/95 backdrop-blur-xl rounded-[2.5rem] p-8 lg:p-12 shadow-2xl border-2 border-slate-200/80 overflow-visible">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-cyan-50/80 rounded-[2.5rem]"></div>

            {/* Enhanced floating decorative elements */}
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-gradient-to-br from-blue-400/40 via-cyan-400/25 to-transparent rounded-full blur-2xl animate-float" style={{ animationDuration: '8s' }}></div>
            <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-gradient-to-br from-cyan-400/35 via-teal-400/20 to-transparent rounded-full blur-2xl animate-float" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>

            <div className="absolute top-8 right-12 w-3 h-3 bg-cyan-400 rounded-full blur-[1px] animate-pulse shadow-lg shadow-cyan-400/50"></div>
            <div className="absolute bottom-12 left-16 w-3 h-3 bg-blue-400 rounded-full blur-[1px] animate-pulse delay-500 shadow-lg shadow-blue-400/50"></div>
            <div className="absolute top-16 left-1/3 w-2.5 h-2.5 bg-teal-400 rounded-full blur-[1px] animate-pulse delay-1000 shadow-lg shadow-teal-400/50"></div>

            {/* Enhanced floating icon stickers */}
            <div className="absolute -top-5 -right-5 w-14 h-14 bg-gradient-to-br from-white via-blue-50 to-white rounded-2xl shadow-2xl flex items-center justify-center animate-bounce border-2 border-blue-200/60 hover:scale-110 transition-transform cursor-pointer" style={{ animationDuration: '3s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-2xl"></div>
              <Mail className="w-6 h-6 text-blue-600 relative z-10" />
            </div>
            <div className="absolute -bottom-4 -left-5 w-12 h-12 bg-gradient-to-br from-white via-cyan-50 to-white rounded-xl shadow-xl flex items-center justify-center animate-bounce border-2 border-cyan-200/60 hover:scale-110 transition-transform cursor-pointer" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-teal-400/20 rounded-xl"></div>
              <MessageSquare className="w-5 h-5 text-cyan-600 relative z-10" />
            </div>
            <div className="absolute top-1/3 -right-6 w-10 h-10 bg-gradient-to-br from-white via-teal-50 to-white rounded-lg shadow-lg flex items-center justify-center animate-bounce border-2 border-teal-200/60 hover:scale-110 transition-transform cursor-pointer" style={{ animationDuration: '2.8s', animationDelay: '1s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-lg"></div>
              <Send className="w-4 h-4 text-teal-600 relative z-10" />
            </div>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="space-y-6">
                <div className="relative group/input">
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="w-5 h-5 text-slate-400 group-focus-within/input:text-blue-500 transition-colors" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 outline-none text-slate-900 placeholder-slate-400"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div className="relative group/input">
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="w-5 h-5 text-slate-400 group-focus-within/input:text-blue-500 transition-colors" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 outline-none text-slate-900 placeholder-slate-400"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="relative group/input">
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none">
                      <MessageSquare className="w-5 h-5 text-slate-400 group-focus-within/input:text-blue-500 transition-colors" />
                    </div>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 outline-none text-slate-900 placeholder-slate-400 resize-none"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>
                </div>
              </div>

              {status === 'success' && (
                <div className="flex items-center space-x-3 p-4 bg-emerald-50 border-2 border-emerald-200 rounded-xl animate-slide-down">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <p className="text-sm font-medium text-emerald-700">
                    Message sent successfully! We'll get back to you soon.
                  </p>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center space-x-3 p-4 bg-rose-50 border-2 border-rose-200 rounded-xl animate-slide-down">
                  <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
                  <p className="text-sm font-medium text-rose-700">
                    {errorMessage}
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="group/btn relative w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-xl font-semibold transition-all duration-500 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 transition-transform duration-500 group-hover/btn:scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
                </div>

                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin relative z-10"></div>
                    <span className="text-white relative z-10">Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 text-white relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    <span className="text-white relative z-10">Send Message</span>
                  </>
                )}

                <div className="absolute inset-0 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 blur-xl bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 -z-10"></div>
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation: blob 15s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default ContactForm;

import React, { useState } from 'react';
import { Mail, User, CheckCircle, Loader, Sparkles } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export const WaitlistForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [position, setPosition] = useState(null);
  const [referralCode, setReferralCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }
      if (formData.name.length < 2) {
        throw new Error('Please enter your full name');
      }

      // Get referral code from URL if exists
      const urlParams = new URLSearchParams(window.location.search);
      const referredBy = urlParams.get('ref');

      // Check if email already exists
      const { data: existingUser } = await supabase
        .from('launch_waitlist')
        .select('*')
        .eq('email', formData.email.toLowerCase())
        .single();

      if (existingUser) {
        setSuccess(true);
        setPosition(existingUser.position);
        setReferralCode(existingUser.referral_code);
        return;
      }

      // Find referrer if code provided
      let referredById = null;
      if (referredBy) {
        const { data: referrer } = await supabase
          .from('launch_waitlist')
          .select('id')
          .eq('referral_code', referredBy.toLowerCase())
          .single();
        
        if (referrer) referredById = referrer.id;
      }

      // Insert new entry
      const { data: newEntry, error: insertError } = await supabase
        .from('launch_waitlist')
        .insert([{
          name: formData.name.trim(),
          email: formData.email.toLowerCase().trim(),
          referred_by: referredById,
          status: 'waiting'
        }])
        .select()
        .single();

      if (insertError) throw insertError;

      setSuccess(true);
      setPosition(newEntry.position);
      setReferralCode(newEntry.referral_code);
      
      if (onSuccess) onSuccess(newEntry);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const shareUrl = `${window.location.origin}?ref=${referralCode}`;

  if (success) {
    return (
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">You're on the list!</h2>
            <p className="text-gray-600">Welcome to the Luminai waitlist, {formData.name.split(' ')[0]}!</p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
            <div className="text-sm text-gray-600 mb-2">Your position</div>
            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              #{position}
            </div>
            <div className="text-sm text-gray-600 mt-2">
              {position <= 100 ? '🎉 You\'re in the first 100!' : 'in the waitlist'}
            </div>
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-4">Share your unique referral link to move up the list!</p>
            <div className="flex gap-2">
              <input
                type="text"
                value={shareUrl}
                readOnly
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm"
              />
              <button
                onClick={() => {
                  navigator.clipboard.writeText(shareUrl);
                  alert('Link copied!');
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Copy
              </button>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            We'll notify you at <strong>{formData.email}</strong> when it's your turn
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Join the Waitlist</h2>
          <p className="text-gray-600">Be among the first to experience Luminai when we launch</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader className="w-5 h-5 animate-spin" />
                Joining...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Join Waitlist
              </>
            )}
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-6">
          By joining, you agree to receive updates about Luminai. We respect your privacy.
        </p>
      </div>
    </div>
  );
};

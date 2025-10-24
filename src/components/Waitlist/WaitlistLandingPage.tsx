import React, { useState, useEffect } from 'react';
import { WaitlistForm } from './WaitlistForm';
import { Sparkles, Zap, Shield, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export const WaitlistLandingPage = () => {
  const [stats, setStats] = useState({ totalSignups: 0, waitingCount: 0 });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const { count: totalSignups } = await supabase
        .from('launch_waitlist')
        .select('*', { count: 'exact', head: true });

      const { count: waitingCount } = await supabase
        .from('launch_waitlist')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'waiting');

      setStats({
        totalSignups: totalSignups || 0,
        waitingCount: waitingCount || 0
      });
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">Luminai</span>
          </div>
          
          {stats.totalSignups > 0 && (
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-gray-900">
                {stats.totalSignups.toLocaleString()} on waitlist
              </span>
            </div>
          )}
        </nav>
      </header>

      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Coming Soon
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Experience the Future of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                AI Innovation
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join thousands of innovators waiting to access Luminai. Be among the first to experience 
              the next generation of AI-powered solutions.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Early access to exclusive features',
                'Priority support and onboarding',
                'Special launch pricing',
                'Direct input on product development'
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">Join {stats.totalSignups}+ people</span> already on the waitlist
              </p>
            </div>
          </div>

          <div>
            <WaitlistForm onSuccess={() => fetchStats()} />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Join Luminai?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Be part of something extraordinary from day one
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Cutting-Edge AI</h3>
            <p className="text-gray-600">
              Experience the latest in artificial intelligence technology, designed to revolutionize how you work and create.
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise Security</h3>
            <p className="text-gray-600">
              Built with enterprise-grade security and privacy protection, ensuring your data is always safe and secure.
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Community First</h3>
            <p className="text-gray-600">
              Join a community of forward-thinking individuals who are shaping the future of AI-powered innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't miss your chance to be part of the Luminai revolution. Join the waitlist today and secure your spot.
          </p>
          <div className="flex items-center justify-center gap-4">
            <ArrowRight className="w-6 h-6" />
            <span className="text-lg font-semibold">Limited Early Access Spots Available</span>
          </div>
        </div>
      </section>

      <footer className="container mx-auto px-4 py-12 text-center text-gray-600">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold text-gray-900">Luminai</span>
        </div>
        <p className="text-sm">
          © 2025 Luminai. All rights reserved. | Privacy Policy | Terms of Service
        </p>
      </footer>
    </div>
  );
};

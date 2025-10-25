import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Loader2 } from 'lucide-react';

export const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('ProtectedRoute: useEffect triggered');
    const getUser = async () => {
      try {
        console.log('ProtectedRoute: Getting user from Supabase...');
        const { data: { user }, error } = await supabase.auth.getUser();
        console.log('ProtectedRoute: User check result:', user);
        console.log('ProtectedRoute: Error (if any):', error);
        
        if (error) {
          console.error('ProtectedRoute: Auth error:', error);
          setUser(null);
        } else {
          setUser(user);
        }
      } catch (error) {
        console.error('ProtectedRoute: Unexpected error:', error);
        setUser(null);
      } finally {
        console.log('ProtectedRoute: Setting loading to false');
        setLoading(false);
      }
    };
    getUser();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-slate-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    console.log('ProtectedRoute: No user found, redirecting to login immediately');
    return <Navigate to="/login" replace />;
  }

  console.log('ProtectedRoute: User authenticated, rendering children');
  return <>{children}</>;
};


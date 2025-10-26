import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Loader2 } from 'lucide-react';

export const AuthCallback = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        console.log('Auth callback triggered, URL:', window.location.href);
        
        // Extract URL hash fragments that Supabase uses for OAuth
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        console.log('Hash params:', Object.fromEntries(hashParams.entries()));
        
        // Handle the OAuth callback - this will process the URL hash
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Auth callback error:', error);
          setError(error.message);
          setTimeout(() => {
            window.location.href = '/signin';
          }, 3000);
          return;
        }

        if (data.session) {
          console.log('Auth callback successful, session:', data.session);
          console.log('Redirecting to dashboard...');
          // Use window.location to force full page reload on Vercel
          window.location.href = '/dashboard';
        } else {
          console.log('No session found, redirecting to signin');
          navigate('/signin');
        }
      } catch (err) {
        console.error('Unexpected error in auth callback:', err);
        setError('An unexpected error occurred');
        setTimeout(() => {
          window.location.href = '/signin';
        }, 3000);
      }
    };

    handleAuthCallback();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center px-6">
      <div className="text-center">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
        {error ? (
          <>
            <h2 className="text-xl font-semibold text-red-600 mb-2">Authentication Error</h2>
            <p className="text-slate-600 mb-4">{error}</p>
            <p className="text-sm text-slate-500">Redirecting to sign in...</p>
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Completing sign in...</h2>
            <p className="text-slate-600">Please wait</p>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthCallback;

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Loader2 } from 'lucide-react';

export const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();

        if (error) {
          console.error('Auth callback error:', error);
          navigate('/login?error=auth_failed');
          return;
        }

        if (session?.user) {
          const { data: existingProfile } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .maybeSingle();

          if (!existingProfile) {
            await supabase.from('profiles').insert({
              id: session.user.id,
              email: session.user.email!,
              full_name: session.user.user_metadata.full_name || session.user.email?.split('@')[0] || 'User',
              avatar_url: session.user.user_metadata.avatar_url || null,
              auth_provider: 'google',
              role: 'user',
              tier: 'free',
              credits_remaining: 100,
              max_monthly_uploads: 10,
              role_in_org: 'member',
              onboarding_completed: false,
              google_id: session.user.user_metadata.sub || null,
            });
          }

          navigate('/dashboard');
        } else {
          navigate('/login');
        }
      } catch (error) {
        console.error('Unexpected error in auth callback:', error);
        navigate('/login?error=unexpected');
      }
    };

    handleCallback();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
        <p className="text-slate-600 text-lg">Completing sign in...</p>
      </div>
    </div>
  );
};

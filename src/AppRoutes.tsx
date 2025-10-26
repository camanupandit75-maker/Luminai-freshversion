import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/Auth/ProtectedRoute.tsx';
import { LoginPage } from './components/Auth/LoginPage.tsx';
import { SignUp } from './components/Auth/SignUp.jsx';
import { SignIn } from './components/Auth/SignIn.jsx';
import { AuthCallback } from './components/Auth/AuthCallback.tsx';
import { Dashboard } from './components/Dashboard/Dashboard.tsx';
import { ProfilePage } from './components/Profile/ProfilePage';
import { WaitlistLandingPage } from './components/Waitlist/WaitlistLandingPage';
import App from './App';

// Debug component to log route changes
const RouteDebugger = () => {
  const location = useLocation();
  console.error('=== ROUTE DEBUG ===');
  console.error('Hash:', window.location.hash);
  console.error('Location pathname:', location.pathname);
  console.error('Full URL:', window.location.href);
  console.error('Build timestamp:', '2024-10-26-15:30:00-FORCE-DEPLOY');
  return null;
};

export const AppRoutes = () => {
  try {
    return (
      <HashRouter>
        <RouteDebugger />
        <AuthProvider>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/waitlist" element={<WaitlistLandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </HashRouter>
    );
  } catch (error) {
    console.error('Error in AppRoutes:', error);
    return <div>Error loading application. Check console for details.</div>;
  }
};

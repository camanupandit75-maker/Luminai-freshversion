import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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

export const AppRoutes = () => {
  try {
    return (
      <Router>
        <AuthProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="waitlist" element={<WaitlistLandingPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="auth/callback" element={<AuthCallback />} />
            
            {/* Protected Routes */}
            <Route
              path="dashboard"
              element={<Dashboard />}
            />
            <Route
              path="profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            
            {/* Default/Home Route - Must be last */}
            <Route path="/" element={<App />} />
          </Routes>
        </AuthProvider>
      </Router>
    );
  } catch (error) {
    console.error('Error in AppRoutes:', error);
    return <div>Error loading application. Check console for details.</div>;
  }
};

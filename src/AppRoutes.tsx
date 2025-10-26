import { createHashRouter, RouterProvider } from 'react-router-dom';
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

// Debug logging
console.error('=== ROUTE DEBUG ===');
console.error('Hash:', window.location.hash);
console.error('Pathname:', window.location.pathname);
console.error('Full URL:', window.location.href);

const router = createHashRouter([
  {
    path: "waitlist",
    element: (
      <AuthProvider>
        <WaitlistLandingPage />
      </AuthProvider>
    ),
  },
  {
    path: "login",
    element: (
      <AuthProvider>
        <LoginPage />
      </AuthProvider>
    ),
  },
  {
    path: "signup",
    element: (
      <AuthProvider>
        <SignUp />
      </AuthProvider>
    ),
  },
  {
    path: "signin",
    element: (
      <AuthProvider>
        <SignIn />
      </AuthProvider>
    ),
  },
  {
    path: "auth/callback",
    element: (
      <AuthProvider>
        <AuthCallback />
      </AuthProvider>
    ),
  },
  {
    path: "dashboard",
    element: (
      <AuthProvider>
        <Dashboard />
      </AuthProvider>
    ),
  },
  {
    path: "profile",
    element: (
      <AuthProvider>
        <ProtectedRoute>
          <ProfilePage />
        </ProtectedRoute>
      </AuthProvider>
    ),
  },
  {
    path: "/",
    element: (
      <AuthProvider>
        <App />
      </AuthProvider>
    ),
  },
]);

export const AppRoutes = () => {
  try {
    return <RouterProvider router={router} />;
  } catch (error) {
    console.error('Error in AppRoutes:', error);
    return <div>Error loading application. Check console for details.</div>;
  }
};

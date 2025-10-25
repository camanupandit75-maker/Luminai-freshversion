import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppRoutes } from './AppRoutes';
import './index.css';

// Add error boundary for better debugging
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
  console.error('Error stack:', event.error?.stack);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

// Debug environment variables - FORCE DEPLOYMENT
console.log('Environment check - DEPLOYMENT TEST:');
console.log('VITE_SUPABASE_URL:', import.meta.env.VITE_SUPABASE_URL);
console.log('VITE_SUPABASE_ANON_KEY:', import.meta.env.VITE_SUPABASE_ANON_KEY);
console.log('VITE_N8N_WEBHOOK_URL:', import.meta.env.VITE_N8N_WEBHOOK_URL);
console.log('Build timestamp:', new Date().toISOString());

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>
);

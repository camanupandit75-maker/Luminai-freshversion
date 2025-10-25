import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// More lenient check - only error if truly missing
if (!supabaseUrl || !supabaseAnonKey || supabaseUrl === 'undefined' || supabaseAnonKey === 'undefined') {
  console.error('Supabase configuration missing');
  console.error('URL exists:', !!supabaseUrl);
  console.error('Key exists:', !!supabaseAnonKey);
  
  // In production, use fallback or throw more helpful error
  if (typeof window !== 'undefined') {
    console.error('Environment variables not loaded. Check Vercel configuration.');
  }
}

export const supabase = createClient(
  supabaseUrl || '', 
  supabaseAnonKey || ''
);

// Database types based on your schema
export interface Profile {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  company?: string;
  role: string;
  auth_provider: string;
  onboarding_completed: boolean;
  created_at: string;
  updated_at: string;
  tier: string;
  credits_remaining: number;
  google_id?: string;
  max_monthly_uploads: number;
  organization_id?: string;
  role_in_org: string;
}

export interface WaitlistEntry {
  id: string;
  name: string;
  email: string;
  company?: string;
  created_at: string;
  updated_at: string;
}

export interface IngestionJob {
  id: string;
  user_id?: string;
  source_type: string;
  status: string;
  total_messages: number;
  processed_messages: number;
  file_name?: string;
  file_size_bytes?: number;
  metadata: Record<string, any>;
  error_message?: string;
  started_at?: string;
  completed_at?: string;
  created_at: string;
  updated_at: string;
}

export interface KnowledgeItem {
  id: string;
  title: string;
  problem: string;
  solution: string;
  category: string;
  tags?: string[];
  created_by: string;
  views: number;
  created_at: string;
  updated_at: string;
  problem_id?: string;
  solution_id?: string;
  confidence?: number;
  source_type: string;
}

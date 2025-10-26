import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { supabase, IngestionJob, KnowledgeItem } from '../../lib/supabase';
import ChatWidget from '../ChatWidget';
import {
  Upload,
  Database,
  TrendingUp,
  BookOpen,
  Sparkles,
  Clock,
  CheckCircle,
  AlertCircle,
  LogOut,
  User,
  CreditCard,
} from 'lucide-react';

export const Dashboard = () => {
  console.log('Dashboard component rendering...');
  const { user, profile, signOut } = useAuth();
  const [jobs, setJobs] = useState<IngestionJob[]>([]);
  const [knowledgeItems, setKnowledgeItems] = useState<KnowledgeItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalJobs: 0,
    completedJobs: 0,
    knowledgeItems: 0,
    creditsUsed: 0,
  });

  useEffect(() => {
    if (user) {
      fetchDashboardData();
    }
  }, [user]);

  const fetchDashboardData = async () => {
    try {
      // Fetch user's ingestion jobs
      const { data: jobsData } = await supabase
        .from('ingestion_jobs')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false })
        .limit(5);

      // Fetch user's knowledge items
      const { data: knowledgeData } = await supabase
        .from('knowledge_items')
        .select('*')
        .eq('created_by', user?.id)
        .order('created_at', { ascending: false })
        .limit(5);

      setJobs(jobsData || []);
      setKnowledgeItems(knowledgeData || []);

      // Calculate stats
      const totalJobs = jobsData?.length || 0;
      const completedJobs = jobsData?.filter((j) => j.status === 'completed').length || 0;
      const creditsUsed = (profile?.max_monthly_uploads || 10) - (profile?.credits_remaining || 100);

      setStats({
        totalJobs,
        completedJobs,
        knowledgeItems: knowledgeData?.length || 0,
        creditsUsed,
      });
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'processing':
        return <Clock className="w-5 h-5 text-blue-500 animate-spin" />;
      case 'failed':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-slate-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700';
      case 'processing':
        return 'bg-blue-100 text-blue-700';
      case 'failed':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  console.log('Dashboard render - loading:', loading, 'user:', user?.id, 'profile:', profile?.full_name);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">LuminIQ Dashboard</h1>
                <p className="text-sm text-slate-600">Welcome back, {profile?.full_name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => window.location.href = '/profile'}
                className="flex items-center space-x-2 px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <User className="w-5 h-5" />
                <span>Profile</span>
              </button>
              <button
                onClick={async () => {
                  await signOut();
                  window.location.href = '/';
                }}
                className="flex items-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Upload className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-2xl font-bold text-slate-900">{stats.totalJobs}</span>
            </div>
            <h3 className="text-sm font-medium text-slate-600">Total Jobs</h3>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-2xl font-bold text-slate-900">{stats.completedJobs}</span>
            </div>
            <h3 className="text-sm font-medium text-slate-600">Completed</h3>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-2xl font-bold text-slate-900">{stats.knowledgeItems}</span>
            </div>
            <h3 className="text-sm font-medium text-slate-600">Knowledge Items</h3>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-cyan-600" />
              </div>
              <span className="text-2xl font-bold text-slate-900">{profile?.credits_remaining}</span>
            </div>
            <h3 className="text-sm font-medium text-slate-600">Credits Remaining</h3>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Jobs */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                <Database className="w-6 h-6 text-blue-600" />
                <span>Recent Jobs</span>
              </h2>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View All
              </button>
            </div>

            {jobs.length === 0 ? (
              <div className="text-center py-12">
                <Upload className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-600">No jobs yet</p>
                <p className="text-sm text-slate-500 mt-2">Upload your first dataset to get started</p>
              </div>
            ) : (
              <div className="space-y-4">
                {jobs.map((job) => (
                  <div
                    key={job.id}
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(job.status)}
                      <div>
                        <p className="font-medium text-slate-900">
                          {job.file_name || 'Chat Analysis'}
                        </p>
                        <p className="text-sm text-slate-600">
                          {job.processed_messages}/{job.total_messages} messages
                        </p>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        job.status
                      )}`}
                    >
                      {job.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Knowledge Items */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                <BookOpen className="w-6 h-6 text-purple-600" />
                <span>Knowledge Base</span>
              </h2>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View All
              </button>
            </div>

            {knowledgeItems.length === 0 ? (
              <div className="text-center py-12">
                <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-600">No knowledge items yet</p>
                <p className="text-sm text-slate-500 mt-2">
                  Start extracting insights from your data
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {knowledgeItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium text-slate-900 line-clamp-1">{item.title}</h3>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 line-clamp-2">{item.problem}</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs text-slate-500">{item.views} views</span>
                      {item.confidence && (
                        <span className="text-xs text-slate-500">
                          {Math.round(item.confidence * 100)}% confidence
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Account Info */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">Your Plan: {profile?.tier?.toUpperCase() || 'FREE'}</h3>
              <p className="text-blue-100">
                {profile?.credits_remaining} credits remaining • {profile?.max_monthly_uploads} uploads per month
              </p>
            </div>
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              Upgrade Plan
            </button>
          </div>
        </div>
      </main>
      
      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
};

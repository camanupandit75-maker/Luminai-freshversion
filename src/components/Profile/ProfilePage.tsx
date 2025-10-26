import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { User, Mail, Building, CreditCard, Calendar, ArrowLeft, Save, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ProfilePage = () => {
  const { profile, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    full_name: profile?.full_name || '',
    company: profile?.company || '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const { error } = await updateProfile(formData);

    if (!error) {
      setSuccess(true);
      setEditing(false);
      setTimeout(() => setSuccess(false), 3000);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <button
            onClick={() => navigate('dashboard')}
            className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Dashboard</span>
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-6">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
              {profile?.full_name?.charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">{profile?.full_name}</h1>
              <p className="text-slate-600 flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{profile?.email}</span>
              </p>
              <div className="flex items-center space-x-4 mt-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                  {profile?.tier.toUpperCase()}
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                  {profile?.role_in_org}
                </span>
              </div>
            </div>
          </div>
        </div>

        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 flex items-center space-x-2">
            <Sparkles className="w-5 h-5" />
            <span>Profile updated successfully!</span>
          </div>
        )}

        {/* Profile Information */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900">Profile Information</h2>
            {!editing && (
              <button
                onClick={() => setEditing(true)}
                className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
              >
                Edit Profile
              </button>
            )}
          </div>

          {editing ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    value={formData.full_name}
                    onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Company
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Optional"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-200 flex items-center space-x-2 disabled:opacity-50"
                >
                  <Save className="w-5 h-5" />
                  <span>{loading ? 'Saving...' : 'Save Changes'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEditing(false);
                    setFormData({
                      full_name: profile?.full_name || '',
                      company: profile?.company || '',
                    });
                  }}
                  className="px-6 py-3 border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-lg">
                <User className="w-5 h-5 text-slate-400" />
                <div>
                  <p className="text-sm text-slate-600">Full Name</p>
                  <p className="font-medium text-slate-900">{profile?.full_name}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-lg">
                <Mail className="w-5 h-5 text-slate-400" />
                <div>
                  <p className="text-sm text-slate-600">Email</p>
                  <p className="font-medium text-slate-900">{profile?.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-lg">
                <Building className="w-5 h-5 text-slate-400" />
                <div>
                  <p className="text-sm text-slate-600">Company</p>
                  <p className="font-medium text-slate-900">{profile?.company || 'Not specified'}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-lg">
                <Calendar className="w-5 h-5 text-slate-400" />
                <div>
                  <p className="text-sm text-slate-600">Member Since</p>
                  <p className="font-medium text-slate-900">
                    {new Date(profile?.created_at || '').toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Account Stats */}
        <div className="mt-6 bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Account Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <CreditCard className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-slate-900">{profile?.credits_remaining}</p>
              <p className="text-sm text-slate-600">Credits Remaining</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <User className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-slate-900">{profile?.tier.toUpperCase()}</p>
              <p className="text-sm text-slate-600">Current Plan</p>
            </div>
            <div className="text-center p-6 bg-cyan-50 rounded-lg">
              <Calendar className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-slate-900">{profile?.max_monthly_uploads}</p>
              <p className="text-sm text-slate-600">Monthly Uploads</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

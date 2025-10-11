import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Users, Mail, Building2, Calendar, TrendingUp, Download, Search, Filter } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface WaitlistEntry {
  id: string;
  name: string;
  email: string;
  company: string | null;
  created_at: string;
}

export const WaitlistPage = () => {
  const [entries, setEntries] = useState<WaitlistEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCompany, setFilterCompany] = useState<string>('all');
  const { user } = useAuth();

  useEffect(() => {
    fetchWaitlistEntries();
  }, []);

  const fetchWaitlistEntries = async () => {
    try {
      const { data, error } = await supabase
        .from('waitlist')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setEntries(data || []);
    } catch (error) {
      console.error('Error fetching waitlist:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredEntries = entries.filter(entry => {
    const matchesSearch =
      entry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (entry.company && entry.company.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCompany = filterCompany === 'all' ||
      (filterCompany === 'with-company' && entry.company) ||
      (filterCompany === 'no-company' && !entry.company);

    return matchesSearch && matchesCompany;
  });

  const stats = {
    total: entries.length,
    withCompany: entries.filter(e => e.company).length,
    thisWeek: entries.filter(e => {
      const createdDate = new Date(e.created_at);
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return createdDate >= weekAgo;
    }).length,
    today: entries.filter(e => {
      const createdDate = new Date(e.created_at);
      const today = new Date();
      return createdDate.toDateString() === today.toDateString();
    }).length,
  };

  const downloadCSV = () => {
    const headers = ['Name', 'Email', 'Company', 'Joined Date'];
    const csvData = filteredEntries.map(entry => [
      entry.name,
      entry.email,
      entry.company || 'N/A',
      new Date(entry.created_at).toLocaleDateString(),
    ]);

    const csv = [
      headers.join(','),
      ...csvData.map(row => row.map(cell => `"${cell}"`).join(',')),
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `waitlist-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    if (days < 7) return `${days} days ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading waitlist...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Waitlist Dashboard</h1>
          <p className="text-slate-600">Manage and track your waitlist signups</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-bold text-slate-900">{stats.total}</span>
            </div>
            <h3 className="text-sm font-medium text-slate-600">Total Signups</h3>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-bold text-slate-900">{stats.today}</span>
            </div>
            <h3 className="text-sm font-medium text-slate-600">Today</h3>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-bold text-slate-900">{stats.thisWeek}</span>
            </div>
            <h3 className="text-sm font-medium text-slate-600">This Week</h3>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-bold text-slate-900">{stats.withCompany}</span>
            </div>
            <h3 className="text-sm font-medium text-slate-600">With Company</h3>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search by name, email, or company..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <select
                    value={filterCompany}
                    onChange={(e) => setFilterCompany(e.target.value)}
                    className="pl-9 pr-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none bg-white cursor-pointer"
                  >
                    <option value="all">All Entries</option>
                    <option value="with-company">With Company</option>
                    <option value="no-company">No Company</option>
                  </select>
                </div>

                <button
                  onClick={downloadCSV}
                  className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Export CSV</span>
                </button>
              </div>
            </div>
          </div>

          {filteredEntries.length === 0 ? (
            <div className="p-12 text-center">
              <Users className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">No entries found</h3>
              <p className="text-slate-600">
                {searchTerm || filterCompany !== 'all'
                  ? 'Try adjusting your filters'
                  : 'Start collecting waitlist signups to see them here'}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Company
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Joined
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {filteredEntries.map((entry, index) => (
                    <tr
                      key={entry.id}
                      className="hover:bg-slate-50 transition-colors"
                      style={{
                        animation: `fadeIn 0.3s ease-in-out ${index * 0.05}s both`
                      }}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                            {entry.name.charAt(0).toUpperCase()}
                          </div>
                          <span className="ml-3 text-sm font-medium text-slate-900">
                            {entry.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-slate-600">
                          <Mail className="w-4 h-4 mr-2 text-slate-400" />
                          {entry.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {entry.company ? (
                          <div className="flex items-center text-sm text-slate-600">
                            <Building2 className="w-4 h-4 mr-2 text-slate-400" />
                            {entry.company}
                          </div>
                        ) : (
                          <span className="text-sm text-slate-400 italic">No company</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-slate-600">
                          {formatDate(entry.created_at)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {filteredEntries.length > 0 && (
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
              <p className="text-sm text-slate-600">
                Showing <span className="font-semibold text-slate-900">{filteredEntries.length}</span> of{' '}
                <span className="font-semibold text-slate-900">{entries.length}</span> entries
              </p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 via-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="text-lg font-bold text-white">
              Lumin<span className="text-white">IQ</span><span className="text-cyan-400">🔍</span>
            </span>
          </div>

          <div className="flex items-center space-x-6 text-sm text-slate-400">
            <span>© 2025 LuminIQ</span>
            <button className="hover:text-white transition-colors">Privacy</button>
            <button className="hover:text-white transition-colors">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

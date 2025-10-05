const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="text-lg font-bold text-slate-900">LuminAI</span>
          </div>

          <div className="flex items-center space-x-6 text-sm text-slate-600">
            <span>© 2025 LuminAI</span>
            <button className="hover:text-slate-900 transition-colors">Privacy</button>
            <button className="hover:text-slate-900 transition-colors">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

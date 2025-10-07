const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
              <span className="text-2xl">🔍</span>
            </div>
            <span className="text-lg font-bold text-white">
              Lumin<span className="text-white">IQ</span>
            </span>
          </div>

          <div className="flex items-center space-x-6 text-sm text-slate-400">
            <span>© 2025 LuminIQ</span>
            <button className="relative hover:text-white transition-colors duration-300 link-underline">Privacy</button>
            <button className="relative hover:text-white transition-colors duration-300 link-underline">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

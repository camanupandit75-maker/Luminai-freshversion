const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <img src="/generated-image.png" alt="LuminIQ" className="h-8 w-auto transition-transform duration-300 group-hover:scale-105" style={{mixBlendMode: 'multiply', filter: 'brightness(1.2)'}} />
            <span className="text-cyan-400">🔍</span>
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

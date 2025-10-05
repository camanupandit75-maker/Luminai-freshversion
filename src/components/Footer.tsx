const Footer = () => {
  return (
    <footer className="bg-white border-t border-amber-200 py-12 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="text-xl">🍫</span>
            <span className="text-lg font-bold text-amber-900">Lumin AI</span>
          </div>

          <div className="flex items-center space-x-6 text-sm text-amber-700">
            <span>© 2025 Lumin AI</span>
            <button className="hover:text-amber-950 transition-colors">Privacy</button>
            <button className="hover:text-amber-950 transition-colors">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

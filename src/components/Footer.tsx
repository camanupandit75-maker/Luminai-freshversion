const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-300 to-blue-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="text-lg font-semibold text-gray-900">LuminAI</span>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <span>© 2025 LuminAI</span>
            <button className="hover:text-violet-500 transition-colors">Privacy</button>
            <button className="hover:text-violet-500 transition-colors">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

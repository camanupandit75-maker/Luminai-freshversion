const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="text-xl">🔮</span>
            <span className="text-lg font-bold text-gray-900">Lumin AI</span>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <span>© 2025 Lumin AI</span>
            <button className="hover:text-gray-900 transition-colors">Privacy</button>
            <button className="hover:text-gray-900 transition-colors">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

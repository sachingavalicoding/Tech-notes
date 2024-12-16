const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Logo and About */}
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-2xl font-bold text-white mb-4">Tech Notes</h1>
            <p className="text-sm text-gray-400 text-center md:text-left">
              Connecting developers with modern tools and insights to empower their journey.
            </p>
          </div>

       

          {/* Subscribe Section */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-white font-bold mb-4">Subscribe</h3>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-emerald-400"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-600 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p className="text-gray-500">
            © {new Date().getFullYear()} MyWebsite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

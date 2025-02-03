export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold">TomasaDeco</h2>
            <p className="mt-2 text-gray-400">
              Your one-stop shop for premium home decoration.
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-gray-500">
          © {new Date().getFullYear()} TomasaDeco. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

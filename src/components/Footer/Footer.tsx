export const Footer = () => {
  return (
    <footer className="py-8 mt-10 text-white bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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
            <div className="flex mt-2 space-x-4">
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

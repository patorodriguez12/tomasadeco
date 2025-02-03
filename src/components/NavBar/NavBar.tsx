import Link from "next/link";

export const NavBar = () => {
  return (
    <header className="bg-primary shadow-md">
      <div className="container flex justify-between items-center mx-auto px-6 py-4">
        {/* Logo  */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          LOGO
        </Link>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <Link href="/products" className="text-gray-700 hover:text-gray-900">
            Products
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900">
            About
          </Link>
          <Link href="/login" className="text-gray-700 hover:text-gray-900">
            Login
          </Link>
          <Link href="/register" className="text-gray-700 hover:text-gray-900">
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;

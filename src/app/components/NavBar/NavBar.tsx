import Link from "next/link";

export const NavBar = () => {
  return (
    <header className="bg-primary shadow-md">
      <div className="container flex justify-between items-center mx-auto px-6 py-4">
        {/* Logo  */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          TomasaDeco
        </Link>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <Link href="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link href="/shop" className="text-gray-700 hover:text-gray-900">
            Shop
          </Link>
          <Link href="/cart" className="text-gray-700 hover:text-gray-900">
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;

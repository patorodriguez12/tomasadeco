import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="container mx-auto px-6 py-4 w-screen flex justify-between items-center bg-black">
      <Link href="/" className="text-2xl font-bold text-gray-800">
        TomasaDeco
      </Link>
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
  );
};

export default NavBar;
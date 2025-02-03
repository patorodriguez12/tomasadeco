"use client";

import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import { useState } from "react";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-800">
            LOGO
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/products" className="text-gray-700 hover:text-black">
              Products
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-black">
              About
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex space-x-4 items-center">
            <Link href="/cart">
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-black cursor-pointer" />
            </Link>
            <Link href="/auth">
              <User className="w-6 h-6 text-gray-700 hover:text-black cursor-pointer" />
            </Link>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white shadow-md rounded-md p-4 flex flex-col space-y-2">
            <Link href="/products" className="text-gray-700 hover:text-black">
              Products
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-black">
              About
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default NavBar;

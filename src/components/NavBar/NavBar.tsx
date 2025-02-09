"use client";

import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import { useState } from "react";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthMenuOpen, setIsAuthMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background shadow-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            LOGO
          </Link>

          {/* Navigation */}
          <nav className="hidden space-x-6 md:flex">
            <Link
              href="/products"
              className="text-dark hover:text-accent duration-300 transition-all"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-dark hover:text-accent duration-300 transition-all"
            >
              About
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Link href="/cart">
              <ShoppingCart className="w-6 h-6 text-contrast cursor-pointer hover:text-accent duration-300 transition-all" />
            </Link>
            <button onClick={() => setIsAuthMenuOpen(!isAuthMenuOpen)}>
              <User className="w-6 h-6 text-contrast cursor-pointer hover:text-accent duration-300 transition-all" />
            </button>

            {/* Authentication Menu */}
            {isAuthMenuOpen && (
              <nav className="flex flex-col p-4 space-y-2 bg-white rounded-md shadow-md">
                <Link
                  href="/login"
                  className="text-dark hover:text-accent duration-300 transition-all"
                  onClick={() => setIsAuthMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="text-dark hover:text-accent duration-300 transition-all"
                  onClick={() => setIsAuthMenuOpen(false)}
                >
                  Signup
                </Link>
              </nav>
            )}

            {/* Mobile Menu Button */}
            <button
              className="p-2 text-gray-700 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="flex flex-col p-4 space-y-2 bg-white rounded-md shadow-md md:hidden">
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

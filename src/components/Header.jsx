"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "Login", path: "/login" },
  { name: "Register", path: "/register" },
  { name: "Product", path: "/product" },
];

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-3xl font-bold text-white transform transition duration-500 hover:scale-110"
          >
            Logo
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-4 py-2 rounded-lg text-lg font-medium transition duration-300 ${
                  pathname === link.path
                    ? "bg-white text-blue-600 shadow-lg"
                    : "text-white hover:bg-white hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button with hover effect */}
          <button className="md:hidden p-2 rounded focus:outline-none hover:bg-blue-700 transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

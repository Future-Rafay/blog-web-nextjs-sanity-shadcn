"use client"

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);  

  // Close mobile menu when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false); // Close menu on scroll
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="w-full relative flex items-center justify-between max-w-4xl mx-auto px-4 py-5">
      {/* Logo */}
      <Link href="/" className="font-black text-2xl">
        FR <span className="text-blue-600 dark:text-primary">Blogs</span>
      </Link>

      {/* Mobile Hamburger Menu */}
      <div className="block lg:hidden">
        <Button
          variant="ghost"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-800 dark:text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-5 items-center">
        <li>
          <Link
            href="/categories"
            className="hover:underline underline-offset-2 font-semibold"
          >
            See <span className="text-blue-600 dark:text-primary">Categories</span>
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:underline underline-offset-2 font-semibold"
          >
            About <span className="text-blue-600 dark:text-primary">Us</span>
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:underline underline-offset-2 font-semibold"
          >
            Contact <span className="text-blue-600 dark:text-primary">Us</span>
          </Link>
        </li>
        <ModeToggle />
      </ul>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg z-50">
          <ul className="flex flex-col gap-4 items-center">
            <li>
              <Link
                href="/categories"
                className="hover:underline underline-offset-2 font-semibold text-gray-800 dark:text-gray-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                See <span className="text-blue-600 dark:text-primary">Categories</span>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:underline underline-offset-2 font-semibold text-gray-800 dark:text-gray-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About <span className="text-blue-600 dark:text-primary">Us</span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:underline underline-offset-2 font-semibold text-gray-800 dark:text-gray-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact <span className="text-blue-600 dark:text-primary">Us</span>
              </Link>
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

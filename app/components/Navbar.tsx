"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 md:py-5">

        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-orange-500"
        >
          UdaipurTrips
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-white font-medium">

          <Link
            href="/"
            className="hover:text-orange-500 transition"
          >
            Home
          </Link>

          <Link
            href="/tour-packages"
            className="hover:text-orange-500 transition"
          >
            Packages
          </Link>

          <Link
            href="/cab-rental"
            className="hover:text-orange-500 transition"
          >
            Cars
          </Link>

          <Link
            href="/destinations"
            className="hover:text-orange-500 transition"
          >
            Destinations
          </Link>

          <Link
            href="/testimonials"
            className="hover:text-orange-500 transition"
          >
            Testimonials
          </Link>

        </div>

        {/* Desktop Book Now */}
        <Link
          href="/booking"
          className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Book Now
        </Link>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">

          {/* Mobile Book Now */}
          <Link
            href="/booking"
            onClick={closeMenu}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2.5 rounded-full font-semibold text-sm transition"
          >
            Book Now
          </Link>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white p-2"
            aria-label="Open menu"
          >
            <div className="w-6 space-y-1.5">
              <span className="block h-0.5 bg-white"></span>
              <span className="block h-0.5 bg-white"></span>
              <span className="block h-0.5 bg-white"></span>
            </div>
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
          <div className="flex flex-col px-6 py-5 space-y-1">

            <Link
              href="/"
              onClick={closeMenu}
              className="text-white py-3 border-b border-white/10 hover:text-orange-500 transition"
            >
              Home
            </Link>

            <Link
              href="/tour-packages"
              onClick={closeMenu}
              className="text-white py-3 border-b border-white/10 hover:text-orange-500 transition"
            >
              Packages
            </Link>

            <Link
              href="/cab-rental"
              onClick={closeMenu}
              className="text-white py-3 border-b border-white/10 hover:text-orange-500 transition"
            >
              Cars
            </Link>

            <Link
              href="/destinations"
              onClick={closeMenu}
              className="text-white py-3 border-b border-white/10 hover:text-orange-500 transition"
            >
              Destinations
            </Link>

            <Link
              href="/testimonials"
              onClick={closeMenu}
              className="text-white py-3 hover:text-orange-500 transition"
            >
              Testimonials
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}
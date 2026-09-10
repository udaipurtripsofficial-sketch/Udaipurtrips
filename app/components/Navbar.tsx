"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <Link
          href="/"
          className="text-4xl font-extrabold text-orange-500"
        >
          UdaipurTrips
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-white font-medium">

          <Link href="/" className="hover:text-orange-500 transition">
            Home
          </Link>

          <Link href="/tour-packages" className="hover:text-orange-500 transition">
            Packages
          </Link>

          <Link href="/cab-rental" className="hover:text-orange-500 transition">
            Cars
          </Link>

          <Link href="/destinations" className="hover:text-orange-500 transition">
            Destinations
          </Link>

          <Link href="/about" className="hover:text-orange-500 transition">
            About
          </Link>

          <Link href="/testimonials" className="hover:text-orange-500 transition">
            Testimonials
          </Link>

          <Link href="/faq" className="hover:text-orange-500 transition">
            FAQ
          </Link>

          <Link href="/contact" className="hover:text-orange-500 transition">
            Contact
          </Link>

        </div>

        {/* Book Now Button */}
        <Link
          href="/booking"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Book Now
        </Link>

      </div>
    </nav>
  );
}
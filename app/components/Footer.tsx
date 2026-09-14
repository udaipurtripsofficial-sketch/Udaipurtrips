import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold text-orange-500 mb-5">
              UdaipurTrips
            </h2>

            <p className="leading-7 text-gray-400">
              Discover the royal beauty of Udaipur with premium cab services,
              customized tour packages, hotel bookings and unforgettable travel
              experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-orange-500 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-orange-500 transition">
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/tour-packages"
                  className="hover:text-orange-500 transition"
                >
                  Tour Packages
                </Link>
              </li>

              <li>
                <Link
                  href="/cab-rental"
                  className="hover:text-orange-500 transition"
                >
                  Cab Rental
                </Link>
              </li>

              <li>
                <Link
                  href="/destinations"
                  className="hover:text-orange-500 transition"
                >
                  Destinations
                </Link>
              </li>

              <li>
                <Link
                  href="/testimonials"
                  className="hover:text-orange-500 transition"
                >
                  Testimonials
                </Link>
              </li>

              <li>
                <Link href="/faq" className="hover:text-orange-500 transition">
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-orange-500 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Contact
            </h3>

            <div className="space-y-4">

              <a
                href="tel:+917070903126"
                className="block hover:text-orange-500 transition"
              >
                📞 +91 70709 03126
              </a>

              <a
                href="mailto:udaipurtripsofficial@gmail.com"
                className="block hover:text-orange-500 transition"
              >
                📧 udaipurtripsofficial@gmail.com
              </a>

              <p>📍 Udaipur, Rajasthan, India</p>

              <a
                href="https://wa.me/917070903126"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-green-700 px-5 py-3 rounded-lg text-white font-semibold transition"
              >
                💬 Chat on WhatsApp
              </a>

            </div>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Connect With Us
            </h3>

            <div className="space-y-3">

              <a
                href="https://wa.me/917070903126"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-green-400 transition"
              >
                💬 WhatsApp
              </a>

              <a
                href="https://t.me/Udaipurtrips"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-blue-400 transition"
              >
                ✈️ Telegram
              </a>

            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-3">
                Business Hours
              </h4>

              <p>Mon – Sun</p>
              <p>8:00 AM – 10:00 PM</p>
            </div>
          </div>

        </div>

        <hr className="border-gray-800 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-500 text-center md:text-left">
            © 2026 UdaipurTrips. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm">

            <Link
              href="/privacy-policy"
              className="hover:text-orange-500 transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="hover:text-orange-500 transition"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/faq"
              className="hover:text-orange-500 transition"
            >
              FAQ
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}
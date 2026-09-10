import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact UdaipurTrips | Udaipur Tours & Cab Booking",

  description:
    "Contact UdaipurTrips to book Udaipur tour packages, private cabs, sightseeing tours, airport transfers, hotel stays and customized Rajasthan travel experiences.",

  keywords: [
    "Udaipur travel agency contact",
    "Udaipur tour booking",
    "Udaipur cab booking",
    "Udaipur taxi booking",
    "Udaipur travel agency",
    "Udaipur tour operator",
    "Udaipur cab rental",
    "Udaipur airport taxi",
    "Udaipur sightseeing booking",
    "UdaipurTrips contact",
  ],

  alternates: {
    canonical: "https://udaipurtrips.com/contact",
  },

  openGraph: {
    type: "website",
    url: "https://udaipurtrips.com/contact",
    title: "Contact UdaipurTrips | Udaipur Tours & Cab Booking",
    description:
      "Get in touch with UdaipurTrips for Udaipur tours, private cab rentals, sightseeing, airport transfers and customized Rajasthan travel.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Contact UdaipurTrips",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact UdaipurTrips | Udaipur Travel & Tours",
    description:
      "Contact UdaipurTrips for tours, cab rentals, sightseeing and Rajasthan travel services.",
    images: ["/images/hero.jpg"],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-gray-900">
            Contact Us
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            We'd love to help you plan your perfect Udaipur trip.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
            <div className="text-5xl mb-4">📞</div>
            <h3 className="text-2xl font-bold mb-3">Call Us</h3>

            <a
              href="tel:+917070903126"
              className="text-blue-600 font-semibold hover:underline"
            >
              +91 70709 03126
            </a>

            <p className="text-gray-500 mt-3">
              Available 24×7
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-2xl font-bold mb-3">WhatsApp</h3>

            <p className="text-gray-600 mb-5">
              Instant support for bookings.
            </p>

            <a
              href="https://wa.me/917070903126"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold"
            >
              Chat Now
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
            <div className="text-5xl mb-4">📧</div>
            <h3 className="text-2xl font-bold mb-3">Email</h3>

            <a
              href="mailto:udaipurtripsofficial@gmail.com"
              className="text-blue-600 hover:underline break-all"
            >
              udaipurtripsofficial@gmail.com
            </a>

            <p className="text-gray-500 mt-3">
              Reply within a few hours.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
            <div className="text-5xl mb-4">📍</div>
            <h3 className="text-2xl font-bold mb-3">Office</h3>

            <p className="text-gray-600">
              Udaipur,
              <br />
              Rajasthan, India
            </p>

            <p className="text-gray-500 mt-3">
              Local Travel Experts
            </p>
          </div>

        </div>

        {/* Business Hours */}
        <div className="bg-white rounded-2xl shadow-lg p-10 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Business Hours
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-lg">
            <div>Monday – Friday</div>
            <div className="font-semibold">8:00 AM – 10:00 PM</div>

            <div>Saturday</div>
            <div className="font-semibold">8:00 AM – 10:00 PM</div>

            <div>Sunday</div>
            <div className="font-semibold text-green-600">
              Open 24 Hours (Online Support)
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-blue-50 rounded-2xl p-10 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose Udaipur Trips?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold text-lg mb-2">🚖 Premium Cabs</h3>
              <p className="text-gray-600">
                Clean, comfortable and reliable vehicles.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold text-lg mb-2">🏨 Best Hotels</h3>
              <p className="text-gray-600">
                Handpicked stays for every budget.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold text-lg mb-2">👨‍💼 Local Experts</h3>
              <p className="text-gray-600">
                Experienced team with local knowledge.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold text-lg mb-2">⭐ Trusted Service</h3>
              <p className="text-gray-600">
                Personalized support from booking to trip completion.
              </p>
            </div>

          </div>
        </div>

        {/* Google Maps */}
        <div className="bg-white rounded-2xl shadow-lg p-10 text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Find Us
          </h2>

          <p className="text-gray-600 mb-6">
            Visit our office in the beautiful city of Udaipur.
          </p>

          <a
            href="https://maps.google.com/?q=Udaipur,Rajasthan"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold"
          >
            Open in Google Maps
          </a>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl text-white p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Explore Udaipur?
          </h2>

          <p className="text-lg mb-8">
            Contact us today and let us create your perfect Udaipur experience.
          </p>

          <a
            href="https://wa.me/917070903126"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition"
          >
            Book Your Trip Now
          </a>
        </div>

      </div>
    </main>
  );
}
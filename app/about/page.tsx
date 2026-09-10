import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About UdaipurTrips | Udaipur Travel & Tour Company",

  description:
    "Learn about UdaipurTrips, a Udaipur travel company creating personalized tours, sightseeing experiences, private cab services, hotel stays and Rajasthan travel experiences.",

  keywords: [
    "Udaipur travel agency",
    "Udaipur tour operator",
    "Udaipur travel company",
    "Udaipur tour company",
    "Udaipur local travel experts",
    "Udaipur sightseeing company",
    "Udaipur taxi service",
    "Udaipur tour packages",
    "Rajasthan travel agency",
    "Rajasthan tour operator",
    "UdaipurTrips",
  ],

  alternates: {
    canonical: "https://udaipurtrips.com/about",
  },

  openGraph: {
    type: "website",
    url: "https://udaipurtrips.com/about",
    title: "About UdaipurTrips | Udaipur Travel & Tour Company",
    description:
      "Discover UdaipurTrips and our approach to personalized Udaipur tours, private transportation, accommodation and Rajasthan travel experiences.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "UdaipurTrips - Udaipur Travel and Tours",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About UdaipurTrips | Udaipur Travel & Tours",
    description:
      "Learn about UdaipurTrips and our personalized Udaipur and Rajasthan travel experiences.",
    images: ["/images/hero.jpg"],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Udaipur Trips
          </h1>

          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            Creating unforgettable travel experiences in the City of Lakes with
            trusted local expertise, premium services, and personalized care.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>

            <p className="text-gray-600 leading-8 mb-5">
              Udaipur Trips was founded with one simple mission —
              to make every visitor experience the true beauty,
              culture, and hospitality of Udaipur.
            </p>

            <p className="text-gray-600 leading-8 mb-5">
              Whether you're planning a romantic honeymoon,
              family vacation, solo adventure, or luxury getaway,
              we carefully design every trip according to your needs.
            </p>

            <p className="text-gray-600 leading-8">
              From airport transfers to premium hotels,
              sightseeing tours, private taxis, and customized
              itineraries, we ensure every journey is smooth,
              comfortable, and memorable.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-10">
            <h3 className="text-3xl font-bold mb-8">
              Why Travelers Trust Us
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4">
                <span className="text-3xl">⭐</span>
                <div>
                  <h4 className="font-bold">Top Rated Service</h4>
                  <p className="text-gray-600">
                    Personalized customer support before and during your trip.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-3xl">🚖</span>
                <div>
                  <h4 className="font-bold">Reliable Transportation</h4>
                  <p className="text-gray-600">
                    Comfortable and well-maintained vehicles with professional drivers.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-3xl">🏨</span>
                <div>
                  <h4 className="font-bold">Quality Accommodation</h4>
                  <p className="text-gray-600">
                    Carefully selected hotels for every budget.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-5xl font-bold text-blue-600">500+</h3>
              <p className="mt-3 text-gray-600">Happy Travelers</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-5xl font-bold text-blue-600">100+</h3>
              <p className="mt-3 text-gray-600">Tour Packages</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-5xl font-bold text-blue-600">24/7</h3>
              <p className="mt-3 text-gray-600">Customer Support</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-5xl font-bold text-blue-600">100%</h3>
              <p className="mt-3 text-gray-600">Local Expertise</p>
            </div>

          </div>

        </div>
      </section>

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl text-white p-12">

          <h2 className="text-4xl font-bold mb-6">
            Our Mission
          </h2>

          <p className="text-xl leading-9">
            To become the most trusted travel partner in Udaipur by delivering
            exceptional hospitality, reliable transportation, quality stays,
            and unforgettable travel experiences for every visitor.
          </p>

        </div>

      </section>

    </main>
  );
}
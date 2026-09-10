import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "City Palace Udaipur | Tour & Sightseeing Guide",

  description:
    "Explore City Palace Udaipur, the iconic royal palace overlooking Lake Pichola. Discover its architecture, courtyards, heritage and scenic views with UdaipurTrips.",

  keywords: [
    "City Palace Udaipur",
    "City Palace Udaipur tour",
    "City Palace sightseeing",
    "Udaipur City Palace",
    "City Palace Rajasthan",
    "City Palace tour",
    "places to visit in Udaipur",
    "Udaipur sightseeing",
    "Udaipur sightseeing tour",
    "Udaipur tourist places",
    "Udaipur heritage places",
    "UdaipurTrips",
  ],

  alternates: {
    canonical: "https://udaipurtrips.com/destinations/city-palace",
  },

  openGraph: {
    type: "website",
    url: "https://udaipurtrips.com/destinations/city-palace",
    title: "City Palace Udaipur | Tour & Sightseeing Guide",
    description:
      "Discover City Palace Udaipur, its royal architecture, historic courtyards and beautiful views of Lake Pichola.",
    images: [
      {
        url: "/images/citypalace.jpg",
        width: 1200,
        height: 630,
        alt: "City Palace Udaipur",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "City Palace Udaipur | UdaipurTrips",
    description:
      "Explore City Palace Udaipur and discover its royal heritage, architecture and Lake Pichola views.",
    images: ["/images/citypalace.jpg"],
  },
};

export default function CityPalacePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-orange-950">
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <p className="text-orange-400 font-semibold tracking-[0.3em] uppercase mb-5">
            Udaipur, Rajasthan
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            City Palace
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-8">
            Explore the magnificent City Palace overlooking Lake Pichola
            and experience the royal heritage of Udaipur.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-3 rounded-full">
              ⭐ 4.9/5 Rating
            </span>

            <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-3 rounded-full">
              🏛 Royal Heritage
            </span>

            <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-3 rounded-full">
              📍 Udaipur
            </span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          <div className="max-w-3xl mb-12">
            <p className="text-orange-500 font-semibold uppercase tracking-wider mb-3">
              Discover Udaipur
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mb-5">
              About City Palace
            </h2>

            <p className="text-gray-600 text-lg leading-8">
              Discover the magnificent City Palace complex and experience
              the royal heritage and architecture of Udaipur. Explore
              beautiful courtyards, historic buildings and stunning views
              overlooking Lake Pichola.
            </p>
          </div>

          {/* QUICK INFORMATION */}
          <div className="grid md:grid-cols-3 gap-6">

            <div className="rounded-2xl bg-gray-50 border border-gray-100 p-6">
              <div className="text-3xl mb-4">⏱️</div>

              <h3 className="font-bold text-xl text-gray-900">
                Duration
              </h3>

              <p className="mt-2 text-gray-600">
                2–3 Hours
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 border border-gray-100 p-6">
              <div className="text-3xl mb-4">📍</div>

              <h3 className="font-bold text-xl text-gray-900">
                Location
              </h3>

              <p className="mt-2 text-gray-600">
                Udaipur, Rajasthan
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 border border-gray-100 p-6">
              <div className="text-3xl mb-4">🚗</div>

              <h3 className="font-bold text-xl text-gray-900">
                Pickup
              </h3>

              <p className="mt-2 text-gray-600">
                Pickup Available
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <p className="text-orange-500 font-semibold uppercase tracking-wider mb-3">
              Experience
            </p>

            <h2 className="text-4xl font-bold text-gray-900">
              City Palace Highlights
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Discover the royal architecture, beautiful courtyards and
              unforgettable views of Udaipur.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
              <div className="text-4xl mb-5">🏛️</div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Royal Architecture
              </h3>

              <p className="text-gray-600 leading-7">
                Explore magnificent royal buildings, courtyards and
                traditional architectural details.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
              <div className="text-4xl mb-5">🌊</div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Lake Pichola Views
              </h3>

              <p className="text-gray-600 leading-7">
                Enjoy beautiful views of Lake Pichola and the surrounding
                landscapes of Udaipur.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
              <div className="text-4xl mb-5">📸</div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Photo Spots
              </h3>

              <p className="text-gray-600 leading-7">
                Capture memorable photographs of the palace, courtyards
                and scenic surroundings.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* VISITOR INFORMATION */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 gap-10">

            {/* WHAT TO EXPECT */}
            <div>
              <p className="text-orange-500 font-semibold uppercase tracking-wider mb-3">
                Visitor Information
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What to Expect
              </h2>

              <div className="space-y-4">

                <div className="flex gap-4">
                  <span className="text-orange-500 text-xl">✓</span>
                  <p className="text-gray-600">
                    Explore the historic City Palace complex.
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="text-orange-500 text-xl">✓</span>
                  <p className="text-gray-600">
                    Enjoy beautiful views of Lake Pichola.
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="text-orange-500 text-xl">✓</span>
                  <p className="text-gray-600">
                    Discover royal heritage and architecture.
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="text-orange-500 text-xl">✓</span>
                  <p className="text-gray-600">
                    Suitable for sightseeing and photography.
                  </p>
                </div>

              </div>
            </div>

            {/* TRIP DETAILS */}
            <div className="bg-gray-50 rounded-3xl p-8">

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Trip Details
              </h3>

              <div className="space-y-5">

                <div className="flex justify-between border-b pb-4">
                  <span className="text-gray-500">
                    Duration
                  </span>

                  <span className="font-semibold text-gray-900">
                    2–3 Hours
                  </span>
                </div>

                <div className="flex justify-between border-b pb-4">
                  <span className="text-gray-500">
                    Location
                  </span>

                  <span className="font-semibold text-gray-900">
                    Udaipur
                  </span>
                </div>

                <div className="flex justify-between border-b pb-4">
                  <span className="text-gray-500">
                    Experience
                  </span>

                  <span className="font-semibold text-gray-900">
                    Royal Heritage
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Pickup
                  </span>

                  <span className="font-semibold text-green-600">
                    Available
                  </span>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <p className="uppercase tracking-[0.25em] font-semibold text-orange-100 mb-4">
            Plan Your Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Ready to Explore City Palace?
          </h2>

          <p className="text-lg text-orange-50 max-w-2xl mx-auto">
            Let UdaipurTrips help you plan your sightseeing experience
            with comfortable transportation and local assistance.
          </p>

          <Link
            href="/booking"
            className="inline-flex mt-8 bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition"
          >
            Book Your Trip →
          </Link>

        </div>
      </section>

    </main>
  );
}
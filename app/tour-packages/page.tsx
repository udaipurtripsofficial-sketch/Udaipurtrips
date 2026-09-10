import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Udaipur Tour Packages | Private & Customized Tours",

  description:
    "Book Udaipur tour packages with UdaipurTrips. Explore Udaipur sightseeing, Kumbhalgarh and Ranakpur, and Mount Abu with private cabs, local experts and customized travel experiences.",

  keywords: [
    "Udaipur tour packages",
    "best Udaipur tour packages",
    "Udaipur holiday packages",
    "Udaipur sightseeing packages",
    "Udaipur sightseeing tour package",
    "Udaipur private tours",
    "Udaipur customized tour packages",
    "Udaipur travel packages",
    "Kumbhalgarh Ranakpur tour from Udaipur",
    "Kumbhalgarh Ranakpur tour package",
    "Mount Abu tour from Udaipur",
    "Mount Abu day trip from Udaipur",
    "Rajasthan tour packages",
    "UdaipurTrips",
  ],

  alternates: {
    canonical: "https://udaipurtrips.com/tour-packages",
  },

  openGraph: {
    type: "website",
    url: "https://udaipurtrips.com/tour-packages",
    title: "Udaipur Tour Packages | Private & Customized Tours",
    description:
      "Explore Udaipur, Kumbhalgarh, Ranakpur and Mount Abu with private and customized tour packages from UdaipurTrips.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "UdaipurTrips tour packages",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Udaipur Tour Packages | UdaipurTrips",
    description:
      "Book private and customized Udaipur tour packages with UdaipurTrips.",
    images: ["/images/hero.jpg"],
  },
};

export default function TourPackages() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-100">
            Explore Rajasthan with UdaipurTrips
          </p>

          <h1 className="text-5xl font-bold md:text-6xl">
            Udaipur Tour Packages
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-orange-50 md:text-xl">
            Private Tours • Comfortable Travel • Local Experiences
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-orange-100">
            Discover Udaipur and nearby destinations with flexible tour
            packages, private transportation and customized travel
            experiences.
          </p>

        </div>
      </section>

      {/* POPULAR TOURS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 font-semibold uppercase tracking-wider text-orange-500">
              Explore Our Tours
            </p>

            <h2 className="text-4xl font-bold text-gray-900">
              Popular Udaipur Tour Packages
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Choose from popular sightseeing and day-trip experiences from
              Udaipur, or contact us to create a customized itinerary.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">

            {/* UDAIPUR SIGHTSEEING */}
            <article className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">

              <div className="mb-5 text-4xl">
                🏰
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                Udaipur Sightseeing Tour
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Explore some of Udaipur's popular attractions including City
                Palace, Lake Pichola, Jagdish Temple and Fateh Sagar Lake.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-orange-50 px-3 py-1 text-sm text-orange-600">
                  City Palace
                </span>

                <span className="rounded-full bg-orange-50 px-3 py-1 text-sm text-orange-600">
                  Lake Pichola
                </span>

                <span className="rounded-full bg-orange-50 px-3 py-1 text-sm text-orange-600">
                  Fateh Sagar
                </span>
              </div>

              <Link
                href="/booking"
                className="mt-7 inline-flex rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Book This Tour →
              </Link>

            </article>

            {/* KUMBHALGARH & RANAKPUR */}
            <article className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">

              <div className="mb-5 text-4xl">
                🏯
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                Kumbhalgarh & Ranakpur Tour
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Visit the magnificent Kumbhalgarh Fort and explore the famous
                Jain Temple at Ranakpur on a private day trip from Udaipur.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-orange-50 px-3 py-1 text-sm text-orange-600">
                  Kumbhalgarh Fort
                </span>

                <span className="rounded-full bg-orange-50 px-3 py-1 text-sm text-orange-600">
                  Ranakpur
                </span>

                <span className="rounded-full bg-orange-50 px-3 py-1 text-sm text-orange-600">
                  Private Cab
                </span>
              </div>

              <Link
                href="/booking"
                className="mt-7 inline-flex rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Book This Tour →
              </Link>

            </article>

            {/* MOUNT ABU */}
            <article className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">

              <div className="mb-5 text-4xl">
                ⛰️
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                Mount Abu Day Trip
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Enjoy a private day trip from Udaipur to Mount Abu, Rajasthan's
                famous hill station, with comfortable transportation.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-orange-50 px-3 py-1 text-sm text-orange-600">
                  Mount Abu
                </span>

                <span className="rounded-full bg-orange-50 px-3 py-1 text-sm text-orange-600">
                  Day Trip
                </span>

                <span className="rounded-full bg-orange-50 px-3 py-1 text-sm text-orange-600">
                  Private Cab
                </span>
              </div>

              <Link
                href="/booking"
                className="mt-7 inline-flex rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Book This Tour →
              </Link>

            </article>

          </div>

        </div>
      </section>

      {/* CUSTOM TOUR CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <p className="mb-3 font-semibold uppercase tracking-wider text-orange-500">
            Your Trip, Your Way
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            Looking for a Customized Rajasthan Tour?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Tell us your travel dates, number of travelers and places you want
            to visit. We can help you plan a flexible private trip from
            Udaipur.
          </p>

          <Link
            href="/booking"
            className="mt-8 inline-flex rounded-xl bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-orange-600"
          >
            Plan My Trip →
          </Link>

        </div>
      </section>

    </main>
  );
}
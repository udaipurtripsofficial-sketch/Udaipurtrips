import type { Metadata } from "next";
import Link from "next/link";
import DestinationCard from "../components/DestinationCard";

export const metadata: Metadata = {
  title: "Places to Visit in Udaipur | Udaipur Sightseeing",

  description:
    "Discover the best places to visit in Udaipur and nearby Rajasthan with UdaipurTrips. Explore City Palace, Lake Pichola, Sajjangarh, Fateh Sagar, Jagmandir, Kumbhalgarh, Ranakpur, Mount Abu and more.",

  keywords: [
    "places to visit in Udaipur",
    "best places to visit in Udaipur",
    "Udaipur tourist places",
    "Udaipur sightseeing",
    "Udaipur sightseeing places",
    "Udaipur attractions",
    "things to do in Udaipur",
    "Udaipur Rajasthan tourism",
    "places near Udaipur",
    "Rajasthan tourist places",
    "Udaipur sightseeing tour",
    "City Palace Udaipur",
    "Lake Pichola",
    "Sajjangarh Palace",
    "Fateh Sagar Lake",
    "Kumbhalgarh Fort",
    "Ranakpur",
    "Mount Abu",
    "UdaipurTrips",
  ],

  alternates: {
    canonical: "https://udaipurtrips.com/destinations",
  },

  openGraph: {
    type: "website",
    url: "https://udaipurtrips.com/destinations",
    title: "Places to Visit in Udaipur | UdaipurTrips",
    description:
      "Explore the best places to visit in Udaipur and nearby Rajasthan, including royal palaces, lakes, forts, temples and scenic destinations.",
    images: [
      {
        url: "/images/citypalace.jpg",
        width: 1200,
        height: 630,
        alt: "City Palace Udaipur - UdaipurTrips",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Places to Visit in Udaipur | UdaipurTrips",
    description:
      "Discover Udaipur's famous palaces, lakes, forts, temples and scenic destinations with UdaipurTrips.",
    images: ["/images/citypalace.jpg"],
  },
};

const destinations = [
  {
    name: "City Palace",
    image: "/images/citypalace.jpg",
    description:
      "Explore the magnificent City Palace, one of Udaipur's most iconic royal landmarks overlooking Lake Pichola.",
    duration: "2–3 Hours",
    rating: "4.9",
    badge: "Royal Heritage",
  },
  {
    name: "Lake Pichola",
    image: "/images/lakepichola.jpg",
    description:
      "Enjoy a peaceful boat ride across Lake Pichola with breathtaking views of palaces, islands and the Aravalli hills.",
    duration: "1–2 Hours",
    rating: "4.8",
    badge: "Sunset Cruise",
  },
  {
    name: "Sajjangarh Palace",
    image: "/images/sajjangarh.jpg",
    description:
      "Visit the famous Monsoon Palace and enjoy spectacular panoramic views of Udaipur and the surrounding hills.",
    duration: "2 Hours",
    rating: "4.9",
    badge: "Best Sunset",
  },
  {
    name: "Fateh Sagar Lake",
    image: "/images/fatehsagar.jpg",
    description:
      "Relax beside one of Udaipur's most beautiful lakes and enjoy its peaceful surroundings.",
    duration: "2 Hours",
    rating: "4.8",
    badge: "Lake Experience",
  },
  {
    name: "Jagmandir",
    image: "/images/jagmandir.jpg",
    description:
      "Discover the beautiful island palace of Jagmandir located in the middle of Lake Pichola.",
    duration: "2–3 Hours",
    rating: "4.8",
    badge: "Island Palace",
  },
  {
    name: "Eklingji Temple",
    image: "/images/eklingji.jpg",
    description:
      "Visit the historic Eklingji Temple, known for its beautiful architecture and peaceful atmosphere.",
    duration: "2 Hours",
    rating: "4.8",
    badge: "Spiritual Heritage",
  },
  {
    name: "Nathdwara",
    image: "/images/nathdwara.jpg",
    description:
      "Experience the famous temple town of Nathdwara and discover its rich cultural and spiritual heritage.",
    duration: "Half Day",
    rating: "4.8",
    badge: "Cultural Experience",
  },
  {
    name: "Kumbhalgarh Fort",
    image: "/images/kumbhalgarh.jpg",
    description:
      "Explore the magnificent historic fort surrounded by the Aravalli hills and its impressive fort walls.",
    duration: "Full Day",
    rating: "4.9",
    badge: "UNESCO Heritage",
  },
  {
    name: "Ranakpur",
    image: "/images/ranakpur.jpg",
    description:
      "Discover the stunning Jain temples of Ranakpur surrounded by the beautiful Aravalli landscape.",
    duration: "Full Day",
    rating: "4.8",
    badge: "Temple Heritage",
  },
  {
    name: "Bahubali Hills",
    image: "/images/bahubalihills.jpg",
    description:
      "Enjoy breathtaking views of the surrounding landscape from the scenic Bahubali Hills.",
    duration: "2–3 Hours",
    rating: "4.8",
    badge: "Scenic Escape",
  },
  {
    name: "Raita Hills",
    image: "/images/raitahills.jpg",
    description:
      "Experience peaceful countryside views and beautiful sunsets at the scenic Raita Hills.",
    duration: "2–3 Hours",
    rating: "4.8",
    badge: "Sunset Spot",
  },
  {
    name: "Mount Abu",
    image: "/images/mountabu.jpg",
    description:
      "Explore Rajasthan's famous hill station with beautiful lakes, viewpoints, temples and mountain scenery.",
    duration: "Full Day",
    rating: "4.8",
    badge: "Hill Station",
  },
];

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-[#fffaf5]">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fff1e6] via-[#fffaf5] to-[#ffe7d1] py-24">

        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />
        <div className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-red-200/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">

          <div className="mb-5 inline-flex items-center rounded-full border border-orange-200 bg-white/80 px-5 py-2 text-sm font-semibold text-orange-600 shadow-sm backdrop-blur">
            ✦ Explore Rajasthan
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Discover the
            <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Royal Soul of Rajasthan
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            From magnificent palaces and peaceful lakes to historic forts,
            temples and breathtaking hills — discover unforgettable places
            with UdaipurTrips.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              href="/tour-packages"
              className="rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-7 py-3.5 font-bold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-1 hover:shadow-xl"
            >
              Explore Tour Packages
            </Link>

            <Link
              href="/booking"
              className="rounded-xl border border-orange-300 bg-white px-7 py-3.5 font-bold text-orange-600 shadow-sm transition hover:-translate-y-1 hover:bg-orange-50"
            >
              Plan Your Trip
            </Link>

          </div>
        </div>
      </section>

      {/* ================= DESTINATIONS ================= */}
      <section className="relative bg-gradient-to-b from-[#fffaf5] to-[#f8f8f8] py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-14 text-center">

            <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Places Worth Visiting
            </div>

            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Popular Destinations
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Discover beautiful lakes, royal palaces, historic forts,
              temples and scenic places around Udaipur and Rajasthan.
            </p>

            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-orange-500 to-red-500" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <DestinationCard
                key={destination.name}
                {...destination}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-orange-500 to-red-500 py-20">

        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-black/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 text-center text-white">

          <div className="mb-4 text-3xl">
            ✦
          </div>

          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Your Rajasthan Adventure Starts Here
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-orange-50 sm:text-lg">
            Tell us where you want to go and we'll help you create a
            comfortable and memorable Rajasthan experience.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              href="/booking"
              className="rounded-xl bg-white px-8 py-4 font-bold text-orange-600 shadow-xl transition hover:-translate-y-1 hover:bg-orange-50"
            >
              Book Your Trip →
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-orange-600"
            >
              Contact Us
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}
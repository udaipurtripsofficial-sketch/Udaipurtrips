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
    canonical: "https://www.udaipurtrips.com/destinations",
  },

  openGraph: {
    type: "website",
    url: "https://www.udaipurtrips.com/destinations",
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
    <main className="min-h-screen bg-[#f7f5f0]">

      {/* ================= PREMIUM HERO ================= */}
      <section className="relative min-h-[560px] overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/raitahills.jpg')",
          }}
        />

        {/* Dark Cinematic Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Premium Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-black/75" />

        {/* Hero Content */}
        <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-center justify-center px-6 py-24 text-center">

          <div className="max-w-4xl">

            <div className="mb-6 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold tracking-[0.15em] text-white backdrop-blur-md">
              ✦ EXPLORE RAJASTHAN
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Discover the
              <span className="block text-orange-400">
                Royal Soul of Rajasthan
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
              From magnificent palaces and peaceful lakes to historic forts,
              temples and breathtaking hills — discover unforgettable places
              with UdaipurTrips.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <Link
                href="/tour-packages"
                className="rounded-xl bg-orange-500 px-7 py-3.5 font-bold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-orange-400"
              >
                Explore Tour Packages
              </Link>

              <Link
                href="/booking"
                className="rounded-xl border border-white/50 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                Plan Your Trip
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* ================= DESTINATIONS ================= */}
      <section className="relative bg-[#f7f5f0] py-16 sm:py-20">

        <div className="mx-auto max-w-7xl px-6">

          {/* Section Heading */}
          <div className="mb-12 text-center">

            <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Places Worth Visiting
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Popular Destinations
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Discover beautiful lakes, royal palaces, historic forts,
              temples and scenic places around Udaipur and Rajasthan.
            </p>

            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-orange-500 to-red-500" />

          </div>

          {/* Destination Cards */}
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
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-orange-500 to-red-500 py-16 sm:py-20">

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

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

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
import type { Metadata } from "next";

import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import PopularDestinations from "./components/PopularDestinations";
import TourPackages from "./components/TourPackages";
import CabFleet from "./components/CabFleet";
import Testimonials from "./components/Testimonials";

export const metadata: Metadata = {
  title: "Udaipur Tours & Cab Rental | Udaipur Tour Packages",

  description:
    "Explore Udaipur with UdaipurTrips. Book Udaipur tour packages, private cab rentals, sightseeing tours and customized Rajasthan travel experiences.",

  keywords: [
    "Udaipur tours",
    "Udaipur tour packages",
    "Udaipur cab rental",
    "Udaipur taxi service",
    "Udaipur sightseeing tours",
    "Udaipur travel agency",
    "Udaipur Rajasthan",
    "Rajasthan tour packages",
    "Udaipur car rental",
    "Udaipur private taxi",
    "Udaipur airport taxi",
    "UdaipurTrips",
  ],

  alternates: {
    canonical: "https://udaipurtrips.com/",
  },

  openGraph: {
    type: "website",
    url: "https://udaipurtrips.com/",
    title: "Udaipur Tours & Cab Rental | UdaipurTrips",
    description:
      "Book Udaipur tour packages, private cab rentals, sightseeing tours and customized travel experiences with UdaipurTrips.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "UdaipurTrips - Udaipur Tours and Travel",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Udaipur Tours & Cab Rental | UdaipurTrips",
    description:
      "Book Udaipur tour packages, private cab rentals and sightseeing tours with UdaipurTrips.",
    images: ["/images/hero.jpg"],
  },
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Why Choose Us */}
      <section id="why-choose" className="py-8">
        <WhyChoose />
      </section>

      {/* Popular Destinations */}
      <section id="destinations" className="py-8">
        <PopularDestinations />
      </section>

      {/* Tour Packages */}
      <section id="packages" className="py-8">
        <TourPackages />
      </section>

      {/* Cab Fleet */}
      <section id="cars" className="py-8">
        <CabFleet />
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-8">
        <Testimonials />
      </section>
    </main>
  );
}
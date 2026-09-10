import type { Metadata } from "next";

import CabHero from "../components/CabHero";
import CabFeatures from "../components/CabFeatures";
import CabFleet from "../components/CabFleet";
import CabFAQ from "../components/CabFAQ";
import CabCTA from "../components/CabCTA";

export const metadata: Metadata = {
  title: "Udaipur Cab Rental & Taxi Service | Private Cabs",

  description:
    "Book a private cab in Udaipur with UdaipurTrips. Choose from sedans, SUVs, Innova Crysta, XUV700 and Tempo Traveller for Udaipur sightseeing, airport transfers and Rajasthan trips.",

  keywords: [
    "Udaipur cab rental",
    "Udaipur taxi service",
    "Udaipur car rental",
    "Udaipur sightseeing cab",
    "Udaipur airport taxi",
    "Udaipur airport cab",
    "Udaipur local taxi",
    "Udaipur private cab",
    "Udaipur outstation taxi",
    "Udaipur rental car with driver",
    "Rajasthan cab rental",
    "Udaipur taxi for sightseeing",
    "UdaipurTrips",
  ],

  alternates: {
    canonical: "https://udaipurtrips.com/cab-rental",
  },

  openGraph: {
    type: "website",
    url: "https://udaipurtrips.com/cab-rental",
    title: "Udaipur Cab Rental & Taxi Service | UdaipurTrips",
    description:
      "Book private cabs in Udaipur for sightseeing, airport transfers and Rajasthan trips. Choose from sedans, SUVs, Innova Crysta, XUV700 and Tempo Traveller.",
    images: [
      {
        url: "/images/suv.jpg",
        width: 1200,
        height: 630,
        alt: "UdaipurTrips cab rental service",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Udaipur Cab Rental & Taxi Service | UdaipurTrips",
    description:
      "Book private cabs in Udaipur for sightseeing, airport transfers and Rajasthan trips.",
    images: ["/images/suv.jpg"],
  },
};

export default function CabRentalPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <CabHero />

      {/* Why Choose Our Cab Service */}
      <CabFeatures />

      {/* Fleet */}
      <CabFleet />

      {/* FAQ */}
      <CabFAQ />

      {/* Call To Action */}
      <CabCTA />
    </main>
  );
}
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://udaipurtrips.com"),

  title: {
    default: "UdaipurTrips | Udaipur Tours, Cab Rental & Travel",
    template: "%s | UdaipurTrips",
  },

  description:
    "Discover Udaipur with UdaipurTrips. Book Udaipur tour packages, private cab rentals, sightseeing tours, hotel bookings and customized travel experiences across Rajasthan.",

  keywords: [
    "Udaipur tours",
    "Udaipur tour packages",
    "Udaipur cab rental",
    "Udaipur taxi service",
    "Udaipur sightseeing",
    "Udaipur travel",
    "Udaipur Rajasthan",
    "Udaipur car rental",
    "Rajasthan tour packages",
    "Udaipur private taxi",
    "Udaipur airport taxi",
    "UdaipurTrips",
  ],

  authors: [
    {
      name: "UdaipurTrips",
      url: "https://udaipurtrips.com",
    },
  ],

  creator: "UdaipurTrips",
  publisher: "UdaipurTrips",

  applicationName: "UdaipurTrips",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://udaipurtrips.com",
    siteName: "UdaipurTrips",

    title: "UdaipurTrips | Udaipur Tours, Cab Rental & Travel",

    description:
      "Explore Udaipur with UdaipurTrips. Book tour packages, private cab rentals, sightseeing tours, hotel bookings and customized travel experiences across Rajasthan.",

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

    title: "UdaipurTrips | Udaipur Tours, Cab Rental & Travel",

    description:
      "Explore Udaipur with UdaipurTrips. Book tour packages, cab rentals, sightseeing tours and customized travel experiences.",

    images: ["/images/hero.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "travel",

  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col bg-white text-gray-900`}
      >
        <Navbar />

        <main className="flex-grow pt-24">
          {children}
        </main>

        <Footer />

        <FloatingWhatsApp />
      </body>
    </html>
  );
}
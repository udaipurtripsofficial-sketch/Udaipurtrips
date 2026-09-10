import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UdaipurTrips Reviews & Traveler Testimonials",

  description:
    "Read traveler reviews and testimonials about UdaipurTrips tours, cab rentals, sightseeing experiences, airport transfers and Rajasthan travel services.",

  keywords: [
    "UdaipurTrips reviews",
    "Udaipur travel reviews",
    "Udaipur tour reviews",
    "Udaipur cab rental reviews",
    "Udaipur travel agency reviews",
    "Udaipur tour operator reviews",
    "Udaipur sightseeing reviews",
    "Udaipur taxi service reviews",
    "Rajasthan travel reviews",
    "UdaipurTrips testimonials",
  ],

  alternates: {
    canonical: "https://udaipurtrips.com/testimonials",
  },

  openGraph: {
    type: "website",
    url: "https://udaipurtrips.com/testimonials",
    title: "UdaipurTrips Reviews & Traveler Testimonials",
    description:
      "See what travelers say about UdaipurTrips tours, cab rentals, sightseeing and Rajasthan travel experiences.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "UdaipurTrips traveler experiences",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "UdaipurTrips Reviews & Traveler Testimonials",
    description:
      "Read traveler experiences with UdaipurTrips tours, cab rentals and Rajasthan travel services.",
    images: ["/images/hero.jpg"],
  },
};

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "United Kingdom",
      image: "👩",
      rating: "★★★★★",
      review:
        "Everything was perfectly organized. Our driver was punctual, the hotel was fantastic, and the sightseeing tour exceeded our expectations.",
    },
    {
      name: "Rahul Sharma",
      country: "India",
      image: "👨",
      rating: "★★★★★",
      review:
        "Booked our family vacation through Udaipur Trips. Great pricing, clean cab, and excellent customer support throughout the trip.",
    },
    {
      name: "Emily Brown",
      country: "Australia",
      image: "👩‍🦰",
      rating: "★★★★★",
      review:
        "The sunset boat ride and City Palace tour were unforgettable. Highly recommended for international travelers.",
    },
    {
      name: "Ahmed Khan",
      country: "UAE",
      image: "👨🏽",
      rating: "★★★★★",
      review:
        "Professional service from airport pickup to hotel booking. Everything was smooth and stress-free.",
    },
    {
      name: "Priya Patel",
      country: "India",
      image: "👩🏻",
      rating: "★★★★★",
      review:
        "Our honeymoon trip was beautifully planned. Thank you for making it so memorable!",
    },
    {
      name: "David Wilson",
      country: "Canada",
      image: "👨🏻",
      rating: "★★★★★",
      review:
        "One of the best travel experiences I've had in India. Friendly team and excellent local guides.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            What Our Travelers Say
          </h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our travelers share their experiences with Udaipur Trips,
            including tours, transportation, sightseeing and personalized
            travel services.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
            >
              <div className="text-6xl text-center mb-5">
                {item.image}
              </div>

              <div className="text-yellow-500 text-xl text-center mb-4">
                {item.rating}
              </div>

              <p className="text-gray-600 leading-7 italic mb-6">
                "{item.review}"
              </p>

              <hr className="mb-4" />

              <h3 className="font-bold text-xl text-center">
                {item.name}
              </h3>

              <p className="text-center text-gray-500">
                {item.country}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl text-white text-center p-12">

          <h2 className="text-4xl font-bold mb-5">
            Ready to Create Your Own Udaipur Story?
          </h2>

          <p className="text-lg mb-8">
            Discover the beauty of Udaipur with personalized tours,
            comfortable transportation and local travel support.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition"
          >
            Contact Us Today
          </a>

        </div>
      </section>

    </main>
  );
}
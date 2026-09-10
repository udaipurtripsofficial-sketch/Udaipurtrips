"use client";

import { useSearchParams } from "next/navigation";

export default function BookingHero() {
  const searchParams = useSearchParams();
  const vehicle = searchParams.get("vehicle");

  return (
    <section className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold">
          Book Your Udaipur Journey
        </h1>

        <p className="mt-4 text-xl text-gray-200">
          Luxury Cabs • Hotels • Tours • Airport Transfers
        </p>

        {vehicle && (
          <div className="mt-8 inline-flex items-center gap-3 bg-white/15 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 shadow-lg">
            <span className="text-2xl">🚗</span>
            <span className="text-lg font-semibold">
              Booking: {vehicle}
            </span>
          </div>
        )}

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <div className="bg-white/10 px-5 py-3 rounded-xl backdrop-blur">
            ⭐ 4.9/5 Rating
          </div>

          <div className="bg-white/10 px-5 py-3 rounded-xl backdrop-blur">
            🚖 Premium Chauffeur Service
          </div>

          <div className="bg-white/10 px-5 py-3 rounded-xl backdrop-blur">
            🛡️ Safe & Trusted
          </div>
        </div>
      </div>
    </section>
  );
}
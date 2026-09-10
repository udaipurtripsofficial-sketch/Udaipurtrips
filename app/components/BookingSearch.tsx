"use client";

import { useState } from "react";

export default function BookingSearch() {
  const [service, setService] = useState("Cab Booking");

  return (
    <section className="-mt-20 relative z-20 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Book Your Udaipur Experience
          </h2>

          <p className="text-gray-600 mt-3">
            Premium Cabs • Hotels • Tours • Airport Transfers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 items-end">

          {/* Service */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Service
            </label>

            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full h-14 rounded-xl border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option>Cab Booking</option>
              <option>Tour Package</option>
              <option>Hotel Booking</option>
              <option>Airport Transfer</option>
            </select>
          </div>

          {/* Destination */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Destination
            </label>

            <input
              type="text"
              placeholder="City Palace, Lake Pichola..."
              className="w-full h-14 rounded-xl border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Travel Date
            </label>

            <input
              type="date"
              className="w-full h-14 rounded-xl border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Guests */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Guests
            </label>

            <select className="w-full h-14 rounded-xl border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
              <option>5+ Guests</option>
            </select>
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Mobile
            </label>

            <input
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              className="w-full h-14 rounded-xl border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Button */}
          <div>
            <button className="w-full h-14 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg transition">
              Book Now
            </button>
          </div>

        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-8 border-t">

          <div className="text-center">
            <div className="text-3xl mb-2">🚖</div>
            <h3 className="font-semibold">Premium Cabs</h3>
          </div>

          <div className="text-center">
            <div className="text-3xl mb-2">🏨</div>
            <h3 className="font-semibold">Luxury Hotels</h3>
          </div>

          <div className="text-center">
            <div className="text-3xl mb-2">🗺️</div>
            <h3 className="font-semibold">Custom Tours</h3>
          </div>

          <div className="text-center">
            <div className="text-3xl mb-2">✈️</div>
            <h3 className="font-semibold">Airport Pickup</h3>
          </div>

        </div>

      </div>
    </section>
  );
}
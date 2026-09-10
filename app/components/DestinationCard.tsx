"use client";

import Image from "next/image";
import Link from "next/link";

type DestinationCardProps = {
  name: string;
  image: string;
  description: string;
  duration: string;
  rating: string;
  badge: string;
};

export default function DestinationCard({
  name,
  image,
  description,
  duration,
  rating,
  badge,
}: DestinationCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* IMAGE */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={`${name} - UdaipurTrips`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

        {/* Badge */}
        <div className="absolute left-5 top-5 rounded-full bg-orange-500 px-4 py-2 text-sm font-bold text-white shadow-lg">
          {badge}
        </div>

        {/* Location */}
        <div className="absolute bottom-5 left-5 flex items-center gap-2 text-sm font-semibold text-white">
          <span className="text-red-400">📍</span>
          Udaipur & Rajasthan
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">

        {/* Title */}
        <h3 className="mb-3 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-orange-600">
          {name}
        </h3>

        {/* Description */}
        <p className="mb-5 line-clamp-3 text-sm leading-6 text-gray-600">
          {description}
        </p>

        {/* Information */}
        <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-5">

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="text-orange-500">◷</span>
            <span>{duration}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>🚗</span>
            <span>Pickup Available</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>📷</span>
            <span>Photo Spots</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>📍</span>
            <span>Rajasthan</span>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">

          {/* Rating */}
          <div className="flex items-center gap-2">
            <span className="text-xl text-yellow-500">★</span>
            <span className="font-bold text-gray-900">{rating}</span>
            <span className="text-sm text-gray-500">Excellent</span>
          </div>

          {/* Explore */}
          <Link
            href="/booking"
            className="rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-orange-600 hover:shadow-lg"
          >
            Explore →
          </Link>

        </div>
      </div>
    </article>
  );
}
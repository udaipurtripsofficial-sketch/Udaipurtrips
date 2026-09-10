import Image from "next/image";
import Link from "next/link";

const packages = [
  {
    title: "Udaipur Sightseeing",
    image: "/images/citypalace.jpg",
    duration: "1 Day",
    price: "₹2,499",
    rating: "★★★★★",
    description:
      "Visit City Palace, Lake Pichola, Jagdish Temple and Fateh Sagar Lake.",
  },
  {
    title: "Kumbhalgarh & Ranakpur",
    image: "/images/kumbhalgarh.jpg",
    duration: "1 Day",
    price: "₹3,999",
    rating: "★★★★★",
    description:
      "Explore the magnificent Kumbhalgarh Fort and the world-famous Ranakpur Jain Temple.",
  },
  {
    title: "Mount Abu Tour",
    image: "/images/mountabu.jpg",
    duration: "2 Days",
    price: "₹6,999",
    rating: "★★★★★",
    description:
      "Enjoy Rajasthan's famous hill station with Nakki Lake, scenic viewpoints and Dilwara Temples.",
  },
];

export default function TourPackages() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADING */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Popular Tour Packages
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Handpicked experiences for unforgettable memories.
          </p>
        </div>

        {/* PACKAGES */}
        <div className="grid gap-10 md:grid-cols-3">
          {packages.map((tour, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* IMAGE */}
              <div className="relative h-64 w-full">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  {tour.title}
                </h3>

                <p className="mt-2 text-xl text-yellow-500">
                  {tour.rating}
                </p>

                <p className="mt-4 leading-7 text-gray-600">
                  {tour.description}
                </p>

                <div className="mt-6 space-y-3 text-gray-700">
                  <p>📅 Duration: {tour.duration}</p>
                  <p>🚖 Private Cab Included</p>
                  <p>🧑‍✈️ Professional Driver</p>
                  <p>💰 Starting From</p>
                </div>

                <h4 className="mt-5 text-3xl font-bold text-orange-500">
                  {tour.price}
                </h4>

                <Link
                  href="/booking"
                  className="mt-8 block rounded-xl bg-orange-500 py-4 text-center font-semibold text-white transition hover:bg-orange-600"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
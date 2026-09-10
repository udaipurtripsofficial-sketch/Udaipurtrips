import Image from "next/image";
import Link from "next/link";

const cars = [
  {
    name: "Swift Dzire",
    image: "/images/sedan.jpg",
    seats: "4+1 Seats",
    ac: "AC",
    price: "₹1,499",
    rating: "4.8",
  },
  {
    name: "Toyota Innova Crysta",
    image: "/images/suv.jpg",
    seats: "6+1 Seats",
    ac: "AC",
    price: "₹2,999",
    rating: "4.9",
  },
  {
    name: "Mahindra XUV700",
    image: "/images/xuv700.jpg",
    seats: "6+1 Seats",
    ac: "AC",
    price: "₹3,499",
    rating: "4.9",
  },
  {
    name: "Force Tempo Traveller",
    image: "/images/tempo.jpg",
    seats: "12+1 Seats",
    ac: "AC",
    price: "₹4,999",
    rating: "5.0",
  },
];

export default function CabFleet() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold uppercase tracking-[4px]">
            Premium Cab Fleet
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mt-4">
            Choose Your Perfect Ride
          </h2>

          <p className="text-gray-500 text-lg mt-4">
            Clean, comfortable and chauffeur-driven vehicles for every journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {cars.map((car, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >

              <div className="relative h-64">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">

                <div className="flex justify-between mb-3">
                  <span>👥 {car.seats}</span>
                  <span className="text-yellow-500 font-bold">
                    ⭐ {car.rating}
                  </span>
                </div>

                <h3 className="text-3xl font-bold">
                  {car.name}
                </h3>

                <p className="text-gray-500 mt-3">
                  ❄️ {car.ac} • Professional Driver • Sanitized Vehicle
                </p>

                <div className="flex justify-between items-center mt-6">

                  <div>
                    <p className="text-sm text-gray-500">
                      Starting From
                    </p>

                    <h4 className="text-3xl font-bold text-orange-500">
                      {car.price}
                    </h4>
                  </div>

                  <Link
                    href={`/booking?vehicle=${encodeURIComponent(car.name)}`}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold"
                  >
                    Book Now
                  </Link>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
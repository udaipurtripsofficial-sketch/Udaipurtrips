import Image from "next/image";

const cars = [
  {
    name: "Swift Dzire",
    image: "/images/sedan.jpg",
    seats: "4+1 Seats",
    luggage: "2 Bags",
    price: "₹12/km",
  },
  {
    name: "Toyota Innova Crysta",
    image: "/images/suv.jpg",
    seats: "6+1 Seats",
    luggage: "4 Bags",
    price: "₹18/km",
  },
  {
    name: "Mahindra XUV700",
    image: "/images/xuv700.jpg",
    seats: "6+1 Seats",
    luggage: "4 Bags",
    price: "₹16/km",
  },
  {
    name: "Tempo Traveller",
    image: "/images/tempo.jpg",
    seats: "12+1 Seats",
    luggage: "10 Bags",
    price: "₹28/km",
  },
];

export default function CabGrid() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold">
            Our Premium Fleet
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Choose the perfect vehicle for your journey in Udaipur.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {cars.map((car) => (

            <div
              key={car.name}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
            >

              <div className="relative h-56 bg-gray-100">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-contain p-6"
                />
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-center">
                  {car.name}
                </h3>

                <div className="text-center text-yellow-500 text-xl mt-2">
                  ★★★★★
                </div>

                <div className="space-y-2 mt-6 text-gray-700">

                  <p>✅ {car.seats}</p>

                  <p>❄️ Air Conditioned</p>

                  <p>🧳 {car.luggage}</p>

                  <p>🧑 Professional Driver</p>

                  <p>⛽ Fuel Included</p>

                </div>

                <div className="mt-6 text-center">

                  <p className="text-orange-600 text-2xl font-bold">
                    {car.price}
                  </p>

                  <p className="text-sm text-gray-500">
                    Starting Price
                  </p>

                </div>

                <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition">
                  Book Now
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
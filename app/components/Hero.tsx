import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden -mt-10 md:mt-0">

      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="Udaipur City Palace"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-6 text-center text-white">

          <p className="uppercase tracking-[6px] text-orange-400 font-semibold mb-5">
            Welcome to UdaipurTrips
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Discover
            <span className="block text-orange-400">
              The City of Lakes
            </span>
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-9">
            Luxury Hotels • Premium Cab Rental • Private Tours •
            Airport Transfers • Local Sightseeing • Rajasthan Holiday Packages
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">

            <Link href="/tour-packages">
              <button className="bg-orange-500 hover:bg-orange-600 transition duration-300 px-10 py-4 rounded-full text-lg font-semibold shadow-xl">
                Explore Tours
              </button>
            </Link>

            <Link href="/cab-rental">
              <button className="border-2 border-white hover:bg-white hover:text-black transition duration-300 px-10 py-4 rounded-full text-lg font-semibold">
                Book Premium Cab
              </button>
            </Link>

          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <h2 className="text-4xl font-bold text-orange-400">5000+</h2>
              <p className="text-gray-300 mt-2">Happy Travelers</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-orange-400">150+</h2>
              <p className="text-gray-300 mt-2">Tour Packages</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-orange-400">24×7</h2>
              <p className="text-gray-300 mt-2">Customer Support</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-orange-400">4.9★</h2>
              <p className="text-gray-300 mt-2">Google Rating</p>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
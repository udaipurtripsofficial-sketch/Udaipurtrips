import DestinationCard from "./DestinationCard";

const destinations = [
  {
    name: "City Palace",
    image: "/images/citypalace.jpg",
    description:
      "Explore the magnificent City Palace, one of Udaipur's most iconic royal landmarks overlooking Lake Pichola.",
    duration: "2–3 Hours",
    rating: "4.9",
    badge: "Royal Heritage",
  },
  {
    name: "Lake Pichola",
    image: "/images/lakepichola.jpg",
    description:
      "Enjoy a peaceful boat ride across Lake Pichola with breathtaking views of palaces, islands and the Aravalli hills.",
    duration: "1–2 Hours",
    rating: "4.8",
    badge: "Sunset Cruise",
  },
  {
    name: "Sajjangarh Palace",
    image: "/images/sajjangarh.jpg",
    description:
      "Visit the famous Monsoon Palace and enjoy spectacular panoramic views of Udaipur and the surrounding hills.",
    duration: "2 Hours",
    rating: "4.9",
    badge: "Best Sunset",
  },
  {
    name: "Fateh Sagar Lake",
    image: "/images/fatehsagar.jpg",
    description:
      "Relax beside one of Udaipur's most beautiful lakes and enjoy its peaceful surroundings.",
    duration: "2 Hours",
    rating: "4.8",
    badge: "Lake Experience",
  },
  {
    name: "Jagmandir",
    image: "/images/jagmandir.jpg",
    description:
      "Discover the beautiful island palace of Jagmandir located in the middle of Lake Pichola.",
    duration: "2–3 Hours",
    rating: "4.8",
    badge: "Island Palace",
  },
  {
    name: "Kumbhalgarh Fort",
    image: "/images/kumbhalgarh.jpg",
    description:
      "Explore the magnificent historic fort surrounded by the Aravalli hills and famous for its massive wall.",
    duration: "Full Day",
    rating: "4.9",
    badge: "UNESCO Heritage",
  },
];

export default function PopularDestinations() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            Explore Rajasthan
          </span>

          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Popular Destinations
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Discover the royal beauty of Udaipur and explore some of the
            most beautiful destinations around Rajasthan.
          </p>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.name}
              {...destination}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
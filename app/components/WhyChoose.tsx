export default function WhyChoose() {
  const features = [
    {
      number: "01",
      title: "Premium Cab Fleet",
      description:
        "Well-maintained sedans, SUVs and premium vehicles for comfortable journeys across Udaipur and Rajasthan.",
    },
    {
      number: "02",
      title: "Professional Drivers",
      description:
        "Experienced local drivers who understand the city, routes and the needs of our travelers.",
    },
    {
      number: "03",
      title: "Transparent Pricing",
      description:
        "Clear and honest pricing with no hidden charges, so you know exactly what you are paying for.",
    },
    {
      number: "04",
      title: "Personalized Trips",
      description:
        "From sightseeing to multi-day Rajasthan journeys, every trip can be planned around your preferences.",
    },
    {
      number: "05",
      title: "Local Expertise",
      description:
        "Discover Udaipur beyond the usual tourist spots with knowledge from people who know the destination.",
    },
    {
      number: "06",
      title: "Dedicated Support",
      description:
        "Our team stays available before and during your journey to help make your travel experience smooth.",
    },
  ];

  return (
    <section className="bg-[#f7f5f0] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
            The UdaipurTrips Difference
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-gray-950 md:text-5xl">
            Travel with confidence.
            <br />
            <span className="text-gray-500">
              Experience Udaipur differently.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Thoughtfully planned journeys, premium transportation and trusted
            local expertise — everything you need for a memorable Udaipur
            experience.
          </p>
        </div>

        {/* Features */}
        <div className="grid border-t border-[#ded9d0] md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="group border-b border-[#ded9d0] p-8 transition duration-300 hover:bg-white lg:nth-[3n+1]:border-r lg:nth-[3n+2]:border-r"
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="text-sm font-medium tracking-widest text-gray-400">
                  {feature.number}
                </span>

                <span className="h-px w-10 bg-orange-500 transition-all duration-300 group-hover:w-16" />
              </div>

              <h3 className="mb-4 text-xl font-semibold text-gray-950">
                {feature.title}
              </h3>

              <p className="text-[15px] leading-7 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom trust line */}
        <div className="mt-12 flex flex-col gap-4 border-t border-[#ded9d0] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">
            Your journey. Our local expertise.
          </p>

          <p className="text-sm font-medium text-gray-900">
            Udaipur • Rajasthan • India
          </p>
        </div>
      </div>
    </section>
  );
}
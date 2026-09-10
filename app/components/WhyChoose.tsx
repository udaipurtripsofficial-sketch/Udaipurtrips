export default function WhyChoose() {
  const features = [
    {
      icon: "🚖",
      title: "Premium Cab Fleet",
      description:
        "Well-maintained sedans, SUVs and tempo travellers for every journey.",
    },
    {
      icon: "👨‍✈️",
      title: "Professional Drivers",
      description:
        "Experienced, polite and verified local drivers for a safe trip.",
    },
    {
      icon: "💰",
      title: "Best Price Guarantee",
      description:
        "Transparent pricing with no hidden charges and great value.",
    },
    {
      icon: "📞",
      title: "24×7 Support",
      description:
        "Our travel team is available anytime before and during your trip.",
    },
    {
      icon: "🏰",
      title: "Local Travel Experts",
      description:
        "Discover the best attractions with experienced local guides.",
    },
    {
      icon: "⭐",
      title: "Trusted by Travelers",
      description:
        "Hundreds of happy guests choose UdaipurTrips every year.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900">
            Why Choose UdaipurTrips?
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            We provide premium travel experiences with trusted local experts,
            luxury vehicles, transparent pricing and 24×7 customer support.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl mb-5">{feature.icon}</div>

              <h3 className="text-2xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
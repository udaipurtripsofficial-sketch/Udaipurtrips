export default function Testimonials() {
  const reviews = [
    {
      name: "John Smith",
      country: "United Kingdom 🇬🇧",
      review:
        "Amazing experience! The hotel, cab and sightseeing were perfectly managed. Highly recommended.",
      rating: "★★★★★",
    },
    {
      name: "Priya Sharma",
      country: "New Delhi 🇮🇳",
      review:
        "Excellent service from booking to checkout. The driver was polite and everything was on time.",
      rating: "★★★★★",
    },
    {
      name: "David Wilson",
      country: "Australia 🇦🇺",
      review:
        "One of the best Rajasthan trips I've ever had. Beautiful hotels and great customer support.",
      rating: "★★★★★",
    },
  ];

  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-yellow-500 font-bold uppercase tracking-widest">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold mt-4">
            What Our Customers Say
          </h2>

          <p className="text-gray-500 mt-5 text-lg">
            Thousands of travellers trust UdaipurTrips for unforgettable experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300"
            >

              <div className="text-yellow-500 text-2xl mb-4">
                {review.rating}
              </div>

              <p className="text-gray-600 italic">
                "{review.review}"
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-bold">
                  {review.name}
                </h3>

                <p className="text-gray-500">
                  {review.country}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
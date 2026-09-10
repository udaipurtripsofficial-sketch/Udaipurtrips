import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Udaipur Travel FAQ | Tours, Cabs & Bookings",

  description:
    "Find answers to common questions about UdaipurTrips, including tour bookings, airport transfers, customized tour packages, hotel bookings, payments, cancellations and Rajasthan tours.",

  keywords: [
    "Udaipur travel FAQ",
    "Udaipur tour FAQ",
    "Udaipur cab rental FAQ",
    "Udaipur tour booking",
    "Udaipur airport pickup",
    "Udaipur airport drop",
    "Udaipur customized tour",
    "Udaipur hotel booking",
    "Rajasthan tour packages",
    "Udaipur travel services",
    "UdaipurTrips FAQ",
  ],

  alternates: {
    canonical: "https://udaipurtrips.com/faq",
  },

  openGraph: {
    type: "website",
    url: "https://udaipurtrips.com/faq",
    title: "Udaipur Travel FAQ | UdaipurTrips",
    description:
      "Get answers about Udaipur tour bookings, cab services, airport transfers, customized packages, hotels and Rajasthan tours.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "UdaipurTrips travel FAQ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Udaipur Travel FAQ | UdaipurTrips",
    description:
      "Answers to common questions about Udaipur tours, cabs, bookings and Rajasthan travel.",
    images: ["/images/hero.jpg"],
  },
};

export default function FAQPage() {
  const faqs = [
    {
      question: "How do I book a tour?",
      answer:
        "You can book a tour by contacting us through WhatsApp, phone, email, or by submitting an inquiry on our website.",
    },
    {
      question: "Do you provide airport pickup and drop?",
      answer:
        "Yes. We provide 24/7 airport pickup and drop services from Maharana Pratap Airport, Udaipur.",
    },
    {
      question: "Can I customize my tour package?",
      answer:
        "Absolutely. We create customized tour packages based on your budget, interests, and travel duration.",
    },
    {
      question: "Which payment methods do you accept?",
      answer:
        "We accept UPI, bank transfer, credit cards, debit cards, and cash payments.",
    },
    {
      question: "Do you offer hotel bookings?",
      answer:
        "Yes. We partner with trusted hotels ranging from budget stays to luxury resorts in and around Udaipur.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Cancellation policies depend on the booked service. Please contact us for the applicable terms before cancelling.",
    },
    {
      question: "Are your drivers experienced?",
      answer:
        "Yes. All our drivers are experienced, licensed, and familiar with Udaipur and nearby tourist destinations.",
    },
    {
      question: "Do you arrange Rajasthan tour packages?",
      answer:
        "Yes. Apart from Udaipur, we also organize customized Rajasthan tours covering Jaipur, Jodhpur, Jaisalmer, Mount Abu, Ranthambore, and more.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>

          <p className="text-xl text-blue-100">
            Find quick answers to the most common questions about our travel services.
          </p>
        </div>
      </section>

      {/* FAQ Cards */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <div className="space-y-6">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {faq.question}
              </h2>

              <p className="text-gray-600 leading-8">
                {faq.answer}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl text-white text-center p-12">

          <h2 className="text-4xl font-bold mb-5">
            Still Have Questions?
          </h2>

          <p className="text-lg mb-8">
            Our team is available 24/7 to help you plan your perfect Udaipur trip.
          </p>

          <a
            href="https://wa.me/917070903126"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition"
          >
            Chat on WhatsApp
          </a>

        </div>

      </section>

    </main>
  );
}
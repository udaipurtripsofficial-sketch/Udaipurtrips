import { Suspense } from "react";
import BookingHero from "../components/booking/BookingHero";
import BookingForm from "../components/booking/BookingForm";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Book Your Udaipur Trip | UdaipurTrips",
  description:
    "Book Udaipur tours, cab rentals and travel services with UdaipurTrips. Plan your Udaipur journey with comfortable transportation and local travel assistance.",
};

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <BookingHero />

      <section className="mx-auto max-w-7xl px-4 py-16">
        <Suspense
          fallback={
            <div className="py-10 text-center text-gray-600">
              Loading booking form...
            </div>
          }
        >
          <BookingForm />
        </Suspense>
      </section>
    </main>
  );
}
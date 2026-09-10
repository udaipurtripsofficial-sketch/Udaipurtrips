"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function BookingForm() {
  const searchParams = useSearchParams();

  const [showMore, setShowMore] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    countryCode: "",
    phone: "",
    travelDate: "",
    travellers: "",
    pickup: "",
    drop: "",
    vehicle: "",
    hotel: "",
    flight: "",
    request: "",
  });

  // Get today's date in local time.
  // This avoids the UTC date problem that can happen with toISOString().
  const getTodayLocal = () => {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const today = getTodayLocal();

  useEffect(() => {
    const vehicle = searchParams.get("vehicle");

    if (vehicle) {
      setFormData((prev) => ({
        ...prev,
        vehicle,
      }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleWhatsApp = () => {
    // Required fields
    if (
      !formData.fullName.trim() ||
      !formData.phone.trim() ||
      !formData.travelDate ||
      !formData.pickup.trim() ||
      !formData.vehicle
    ) {
      alert(
        "Please fill all required fields (Name, Phone, Travel Date, Pickup & Vehicle)."
      );
      return;
    }

    // Extra protection against previous dates
    if (formData.travelDate < today) {
      alert("Please select today or a future travel date.");
      return;
    }

    const fullPhone =
      formData.countryCode && formData.phone
        ? `${formData.countryCode} ${formData.phone}`
        : formData.phone;

    const message = `🚖 *New Booking Request - UdaipurTrips*

👤 Name: ${formData.fullName}
📧 Email: ${formData.email || "Not provided"}
📞 Phone: ${fullPhone}
🌎 Country: ${formData.country || "Not selected"}

📅 Travel Date: ${formData.travelDate}
👥 Travellers: ${formData.travellers || "Not specified"}

📍 Pickup: ${formData.pickup}
📍 Drop: ${formData.drop || "Not specified"}

🚗 Vehicle: ${formData.vehicle}

🏨 Hotel: ${formData.hotel || "Not provided"}
✈️ Flight/Train: ${formData.flight || "Not provided"}

📝 Special Request:
${formData.request || "None"}`;

    window.open(
      `https://wa.me/917070903126?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-3">
          Book Your Trip
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Fill in your travel details and instantly connect with us on WhatsApp.
        </p>

        {/* Main Form */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Full Name */}
          <div>
            <label className="block font-semibold mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              autoComplete="name"
              className="w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              autoComplete="email"
              className="w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block font-semibold mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>

            <div className="flex w-full rounded-xl border border-gray-300 overflow-hidden focus-within:ring-2 focus-within:ring-orange-500">

              {/* Country Code - NO FLAG */}
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="bg-white px-3 py-3 border-r border-gray-300 outline-none"
              >
                <option value="">Code</option>
                <option value="+91">+91 India</option>
                <option value="+1">+1 USA / Canada</option>
                <option value="+44">+44 UK</option>
                <option value="+61">+61 Australia</option>
                <option value="+64">+64 New Zealand</option>
                <option value="+971">+971 UAE</option>
                <option value="+966">+966 Saudi Arabia</option>
                <option value="+974">+974 Qatar</option>
                <option value="+965">+965 Kuwait</option>
                <option value="+968">+968 Oman</option>
                <option value="+973">+973 Bahrain</option>
                <option value="+92">+92 Pakistan</option>
                <option value="+880">+880 Bangladesh</option>
                <option value="+977">+977 Nepal</option>
                <option value="+7">+7 Kazakhstan / Russia</option>
                <option value="+998">+998 Uzbekistan</option>
                <option value="+996">+996 Kyrgyzstan</option>
                <option value="+992">+992 Tajikistan</option>
                <option value="+993">+993 Turkmenistan</option>
                <option value="+90">+90 Turkey</option>
                <option value="+33">+33 France</option>
                <option value="+49">+49 Germany</option>
                <option value="+39">+39 Italy</option>
                <option value="+34">+34 Spain</option>
                <option value="+31">+31 Netherlands</option>
                <option value="+81">+81 Japan</option>
                <option value="+82">+82 South Korea</option>
                <option value="+86">+86 China</option>
                <option value="+65">+65 Singapore</option>
                <option value="+60">+60 Malaysia</option>
                <option value="+66">+66 Thailand</option>
                <option value="+27">+27 South Africa</option>
              </select>

              {/* Phone Number */}
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                autoComplete="tel"
                className="flex-1 p-3 outline-none min-w-0"
              />
            </div>
          </div>

          {/* Country */}
          <div>
            <label className="block font-semibold mb-2">
              Country
            </label>

            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-3 bg-white focus:ring-2 focus:ring-orange-500 outline-none"
            >
              <option value="">Select your country</option>

              <option value="India">India</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Australia">Australia</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Canada">Canada</option>
              <option value="UAE">United Arab Emirates</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Qatar">Qatar</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Oman">Oman</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Tajikistan">Tajikistan</option>
              <option value="Turkmenistan">Turkmenistan</option>
              <option value="Turkey">Turkey</option>
              <option value="France">France</option>
              <option value="Germany">Germany</option>
              <option value="Italy">Italy</option>
              <option value="Spain">Spain</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Japan">Japan</option>
              <option value="South Korea">South Korea</option>
              <option value="China">China</option>
              <option value="Singapore">Singapore</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Thailand">Thailand</option>
              <option value="South Africa">South Africa</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Travel Date */}
          <div>
            <label className="block font-semibold mb-2">
              Travel Date <span className="text-red-500">*</span>
            </label>

            <input
              type="date"
              name="travelDate"
              value={formData.travelDate}
              onChange={handleChange}
              min={today}
              className="w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500 outline-none"
            />

            <p className="text-sm text-gray-500 mt-2">
              You can only select today or a future date.
            </p>
          </div>

          {/* Travellers */}
          <div>
            <label className="block font-semibold mb-2">
              Number of Travellers
            </label>

            <select
              name="travellers"
              value={formData.travellers}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-3 bg-white focus:ring-2 focus:ring-orange-500 outline-none"
            >
              <option value="">Select number of travellers</option>
              <option value="1">1 Traveller</option>
              <option value="2">2 Travellers</option>
              <option value="3">3 Travellers</option>
              <option value="4">4 Travellers</option>
              <option value="5">5 Travellers</option>
              <option value="6">6 Travellers</option>
              <option value="7">7 Travellers</option>
              <option value="8">8 Travellers</option>
              <option value="9">9 Travellers</option>
              <option value="10">10 Travellers</option>
              <option value="10+">10+ Travellers</option>
            </select>
          </div>

          {/* Pickup */}
          <div>
            <label className="block font-semibold mb-2">
              Pickup Location <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              name="pickup"
              value={formData.pickup}
              onChange={handleChange}
              placeholder="Airport / Hotel / Railway Station"
              className="w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>

          {/* Drop */}
          <div>
            <label className="block font-semibold mb-2">
              Drop Location
            </label>

            <input
              type="text"
              name="drop"
              value={formData.drop}
              onChange={handleChange}
              placeholder="Destination"
              className="w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>

          {/* Vehicle */}
          <div className="md:col-span-2">
            <label className="block font-semibold mb-2">
              Vehicle Type <span className="text-red-500">*</span>
            </label>

            <select
              name="vehicle"
              value={formData.vehicle}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-3 bg-white focus:ring-2 focus:ring-orange-500 outline-none"
            >
              <option value="">Select Vehicle</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Innova Crysta">Innova Crysta</option>
              <option value="XUV700">XUV700</option>
              <option value="Tempo Traveller">Tempo Traveller</option>
            </select>
          </div>

          {/* Additional Details */}
          <div className="md:col-span-2 mt-2">

            <button
              type="button"
              onClick={() => setShowMore(!showMore)}
              className="flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-800 transition"
            >
              {showMore ? (
                <>
                  <ChevronUp size={18} />
                  Hide Additional Details
                </>
              ) : (
                <>
                  <ChevronDown size={18} />
                  Add Additional Details (Optional)
                </>
              )}
            </button>
          </div>

          {/* Additional Details */}
          {showMore && (
            <>
              {/* Hotel */}
              <div>
                <label className="block font-semibold mb-2">
                  Hotel Name <span className="text-gray-400 font-normal">(Optional)</span>
                </label>

                <input
                  type="text"
                  name="hotel"
                  value={formData.hotel}
                  onChange={handleChange}
                  placeholder="Enter hotel name"
                  className="w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>

              {/* Flight */}
              <div>
                <label className="block font-semibold mb-2">
                  Flight / Train Number <span className="text-gray-400 font-normal">(Optional)</span>
                </label>

                <input
                  type="text"
                  name="flight"
                  value={formData.flight}
                  onChange={handleChange}
                  placeholder="e.g. AI302 / EK514 / Train No."
                  className="w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>

              {/* Special Request */}
              <div className="md:col-span-2">
                <label className="block font-semibold mb-2">
                  Special Request
                </label>

                <textarea
                  name="request"
                  value={formData.request}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your requirements, sightseeing preferences, child seat, special occasion, etc."
                  className="w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500 outline-none resize-none"
                />
              </div>
            </>
          )}
        </div>

        {/* WhatsApp Button */}
        <div className="mt-10 text-center">

          <button
            type="button"
            onClick={handleWhatsApp}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-xl transition duration-300 shadow-lg"
          >
            📲 Book on WhatsApp
          </button>

          <p className="text-sm text-gray-500 mt-4">
            Your booking details will be prepared in WhatsApp for quick assistance.
          </p>
        </div>

      </div>
    </section>
  );
}
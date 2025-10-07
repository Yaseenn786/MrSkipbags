import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CollectionForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    address1: "",
    address2: "",
    eircode: "",
    mobile: "",
    email: "",
    collectionDate: "",
    notes: "",
    bagType: "Midi Bag Collection",
    qty: 1,
    price: 99.0,
  });

  // ✅ Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ✅ Dynamic backend URL (works local + production)
  const API_BASE =
    import.meta.env.MODE === "development"
      ? "http://localhost:3001"
      : "https://mrskipbags.onrender.com"; // <-- your Render backend URL

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("📤 Submitting data:", formData);

    try {
      const res = await fetch(`${API_BASE}/api/enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("📨 Response status:", res.status, data);

      if (res.ok) {
        navigate("/success"); // ✅ redirect to success page
        console.log("✅ Enquiry sent successfully");
      } else {
        alert("❌ Failed to send enquiry. Please try again.");
      }
    } catch (err) {
      console.error("Request failed:", err);
      alert("⚠️ Could not connect to the server.");
    }
  };

  const total = (formData.price * formData.qty).toFixed(2);

  // ✅ UI
  return (
    <section className="min-h-[80vh] bg-gray-50 py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* 🧾 Customer Info */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-6 space-y-4 md:col-span-2"
        >
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Order Information
          </h2>

          {/* Section 1 */}
          <h3 className="text-lg font-semibold text-blue-800">
            1. Your Information
          </h3>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
          <input
            type="text"
            name="address1"
            placeholder="Address Line 1"
            value={formData.address1}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
          <input
            type="text"
            name="address2"
            placeholder="Address Line 2"
            value={formData.address2}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
          />
          <input
            type="text"
            name="eircode"
            placeholder="EIR Code"
            value={formData.eircode}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />

          {/* Section 2 */}
          <h3 className="text-lg font-semibold text-blue-800 mt-6">
            2. Collection Details
          </h3>

          <input
            type="date"
            name="collectionDate"
            value={formData.collectionDate}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
          <textarea
            name="notes"
            placeholder="Special Notes (optional)"
            value={formData.notes}
            onChange={handleChange}
            className="w-full border rounded-md p-2 h-24"
          />

          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Submit Enquiry
          </button>
        </form>

        {/* 🛠️ Sidebar */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">
            3. Your Baby Skip
          </h3>
          <img
            src="https://dummyimage.com/300x200/27ae60/ffffff&text=Skip+Bag"
            alt="Skip Bag"
            className="w-full rounded-md mb-4"
          />
          <h4 className="font-bold">{formData.bagType}</h4>
          <p className="text-sm text-gray-600 mb-4">
            Delivery to selected area (collection within 5 working days).
          </p>

          {/* Price Table */}
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Skip</span>
              <span>€ {formData.price.toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-center">
              <span>Qty:</span>
              <input
                type="number"
                min="1"
                name="qty"
                value={formData.qty}
                onChange={handleChange}
                className="w-16 border rounded-md p-1 text-center"
              />
            </div>

            <div className="flex justify-between font-semibold border-t pt-2">
              <span>Total inc. VAT</span>
              <span>€ {total}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/send-mail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-gradient-to-b from-green-900 to-emerald-800 py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold text-center text-white mb-10">
          Contact Us
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl p-10 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-green-900 font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-green-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 outline-none"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-green-900 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-green-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 outline-none"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-green-900 font-semibold mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full border border-green-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 outline-none"
              placeholder="Regarding skip bag collection..."
            />
          </div>

          <div>
            <label className="block text-green-900 font-semibold mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full border border-green-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 outline-none resize-none"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-green-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-green-500 transition-all duration-300 disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-700 mt-3 font-medium">
                ✅ Message sent successfully! We’ll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 mt-3 font-medium">
                ❌ Something went wrong. Please try again later.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

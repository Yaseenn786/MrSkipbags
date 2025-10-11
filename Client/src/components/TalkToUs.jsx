import { Link } from "react-router-dom";

export default function TalkToUs() {
  return (
    <section className="bg-green-800 text-center py-20">
      <h2 className="text-3xl font-bold text-white mb-6">Talk to us</h2>
      <p className="text-green-100 max-w-2xl mx-auto mb-8">
        Have a question about our skip bag collection service? Want to know more
        about bag sizes, prices, or bulk collections? Fill out our form below.
      </p>

      {/* ✅ Button links to Contact page */}
      <Link
        to="/contact"
        className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:scale-105 transition-transform duration-300"
      >
        Contact us
      </Link>
    </section>
  );
}

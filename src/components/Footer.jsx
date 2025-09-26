import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 mt-0">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Left Column: CTA */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Clear Your Space?
          </h3>
          <p className="mb-4 text-gray-400">
            Book your collection today and let Mr Skip Bags handle the heavy lifting.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg shadow-md transition">
            Schedule a Collection
          </button>
          <p className="mt-4 text-lg font-semibold text-green-400">
            📞 (01) 234 5678
          </p>
        </div>

        {/* Middle Column: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 mb-6">
            <li><a href="#services" className="hover:text-green-400 transition">Services</a></li>
            <li><a href="#booking" className="hover:text-green-400 transition">Book Now</a></li>
            <li><a href="#contact" className="hover:text-green-400 transition">Contact</a></li>
            <li><a href="#about" className="hover:text-green-400 transition">About Us</a></li>
          </ul>

          {/* Social Media */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-green-600 transition"
            >
              <FaFacebookF className="text-white" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-green-600 transition"
            >
              <FaInstagram className="text-white" />
            </a>
            <a
              href="https://wa.me/35312345678"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-green-600 transition"
            >
              <FaWhatsapp className="text-white" />
            </a>
          </div>
        </div>

        {/* Right Column: Service Area & Trust */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">We Serve</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">Dublin</span>
            <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">Galway</span>
            <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">Limerick</span>
            <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">Waterford</span>
          </div>
          <p className="text-green-400 font-semibold">✅ Licensed & Insured</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Mr Skip Bags. All Rights Reserved.
      </div>
    </footer>
  );
}

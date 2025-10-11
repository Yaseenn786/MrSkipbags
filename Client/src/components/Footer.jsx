import { FaFacebookF, FaInstagram, FaWhatsapp, FaTwitter, FaLinkedinIn } from "react-icons/fa";

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
           
            <li><a href="/Area" className="hover:text-green-400 transition">Book Now</a></li>
            <li><a href="/Contact" className="hover:text-green-400 transition">Contact</a></li>
            <li><a href="/about-us" className="hover:text-green-400 transition">About Us</a></li>
          </ul>
        </div>

        {/* Right Column: Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <p className="text-gray-400 mb-6">
            Stay connected for updates and offers
          </p>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-green-600 transition transform hover:scale-110"
              title="Facebook"
            >
              <FaFacebookF className="text-white text-lg" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-green-600 transition transform hover:scale-110"
              title="Instagram"
            >
              <FaInstagram className="text-white text-lg" />
            </a>
            <a
              href="https://wa.me/35312345678"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-green-600 transition transform hover:scale-110"
              title="WhatsApp"
            >
              <FaWhatsapp className="text-white text-lg" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-green-600 transition transform hover:scale-110"
              title="Twitter"
            >
              <FaTwitter className="text-white text-lg" />
            </a>
          </div>

          
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Mr Skip Bags. All Rights Reserved.
      </div>
    </footer>
  );
}
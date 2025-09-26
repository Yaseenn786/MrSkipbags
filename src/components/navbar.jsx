import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-green-900/95 via-green-800/95 to-green-900/95 backdrop-blur-md shadow-md border-b border-green-700/40">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-extrabold text-white tracking-wide hover:text-green-300 transition"
        >
          Mr Skip Bags
        </a>

        {/* Navigation */}
        <nav className="flex space-x-8 text-green-100 font-medium">
          {["services", "booking", "contact"].map((link, idx) => (
            <ScrollLink
              key={idx}
              to={link}
              smooth={true}
              duration={500}
              className="relative group cursor-pointer hover:text-green-300 transition"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}

              {/* Underline Animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </ScrollLink>
          ))}
        </nav>

        {/* CTA Button */}
        <ScrollLink
          to="booking"
          smooth={true}
          duration={500}
          className="bg-green-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-500 hover:shadow-lg transition cursor-pointer"
        >
          Book Collection
        </ScrollLink>
      </div>
    </header>
  );
}

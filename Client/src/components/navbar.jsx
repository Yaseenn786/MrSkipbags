import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react"; // for hamburger icons
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastFlag = useRef(false);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (lastFlag.current !== scrolled) {
            setIsScrolled(scrolled);
            lastFlag.current = scrolled;
          }
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-lg bg-gradient-to-r from-green-900/95 to-emerald-800/95 border-b border-green-400/30 shadow-2xl shadow-green-500/10 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-0"
      }`}
    >
      {/* Gradient line */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-green-400 via-lime-300 to-emerald-500 animate-pulse"></div>

      {/* Main container */}
      <div className="container mx-auto flex items-center justify-between px-6 md:px-10 relative">
        {/* Logo / Brand */}
        <a href="/" className="flex items-center group">
          <img
            src={logo}
            alt="Mr Skip Bags"
            className={`object-contain filter drop-shadow-lg mr-3 transition-all duration-500 ${
              isScrolled
                ? "opacity-0 scale-90 h-0 w-0"
                : "opacity-100 scale-100 h-28 w-auto"
            }`}
          />
          <div
            className={`font-bold tracking-wider bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent transition-all duration-500 ${
              isScrolled ? "opacity-100 text-xl" : "opacity-0 text-2xl"
            }`}
          >
            MR SKIP BAGS
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1">
          <Link
            to="/About-us"
            className={`text-green-50 font-semibold cursor-pointer rounded-xl transition-all duration-300 hover:bg-green-700/40 hover:shadow-lg hover:shadow-green-500/20 ${
              isScrolled ? "px-3 py-2 text-sm" : "px-4 py-3 text-base"
            }`}
          >
            About Us
          </Link>

          <div
            className={`bg-gradient-to-b from-transparent via-green-400/50 to-transparent ${
              isScrolled ? "h-4" : "h-6"
            } w-px mx-2`}
          />

          <Link
            to="/Contact"
            className={`text-green-50 font-semibold cursor-pointer rounded-xl transition-all duration-300 hover:bg-green-700/40 hover:shadow-lg hover:shadow-green-500/20 ${
              isScrolled ? "px-3 py-2 text-sm" : "px-4 py-3 text-base"
            }`}
          >
            Contact Us
          </Link>

          <div
            className={`bg-gradient-to-b from-transparent via-green-400/50 to-transparent ${
              isScrolled ? "h-4" : "h-6"
            } w-px mx-2`}
          />

          <Link
            to="/Area"
            className={`text-green-50 font-semibold cursor-pointer rounded-xl transition-all duration-300 hover:bg-green-700/40 hover:shadow-lg hover:shadow-green-500/20 ${
              isScrolled ? "px-3 py-2 text-sm" : "px-4 py-3 text-base"
            }`}
          >
            Book Collection
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-green-700/40 transition-colors"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="absolute top-full right-0 mt-3 w-56 bg-white/95 backdrop-blur-lg text-green-900 rounded-2xl shadow-2xl border border-green-200 overflow-hidden animate-fadeIn md:hidden">
            <Link
              to="/About-us"
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 hover:bg-green-50 font-semibold border-b border-green-100"
            >
              About Us
            </Link>
            <Link
              to="/Contact"
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 hover:bg-green-50 font-semibold border-b border-green-100"
            >
              Contact Us
            </Link>
            <Link
              to="/Area"
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 hover:bg-green-50 font-semibold"
            >
              Book Collection
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

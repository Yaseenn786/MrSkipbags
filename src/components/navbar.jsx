import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-lg bg-gradient-to-r from-green-900/95 to-emerald-800/95 border-b border-green-400/30 shadow-2xl shadow-green-500/10 transition-all duration-300 ${
      isScrolled ? 'py-2' : 'py-4'
    }`}>
      
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-green-400 via-lime-300 to-emerald-500 animate-pulse"></div>

      <div className="container mx-auto flex items-center justify-between px-6">
        
        {/* Logo Section */}
        <a href="/" className="flex items-center group">
          {/* Logo disappears when scrolled */}
          {!isScrolled && (
            <img 
              src={logo} 
              alt="Mr Skip Bags" 
              className="h-16 w-auto object-contain filter drop-shadow-lg mr-3 transition-opacity duration-300"
            />
          )}
          
          {/* Brand Text - gets smaller */}
          <div className={`text-white font-bold tracking-wider bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent transition-all duration-300 ${
            isScrolled ? 'text-lg' : 'text-2xl'
          }`}>
            MR SKIP BAGS
          </div>
        </a>

        {/* Navigation - gets smaller */}
        <nav className="flex items-center space-x-1">
          <ScrollLink
            to="about"
            smooth={true}
            duration={600}
            className={`text-green-50 font-semibold cursor-pointer rounded-xl transition-all duration-300 hover:bg-green-700/40 hover:shadow-lg hover:shadow-green-500/20 ${
              isScrolled ? 'px-3 py-2 text-sm' : 'px-4 py-3 text-base'
            }`}
          >
            About Us
          </ScrollLink>

          <div className={`bg-gradient-to-b from-transparent via-green-400/50 to-transparent transition-all duration-300 ${
            isScrolled ? 'h-4' : 'h-6'
          } w-px mx-2`}></div>

          <ScrollLink
            to="contact"
            smooth={true}
            duration={600}
            className={`text-green-50 font-semibold cursor-pointer rounded-xl transition-all duration-300 hover:bg-green-700/40 hover:shadow-lg hover:shadow-green-500/20 ${
              isScrolled ? 'px-3 py-2 text-sm' : 'px-4 py-3 text-base'
            }`}
          >
            Contact Us
          </ScrollLink>

          <div className={`bg-gradient-to-b from-transparent via-green-400/50 to-transparent transition-all duration-300 ${
            isScrolled ? 'h-4' : 'h-6'
          } w-px mx-2`}></div>

          <div className="relative group">
            <button className={`text-green-50 font-semibold rounded-xl transition-all duration-300 hover:bg-green-700/40 hover:shadow-lg hover:shadow-green-500/20 flex items-center space-x-1 ${
              isScrolled ? 'px-3 py-2 text-sm' : 'px-4 py-3 text-base'
            }`}>
              <span>Services</span>
              <span className="text-green-300 text-xs transition-transform duration-300 group-hover:rotate-180">▼</span>
            </button>

            {/* Dropdown remains same */}
            <div className="absolute left-0 top-full mt-1 w-56 bg-white/95 backdrop-blur-xl text-gray-800 rounded-2xl shadow-2xl border border-green-200/50 opacity-0 scale-95 transform transition-all duration-300 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto">
              <div className="px-4 py-3 border-b border-green-100 bg-gradient-to-r from-green-50 to-emerald-50 rounded-t-2xl">
                <div className="font-bold text-green-800">Our Services</div>
                <div className="text-xs text-green-600">Professional waste solutions</div>
              </div>
              <a href="#skip-hire" className="block px-5 py-4 hover:bg-green-50 transition-all duration-200 flex items-center space-x-3 group/item">
                <span className="text-xl group-hover/item:scale-110 transition-transform">🪣</span>
                <div>
                  <div className="font-semibold text-green-900">Skip Hire</div>
                  <div className="text-xs text-green-600">Various sizes available</div>
                </div>
              </a>
              <a href="#skip-collection" className="block px-5 py-4 hover:bg-green-50 transition-all duration-200 flex items-center space-x-3 group/item rounded-b-2xl">
                <span className="text-xl group-hover/item:scale-110 transition-transform">🚛</span>
                <div>
                  <div className="font-semibold text-green-900">Skip Collection</div>
                  <div className="text-xs text-green-600">Fast & reliable service</div>
                </div>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
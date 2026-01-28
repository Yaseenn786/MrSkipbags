import { motion } from "framer-motion";
import HowItWorks from "../components/HowItWorks";
import CollectSkipBag from "../components/CollectSkipBags";
import FAQ from "../components/FAQSection";
import TalkToUs from "../components/TalkToUs";
import truck from "../assets/back.png";

export default function Home() {
  return (
    <main className="bg-[#fafaf9] font-['DM_Sans',sans-serif]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <img
            src={truck}
            alt="Mr Skip Bags Truck Collection"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-lime-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left Content - Takes 3 columns */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-3 text-white"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
              >
                <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium tracking-wide">Fast & Eco-Friendly Collection</span>
              </motion.div>

              {/* Main Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
                Skip the Hassle
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-emerald-400">
                  with Mr Skip Bags
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-lg sm:text-xl text-white/70 max-w-xl mb-10 leading-relaxed">
                Ireland's most reliable skip bag collection service. Fill your bag, book online, 
                and we'll handle the rest — simple, affordable, and sustainable.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="/Area"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-flex items-center gap-3 bg-lime-400 text-gray-900 font-semibold px-8 py-4 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(163,230,53,0.4)]"
                >
                  <span className="relative z-10">Book Collection</span>
                  <svg className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-lime-300 to-lime-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>

                <motion.a
                  href="#how-it-works"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium px-8 py-4 rounded-2xl hover:bg-white/20 transition-all duration-300"
                >
                  <span>How It Works</span>
                </motion.a>
              </div>

              {/* Trust Indicators */}
              {/* <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-lime-500 border-2 border-white/20 flex items-center justify-center text-xs font-bold text-white">
                        {['J', 'M', 'S', 'K'][i]}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-white/60">500+ Happy Customers</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm text-white/60 ml-1">4.9 Rating</span>
                </div>
              </div> */}
            </motion.div>

            {/* Right Content - Price Card - Takes 2 columns */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="lg:col-span-2 flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-lime-400/30 to-emerald-500/30 rounded-3xl blur-2xl" />
                
                {/* Card */}
                <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 min-w-[280px]">
                  {/* Accent corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-lime-400 to-emerald-500 rounded-bl-[40px] rounded-tr-3xl" />
                  <div className="absolute top-3 right-4 text-white">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      Best Value
                    </div>
                    
                    <div>
                      <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Collection Starts</p>
                      <p className="text-gray-400 text-sm">From just</p>
                    </div>
                    
                    <div className="flex items-baseline gap-1">
                      <span className="text-6xl font-bold text-green-700">€89</span>
                    </div>

                    <ul className="space-y-3 pt-4 border-t border-gray-100">
                      {['Quick same-day booking', 'Eco-friendly disposal', 'No hidden fees'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-600">
                          <span className="w-5 h-5 rounded-full bg-lime-100 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-lime-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      <HowItWorks />
      <CollectSkipBag />
      <FAQ />
      <TalkToUs />
    </main>
  );
}
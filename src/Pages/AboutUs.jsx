import { motion } from "framer-motion";
import TalkToUs from"../components/TalkToUs"
export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Black Background */}
      <section className="relative h-56 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
              WE ARE
            </h1>
            <h2 className="text-4xl md:text-5xl font-black text-green-400">
              MR SKIP BAGS
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8 text-gray-700 text-lg leading-relaxed"
          >
            <p>
              At <span className="font-bold text-green-600">Mr Skip Bags</span>, we believe waste removal should be simple, affordable, and stress-free. Born right here in Ireland, our mission is to take the hassle out of DIY waste, garden clear-outs, and home renovations — while keeping our community clean and green.
            </p>

            <p>
              We're more than just another skip company. We're a local team you can trust, combining years of experience in waste management with a fresh, customer-first approach. From the moment you book a bag to the moment we collect it, we make the process fast, reliable, and eco-friendly.
            </p>

            {/* Benefits List */}
            <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <span className="font-semibold text-gray-800">Easy skip bag hire – order online in minutes</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <span className="font-semibold text-gray-800">Hassle-free collection – we're always on time</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <span className="font-semibold text-gray-800">Eco-responsible disposal – your waste handled the right way</span>
                </div>
              </div>
            </div>

            <p>
              Whether you're clearing your garden, renovating a room, or just decluttering, we've got the right skip bag solution for you. With Mr Skip Bags, you'll get service that's professional, transparent, and tailored to your needs.
            </p>

            <p className="text-xl font-semibold text-green-600 italic">
              Because for us, it's not just about waste — it's about helping people reclaim their space and making life easier.
            </p>
          </motion.div>
        </div>
      </section>

      <TalkToUs />

      

      
    </div>
  );
}
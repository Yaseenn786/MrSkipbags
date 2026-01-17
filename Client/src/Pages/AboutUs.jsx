import { motion } from "framer-motion";
import TalkToUs from "../components/TalkToUs";

export default function AboutUs() {
  const benefits = [
    "Easy skip bag hire – order online in minutes",
    "Hassle-free collection – we're always on time",
    "Eco-responsible disposal – your waste handled the right way",
  ];

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] bg-[#1e293b] overflow-hidden flex items-center justify-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-lime-500/10 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8"
          >
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            {/* <span className="text-sm font-medium text-gray-300 tracking-wide">Since 2020 • Dublin, Ire</span> */}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
          >
            WE ARE
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-lime-400 to-emerald-400">
              MR SKIP BAGS
            </span>
          </motion.h2>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
            >
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 lg:py-28 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Intro Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              At <span className="font-bold text-emerald-600">Mr Skip Bags</span>, we believe waste removal should be simple, affordable, and stress-free. Born right here in Ireland, our mission is to take the hassle out of DIY waste, garden clear-outs, and home renovations — while keeping our community clean and green.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              We're more than just another skip company. We're a local team you can trust, combining years of experience in waste management with a fresh, customer-first approach. From the moment you book a bag to the moment we collect it, we make the process fast, reliable, and eco-friendly.
            </p>
          </motion.div>

          {/* Benefits Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="my-16 relative"
          >
            {/* Card glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-lime-500 rounded-3xl blur-lg opacity-20" />
            
            <div className="relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-3xl p-8 md:p-10 border border-white/10 overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-lime-500/10 rounded-full blur-3xl" />

              <div className="relative space-y-5">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-lime-400 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium text-white text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Closing Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're clearing your garden, renovating a room, or just decluttering, we've got the right skip bag solution for you. With Mr Skip Bags, you'll get service that's professional, transparent, and tailored to your needs.
            </p>

            {/* Quote/Tagline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative py-8 px-6 md:px-10"
            >
              {/* Quote decoration */}
              <div className="absolute top-0 left-0 text-emerald-200 text-8xl font-serif leading-none opacity-50">"</div>
              
              <p className="relative text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-lime-600 italic text-center leading-relaxed">
                Because for us, it's not just about waste — it's about helping people reclaim their space and making life easier.
              </p>
              
              <div className="absolute bottom-0 right-0 text-emerald-200 text-8xl font-serif leading-none opacity-50 rotate-180">"</div>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-3 gap-4 md:gap-8"
          >
            {[
              { number: "500+", label: "Happy Customers" },
              { number: "1000+", label: "Bags Collected" },
              { number: "100%", label: "Eco-Friendly" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 md:p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-emerald-100 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-500 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <TalkToUs />
    </div>
  );
}
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      icon: "🛍️",
      title: "Get Your Bag",
      desc: "Pick up any skip bag or builder’s bag from your local store or supplier.",
    },
    {
      id: 2,
      icon: "🧹",
      title: "Fill It Up",
      desc: "Load it with your household, garden, or DIY waste — at your own pace.",
    },
    {
      id: 3,
      icon: "📅",
      title: "Book Your Collection",
      desc: "Once it’s full, simply contact Mr. Skip Bags online or by phone to schedule your collection.",
    },
    {
      id: 4,
      icon: "🚛",
      title: "We’ll Take Care of the Rest",
      desc: "Our team will collect your bag quickly, dispose of the waste responsibly, and leave you with a clean, clear space.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white via-green-50/40 to-white py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center text-green-900 mb-14"
        >
          How It Works
        </motion.h2>

        {/* Steps */}
        <div className="grid md:grid-cols-2 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white shadow-lg border border-green-100 hover:shadow-xl hover:border-green-200 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{step.icon}</div>
                <div>
                  <h3 className="text-2xl font-semibold text-green-800 mb-2 group-hover:text-green-600 transition-colors">
                    {step.id}. {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Best Prices Guaranteed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-green-50 border border-green-200 rounded-3xl p-10 shadow-md"
        >
          <h4 className="text-2xl font-bold text-green-900 mb-3">
            Best Prices Guaranteed
          </h4>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            At <strong>Mr. Skip Bags</strong>, we offer the most competitive skip bag collection rates in the area — 
            simple, affordable, and hassle-free.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What type of bags do you collect?",
      answer:
        "We collect all types of skip bags and builder's bags, including competitor bags. No matter where you bought it, if it's full — we'll take it away.",
    },
    {
      question: "How do I book a collection?",
      answer:
        "Simply book online through our website or call us directly. Choose your bag size, enter your details, and we'll schedule your collection at a time that suits you.",
    },
    {
      question: "What can I put in the bag?",
      answer:
        "You can fill your bag with household, garden, or DIY waste — like wood, soil, rubble, or general rubbish. Please avoid hazardous materials, liquids, or electrical items.",
    },
    {
      question: "How quickly can you collect?",
      answer:
        "We offer same-day collection if you book before noon. Otherwise, we'll collect within 24-48 hours at a time that works for you.",
    },
    {
      question: "What areas do you cover?",
      answer:
        "We currently cover Dublin and surrounding areas. Enter your postcode on our booking page to check if we service your location.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#fafaf9]" />

      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-72 bg-gradient-to-b from-emerald-50 to-transparent opacity-70" />

      <div className="relative container mx-auto max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-3">
            FAQ
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Questions? Answers.
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Everything you need to know about our skip bag collection service.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border transition-all duration-300 ${
                openIndex === index
                  ? "border-emerald-200 shadow-lg shadow-emerald-100/50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center gap-4"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openIndex === index
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 rotate-180"
                      : "bg-gray-100"
                  }`}
                >
                  <svg
                    className={`w-5 h-5 transition-colors duration-300 ${
                      openIndex === index ? "text-white" : "text-gray-500"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <div className="h-px bg-gray-100 mb-4" />
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="/Contact"
            className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
          >
            Get in touch with us
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
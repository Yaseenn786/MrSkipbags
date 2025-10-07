import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Where can I purchase your bags?",
      answer: "You can purchase our BabySkip bags online through our website or at local hardware stores including Woodies, B&Q, HomeBase, Heiton Buckley, and other participating retailers across Ireland."
    },
    {
      question: "I have overfilled my bag. Can you still lift it?",
      answer: "For safety reasons, we cannot collect overfilled bags. The bag should not exceed its maximum fill line. Overfilled bags can tear during collection, creating hazards. Please remove excess waste before scheduling collection."
    },
    {
      question: "Can you lift over a wall or fence?",
      answer: "Our trucks require clear access to collect your bag. We need at least 2 meters of clearance above the bag and direct access from the road. If there are obstacles like walls or fences, please contact us beforehand to discuss your specific situation."
    },
    {
      question: "Can we collect from a back alley or barrow lane?",
      answer: "Yes, we can collect from back lanes and alleys provided our collection vehicle can safely access the location. The lane should be wide enough for our truck and free of obstructions. Please ensure the bag is visible and accessible from the lane."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Frequently Asked Questions
        </h2>
        
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Below are answers to many of the questions that arise when customers are considering purchasing a BabySkip™ bag, or have already purchased a bag and need information on permissions or collection.
        </p>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg shadow-sm">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <span className="text-2xl text-green-600 font-bold ml-4">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help */}
        
      </div>
    </section>
  );
}
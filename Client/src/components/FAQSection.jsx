import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What type of bags do you collect?",
      answer: "We collect all types of skip bags and builder’s bags, including competitor bags. No matter where you bought it, if it’s full — we’ll take it away."
    },
    {
      question: "How do I book a collection?",
      answer: "Simply book online through our website or call us directly. Choose your bag size, enter your details, and we’ll schedule your collection at a time that suits you."
    },
    {
      question: "What can I put in the bag?",
      answer: "You can fill your bag with household, garden, or DIY waste — like wood, soil, rubble, or general rubbish.🚫 Please avoid hazardous materials, liquids, or electrical items."
    },
    
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
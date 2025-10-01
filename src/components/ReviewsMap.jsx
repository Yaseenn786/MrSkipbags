import { useState } from "react";

export default function ReviewsMap() {
  const reviews = [
    {
      text: "Lucan Dental Care are delighted with the efficiency and professionalism of KeyGreen. All our encounters with them have been nothing but pleasant which has made this transition effortless. They have always been very obliging and punctual when responding to our requests and we look forward to a long-lasting relationship.",
      author: "Dr Jerry Daly",
      company: "Lucan Dental Care"
    },
    {
      text: "Cosgrave Developments have been working with KeyGreen for over ten years, in this time we have always received an excellent level of service. Our business is consistently evolving, and we require sustainable waste management to ensure regulatory compliance and quick turnaround times on our busy sites.",
      author: "Teresa O'Brien",
      company: "Cosgrave Developments"
    },
    {
      text: "Mr Skip Bags has been instrumental in helping us manage construction waste across multiple sites. Their reliable collection service and eco-friendly approach makes them our preferred waste management partner.",
      author: "Michael Reynolds",
      company: "Reynolds Construction Ltd"
    },
    {
      text: "The convenience of their skip bag service is unmatched. Perfect for small to medium projects where traditional skips won't fit. Professional, punctual, and environmentally conscious.",
      author: "Sarah Chen",
      company: "Urban Property Management"
    }
  ];

  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
          What Our Clients Say
        </h2>

        {/* Review Card */}
        <div className="bg-gray-50 rounded-2xl p-12 border border-gray-200 relative">
          {/* Review Text */}
          <p className="text-gray-700 text-xl leading-relaxed mb-8 text-center italic">
            "{reviews[currentReview].text}"
          </p>
          
          {/* Author Info */}
          <div className="text-center border-t border-gray-300 pt-8">
            <p className="font-bold text-gray-900 text-2xl">
              {reviews[currentReview].author}
            </p>
            <p className="text-green-600 font-semibold text-lg mt-2">
              {reviews[currentReview].company}
            </p>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevReview}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors shadow-lg"
          >
            ‹
          </button>
          
          <button 
            onClick={nextReview}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors shadow-lg"
          >
            ›
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentReview ? 'bg-green-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
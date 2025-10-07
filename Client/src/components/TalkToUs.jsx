export default function TalkToUs() {
  return (
    <section className="bg-green-600 py-16 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-white mb-6">
          Talk to us
        </h2>
        
        {/* Description */}
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          We would love to work with you. Get in touch and let's start the conversation.
        </p>

        {/* Contact Button */}
        <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:scale-105 transition-transform duration-300">
          Contact us
        </button>
      </div>
    </section>
  );
}
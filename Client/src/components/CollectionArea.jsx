export default function CollectionArea() {
    return (
      <section className="bg-green-900 py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-center text-white mb-8">
            Do we collect in your area?
          </h2>
  
          {/* Content */}
          <div className="text-white space-y-6 text-lg leading-relaxed">
            <p>
              If you can purchase a BabySkip bag in your local hardware supplier, we collect within a 5 mile radius of this. If you are in any way unsure of your collection area please contact us to confirm.
            </p>
            <p>
              We collect from specific areas located within: <strong>Leinster, Waterford, Cork, Limerick and Clare.</strong> Full area maps available by clicking on the button below.
            </p>
          </div>
  
          {/* CTA Button */}
          <div className="text-center mt-8">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:scale-105 transform duration-200">
              View Collection Area Maps
            </button>
          </div>
        </div>
      </section>
    );
  }
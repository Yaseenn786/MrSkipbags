import { Link } from "react-router-dom";

export default function SkipHirePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      {/* Header */}
      <section className="bg-white py-16 px-6 border-b">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-black text-gray-800 mb-6">
            Skip Hire
          </h1>
          <div className="w-32 h-2 bg-green-500 mx-auto rounded-full mb-8"></div>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Bigger Projects? We're Launching Full Skip Hire Service Soon!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          
          {/* Coming Soon Card */}
          <div className="bg-white rounded-3xl shadow-2xl border border-green-200 p-12 mb-16 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100 opacity-50"></div>
            
            <div className="relative z-10 text-center">
              {/* Animated Badge */}
              <div className="inline-flex items-center gap-3 bg-green-600 text-white px-6 py-3 rounded-full mb-8 shadow-lg">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <span className="font-bold text-lg">LAUNCHING SOON</span>
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Bigger Solutions for <span className="text-green-600">Bigger Projects</span>
              </h2>
              
              <p className="text-gray-600 text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
                We're expanding our services to include full skip hire for construction, renovation, 
                and large-scale projects. Get ready for multiple sizes, flexible hire periods, and 
                the same reliable service you trust.
              </p>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
                <div className="text-left bg-green-50 rounded-2xl p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🔄 Multiple Sizes</h3>
                  <p className="text-gray-600">From mini skips for home projects to large builders skips</p>
                </div>
                <div className="text-left bg-green-50 rounded-2xl p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">📅 Flexible Hire</h3>
                  <p className="text-gray-600">Choose hire periods that suit your project timeline</p>
                </div>
                <div className="text-left bg-green-50 rounded-2xl p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚚 Fast Delivery</h3>
                  <p className="text-gray-600">Quick delivery and collection across our service areas</p>
                </div>
                <div className="text-left bg-green-50 rounded-2xl p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">💰 Competitive Rates</h3>
                  <p className="text-gray-600">Affordable pricing with no hidden costs</p>
                </div>
              </div>

              {/* Notify Me Section */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Get Notified at Launch</h3>
                <p className="text-gray-600 mb-6">Be the first to know when our skip hire service goes live!</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 flex-grow"
                  />
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform duration-300 whitespace-nowrap">
                    Notify Me 🔔
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Current Service CTA */}
          <div className="bg-green-600 rounded-3xl p-12 text-white shadow-2xl text-center">
            <h3 className="text-3xl font-bold mb-6">Need Waste Collection Now?</h3>
            <p className="text-green-100 text-xl mb-8 max-w-2xl mx-auto">
              While we prepare our skip hire service, our skip bag collection is perfect for most home, garden, and small business projects!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/"
                className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-300"
              >
                🚛 Book Skip Bag Collection
              </Link>
              <a 
                href="tel:0818888222"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors duration-300"
              >
                📞 Call 0818 888 222
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
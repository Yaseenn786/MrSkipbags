import truckImg from "../assets/back.png"; // use your Mr Skip Bags truck image

export default function CollectSkipBag() {
  return (
    <section className="relative bg-gradient-to-r from-green-800 to-emerald-700 text-white py-20 px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left side - truck image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={truckImg}
            alt="Mr Skip Bags collection"
            className="w-full max-w-md rounded-2xl shadow-2xl border border-green-400/30"
          />
        </div>

        {/* Right side - text content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-4xl font-extrabold uppercase tracking-wide">
            Collect My Skip Bag
          </h2>

          <p className="text-lg text-green-100 leading-relaxed max-w-lg">
            Done with your DIY or garden cleanup? Simply book your collection online or 
            call our friendly team. We’ll arrive promptly, collect your full bag, 
            and handle the waste responsibly — easy, fast, and eco-friendly.
          </p>

          <div className="mt-6">
            <a
              href="/Area"
              className="inline-block bg-lime-400 text-green-900 font-bold text-lg px-8 py-3 rounded-xl shadow-md hover:bg-lime-300 hover:shadow-lg transition-all duration-300"
            >
              Book Collection Now
            </a>
          </div>
        </div>
      </div>

      {/* Subtle background highlight */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-green-800/30 pointer-events-none"></div>
    </section>
  );
}

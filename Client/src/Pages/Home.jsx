import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import FocusSection from "../components/FocusSection";
import HowItWorks from "../components/HowItWorks";
import Collection from "../components/CollectionArea";
import Collect from "../components/CollectSkipBags"
import FAQ from "../components/FAQSection";
import ReviewsMap from "../components/ReviewsMap";
import TalkToUs from "../components/TalkToUs";
import truck from "../assets/back.png";

export default function Home() {
  return (
    <main className="bg-gray-50">
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img
      src={truck}
      alt="Mr Skip Bags Truck Collection"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/35"></div>
  </div>

  {/* Main Content */}
  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-6 md:px-10 mx-auto text-white">
    
    {/* Left Section */}
    <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
      
      {/* ✅ Sticker FIRST on mobile */}
      <div className="md:hidden mb-6 order-1">
        <div className="bg-white rounded-2xl shadow-2xl px-8 py-6 border-2 border-green-500 text-center text-gray-700">
          <div className="text-xl font-semibold">Collection Starts</div>
          <div className="text-lg font-medium text-gray-500">From</div>
          <div className="text-5xl font-bold text-green-600 mt-2">€89</div>
        </div>
      </div>

      {/* ✅ Text section (comes after sticker on mobile) */}
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight order-2">
        Skip the Hassle with Mr{" "}
        <span className="text-lime-400">Skip Bags</span>
      </h1>

      <div className="mt-4 order-3">
        <a
          href="/Area"
          className="bg-lime-400 text-green-900 font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-lime-300 hover:scale-105 transition-all duration-300"
        >
          Book Collection Now
        </a>
      </div>
    </div>
  </div>

  {/* ✅ Sticker on desktop (floating right) */}
  <div className="hidden md:block absolute right-[12%] top-[22%] lg:right-[15%] lg:top-[15%] z-20">
    <div className="bg-white rounded-2xl shadow-2xl px-8 py-6 border-2 border-green-500 text-center text-gray-700">
      <div className="text-xl font-semibold">Collection Starts</div>
      <div className="text-lg font-medium text-gray-500">From</div>
      <div className="text-5xl font-bold text-green-600 mt-2">€89</div>
    </div>
  </div>
</section>






      <HowItWorks />
      <Collect />
      
      
      <FAQ />
      <TalkToUs />
    </main>
  );
}
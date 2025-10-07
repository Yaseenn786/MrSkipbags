import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import FocusSection from "../components/FocusSection";
import HowItWorks from "../components/HowItWorks";
import Collection from "../components/CollectionArea";
import FAQ from "../components/FAQSection";
import ReviewsMap from "../components/ReviewsMap";
import TalkToUs from "../components/TalkToUs";
import truck from "../assets/back.png";

export default function Home() {
  return (
    <main className="bg-gray-50">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={truck} 
            alt="Mr Skip Bags Professional Collection Service"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Price Sticker */}
        <div className="absolute top-32 left-72 z-20 bg-white rounded-2xl shadow-2xl px-8 py-6 border-2 border-green-500 transform scale-125">
          <div className="text-center">
            <div className="text-lg text-gray-600 font-semibold">FROM ONLY</div>
            <div className="text-5xl font-bold text-green-600">€89</div>
            <div className="text-sm text-gray-500 font-medium">FOR COLLECTION</div>
          </div>
        </div>

        
      </section>

      <HowItWorks />
      <Collection />
      <ReviewsMap /> 
      <FAQ />
      <TalkToUs />
    </main>
  );
}
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import wastePile from "../assets/1.png";
import FocusSection from "../components/FocusSection";
import ReviewsMap from "../components/ReviewsMap";
import TalkToUs from "../components/TalkToUs";
import recycledProduct from "../assets/images.webp";

export default function Home() {
  return (
    <main className="bg-gray-50">
      <section className="relative py-24 px-6 container mx-auto flex flex-col items-center gap-16">
        
        {/* Headline */}
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
            <span className="text-green-600">From Waste to Wonder.</span> <br />
            In Just One Click.
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            We don’t just collect trash; we transform it into something valuable.  
            Drag to see the transformation 🌱
          </p>
          <a
            href="#booking"
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition animate-pulse"
          >
            Start Your Transformation
          </a>
        </div>

        {/* Interactive Before/After Slider */}
        <div className="w-full md:w-3/4 lg:w-2/3">
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src={wastePile} alt="Landfill Waste" />}
            itemTwo={<ReactCompareSliderImage src={recycledProduct} alt="Beautiful Park" />}
            handle={
              <div className="flex items-center justify-center w-10 h-10 bg-green-600 rounded-full shadow-md cursor-grab">
                🍃
              </div>
            }
          />
        </div>

        {/* Transformation Icons */}
        <div className="flex justify-center gap-6 mt-6 text-3xl">
          <span className="text-green-500">🗑️ ✓</span>
          <span className="text-green-500">🚚 ✓</span>
          <span className="text-green-500">⚙️ ✓</span>
          <span className="animate-pulse text-green-600">🌳</span>
        </div>

        {/* Final Reveal */}
        <p className="mt-6 text-center text-lg font-semibold text-green-600 animate-fadeIn">
          Recycled into new products
        </p>
      </section>

      <FocusSection />

      <ReviewsMap /> 

      <TalkToUs />
    </main>
  );
}

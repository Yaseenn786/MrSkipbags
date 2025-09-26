import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import irelandMap from "../assets/ie.svg";
import truckIcon from "../assets/truck.png";

const pins = [
  { city: "Dublin", x: 400, y: 120, review: "Michael: These guys have a very quick and easy service – brilliant" },
  { city: "Galway", x: 180, y: 200, review: "Sarah: What’s great is you can get get these skip bags into places normal skips can’t go. Anyone can use it" },
  { city: "Limerick", x: 250, y: 320, review: "John: Filled one day, collected the next with no mess left – really happy with this" },
  { city: "Waterford", x: 380, y: 350, review: "Emma: Mr skip bags couldn’t be easier to organise and you can get a LOT into those bags. Highly recommended." },
];

export default function ReviewsMap() {
  const [activePin, setActivePin] = useState(0);
  const [showReview, setShowReview] = useState(false);

  useEffect(() => {
    let timer;

    const runAnimation = () => {
      setShowReview(false); // hide review when moving

      // show review after truck arrives
      timer = setTimeout(() => {
        setShowReview(true);

        // move to next pin after 3s
        timer = setTimeout(() => {
          setActivePin((prev) => (prev + 1) % pins.length);
          runAnimation();
        }, 3000);
      }, 1500);
    };

    runAnimation();
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-brandGrey mb-8">
        Happiness Rolling Across Ireland
      </h2>

      <div className="relative max-w-[600px] mx-auto">
        {/* Map */}
        <img
          src={irelandMap}
          alt="Ireland Map"
          className="w-full rounded-xl shadow-lg"
        />

        {/* Pins */}
        {pins.map((pin, idx) => (
          <div
            key={idx}
            className={`absolute w-5 h-5 rounded-full ${
              idx === activePin ? "bg-green-500" : "bg-green-300"
            }`}
            style={{ top: pin.y, left: pin.x }}
          >
            {/* Review Card */}
            {idx === activePin && showReview && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: -20 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute left-8 bg-white shadow-xl rounded-lg p-4 w-72 border-l-4 border-green-500"
              >
                <h3 className="font-bold text-green-600">{pin.city}</h3>
                <p className="text-gray-700 italic mt-2">“{pin.review}”</p>
                <div className="flex mt-3 text-yellow-500">
                  {"⭐".repeat(5)}
                </div>
              </motion.div>
            )}
          </div>
        ))}

        {/* Truck */}
        <motion.img
          src={truckIcon}
          alt="Truck"
          className="absolute w-10"
          animate={{
            top: pins[activePin].y,
            left: pins[activePin].x - 30,
          }}
          transition={{ duration: 1.5 }}
        />
      </div>
    </section>
  );
}

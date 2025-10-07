// src/pages/SuccessScreen.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import mailSentAnimation from "../assets/mail-sent.json";

export default function SuccessScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/"), 3000); // redirect after 3 sec
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center bg-green-50 text-center">
      <Lottie animationData={mailSentAnimation} loop={false} className="w-64 h-64 mb-6" />
      <h2 className="text-3xl font-bold text-green-700 mb-2">Thank You!</h2>
      <p className="text-lg text-gray-700">
        Your enquiry has been sent successfully. We’ll be in touch soon.
      </p>
      <p className="text-sm text-gray-500 mt-2">(Redirecting to homepage...)</p>
    </section>
  );
}

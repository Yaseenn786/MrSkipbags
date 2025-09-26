/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandGreen: "#22c55e", // main green
        brandGrey: "#1f2937",  // dark grey
      },
      animation: {
        glow: "glow 2s infinite",
        fadeIn: "fadeIn 1s ease-in forwards",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 5px #22c55e, 0 0 10px #22c55e" },
          "50%": { boxShadow: "0 0 20px #22c55e, 0 0 30px #22c55e" },
          "100%": { boxShadow: "0 0 5px #22c55e, 0 0 10px #22c55e" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

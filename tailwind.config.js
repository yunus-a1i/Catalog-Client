import { mtConfig } from "@material-tailwind/react";

/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class", // ✅ enables dark mode via class toggle
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "#f4f4f4",
        border: "#e1e2e3",
        card: "#ffffff",
        mainHeading: "#242424",
        subHeading: "#101010",
        textContent: "#898989",
        secondary: "linear-gradient(rgb(247, 247, 248) 0%, rgb(234, 234, 235) 100%)",

        // ✅ Add dark theme variants
        darkBody: "#0f0f0f",
        darkCard: "#1a1a1a",
        darkBorder: "#303030",
        darkMainHeading: "#e5e5e5",
        darkSubHeading: "#a0a0a0",
        darkTextContent: "#d9d9d9",
      },
      fontFamily: {
        Cal: ["Cal Sans", "serif"],
        Manrope: ["Manrope", "serif"],
      },
      screens: {
        xl: "1640px",
      },
    },
  },
  plugins: [mtConfig],
};

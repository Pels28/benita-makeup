import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#FFFFFF",
        },
        secondary: "#FCD2C0", 
        // tertiary: "#FCD2C0"
      },
      backgroundImage: {
        homeOverlay: "url('/images/kit.jpg')",
        sectioOverlay: "url('/images/powder.jpg')",
      },
      fontFamily: {
        playfairDisplay: ["var(--font-playfair-display)"],
        cormorant: ["var(--font-cormorant)"],
        alexBrush: ["var(--font-alex-brush)"],
        montserrat: ["var(--font-montserrat)"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

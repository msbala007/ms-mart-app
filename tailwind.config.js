/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    screens: {
      sm: { min: "0px", max: "480px" },
      md: { min: "481px", max: "768px" },
      lg: { min: "769px", max: "1279px" },
      xl: "1280px",
    },
    extend: {},
    fontFamily: {
      // Andika: ["Andika", " sans - serif"],
      // Anton: ["Andika", "sans - serif"],
      Roboto: ["Roboto Condensed", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("flowbite/plugin")],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        strong_cyan: "#26c0ab",
        very_dark_cyan: "#00494d",
        grayish_cyan: "#7f9c9f",
        light_grayish_cyan: "#c5e4e7",
        very_light_grayish_cyan: "#f4fafa",
        dark_grayish_cyan: "#5e7a7d",
      },
    },
  },
  plugins: [],
};

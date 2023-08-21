/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      // backgroundImage: {
      //   "hero-image":
      //     "linear-gradient(to right bottom, rgba('#7ed56f',0.8), url('./src/assets/hero.jpg')",
      // },
      colors: {
        primary: "#00080d",
        secondary: "#1b263b",
        // accent: "#003049",
      },
    },
  },
  plugins: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
};

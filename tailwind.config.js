/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        arrow: "url(../public/images/arrow.svg)",
        star: "url(../public/images/star.svg)",
      },
    },
  },
  plugins: [],
};

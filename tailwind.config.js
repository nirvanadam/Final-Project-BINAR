/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B1120",
        secondary: "#00FFFF",
      },
      fontFamily: {
        quickSand: ["Quicksand"],
      },
    },
  },
  plugins: [],
};

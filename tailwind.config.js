/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
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
  plugins: [require("flowbite/plugin")],
};

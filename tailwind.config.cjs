/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      primary: "montserrat",
    },
    backgroundColor: {
      primary: "#1B1E23",
      secondary: "#353639",
      accents: "#2348A6",
    },
    colors: {
      primary: "#1B1E23",
      secondary: "#353639",
      accents: "#2348A6",
      white: "#fff",
    },
  },
  plugins: [],
};

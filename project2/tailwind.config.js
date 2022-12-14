/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderColor: {
        sliderBtnBorder: "0.125rem solid transparent",
      },
      screens: {
        xxsm: "216px",
        xsm: "480px",
        ssmall: "580px",
        customsmall: "540px",
        moreLarge: "1190px",
        customLarge: "1160px",
      },
      backgroundImage: {
        backToTopBtn: "linear-gradient(rgba(0,0,0,.15),rgba(0,0,0,.15))",
      },
    },
  },
  plugins: [],
};

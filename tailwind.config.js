const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    screens: {
      xs: "400px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "off-white": "#f5f5f5",
        primary: "#866961",
        secondary: "#EEE7E1",
        text: "#1f1f1f",
      },
    },
  },
  plugins: [],
};

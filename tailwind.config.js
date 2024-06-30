/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C76904",
        secondary: "#292F36",
        textColor: "#4D5053",
        brown: "#CDA274",
        link: "#4D5053",
      },
      fontFamily: {
        Jost: ["Jost", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Custom: ["DM Serif Display", "serif"],
      },
    },
  },
  plugins: [],
};

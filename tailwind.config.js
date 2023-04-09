/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        coffee: {
          100: "#F0EDEB",
          300: "#D3CAC4",
          400: "#A59A99",
          600: "#786766",
          800: "#251A1A",
        },
        milky: "#E7E1D8",
      },
      fontFamily: {
        defaultSans: [
          "Montserrat",
          "Poppins",
          "Noto Sans",
          "Open Sans",
          "sans-serif",
        ],
        cabinSans: ["Cabin", "sans-serif"],
        titleCursive: [
          "Homemade Apple",
          "WindSong",
          "Segoe",
          "Allura",
          "Alex Brush",
          "cursive",
        ],
        autographyCursive: [
          "Birthstone Bounce",
          "Mr De Haviland",
          "Alex Brush",
          "Allura",
          "cursive",
        ],
      },
    },
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1700px",
    },
  },
  plugins: [],
};

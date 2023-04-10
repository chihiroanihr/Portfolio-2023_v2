/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: "class",
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
      boxShadow: {
        "light-btn": "-1px 3px 8px -1px rgba(0, 0, 0, 0.2)",
        "dark-btn": "-1px 3px 8px -1px rgba(0, 0, 0, 0.6)",
        "cards-light":
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        "cards-dark":
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
      },
      fontFamily: {
        "default-sans": [
          "Montserrat",
          "Poppins",
          "Noto Sans",
          "Open Sans",
          "sans-serif",
        ],
        "cabin-sans": ["Cabin", "sans-serif"],
        "title-cursive": [
          "Homemade Apple",
          "WindSong",
          "Segoe",
          "Allura",
          "Alex Brush",
          "cursive",
        ],
        "autography-cursive": [
          "Birthstone Bounce",
          "Mr De Haviland",
          "Alex Brush",
          "Allura",
          "cursive",
        ],
      },
      gridTemplateColumns: {
        // fixed width size
        "fixed-4": "repeat(4, minmax(80px, 1fr))",
        "fixed-6": "repeat(6, minmax(80px, 1fr))",
        "fixed-8": "repeat(8, minmax(80px, 1fr))",
        "fixed-12": "repeat(12, minmax(80px, 1fr))",
      },
    },
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
      xxxl: "1700px",
    },
  },
  plugins: [],
};

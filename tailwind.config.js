/** @type {import('tailwindcss').Config} */

const theme = require("./tailwind.theme");
const plugin = require("./tailwind.plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: "class",
  theme: theme,
  plugins: plugin,
};

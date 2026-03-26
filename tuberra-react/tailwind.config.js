/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0a0f1e",
        steel: "#1a2540",
        blue: "#1456a8",
        accent: "#3a8dde",
        silver: "#b8c8d8",
        white: "#f0f4f8",
        gold: "#c8a84b",
        text: "#d0dce8",
      },
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

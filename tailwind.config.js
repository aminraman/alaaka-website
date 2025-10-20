/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        accent: '#FBBF24',
        gold: {
           50: "#FFF8E1",
           400: "#FACC15",
           800: "#854D0E",
        }
      }
    },
  },
  plugins: [],
}

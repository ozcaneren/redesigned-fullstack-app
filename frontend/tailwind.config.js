/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'tilt': ['Tilt Neon', 'sans-serif'],
      'space': ['Space Grotesk', 'sans-serif'],
      'chakra': ['Chakra Petch', 'sans-serif'],
    },
  },
  plugins: [],
}
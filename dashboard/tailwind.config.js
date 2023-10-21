/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        background: "#f3f6f8",
        labelText: "#3d3d4d",
        modalBackground: "#ffffff",
        modalMainText: "#65647C",
        modalLabelText: "#3d3d4d"
      },
    },
  },
}
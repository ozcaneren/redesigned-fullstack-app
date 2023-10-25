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
        background: "#EFF1F3",
        labelText: "#3d3d4d",
        modalBackground: "#ffffff",
        modalMainText: "#374151",
        modalLabelText: "#3d3d4d"
      },
    },
  },
}
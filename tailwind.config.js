/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        c2 : "#C197D2",
        c1 : "#211522",
        c3 : "#613659",
        c4 : "#D3B1C2"
      }
    },
  },
  plugins: [],
}


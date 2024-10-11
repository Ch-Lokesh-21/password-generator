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
        c2 : "#845ec2",
        c1 : "#4b4453",
        c3 : "#c34a36",
        c4 : "#b0a8b9",
        c5 : "#dff1f8"
      }
    },
  },
  plugins: [],
}


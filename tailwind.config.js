/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gradientColorStops:{
        'primary': ['#050624', '#030621', '#01061d', '#000619', '#000615', '#020512', '#04040e', '#040309', '#040206', '#040103', '#020001', '#000000'],
      },
    },
  },
  plugins: [require("daisyui")],
}


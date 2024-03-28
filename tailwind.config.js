/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("daisyui")],
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        gray1: 'rgb(33, 50, 53)',
        gray2: 'rgb(16, 27, 33)',
      },
      width: {
        '40': '40%',
        '60': '60%',
        '90': '90%'
      },
    },
  },
  plugins: [],

  
}


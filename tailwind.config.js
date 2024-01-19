/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        redMain: 'rgb(244 63 94)',
        purpleMain: 'rgb(168 85 247)',
        blueMain: 'rgb(59 130 246)'
      }
    },
  },
  plugins: [],
}


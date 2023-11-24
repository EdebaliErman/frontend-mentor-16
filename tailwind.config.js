/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'baiJamjuree': ['Bai Jamjuree', 'sans-serif']
      },
      colors: {
        'strongCyan': "hsl(171, 66%, 44%)",
        "lightBlue": "hsl(233, 100%, 69%)",
        "darkGrayishBlue": "hsl(210, 10%, 33%)",
        "GrayishBlue": "hsl(201, 11%, 66%)"
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    }
    ,
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


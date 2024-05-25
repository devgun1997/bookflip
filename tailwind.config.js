/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const customStyles = plugin(function ({addUtilities}){
  addUtilities({
    ".rotate-y-180" : {
      transform: 'rotateY(180deg)'
    },
    ".preserve-3d" : {
      transformStyle : 'preserve-3d'
    },
    ".prespective-1000" : {
      prespective : '1000px'
    },
    ".backface-hidden" : {
      backfaceVisibility:'hidden'
    }
  })
})

module.exports = {
  content: ["./src/**/*.{html,js}","./src/**/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes:{
        'border-spin' : {
          '100%': {
            transform : 'rotate(-360deg)',
          },
        },
      },
      animation : {
        'border-spin' : 'border-spin 5s linear infinite'
      },
    },
  },
  plugins: [customStyles],
}
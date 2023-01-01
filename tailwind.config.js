/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      spacing : {
        '50px' : '50px',
      },
      color : {
        secondary : 'rgb(26, 206, 176)',
        test : ` rgb(219, 154, 56)`,
      },
      screens : {
        '2xl' : `1320px`,
      },
    },
  },
  plugins: [],
}

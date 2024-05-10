/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor:{
        'primary': 'rgb(85 81 227)',
        'secondary': '#2b2d77',
      }
    },
    fontFamily : {
      'profile-font' : 'Sriracha'
    }
  },
  plugins: [],
}


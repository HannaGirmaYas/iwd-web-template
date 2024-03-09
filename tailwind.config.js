/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  
  ],
  theme: {
    extend: {
      colors : {
        'primary': '#BF8D97',
        'secondary': '#F9D1D9',
        'tertiary': '#FEFEFE',
      },
      fontFamily: {
        'cursive': ['Cedarville Cursive', 'cursive'],
        'urbanist': ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')

  ],
}


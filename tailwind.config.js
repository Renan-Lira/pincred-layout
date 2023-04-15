/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", 
  ],
  theme: {
    extend: {
      screens: {
        'xs': '500px'
      }
    },
    container: {
      
      padding: {
        DEFAULT: '3rem',
      },
    },

    colors: {
      'transparent': 'transparent',
      'gray-transparent': '#00000054',
      'white': 'white',
      'black': '#000',
      'gray': {
        100: '#F5F5F5',
        300: '#E1E1E1',
        400: '#E8E8E8',
        450: '#A2A2A2',
        500: '#D9D9D9',
        600: '#4D4D4D',
        800: '#8A8A8A',
      },
      'blue': {
        100: '#E5F5FF',
        200: '#0099FA',
        800: '#00447D'
      },

    },

    fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [
  ],
}


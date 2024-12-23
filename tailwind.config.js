/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'great-vibes': ['Great Vibes', 'sans-serif'],
      'forum': ['Forum', 'sans-serif'],
      'garet': ['Garet', 'sans-serif'],
    },
    extend: {
      screens: {
        'xs': '320px',
      },
      colors: {
        customBlack: '#000000',
        customGold: '#C89116',
      },
      backgroundImage: {
        'gradient-black-gold': 'linear-gradient(to right, #000000, #C89116)',
      }
    },
  },
  plugins: [],
}
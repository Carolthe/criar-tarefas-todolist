/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-700': '#0D0D0D',
        'gray-600': '#1A1A1A',
        'gray-400': '#333333',
        'gray-300': '#808080',
        'blue': '#1E6F9F',
        'sky': '#4EA8DE',
        'claro':'#7dd3fc',
        'purple': '#8284FA'
      }
    },
  },
  plugins: [],
}


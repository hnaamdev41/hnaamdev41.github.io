/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'gray-750': '#2d374d',
        'vs-dark': {
          DEFAULT: '#1e1e1e',
          sidebar: '#252526',
          active: '#37373d',
          hover: '#2a2d2e'
        }
      },
      spacing: {
        '128': '32rem',
      },
      minHeight: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
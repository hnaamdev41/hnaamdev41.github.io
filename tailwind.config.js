/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
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
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#9ca3af',
            a: {
              color: '#60a5fa',
              '&:hover': {
                color: '#93c5fd',
              },
            },
            h1: {
              color: '#f3f4f6',
            },
            h2: {
              color: '#f3f4f6',
            },
            h3: {
              color: '#f3f4f6',
            },
            h4: {
              color: '#f3f4f6',
            },
            code: {
              color: '#e5e7eb',
              backgroundColor: '#374151',
              padding: '0.25rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
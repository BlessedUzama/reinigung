/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#074b90',
        accent: '#3fd2c7',
        highlight: '#93dcfc',
        corporate: {
          blue: '#074b90',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

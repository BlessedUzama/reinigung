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
        primary: {
          DEFAULT: '#074b90',
          dark: '#053a6e',
          light: '#0a5ca8',
        },
        accent: {
          DEFAULT: '#3fd2c7',
          hover: '#35c9be',
          cyan: '#00a3e0',
          sky: '#0ea5e9',
        },
        highlight: {
          DEFAULT: '#93dcfc',
          light: '#e0f2fe',
        },
        brand: {
          navy: '#083a6b',
          blue: '#074b90',
          cyan: '#00a3e0',
          sky: '#38bdf8',
          teal: '#3fd2c7',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(7, 75, 144, 0.04)',
        'card': '0 4px 20px -2px rgba(7, 75, 144, 0.06)',
        'card-hover': '0 12px 32px -4px rgba(7, 75, 144, 0.12)',
        'cta': '0 4px 18px 0 rgba(63, 210, 199, 0.38)',
        'cta-hover': '0 6px 24px rgba(63, 210, 199, 0.50)',
      },
    },
  },
  plugins: [],
}

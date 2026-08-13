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
        corporate: {
          blue: '#074b90',      // Primary authority: Navbar, Footer, Headings
          dark: '#042e5b',      // Deeper navy variant
        },
        aqua: {
          vibrant: '#3fd2c7',   // Accent conversion: Primary CTAs, active states
          hover: '#2ebbb0',     // Darker aqua hover
          light: '#e6faf8',     // Very soft aqua tint background
        },
        ice: {
          blue: '#93dcfc',      // Highlight: Hover states, soft background cards, borders
          light: '#f0f9ff',     // Ice blue light bg
        }
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(7, 75, 144, 0.08)',
        'glass-hover': '0 12px 40px 0 rgba(7, 75, 144, 0.15)',
        'glow': '0 0 20px rgba(63, 210, 199, 0.4)',
      }
    },
  },
  plugins: [],
}

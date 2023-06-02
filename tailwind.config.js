/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#005b3d',
      'greenlight':'#1c9541',
      'gray-300':'#d1d5db',
      'gray-400':'#9ca3af',
      'gray-500':'#4b5563',
      'gray-600':'#374151',
      'gray-700':'#1f2937',
    },
    extend: {
      animation: {
        leftToRight: 'leftToRight 20s linear 1s infinite normal none running'
      },
      keyframes: {
        leftToRight: {
          '0%': { left: '-100%' },
          '50%': { left: '100%' },
          '100%': { left: '-100%' },
        }
      }
    },
  },
  plugins: [],
}


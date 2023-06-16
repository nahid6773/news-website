/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
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
      'warning': '#eec62a',
      'success': '#005b3d',
      'greenlight':'#1c9541',
      'gray-200':'#e5e7eb',
      'gray-300':'#d1d5db',
      'gray-400':'#9ca3af',
      'gray-500':'#4b5563',
      'gray-600':'#374151',
      'gray-700':'#1f2937',
      'yellow-600':'#ff8000'
    },
    screens: {
      'mobile-s': '320px',
      'mobile-m': '375px',
      'mobile-l': '425px',
      tablet: '768px',
      laptop: '1024px',
      'laptop-m': '1250px',
      'laptop-l': '1440px',
      '4k': '2560px',
    },
    extend: {
      animation: {
        marquee: 'marquee 40s linear infinite',
        marquee2: 'marquee2 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(-110%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(110%)' },
        },
      }
    },
  },
  plugins: [],
}


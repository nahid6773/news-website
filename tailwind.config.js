/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

// const fontSize = var(--font-size)
// const fontSize_sm = `${fontSize - 2 }px`
// const fontSize_base = `${fontSize }px`
// const fontSize_lg = `${fontSize + 2 }px`

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
      // ...custom_colors,
      transparent: 'transparent',
      current: 'currentColor',
      // 'primary': '#385e9d',
      "primary" : "var(--color-primary)",
      "secondary" : "var(--color-secondary)",
      'warning': '#eec62a',
      'success': '#005b3d',
      'greenlight':'#1c9541',
      'gray-200':'#e5e7eb',
      'gray-300':'#d1d5db',
      'gray-400':'#9ca3af',
      'gray-500':'#4b5563',
      'gray-600':'#374151',
      'gray-700':'#1f2937',
      'yellow-600':'#ff8000',
      'sky-400':'#38bdf8'
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
    fontSize: {
      xxs: ['0.675rem', { lineHeight: '.875rem' }],
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: "var(--font-size)-2px",
      base: "var(--font-size)-2px",
      lg: "var(--font-size)-2px",
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }], 
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


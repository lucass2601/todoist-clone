/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1440px',
    },
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#de4c4a',
          'dark': '#472525'
        },
        'secondary': {
          DEFAULT: '#1e1e1e',
          'hover': '#322f2a',
          'light': '#3d3d3d',
        }
      },
    },
  },
  plugins: [],
}
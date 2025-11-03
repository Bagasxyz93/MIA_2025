// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // UBAH BAGIAN FONTFAMILY INI
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'montagu': ['Montagu Slab', 'serif'],
        'garamond': ['EB Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}
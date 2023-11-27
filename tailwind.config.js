/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        Bebas: ['Anton', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
      },
      colors:{
        'background': '#FDF7E4',
        'primary': '#000000',
        'secondary': '#FFFFFF',
        'yellow': '#F0DE36', 
      }
    },
  },
  plugins: [],
}


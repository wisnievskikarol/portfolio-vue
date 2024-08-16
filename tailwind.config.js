/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkGray: '#505050',
        veryDarkGray: '#101010',
        gray: '#ADADAD',
        lightGray: '#ebebeb',
        primary: '#FFB22C'
      }
    },
    fontFamily: {
      sans: ['Manrope']
    }
  },
  plugins: []
}

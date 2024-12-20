/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js}',
  ],
  theme: {
    extend: {
      fontFamily:{
        arial:['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

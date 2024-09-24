/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      pop: ["Poppins", "sans-serif"]
    },
    extend: {
      colors: {
        'primary': '#57C8D0',
        'secondary': '#4daab0',
        'dark': '#35898f'
      },
    },
  },
  plugins: [],
}


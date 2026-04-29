/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        'italian-red': '#CE2B37',
        'italian-green': '#009246',
        'italian-white': '#F8F8F8',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kunj-java': '#1CB6BF',
        'kunj-eb': '#178C93',
        'kunj-dark': '#0E2A2C',
        'kunj-light': '#E9FBFD',
        'kunj-ring': '#E6F5F6',
      }
    },
  },
  plugins: [],
}

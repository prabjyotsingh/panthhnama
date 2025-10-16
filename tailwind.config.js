/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'punjabi': ['Noto Sans Gurmukhi', 'sans-serif'],
      },
      colors: {
        'virsa-red': '#dc2626',
        'virsa-orange': '#ea580c',
        'virsa-blue': '#1e40af',
        'virsa-gray': '#6b7280',
        'virsa-dark': '#1f2937',
      }
    },
  },
  plugins: [],
}


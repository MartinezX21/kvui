/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        "primary": "#228b22",
        "success": "#2e7d32",
        "info": "#0288d1",
        "warning": "#ed6c02",
        "error": "#d32f2f"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


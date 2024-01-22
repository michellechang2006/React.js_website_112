/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#EE6C1B",
        "primary-container": "#fad0b7",
        "secondary": "#E4644E",
        "secondary-container": "#fcd4d5",
        "tertiary": "#221914",
        "error": "#EE3B2B",
        "warning": "#F7C655",
        "success": "#52E052",
        "overlay": "rgba(18, 22, 25, .7)"
      },
      fontFamily: {
        'Kalam': ['Kalam', "cursive"],
        "Noto-Sans-TC": ['Noto Sans TC', "sans-serif"],
      }
    },
  },
  plugins: [],
}


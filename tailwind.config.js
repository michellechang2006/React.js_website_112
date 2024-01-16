/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#F6B388",
        "primary-container": "#fad0b7",
        "secondary": "#E7725C",
        "secondary-container": "#fcd4d5",
        "tertiary": "#221914",
        "error": "#EE3B2B",
        "warning": "#F7C655",
        "success": "#52E052",
        "overlay": "#121619"
      },
      fontFamily: {
        "Roboto": ['Roboto', "sans-serif"],
        "Instrument": ['Instrument Serif', "serif"],
        "Noto-Sans-TC": ['Noto Sans TC', "sans-serif"]
      }
    },
  },
  plugins: [],
}


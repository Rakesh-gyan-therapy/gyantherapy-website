/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        'massive': '0 10px 100px rgba(0, 0, 0, 0.4)',
      },
      colors: {
        primary: {
          orange: "#FF5F49",
          grey: "#F2F9FF"
        },
        text: {
          heading: "#0D2159",
          grey: "#6D84A6",
        },
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        sans: ['Satoshi', 'sans-serif']
      },
      boxShadow: {
        postcard: '0px 10.67px 26.67px 0px #0D21591F',
      },
    },
  },
  darkMode: ['class'],
  plugins: [],
};

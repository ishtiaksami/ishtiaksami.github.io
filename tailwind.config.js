/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        Satoshi: ["Satoshi", "sans-serif"],
        Urbanist: ["Urbanist",' sans-serif'],
      },
      spacing: {
        30: "1.875rem",
      }
    },
  },
  plugins: [],
}
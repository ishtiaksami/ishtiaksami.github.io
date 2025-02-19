/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      animation: {
        moveCursor1: "moveCursor1 0.5s infinite alternate",
        moveCursor2: "moveCursor2 0.5s forwards",
      },
      keyframes: {
        moveCursor1: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.2)" },
        },
        moveCursor2: {
          "100%": { transform: "scale(2)" },
        },
      },
      backgroundImage: {
        custom1:
          "linear-gradient(104deg, rgba(34, 34, 34, 0.00) 55.8%, rgba(34, 34, 34, 0.50) 95.23%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lato: ["Lato", "serif"],
        playwrite: ["Playwrite VN", "serif"],
      },
      fontSize: {
        28: "1.75rem",
        38: "2.375rem",
        58: "3.625rem",
      },
      colors: {
        maisonRouge: "#B0362F",
        armstrongGold: "#B29559",
        antiqueWhite: "#F6EFE7",
        centuryGold: "#ECDBB1",
      },
      spacing: {
        30: "1.875rem",
      },
    },
  },
  plugins: [],
};

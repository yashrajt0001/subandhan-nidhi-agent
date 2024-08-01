/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bluePrimary: "#0166E4",
        blueSecondary: "#B0D0F7",
        blueLight: "#e6f0fc",
        blackPrimary: "#3C3A36",
        redPrimary: "#AA0542",
        redSecondary: "#AA0542B2",
        skyBlue: "#E6F0FC",
        lightSkyBlue: "#84cde948",
      },
    },
  },
  plugins: [],
};

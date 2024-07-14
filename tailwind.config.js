/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bluePrimary: '#0166E4',
        blueSecondary: '#B0D0F7',
        blackPrimary: '#3C3A36',
        redPrimary: '#A90542',
        redSecondary: '#AA0542'
      }
    },
  },
  plugins: [],
};

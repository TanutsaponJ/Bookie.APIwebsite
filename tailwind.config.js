/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "#171111",
        backgroundColor: "#DDDADA",
        primaryColor: "#9A7877",
        secondaryColor: "#D3B89F",
        accentColor: "#C7A983",
      },
      fontFamily: {
        bodoni: ["Bodoni Moda", "serif"],
      },
    },
  },
  plugins: [],
};

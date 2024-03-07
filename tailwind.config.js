/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Agrega tus colores personalizados aquí
        primary: "#3498db",
        orange: "#FFA500",
        orangeFont: "#262626",
        navFont: "#E6E6E6",
        violet: "#22132D",
        grey: " #98989A",
        violetDark: "#26133D",
        borderColor: "#262626",
        bgColor: "#1A1A1A",
        violetLigth: "#C5B2E5",
        cardsP: "#DCDDE1",
        button: "#322F38",
        bgTable: "#1A1A1A",
        bgTableDark: "#121212",
      },
      fontFamily: {
        // Agrega tus fuentes personalizadas aquí
        custom: ["CustomFont", "sans-serif"],
        barlow: "Barlow",
      },
    },
  },
  plugins: [],
};

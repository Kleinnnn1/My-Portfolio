/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customDark: "#222222", // Add custom color here
        customBlack: "#151515",
        customWhite: "#e8e9e4",
        customOrange: "#f65d14",
      },
    },
  },
  plugins: [],
};

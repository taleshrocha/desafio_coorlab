/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#28D5D3",     // Cyan
        secondary: "#45E1C4",   // Teal
        accent: "#6FEBAF",      // Lime
        success: "#9BF297",     // Light Green
        warning: "#C9F781",     // Lime Green
        highlight: "#F9F871",   // Yellow
        background: "#E6F4F1",
      },
    },
  },
  plugins: [],
};
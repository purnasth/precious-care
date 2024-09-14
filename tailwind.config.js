/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D4AF37", 
        secondary: "#C0C0C0", 
      },
      fontFamily: {
        body: ["Titillium Web", "sans-serif"], 
        luxury: ['Glamora', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

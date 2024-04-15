/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jersey: '"Jersey 20", sans-serif',
        noto: '"Noto Sans", sans-serif',
      }
    },
  },
  plugins: [require("daisyui")],
}
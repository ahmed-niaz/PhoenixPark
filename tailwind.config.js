/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jersey: '"Jersey 20", sans-serif',
        noto: '"Noto Sans", sans-serif',
      },
    },
    theme: {
      animatedSettings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 500,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 500,
        classes: ["bounce", "heartBeat","backInDown"],
      },
    },
  },
  plugins: [require("daisyui", "tailwindcss-animatecss")],
};

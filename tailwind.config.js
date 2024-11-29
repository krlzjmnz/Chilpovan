/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#9A99EA",
        black: "#060606",
        gray: "#363636",
        grayLight: "#EAE9E9",
      },
    },
  },
  plugins: [],
};

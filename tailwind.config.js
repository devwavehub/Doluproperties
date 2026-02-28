/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#ccaa24 ",
        secondary: "#e6b80062",
        dark: "#292D2D",
        grayText: "#586468",
        lightGray: "#A5ADAC",
        bgLight: "#fffacf",
      },
    },
  },
  plugins: [],
};

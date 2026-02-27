/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#F4C400 ",
        secondary: "#E6B800",
        dark: "#292D2D",
        grayText: "#586468",
        lightGray: "#A5ADAC",
        bgLight: "#F7F8F9",
      },
    },
  },
  plugins: [],
};

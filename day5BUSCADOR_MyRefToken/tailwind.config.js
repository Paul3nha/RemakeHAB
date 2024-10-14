/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fira: ["Fira Sans Condensed", "sans-serif"], // Define la fuente
      },
    },
  },
  plugins: [],
};

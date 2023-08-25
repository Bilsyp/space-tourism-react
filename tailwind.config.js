/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "752px",
        desktop: "1024px",
      },
      colors: {
        grays: "#c1c5dd",
      },
    },
  },
  plugins: [],
};

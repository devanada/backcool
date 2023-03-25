/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: "#111111",
        secondary: "#f5f5f5",
        accent: "#484848",
      },
      minHeight: {
        navbar: "4rem",
        footer: "8rem",
      },
    },
  },
  plugins: [],
};

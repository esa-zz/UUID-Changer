/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#111111",
        background: "#ffffff",
        primary: "#c71024",
        secondary: "#e9a3a2",
        accent: "#ff3d3d",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
};

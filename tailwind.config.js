/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0d0f1a",
        foreground: "#f4f4f5",
        primary: "#ffcc00",
        "primary-hover": "#e6b800",
        secondary: "#1b1d2a",
        "secondary-hover": "#2a2d3f",
        accent: "#e63946",
        border: "rgba(255, 255, 255, 0.1)",
        "input-bg": "#232533",
        "input-border": "rgba(255, 255, 255, 0.2)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        h1: {
          fontSize: "1.875rem",
          fontWeight: "800",
          color: "#ffcc00",
          letterSpacing: "0.05em",
        },
        p: {
          fontSize: "1.125rem",
          color: "#f4f4f5",
          opacity: "0.9",
        },
      });
    },
  ],
};

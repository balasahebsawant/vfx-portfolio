/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      extend: {
        extend: {
          colors: {
            base: "#ffffff",
            text: "#0a0a0a",
            muted: "#555555",
            accent: "#FFD700",
            accentDark: "#e6c200",
            surface: "#f5f5f5",
            border: "#e5e5e5",
          },
        },

      },
      fontFamily: {
        'display': ['Orbitron', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
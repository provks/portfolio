/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#a1a1aa",
        dark: "#09090b",
        card: "#18181b",
      },
    },
  },
  plugins: [],
}
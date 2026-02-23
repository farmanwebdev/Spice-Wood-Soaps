/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'DM Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: '#8B5A2B',      // earthy brown
        secondary: '#D4B48C',    // light tan
        background: '#FAF7F2',   // off-white
        foreground: '#2C1810',   // dark brown
        muted: '#6B4F3F',
        border: '#E2D6CC',
        card: '#FFFFFF',
      },
    },
  },
  plugins: [],
}
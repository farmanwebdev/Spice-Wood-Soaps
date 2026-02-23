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
        background: '#FAF7F2',
        foreground: '#2C1810',
        primary: '#8B5A2B',
        'primary-foreground': '#FFFFFF',
        secondary: '#D4B48C',
        'secondary-foreground': '#2C1810',
        muted: '#6B4F3F',
        border: '#E2D6CC',
        card: '#FFFFFF',
      },
    },
  },
  plugins: [],
}
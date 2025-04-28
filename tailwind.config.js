/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'deep-blue': '#003366',
        'earth-brown': '#6B4226',
        'forest-green': '#228B22',
        'sky-blue': '#87CEEB',
        'soft-white': '#f5f5f5',
      },
    },
  },
  plugins: [],
};
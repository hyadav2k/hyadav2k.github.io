/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        ink: 'var(--ink)',
        green: 'var(--green)',
        rust: 'var(--rust)',
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
        serif: ['IBM Plex Serif', 'serif'],
      },
    },
  },
  plugins: [],
};

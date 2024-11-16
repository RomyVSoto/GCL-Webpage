/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'sm-md': '700px',
        'md-lg': '900px',
      },
    },
  },
  plugins: [],
};

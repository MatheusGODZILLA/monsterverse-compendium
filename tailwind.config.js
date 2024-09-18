/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        zoomOutBackground: {
          'to': { transform: 'scale(1)' },
        },
        fadeIn: {
          'to': { opacity: '1' },
        },
        smokeEffect: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        zoomOutBackground: 'zoomOutBackground 3s ease-in-out forwards',
        fadeIn: 'fadeIn 5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1s infinite',
      },
      boxShadow: {
        custom: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', // Add custom shadow
      },
    },
  },
  plugins: [],
}

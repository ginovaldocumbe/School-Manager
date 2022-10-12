/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        teste: {
          '0%': { height: '0%' },
          '50%': { height: '150px' },
          '100%': { height: '300px' },
        }
      }
    },
    animation: {
      'testes': 'teste 1s linear 0s',
    },
  },
  plugins: [],
}

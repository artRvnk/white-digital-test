/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '24px': '24px',
        '16px': '16px',
        '14px': '14px',
        '12px': '12px',
      },
      fontFamily: {
        abel: ['abel', 'sans-serif'],
        sf_pro: ['sf_pro', 'sans-serif'],
      },
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        grey: '#979797',
        gray: '#9D9D9D',
        yellow: '#FED138',
      },
    },
  },
}

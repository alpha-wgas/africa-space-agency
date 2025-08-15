/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend:{
        fontFamily:{
          satoshi: ['Satoshi', 'sans-serif'],
          'pt-serif': ['PT Serif', 'serif']
        },
        colors:{
          gray:{
            50: '#F2F2F2',
            100: '#1C1C1C'
          },
          wine:{
            100: '#951F39',
            200:'#681628'
          }
        },
        animation: {
          marquee: 'marquee 30s linear infinite',
        },
        keyframes: {
          marquee: {
            '0%': { transform: 'translate3d(100%, 0, 0)' },
            '100%': { transform: 'translate3d(-100%, 0, 0)' },
          },
        }
      }

  },
  plugins: [],
}
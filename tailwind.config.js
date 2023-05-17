/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        'nav': '122px',
      },
      backgroundColor: {
        'landing': '#ffffff',
      },
      fontFamily: {
        'unbound-bold': "Unbounded-bold"
      },
      backgroundImage: {
        'background-color': 'white'
      },
    },
  },
  plugins: [],
}

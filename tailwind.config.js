/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/pages/**/*.{html,js,jsx,ts,tsx}',
    'src/components/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'tablet': '1200px',
      'xl': '1400px',
      '2xl': '1476px',
    },
    colors: {
      'black': '#000000',
      'white': '#FFFFFF',
      'button': '#4776E6',
      'blue': '#4776E6',
      'pink': '#8E54E9',
      'lightPurple': '#E1A6FF',
      'darkPurple':'#7A3199',
      'transparent': 'transparent'
    },
    fontFamily: {
      inter: ['inter', 'sans-serif'],
      poppins: ['poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'dots': "url('/src/assets/images/dots.png')",
        'hero': "url('/src/assets/images/hero.svg')",
        'footer': "url('/src/assets/images/footer-background.svg')",
      }
    },
  },
  plugins: [],
}




/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        bs: '0px 0px 5px rgba(0,0, 0,0.2);',
        bs2: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at 3% 25%)',
      },

      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
      },
      colors: {
        primary: {
          solid: 'var(--tw-color-primary-solid)',
          light: 'var(--tw-color-primary-light)',
          dark: 'var(--tw-color-primary-dark)',
        },
        dark: '#222222',
        orange: '#FF4820',
        family: 'Manrope, sans-serif',

        gradient_text:
          'linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)',
        gradient_bar:
          'linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)',

        background:
          'radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%)',

        color_bg: '#040C18',
        color_footer: '#031B34',
        color_blog: '#042c54',
        color_text: '#81AFDD',
        color_subtext: '#FF8A71',

        g1: 'rgba(0, 40, 83, 1) 0%',
        g2: 'rgba(4, 12, 24, 1) 25%',
        g3: '#AE67FA 1.84%',
        g4: '#F49867 102.67%',
        g5: '#AE67FA -13.86%',
        g6: '#F49867 99.55%',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

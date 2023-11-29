/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#09C1CB',
        primaryDark: '#007F86',
        primaryLight: '#26ABA2',
        primaryLighter: '#B3E9EC',
        primaryLightest: '#E6F8F9',
        secondary: '#F6A8C0',
        secondaryDark: '#F66490',
        error: '#EE754E',
        errorDark: '#EF5B3B',
        success: '#34CD8D',
        successDark: '#22AD73',
        curaWhite: '#F8FFFE',
        curaGray: '#849A99',
        curaBlack: '#263130',
      },
      fontSize: {
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '22px',
        '2xl': '24px',
        '3xl': '26px',
        '4xl': '28px',
        '5xl': '32px',
        '6xl': '60px',
        black: '82px',
      },
      fontFamily: {
        sans: ['SatoshiMedium', 'Arial', 'sans-serif'],

        SatoshiMedium: 'SatoshiMedium',
        SatoshiBold: 'SatoshiBold',
        SatoshiBlack: 'SatoshiBlack',
      },
      animation: {
        bounce: 'bounce 4s infinite',
        // bounce only once

        bounceOnce: 'bounce 1s 1',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

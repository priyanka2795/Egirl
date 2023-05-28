/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: ['src/pages/**/*.tsx', 'src/components/**/*.tsx'],
  theme: {
    screens: {
      xs: '300px', // Mobile (iPhone 3 - iPhone XS Max).
      userCardsXS: '390px', // 390 pixels for card sizing
      sm: '576px', // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
      md: '898px', // Tablet (matches max: iPad Pro @ 1112px).
      lg: '1200px', // Desktop smallest.
      xl: '1259px', // Desktop wide.
      '2xl': '1359px', // Desktop widescreen.
      '3xl': '1582px',
      ...defaultTheme.screens
    },
    extend: {
      screens: {
        xs: '279px' // Mobile (iPhone 3 - iPhone XS Max).
      },
      boxShadow: {
        'subscribe-card-shadow': '0px 44px 50px rgba(112, 109, 129, 0.05)'
      },
      fontFamily: {
        'twitter-chirp': ['TwitterChirp', 'sans-serif'],
        'twitter-chirp-extended': ['TwitterChirpExtendedHeavy', 'sans-serif']
      },
      // prettier-ignore
      colors: {
        'main-purple': '#6E00FF',
        'main-gray': '#E7E9EA',
        'main-gray-text': '#71767B',
        'main-background': '#070707',
        'main-bar': "#121212",
        'main-primary': 'rgb(var(--main-primary) / <alpha-value>)',
        'main-secondary': 'rgb(var(--main-secondary) / <alpha-value>)',
        // 'main-background': 'rgb(var(--main-background) / <alpha-value>)',
        'main-search-background': 'rgb(var(--main-search-background) / <alpha-value>)',
        'main-sidebar-background': 'rgb(var(--main-sidebar-background) / <alpha-value>)',
        'main-accent': 'rgb(var(--main-accent) / <alpha-value>)',
        'accent-yellow': 'rgb(var(--accent-yellow) / <alpha-value>)',
        'accent-blue': 'rgb(var(--accent-blue) / <alpha-value>)',
        'accent-pink': 'rgb(var(--accent-pink) / <alpha-value>)',
        'accent-purple': 'rgb(var(--accent-purple) / <alpha-value>)',
        'accent-orange': 'rgb(var(--accent-orange) / <alpha-value>)',
        'accent-green': 'rgb(var(--accent-green) / <alpha-value>)',
        'accent-red': '#F4212E',
        'dark-primary': '#E7E9EA',
        'dark-secondary': '#71767B',
        'light-primary': '#0F1419',
        'light-secondary': '#536471',
        'dark-border': '#2F3336',
        'light-border': '#EFF3F4',
        'dark-line-reply': '#333639',
        'light-line-reply': '#CFD9DE',
        'twitter-icon': '#D6D9DB',
        'image-preview-hover': '#272C30',
        'main-red': '#E75858'


      }
    }
  },
  plugins: [
    ({ addVariant }) => {
      addVariant('inner', '& > *');
    },
    require('@tailwindcss/forms')
  ]
};

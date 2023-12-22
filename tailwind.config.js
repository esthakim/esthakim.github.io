/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    'src/**/*.html',
    'src/**/*.jsx',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#001220',
        'secondary':'#0C2637',
        'highlight': '#20516A',
        'darkcyan' : '#296884',
        'transp' : '#3859b52f',
        'bgcolor': '#F3F3F3',
      },
      backgroundImage: {
        'waveHaikei': 'url(src/assets/wave-haikei.svg)',
        'blobHaikei': 'url(src/assets/blob-haikei.svg)'
      },
      fontFamily: {
        'manjari': ['Manjari', 'sans-serif'],
        'bebas': ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  darkMode: 'media',
  plugins: [
    require('preline/plugin'),
  ],
}


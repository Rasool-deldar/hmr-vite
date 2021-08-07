module.exports = {
  mode: 'jit',
  // prefix: 'tw-',
  // important: true,
  // separator: '-',
  purge: {
    content: ['./resources/**/*.{js,ts,blade.php,vue}'],
    options: {
      keyframes: true,
    },
  },
  darkMode: 'media', // or 'media' or 'class'
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  theme: {
    fontFamily: {
      IRANSans: ['IRANSans', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      textOpacity: ['dark'],
    },
  },
  daisyui: {
    rtl: true,
    themes: [
      'emerald', // first one will be the default theme
      'dark',
      'forest',
    ],
  },
};

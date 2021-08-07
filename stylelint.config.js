module.exports = {
  extends: [
    'stylelint-config-standard',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'max-empty-lines': 2,
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        'font-face',
        'function', 'if', 'else', 'for', 'each', 'while', 'include', 'mixin',
        'tailwind', 'apply', 'variants', 'responsive', 'screen', 'layer',
      ],
    }],
  },
  ignoreFiles: [
    './resources/assets/css/all.min.css',
    './resources/assets/css/fontiran.css',
    './node_modules/*',
    './.nuxt',
    './public/build',
  ],
};

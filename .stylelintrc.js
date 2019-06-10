module.exports = {
  extends: 'stylelint-config-standard',
  plugins: ['stylelint-scss'],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "no-descending-specificity": null,
    'property-no-unknown': [
      true,
      {
        ignoreProperties: [
          'composes',
          'lost-align',
          'lost-center',
          'lost-column',
          'lost-column-cycle',
          'lost-column-rounder',
          'lost-flex-container',
          'lost-masonry-column',
          'lost-masonry-wrap',
          'lost-move',
          'lost-offset',
          'lost-row',
          'lost-unit',
          'lost-utility',
          'lost-waffle'
        ]
      }
    ],
    'comment-whitespace-inside': null,
    indentation: null
  }
}

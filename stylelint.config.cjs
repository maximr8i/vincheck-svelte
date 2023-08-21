module.exports = {
  extends: [
    'stylelint-config-property-sort-order-smacss',
    'stylelint-config-standard-scss',
    'stylelint-config-html/svelte'
  ],
  rules: {
    'color-named': 'never',
    'color-no-hex': true,
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global'] }]
  }
}

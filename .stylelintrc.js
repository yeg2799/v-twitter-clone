module.exports = {
  extends: [
    // https://github.com/stylelint/stylelint-config-standard
    'stylelint-config-standard',
    //https://github.com/constverum/stylelint-config-rational-order
    'stylelint-config-rational-order',
    // https://github.com/shannonmoeller/stylelint-config-prettier
    'stylelint-config-prettier',
  ],
  plugins: [
    // https://github.com/kristerkari/stylelint-scss#list-of-rules
    'stylelint-scss',
    // https://github.com/hudochenkov/stylelint-order
    'stylelint-order',
    'stylelint-config-rational-order/plugin',
  ],
  rules: {
    indentation: [
      2,
      {
        baseIndentLevel: 0,
      },
    ],
    'color-named': 'never',
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'function',
          'warn',
          'each',
          'for',
          'if',
          'else',
          'return',
          'layer',
          'include',
          'mixin',
        ],
      },
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
    'no-invalid-double-slash-comments': true,
    'block-no-empty': null,
    'no-empty-source': null,
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless'],
        ignore: ['after-comment', 'first-nested'],
        severity: 'warning',
      },
    ],
    'custom-property-empty-line-before': [
      'always',
      {
        except: ['after-custom-property'],
        ignore: ['after-comment', 'first-nested', 'inside-single-line-block'],
        severity: 'warning',
      },
    ],
    'declaration-empty-line-before': [
      'always',
      {
        except: ['after-declaration'],
        ignore: ['after-comment', 'first-nested', 'inside-single-line-block'],
        severity: 'warning',
      },
    ],
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested'],
        severity: 'warning',
      },
    ],
  },
};

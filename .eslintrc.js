module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module',
    ecmaVersion: 2020,
    requireConfigFile: false,
  },
  extends: ['plugin:vue/strongly-recommended', 'eslint-config-prettier', 'prettier', 'prettier/vue'],
  plugins: ['prettier'],
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'max-len': [
      'error',
      {
        code: 300,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-multiple-empty-lines': [2, { max: 2 }],
    semi: ['error', 'always'],
    'arrow-parens': ['error', 'as-needed'],
    // 'vue/component-name-in-template-casing': 'off',
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    // 'vue/name-property-casing': 'off',
    camelcase: 'off',
    'no-extend-native': 'off',
    'space-before-function-paren': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'if' },
      { blankLine: 'always', prev: '*', next: 'switch' },
      { blankLine: 'always', prev: '*', next: 'for' },
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'never', prev: 'import', next: 'import' },
      { blankLine: 'always', prev: 'import', next: 'export' },
      { blankLine: 'always', prev: 'expression', next: 'export' },
      { blankLine: 'always', prev: 'import', next: 'expression' },
    ],
  },
};

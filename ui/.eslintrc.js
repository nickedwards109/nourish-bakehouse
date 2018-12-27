const ignore = rules => withSeverity(rules, 0)
const warn   = rules => withSeverity(rules, 1)
const error  = rules => withSeverity(rules, 2)

const withSeverity = (rules, severity) => (
  rules.reduce((obj, entry) => {
    if (typeof entry === 'string') {
      obj[entry] = severity
    } else {
      const rule = entry[0]
      const options = entry.slice(1)
      obj[rule] = [ severity, ...options ]
    }
    return obj
  }, {})
)

module.exports = {
  globals: {
    "document": true
  },
  env: {
    "mocha": true
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:react/recommended',
  ],
  parser: 'babel-eslint',
  plugins: [
    'react'
  ],
  rules: {
    ...ignore([
      'class-methods-use-this',
      'comma-dangle',
      'default-case',
      'func-names',
      'function-paren-newline',
      'implicit-arrow-linebreak',
      'import/extensions',
      'import/no-dynamic-require',
      'import/no-extraneous-dependencies',
      'import/no-unresolved',
      'import/prefer-default-export',
      'jsx-quotes',
      'jsx-a11y/anchor-is-valid',
      'lines-between-class-members',
      'no-confusing-arrow',
      'no-console',
      'no-underscore-dangle',
      'object-curly-newline',
      'operator-linebreak',
      'prefer-arrow-callback',
      'prefer-promise-reject-errors',
      'react/boolean-prop-naming',
      'react/destructuring-assignment',
      'react/forbid-prop-types',
      'react/no-children-prop',
      'react/prefer-stateless-function',
      'react/require-default-props',
      'react/sort-comp',
      'valid-jsdoc'
    ]),
    ...warn([
      ['complexity', { max: 20 }], // cyclomatic complexity
      ['max-lines', { max: 1000 }],
      ['max-params', { max: 10 }],
      ['max-nested-callbacks', { max: 5 }],
    ]),
    ...error([
      ['array-bracket-spacing', 'always'],
      'array-callback-return',
      'arrow-spacing',
      ['arrow-parens', 'as-needed'],
      'block-spacing',
      'brace-style',
      'comma-style',
      'computed-property-spacing',
      'dot-location',
      'eol-last',
      'func-call-spacing',
      'func-name-matching',
      'no-catch-shadow',
      'no-duplicate-imports',
      'no-implicit-globals',
      'no-mixed-requires',
      ['no-param-reassign', { props: false }],
      'no-script-url',
      'no-trailing-spaces',
      'no-useless-rename',
      ['no-use-before-define', { functions: false }],
      'no-whitespace-before-property',
      ['object-curly-spacing', 'always'],
      'react/default-props-match-prop-types',
      'react/no-typos',
      'react/no-unused-prop-types',
      'react/no-unused-state',
      'react/prefer-es6-class',
      'react/style-prop-object',
      'react/jsx-closing-bracket-location',
      'react/jsx-closing-tag-location',
      ['react/jsx-filename-extension', { extensions: ['.js', '.jsx'] }],
      ['react/jsx-first-prop-new-line', 'multiline'],
      ['react/jsx-indent', 2],
      ['react/jsx-indent-props', 2],
      'react/jsx-one-expression-per-line',
      'react/jsx-tag-spacing',
      ['react/jsx-wrap-multilines', {
          declaration: 'parens-new-line',
          assignment: 'parens-new-line',
          return: 'parens-new-line',
          arrow: 'parens-new-line',
          condition: 'parens-new-line',
          logical: 'parens-new-line',
          prop: 'parens-new-line',
      }],
      'rest-spread-spacing',
      ['semi', 'never'],
      ['space-before-function-paren', 'never'],
      'wrap-iife',
    ]),
  }
};

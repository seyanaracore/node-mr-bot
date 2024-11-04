// @ts-check
const { getConfig } = require('stylelint-config-clean-order/src/config');

const cleanOrderRules = getConfig({ severity: 'error' }).rules;

// удаляем очередь для @include
// @ts-ignore
cleanOrderRules['order/order'][0].splice(10, 1)

/** @type {import('stylelint').Config} */
const config = {
  extends: [
    'stylelint-config-clean-order',
    'stylelint-config-standard-scss',
    'stylelint-config-html',
    'stylelint-config-recommended-vue',
  ],
  plugins: ['stylelint-scss', 'stylelint-order'],
  overrides: [
    {
      files: ['*.css', '**/*.css'],
    },
    {
      files: ['*.scss', '**/*.scss'],
    },
    {
      files: ['*.sass', '**/*.sass'],
    },
    {
      files: ['*.less', '**/*.less'],
    },
    {
      files: ['*.vue', '**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    ...cleanOrderRules,
    'scss/dollar-variable-pattern': [
      '^[a-z]$|^([a-z])([a-zA-Z0-9])+$',
      {
        message: 'Expected variable to be camel-case',
      },
    ],
    'at-rule-no-unknown': null,
    'function-no-unknown': null,
    'no-empty-source': null,
    'selector-class-pattern': null,
    'keyframes-name-pattern': null,
    'scss/no-global-function-names': null,
    'value-keyword-case': [
      'lower',
      {
        ignoreFunctions: ['colors', 'v-bind'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['export', 'deep'],
      },
    ],
  },
};

module.exports = config;

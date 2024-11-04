// @ts-check

const { OFF, ERROR, WARN } = require('./rulesValues.cjs');

/** @typedef {import('./types').GetEslintConfig} GetEslintConfig */
/** @typedef {import('./types').EslintConfig} EslintConfig */

/** @type {GetEslintConfig} */
const getEslintConfig = ({ tsConfig }) => {
  /** @type {EslintConfig} */
  const config = {
    env: {
      es2024: true,
    },
    extends: [
      'airbnb-base',
      'airbnb-typescript/base',
      'plugin:sonarjs/recommended-legacy',
      'plugin:promise/recommended',
      'plugin:import/errors',
      'plugin:import/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/stylistic-type-checked',
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: '@typescript-eslint/parser',
      project: tsConfig,
    },
    plugins: ['import', 'sonarjs', 'promise', '@typescript-eslint'],
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: tsConfig,
        },
      },
    },
    rules: {
      'max-len': [ERROR, 120],
      '@typescript-eslint/consistent-type-definitions': [ERROR, 'type'],
      '@typescript-eslint/semi': [ERROR, 'never'],
      'arrow-body-style': OFF,
      'import/prefer-default-export': OFF,
      'no-console': [WARN, { allow: [ERROR] }],
      '@typescript-eslint/consistent-type-imports': ERROR,
      'import/order': [
        ERROR,
        {
          groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'internal', 'object', 'unknown', 'type'],
        },
      ],
      'padding-line-between-statements': [
        ERROR,
        {
          blankLine: 'always',
          prev: 'import',
          next: '*',
        },
        {
          blankLine: 'any',
          prev: 'import',
          next: 'import',
        },
        {
          blankLine: 'always',
          prev: '*',
          next: 'block-like',
        },
        {
          blankLine: 'always',
          prev: 'block-like',
          next: '*',
        },
        {
          blankLine: 'always',
          prev: '*',
          next: ['const', 'let'],
        },
        {
          blankLine: 'always',
          prev: ['const', 'let'],
          next: '*',
        },
        {
          blankLine: 'never',
          prev: ['singleline-const', 'singleline-let'],
          next: ['singleline-const', 'singleline-let'],
        },
        {
          blankLine: 'always',
          prev: ['multiline-const', 'multiline-let'],
          next: ['multiline-const', 'multiline-let'],
        },
        {
          blankLine: 'always',
          prev: ['cjs-import'],
          next: '*',
        },
        {
          blankLine: 'any',
          prev: ['cjs-import'],
          next: ['cjs-import'],
        },
      ],
    },
    overrides: [
      {
        files: ['./pmRunner.ts'],
        rules: {
          'import/no-extraneous-dependencies': OFF,
        },
      },
    ],
  };

  return config;
};

module.exports = getEslintConfig;

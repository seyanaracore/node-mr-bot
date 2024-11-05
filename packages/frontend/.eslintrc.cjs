// @ts-check

const path = require('node:path')
const { getEslintConfig } = require('@packages/common/dist/config/eslint/getEslintConfig')
const { OFF, READONLY, ERROR } = require('@packages/common/dist/config/eslint/rulesValues')

const { readJson } = require('@packages/common/dist/config/helpers')

const tsConfig = path.resolve(__dirname, 'tsconfig.app.json')
const nodeConfig = path.resolve(__dirname, 'tsconfig.node.json')

const baseConfig = getEslintConfig({
  tsConfig,
})

const tsConfigNode = readJson(nodeConfig)
const extendsList = Array.isArray(baseConfig.extends) ? [...baseConfig.extends] : []

extendsList.splice(-2, 0, 'plugin:vue/vue3-recommended', 'plugin:vuejs-accessibility/recommended')

/**
 * @type {typeof baseConfig}
 */
const config = {
  ...baseConfig,
  ignorePatterns: ['dist'],
  parser: 'vue-eslint-parser',
  env: {
    ...baseConfig.env,
    browser: true,
  },
  parserOptions: {
    ...baseConfig.parserOptions,
    extraFileExtensions: ['.vue'],
  },
  rules: {
    ...baseConfig.rules,
    'vue/component-tags-order': [ERROR, {
      order: ['script', 'template', 'style'],
    }],
  },
  extends: extendsList,
  globals: {
    APP_MODE: READONLY,
  },
  overrides: [
    {
      files: tsConfigNode.include,
      env: {
        ...baseConfig.env,
        node: true,
      },
      parserOptions: {
        ...baseConfig.parserOptions,
        project: nodeConfig,
      },
      rules: {
        ...baseConfig.rules,
        'no-console': OFF,
        'import/no-extraneous-dependencies': OFF,
        '@typescript-eslint/no-var-requires': OFF,
      },
    },
  ],
}

module.exports = config

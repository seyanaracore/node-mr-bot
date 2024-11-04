// @ts-check

const path = require('node:path')
const getBaseConfig = require('@packages/common/config/eslint/getEslintConfig.cjs')
const { OFF } = require('@packages/common/config/eslint/rulesValues.cjs')

const tsConfig = path.resolve(__dirname, 'tsconfig.json')

/**
 * @typedef {import('@packages/common/config/eslint/types').EslintConfig} EslintConfig
 */

const baseConfig = getBaseConfig({
  tsConfig,
})

/**
 * @type {EslintConfig}
 */
const config = {
  ...baseConfig,
  env: {
    ...baseConfig.env,
    node: true,
  },
  ignorePatterns: ['.eslintrc.js', 'frontend-build'],
  rules: {
    ...baseConfig.rules,
    'no-console': OFF,
    '@typescript-eslint/no-var-requires': OFF,
  },
}

module.exports = config

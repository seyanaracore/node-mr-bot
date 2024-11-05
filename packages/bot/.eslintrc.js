// @ts-check

const path = require('node:path')

const { getEslintConfig } = require('@packages/common/dist/config/eslint/getEslintConfig')
const { OFF } = require('@packages/common/dist/config/eslint/rulesValues')

const tsConfig = path.resolve(__dirname, 'tsconfig.json')

const baseConfig = getEslintConfig({
  tsConfig,
})

/**
 * @type {typeof baseConfig}
 */
const config = {
  ...baseConfig,
  env: {
    ...baseConfig.env,
    node: true,
  },
  ignorePatterns: ['.eslintrc.js', 'dist'],
  rules: {
    ...baseConfig.rules,
    'no-console': OFF,
    '@typescript-eslint/no-var-requires': OFF,
  },
}

module.exports = config

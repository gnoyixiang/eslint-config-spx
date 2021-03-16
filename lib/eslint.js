module.exports = {
  extends: [
    'prettier-standard/prettier-file-base',
    'plugin:sonarjs/recommended',
    'plugin:prettier/recommended',
    'prettier-standard/end'
  ],
  parser: 'babel-eslint',
  rules: {
    'no-unused-vars': 'error',
    'sonarjs/cognitive-complexity': 'warn'
  },
  overrides: [
    {
      files: ['**/*.test.js', '**/*.spec.js'],
      rules: {
        'sonarjs/no-duplicate-string': 'off'
      }
    },
    {
      files: ['**/stories/**/*.js'],
      rules: {
        'sonarjs/no-duplicate-string': 'off'
      }
    }
  ]
}

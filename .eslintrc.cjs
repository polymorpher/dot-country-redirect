module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  extends: [
    'standard-with-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-await-in-loop': 0,
    'no-underscore-dangle': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 1,
    'comma-dangle': 0,
    'no-console': 0,
    'no-mixed-operators': 0,
    'new-cap': 0,
    'max-len': 0,
    'promise/always-return': 'off',
    'import/no-cycle': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'import/extensions': 'off',
    'object-curly-newline': ['error', { multiline: true }],
    '@typescript-eslint/restrict-template-expressions': 0,
    '@typescript-eslint/no-misused-promises': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/no-explicit-any': 0,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
  },
  plugins: ['compat'],
  settings: {
    react: { version: '18.0.2' },
    'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
  },
}

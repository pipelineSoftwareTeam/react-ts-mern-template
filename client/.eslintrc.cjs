module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: '18.2',
    },
  },
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react-refresh/only-export-components': 'warn',
    'react/react-in-jsx-scope': 0,
    'no-console': 'off',
    'no-underscore-dangle': 0,
    'no-unused-vars': 'warn',
    'comma-dangle': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 'false',
    'object-curly-newline': [
      'error',
      {
        ObjectPattern: { multiline: true },
      },
    ],
  },
};

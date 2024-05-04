module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    // 'standard-with-typescript',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', '**/*.config.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react-refresh', 'prettier', 'react-hooks'],

  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'no-console': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'arrow-body-style': ['error', 'as-needed'],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
  },
};

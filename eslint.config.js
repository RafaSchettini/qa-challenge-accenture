import cypress from 'eslint-plugin-cypress';
import globals from 'globals';

export default [
  {
    ignores: [
      'node_modules/**',
      'api/cypress/reports/**',
      'api/cypress/videos/**',
      'api/cypress/screenshots/**',
      'api/cypress/downloads/**',
      'frontend/cypress/reports/**',
      'frontend/cypress/videos/**',
      'frontend/cypress/screenshots/**',
      'frontend/cypress/downloads/**',
      '*.min.js',
    ],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        cy: 'readonly',
        Cypress: 'readonly',
      },
    },
    plugins: {
      cypress,
    },
    rules: {
      'indent': ['error', 2],
      'linebreak-style': ['error', 'unix'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'no-unused-vars': ['warn'],
      'no-console': 'off',
      'eol-last': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],
      'cypress/no-assigning-return-values': 'error',
      'cypress/no-unnecessary-waiting': 'warn',
      'cypress/assertion-before-screenshot': 'warn',
    },
  },
];

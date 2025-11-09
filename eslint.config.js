import cypress from 'eslint-plugin-cypress';
import globals from 'globals';

export default [
  {
    ignores: [
      'node_modules/**',
      'api/reports/**',
      'api/videos/**',
      'api/screenshots/**',
      'api/downloads/**',
      'frontend/reports/**',
      'frontend/videos/**',
      'frontend/screenshots/**',
      'frontend/downloads/**',
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

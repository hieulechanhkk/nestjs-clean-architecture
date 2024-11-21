module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'boundaries'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    // Boundaries Clean Architecture
    'boundaries/element-types': [
      'error',
      {
        default: 'disallow',
        rules: [
          // Presentation -> Application
          { from: 'presentation', allow: ['application', 'shared'] },
          
          // Application -> (Domain & Shared)
          { from: 'application', allow: ['domain', 'shared'] },
          
          // Domain -> Shared
          { from: 'domain', allow: ['shared'] },

          // Infrastructure -> Application & Shared
          { from: 'infrastructure', allow: ['application', 'shared'] },

          // Shared can use any other layer
          { from: 'shared', allow: ['presentation', 'application', 'domain', 'infrastructure'] },
        ],
      },
    ],
  },

  // Patterns
  settings: {
    boundaries: {
      types: [
        { type: 'presentation', pattern: 'src/presentation/*' },
        { type: 'application', pattern: 'src/application/*' },
        { type: 'domain', pattern: 'src/domain/*' },
        { type: 'infrastructure', pattern: 'src/infrastructure/*' },
        { type: 'shared', pattern: 'src/shared/*' },
      ]
    }
  }
};

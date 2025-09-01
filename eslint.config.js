const baseConfig = require('@config/eslint-config');

module.exports = [
  ...baseConfig,
  // Disable type-aware parsing (parserOptions.project) for webpack-config package files
  {
    files: ['packages/@config/webpack-config/**/*.{ts,tsx,js}'],
    languageOptions: {
      parserOptions: {
        project: false,
      },
    },
  },
  {
    ignores: [
      '**/*.d.ts',
      'dist/**/*',
      'build/**/*',
      'node_modules/**/*',
      'coverage/**/*',
      '.wp_federation/**/*',
      '**/dist/**/*',
      '**/build/**/*',
      '**/node_modules/**/*',
      '**/coverage/**/*',
      '**/.wp_federation/**/*',
    ],
  },
];

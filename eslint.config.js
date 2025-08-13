const baseConfig = require('@config/eslint-config');

module.exports = [
  ...baseConfig,
  {
    ignores: [
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

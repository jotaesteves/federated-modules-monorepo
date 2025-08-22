/* eslint-env node */
const js = require('@eslint/js');
const typescript = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');
const jestDom = require('eslint-plugin-jest-dom');
const jsxA11y = require('eslint-plugin-jsx-a11y');
const playwright = require('eslint-plugin-playwright');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const testingLibrary = require('eslint-plugin-testing-library');
const unusedImports = require('eslint-plugin-unused-imports');
const globals = require('globals');

module.exports = [
  // Base configuration for all files
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      'unused-imports': unusedImports,
    },
    rules: {
      ...js.configs.recommended.rules,

      // General
      'no-console': 'warn',
      'no-var': 'error',
      'prefer-const': 'warn',
      'object-shorthand': 'error',
      'linebreak-style': ['error', 'unix'],
      'no-undef': 'off', // Disable no-undef for React/JSX in TypeScript files

      // React
      'react/react-in-jsx-scope': 'off', // Not needed with new JSX transform
      'react/prop-types': 'off',
      'react/jsx-uses-react': 'off', // Not needed with new JSX transform
      'react/jsx-uses-vars': 'error',

      // React hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // TypeScript
      '@typescript-eslint/no-unused-vars': 'off', // Handled in TypeScript-specific config
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      '@typescript-eslint/no-explicit-any': 'warn',

      // Imports

      // Unused imports/vars
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
          // Don't report unused parameters in interface/type definitions
          ignoreRestSiblings: true,
        },
      ],

      // Accessibility
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/anchor-has-content': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/aria-props': 'warn',
      'jsx-a11y/aria-proptypes': 'warn',
      'jsx-a11y/aria-unsupported-elements': 'warn',
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/heading-has-content': 'warn',
      'jsx-a11y/img-redundant-alt': 'warn',
      'jsx-a11y/interactive-supports-focus': 'warn',
      'jsx-a11y/label-has-associated-control': 'warn',
      'jsx-a11y/mouse-events-have-key-events': 'warn',
      'jsx-a11y/no-access-key': 'warn',
      'jsx-a11y/no-autofocus': 'warn',
      'jsx-a11y/no-distracting-elements': 'warn',
      'jsx-a11y/no-redundant-roles': 'warn',
      'jsx-a11y/role-has-required-aria-props': 'warn',
      'jsx-a11y/role-supports-aria-props': 'warn',
      'jsx-a11y/scope': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
        runtime: 'automatic', // Use the new JSX transform
      },
      'import/resolver': {
        node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        typescript: {
          project: ['../tsconfig/tsconfig.json', './tsconfig.json'],
          alwaysTryTypes: true,
        },
      },
    },
  },

  // TypeScript files with stricter type-aware rules
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-misused-promises': 'warn',
      // Turn off the base rule as it can report incorrect errors in TypeScript
      'no-unused-vars': 'off',
      // Override the unused-imports rule for TypeScript files to be more lenient with interface signatures
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'none', // Don't check function arguments in TS files (common in interfaces)
          ignoreRestSiblings: true,
        },
      ],
      // Use TypeScript-specific no-unused-vars rule which better handles interfaces
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'none', // Don't report unused parameters
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
        },
      ],
    },
  },

  // Test files
  {
    files: ['**/*.{test,spec}.{js,jsx,ts,tsx}', '**/tests/**/*.{js,jsx,ts,tsx}'],
    plugins: {
      'testing-library': testingLibrary,
      'jest-dom': jestDom,
    },
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      // Testing Library rules
      'testing-library/await-async-queries': 'error',
      'testing-library/no-await-sync-queries': 'error',
      'testing-library/no-debugging-utils': 'warn',
      'testing-library/no-dom-import': 'error',

      // Jest DOM rules
      'jest-dom/prefer-checked': 'error',
      'jest-dom/prefer-enabled-disabled': 'error',
      'jest-dom/prefer-required': 'error',
      'jest-dom/prefer-to-have-attribute': 'error',
    },
  },

  // Playwright E2E files
  {
    files: ['e2e/**/*.{js,ts,jsx,tsx}', '**/*.e2e.{js,ts,jsx,tsx}'],
    plugins: {
      playwright,
    },
    rules: {
      'playwright/expect-expect': 'error',
      'playwright/max-nested-describe': 'warn',
      'playwright/missing-playwright-await': 'error',
      'playwright/no-conditional-in-test': 'warn',
      'playwright/no-element-handle': 'warn',
      'playwright/no-eval': 'error',
      'playwright/no-focused-test': 'error',
      'playwright/no-force-option': 'warn',
      'playwright/no-nested-step': 'warn',
      'playwright/no-networkidle': 'error',
      'playwright/no-page-pause': 'warn',
      'playwright/no-restricted-matchers': 'error',
      'playwright/no-skipped-test': 'warn',
      'playwright/no-unsafe-references': 'error',
      'playwright/no-useless-await': 'error',
      'playwright/no-useless-not': 'error',
      'playwright/no-wait-for-timeout': 'error',
      'playwright/prefer-lowercase-title': 'error',
      'playwright/prefer-strict-equal': 'error',
      'playwright/prefer-to-be': 'error',
      'playwright/prefer-to-contain': 'error',
      'playwright/prefer-to-have-count': 'error',
      'playwright/prefer-to-have-length': 'error',
      'playwright/require-top-level-describe': 'error',
      'playwright/valid-describe-callback': 'error',
      'playwright/valid-expect': 'error',
      'playwright/valid-title': 'error',
    },
  },

  // Node configuration files
  {
    files: [
      '**/*.config.{js,cjs,mjs,ts}',
      '**/webpack/**/*.{js,ts}',
      '**/scripts/**/*.{js,ts}',
      '**/.eslintrc.*',
      '**/eslint.config.*',
    ],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      // Disable type-aware rules for config files as they often don't need strict typing
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
    },
  },
];

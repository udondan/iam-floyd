import eslint from '@eslint/js';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import { defineConfig } from 'eslint/config';
import { readFileSync } from 'fs';
import globals from 'globals';
import tseslint from 'typescript-eslint';

// These files use the CDK variant, which only exists after `make cdk`. Before, they are linted without
// type information. After, all files are linted with tsconfig.lint-cdk.json, which resolves
// `cdk-iam-floyd` to lib/.
const cdkFiles = [
  'lib/**/*.CDK.ts',
  'lib/**/*-CDK.ts',
  'examples/**/*.cdk.ts',
  'test/cdk.ts',
  'test/jsii/consumer/**/*.ts',
];
const isCdk =
  JSON.parse(readFileSync('package.json', 'utf8')).name === 'cdk-iam-floyd';

export default defineConfig(
  {
    ignores: [
      '**/node_modules/',
      '**/cdk.out/',
      '**/*.d.ts',
      'lib/**/*.js',
      'bin/**/*.js',
      'examples/**/*.js',
      'helper/**/*.js',
      'test/**/*.js',
      'tooter/**/*.js',
      'lib/generated/',
      'dist/',
      'java/target/',
      'docs/build/',
    ],
  },
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: isCdk
        ? { project: 'tsconfig.lint-cdk.json' }
        : { projectService: true },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-deprecated': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'default',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
        },
        { selector: 'import', format: ['camelCase', 'PascalCase'] },
        {
          selector: 'variable',
          modifiers: ['const'],
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
        },
        { selector: 'typeLike', format: ['PascalCase'] },
        { selector: 'enumMember', format: ['camelCase', 'PascalCase'] },
        // Keys of objects are given by the format, like IAM policies or AWS APIs
        { selector: 'objectLiteralProperty', format: null },
        { selector: 'typeProperty', format: null },
      ],
      'prefer-template': 'error',
      // `@ts-expect-error` fails where the line is valid in the other variant
      '@typescript-eslint/ban-ts-comment': [
        'error',
        { 'ts-ignore': 'allow-with-description' },
      ],
    },
  },
  {
    // The layers call methods of the base class of the variant, which the standalone variant
    // doesn't have
    files: ['lib/shared/policy-statement/*.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-this-alias': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
    },
  },
  {
    files: cdkFiles,
    extends: isCdk ? [] : [tseslint.configs.disableTypeChecked],
  },
  {
    files: ['**/*.js', '**/*.mjs'],
    extends: [eslint.configs.recommended],
    languageOptions: { globals: globals.node },
  },
  {
    files: ['docs/source/_static/js/**/*.js'],
    languageOptions: {
      globals: { ...globals.browser, $: 'readonly' },
      sourceType: 'script',
    },
  },
  prettierRecommended,
  {
    // `make cdk` writes code that isn't formatted. The formatting is checked in the standalone variant.
    rules: isCdk ? { 'prettier/prettier': 'off' } : {},
  },
);

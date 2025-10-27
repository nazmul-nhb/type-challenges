// @ts-check

import jsConfig from '@eslint/js';
import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		ignores: [
			'node_modules/*',
			'dist/*',
			'coverage/*',
			'**/*.test.ts',
			'**/__tests__/**/*',
		],
	},
	{
		languageOptions: {
			globals: {
				...globals.node,
				...globals.browser,
				process: 'readonly',
			},
			parser: tsParser,
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
	},
	jsConfig.configs.recommended,
	...tseslint.configs.recommended,
	{
		rules: {
			...tsEslintPlugin.configs.recommended.rules,
			'prettier/prettier': 'off',
			'no-unused-expressions': 'error',
			'prefer-const': 'warn',
			// 'no-console': ['warn', { allow: ['info', 'warn', 'error', 'table'] }],
			'no-undef': 'error',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-empty-object-type': 'off',
			'@typescript-eslint/no-unused-expressions': 'error',
			'@typescript-eslint/consistent-type-imports': [
				'warn',
				{ prefer: 'type-imports' },
			],
			'no-unused-vars': [
				'off',
				{
					args: 'all',
					argsIgnorePattern: '^_',
					caughtErrors: 'all',
					caughtErrorsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					ignoreRestSiblings: false,
				},
			],
			'@typescript-eslint/no-unused-vars': [
				'off',
				{
					args: 'all',
					argsIgnorePattern: '^_',
					caughtErrors: 'all',
					caughtErrorsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					ignoreRestSiblings: false,
				},
			],
			// "no-use-before-define": "off",
		},
	},
	// {
	// 	files: ['challenges/**/utils/*.ts', 'challenges/**/*types.ts', 'challenges/**/types/*.ts'],
	// 	rules: { '@typescript-eslint/no-unsafe-function-type': 'off' },
	// },
	// {
	// 	files: ['challenges/**/*types.ts', 'challenges/**/*interfaces.ts'],
	// 	rules: { 'no-unused-vars': 'off' },
	// },
	// {
	// 	files: ['challenges/classes/**/*.ts', 'challenges/**/*types.ts', 'challenges/**/types/*.ts'],
	// 	rules: { '@typescript-eslint/no-explicit-any': 'off' },
	// },
	{
		files: ['**/*.js', '**/*.cjs'],
		rules: { '@typescript-eslint/no-require-imports': 'off' },
	},
	{
		files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
		rules: {
			// Disallow ONLY `console.log`
			'no-restricted-syntax': [
				'warn',
				{
					selector:
						"CallExpression[callee.object.name='console'][callee.property.name='log']",
					message:
						'Avoid using `console.log`; use `console.info / warn / error / table / dir` etc. instead.',
				},
			],
		},
	},
];
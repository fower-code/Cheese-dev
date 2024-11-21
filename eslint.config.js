const jsdoc = require("eslint-plugin-jsdoc");
const tsdoc = require("eslint-plugin-tsdoc");
const tsParser = require("@typescript-eslint/parser");
const tsEslintPlug = require("@typescript-eslint/eslint-plugin");

const config = [
	jsdoc.configs["flat/recommended"],
	{
		files: [
			'**/src/**/*.js',
			'**/src/**/*.ts'
		],
		languageOptions: {
			ecmaVersion: 2023,
			parser: tsParser
		},
		plugins: {
			jsdoc,
			tsEslintPlug,
			tsdoc,
		},
		rules: {
			'jsdoc/require-jsdoc': ['warn', {
				require: {
					FunctionExpression: true,
					FunctionDeclaration: true,
					MethodDefinition: true,
					ClassDeclaration: true,
					ArrowFunctionExpression: true,
				},
				contexts: [
					'MethodDefinition',
					'FunctionDeclaration',
					'ArrowFunctionExpression',
					'FunctionExpression',
				],
				checkConstructors: false,
			}],
			'jsdoc/require-description': 'warn',
			'jsdoc/require-param': 'warn',
			'jsdoc/require-returns': 'warn',
			'jsdoc/tag-lines': "off",
			'jsdoc/check-tag-names': ["warn", {
				"definedTags": [
					"remarks"
				]
			}]
		}
	}
];

module.exports = config;

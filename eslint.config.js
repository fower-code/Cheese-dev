import jsdoc from 'eslint-plugin-jsdoc';
import tsParser from "@typescript-eslint/parser";

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
        }
    }
];

export default config;

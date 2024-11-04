import jsdoc from 'eslint-plugin-jsdoc';
import tsParser from "@typescript-eslint/parser";
// const jsdoc = require("eslint-plugin-jsdoc");
// const tsParser = require("@typescript-eslint/parser");

const config = [
    // configuration included in plugin
    // jsdoc.configs["flat/recommended", "flat/recommended-error"],
    jsdoc.configs["flat/recommended"],
    // jsdoc.configs["recommended-typescript"],
    // other configuration objects...
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
                // exemptedBy: ['constructor'], // Исключаем конструкторы
            }],
            // 'jsdoc/require-jsdoc': 'error', // Требует документацию для функций
            'jsdoc/require-description': 'warn', // Требует описание для JSDoc
            'jsdoc/require-param': 'warn', // Требует описание параметров
            'jsdoc/require-returns': 'warn', // Требует описание возвращаемого значения
        }
    }
];

export default config;
// module.exports = config;

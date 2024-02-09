// import commonjs from '@rollup/plugin-commonjs';
// import json from '@rollup/plugin-json';
// import resolve from '@rollup/plugin-node-resolve';
// import typescript from '@rollup/plugin-typescript';
// import {terser} from 'rollup-plugin-terser';
// import license from 'rollup-plugin-license';
//
// import pkg from './package.json' assert { type: "json" };
//
// const isProduction = process.env.NODE_ENV === 'production';
//
// const settings = {
// 	globals: {
// 		ms: 'ms'
// 	},
// };
//
// // const packageData = {
// // 	name: "cheese",
// // 	version: "0.0.3",
// // 	main: "dist/how-long-till-lunch.min.js",
// // 	module: "dist/how-long-till-lunch.esm.js",
// // 	browser: "dist/how-long-till-lunch.umd.js",
// // 	author: "code-fun42 <iosdsbb@gmail.com>"
// // };
//
// export default {
// 	input: './src/index.ts',
// 	output: [
// 		{
// 			file: pkg.main,
// 			name: pkg.main,
// 			...settings,
// 			format: 'cjs',
// 			plugins: [
// 				isProduction && terser()
// 			]
// 		}, {
// 			file: module,
// 			...settings,
// 			name: name,
// 			format: 'es'
// 		}, {
// 			file: pkg.browser,
// 			...settings,
// 			name: name,
// 			format: 'umd'
// 		}
// 	],
// 	external: ['ms'],
//
// 	plugins: [
// 		json(),
// 		resolve({
// 			jsnext: true,
// 			main: true
// 		}),
// 		typescript({
// 			typescript: require('typescript')
// 		}),
// 		commonjs({
// 			include: 'node_modules/**',
// 			extensions: ['.js'],
// 			ignoreGlobal: false,
// 			sourceMap: false
// 		}),
// 		license({
// 			banner: `
// 		  ${pkg.name} v${pkg.version}
// 		  Copyright 2018<%= moment().format('YYYY') > 2018 ? '-' + moment().format('YYYY') : null %> ${pkg.author}
// 		`
// 		})
// 	]
// };
//

import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import alias from "@rollup/plugin-alias";
import swc from "rollup-plugin-swc3";

import pkg from './package.json' assert {type: 'json'};

export default {
	input: "src/index.ts",
	output: [
		{
			file: pkg.main,
			name: pkg.name,
			format: "cjs",
			sourcemap: true,
		},
		{
			file: pkg.module,
			name: pkg.name,
			format: "esm",
			sourcemap: true,
		},
		{
			file: pkg.browser,
			name: pkg.name,
			format: 'umd',
			sourcemap: true,
		},
	],
	plugins: [
		peerDepsExternal(),
		// resolve(),
		resolve({
			jsnext: true,
			main: true
		}),
		// commonjs(),
		commonjs({
			include: 'node_modules/**',
			extensions: ['.ts', '.js'],
			ignoreGlobal: false,
			sourceMap: false
		}),
		// typescript({
		// 	tsconfig: "./tsconfig.rollup.json"
		// }),
		swc({
			include: /\.[mc]?[jt]sx?$/,
			exclude: /node_modules/,
			tsconfig: 'tsconfig.rollup.json',
			jsc: {}
		}),
		alias({
			entries: [
				{find: '@core', replacement: 'src/core'},
				{find: '@assets', replacement: 'assets'},
			]
		})
	],
};

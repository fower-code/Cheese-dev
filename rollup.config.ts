import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import alias from "@rollup/plugin-alias";
import terser from "@rollup/plugin-terser";
import del from "rollup-plugin-delete";

import pkg from "./package.json" with {type: "json"};

const config = {
	input: "src/lib.ts",
	output: [
		{
			file: pkg.main,
			name: pkg.name,
			format: "cjs",
			sourcemap: true,
		},
		{
			file: pkg.browser,
			name: pkg.name,
			format: 'umd',
			sourcemap: true,
		},
		{
			file: pkg.module,
			name: pkg.name,
			format: "esm",
			sourcemap: true,
		},
	],
	plugins: [
		del({targets: "dist/*"}),
		resolve(),
		commonjs(),
		terser(),
		typescript({
			tsconfig: "./tsconfig.json",
			exclude: [
				"src/index.ts",
				"src/esbuild-api.ts",
				"src/core/**/*.spec.ts",
				"src/core/**/spec.ts",
			]
		}),
		alias({
			entries: [
				{find: '~core', replacement: 'src/core'},
				{find: '~assets', replacement: 'assets'},
			]
		}),
	],
};

export default config;

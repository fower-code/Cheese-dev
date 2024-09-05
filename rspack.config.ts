import path from "node:path";

import HtmlWebpackPlugin from "html-webpack-plugin";
import {Configuration, DevServer} from "@rspack/core";

const devServer: DevServer = {
	client: {
		progress: true,
		overlay: true,
	},
	hot: true,
	static: path.resolve(__dirname, "assets"),
};

const config:Configuration = {
	devtool: false,
	mode: "development",

	entry: "./src/index.ts",

	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "bundle"),
		clean: true,
	},

	devServer,

	resolve: {
		extensions: [".ts", ".js"],

		tsConfig: {
			configFile: path.resolve(__dirname, 'tsconfig.json'),
			references: 'auto',
		},
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "assets", "templates", "dev.html")
		})
	],

	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				loader: 'builtin:swc-loader',
				options: {
					"sourceMap": true,
					"jsc": {
						"parser": {
							"syntax": 'typescript',
							"decorators": true,
							"decoratorsBeforeExport": true,
						},
						"target": "esnext",
					},
				}
			},
		],
	},
};

export default config;

import type {Configuration as WebpackConfiguration} from 'webpack';
import type {Configuration as DevServerConfiguration} from "webpack-dev-server";

import {TsconfigPathsPlugin} from "tsconfig-paths-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

const devServer: DevServerConfiguration = {
	compress: true,
	port: 3000,
	http2: true,
	hot: true,
};

const config: WebpackConfiguration = {
	devtool: false,
	mode: "development",

	target: ["web", "es2023"],

	entry: "./src/index.ts",

	cache: {
		type: 'filesystem',
		allowCollectingMemory: true,
	},

	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				loader: "ts-loader",
				options: {
					transpileOnly: true,
				}
			},

			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					"style-loader",
					"css-loader"
				],
			}
		]
	},

	resolve: {
		extensions: [".ts", ".js"],

		plugins: [
			new TsconfigPathsPlugin({
				extensions: [".ts"],
			})
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: "Cheese development",
		}),
	],

	devServer,
};

module.exports = config;

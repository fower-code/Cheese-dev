import path from "node:path";

import type {Configuration as WebpackConfiguration} from 'webpack';
import type {Configuration as DevServerConfiguration} from "webpack-dev-server";

import {TsconfigPathsPlugin} from "tsconfig-paths-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const devServer: DevServerConfiguration = {
	compress: true,
	port: 3000,
	http2: true,
	hot: true,
};

const config: WebpackConfiguration = {
	devtool: false,
	mode: "production",

	target: ["web", "es2020"],

	module: {
		rules: [
			{
				test: /\.ts$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},

			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					 "css-loader"
				],
				exclude: /node_modules/,
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

		new MiniCssExtractPlugin({
			filename: "[name].css"
		}),
	],

	entry: "./src/index.ts",

	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},

	devServer,
};

module.exports = config;

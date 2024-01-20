import path from "node:path";

import type {Configuration as WebpackConfiguration} from 'webpack';

import {TsconfigPathsPlugin} from "tsconfig-paths-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";

const config: WebpackConfiguration = {
	devtool: false,
	mode: "production",

	target: ["web", "es2022"],

	entry: "./src/index.ts",

	output: {
		filename: "[name].[contenthash].js",
		assetModuleFilename: "[name].[contenthash][ext]",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},

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
				test: /\.css$/i,
				exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader"
				]
			},
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

	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin(),
			new CssMinimizerPlugin()
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: "Cheese development",
		}),

		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css"
		}),
	],
};

module.exports = config;

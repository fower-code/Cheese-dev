import path from "node:path";

import type {Configuration as WebpackConfiguration} from 'webpack';
import type {Configuration as DevServerConfiguration} from "webpack-dev-server";
import {TsconfigPathsPlugin} from "tsconfig-paths-webpack-plugin";

const devServer: DevServerConfiguration = {
   compress: true,
   port: 9000,
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
            test: /.ts$/,
            use: "ts-loader",
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

   entry: "./src/index.ts",

   output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
   },

   devServer,
};

module.exports = config;

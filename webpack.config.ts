import path from "node:path";

import webpack from 'webpack';
import {TsconfigPathsPlugin} from "tsconfig-paths-webpack-plugin";

const config: webpack.Configuration = {
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
};

module.exports = config;

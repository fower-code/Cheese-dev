import webpack from 'webpack';
import path from "path";

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
      alias: {
         "@core": path.resolve(__dirname, "src", "core"),
      },

      extensions: [".ts", ".js"],
   },

   entry: "./src/core/index.ts",

   output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
   },
};

module.exports = config;

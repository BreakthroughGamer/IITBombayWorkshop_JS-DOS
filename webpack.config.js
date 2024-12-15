
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";

export default {
  entry: "./src/index.js", // Entry point for your JS code
  target: "node",
  mode: "development",
  devtool: "source-map",
  optimization: {
    usedExports: false,
  },
  stats: {
    moduleTrace: false,
  },
  node: {
    __dirname: true,
  },
  plugin:{
    
  },
  module: {
    rules: [
      {test: /\.html$/,use:["html-loader"]}
    ]
  }
};
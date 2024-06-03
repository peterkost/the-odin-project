const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "cheap-source-map",
  devServer: {
    static: "./dist",
    hot: true,
    watchFiles: ["src/*.html"],
    open: {
      app: {
        name: "Google Chrome",
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};

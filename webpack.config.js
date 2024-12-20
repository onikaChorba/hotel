const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, "./dist"),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  entry: {
    frontpage: path.resolve(__dirname, "./src/front-page.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Front",
      template: path.resolve(__dirname, "./src/front-page.html"),
      filename: "index.html",
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    mergeDuplicateChunks: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(html)$/,
        use: ["html-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader", // Вбудовує CSS у DOM
          "css-loader", // Обробляє імпорти CSS
          "postcss-loader", // Обробляє PostCSS (за потреби)
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"), // Використовує сучасний API Dart Sass
            },
          },
        ],
      },
    ],
  },
};

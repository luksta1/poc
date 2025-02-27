// webpack.config.js
const webpack = require('webpack');
const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path:path.resolve(__dirname, "dist"),
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'echo',
      filename: 'remoteEntry.js',
      exposes: {
        './Module': './src/remote-entry.js',
      },
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    port: 3000,
  },
};
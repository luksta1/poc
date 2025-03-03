// // webpack.config.js
// const path = require('path');
// const { ModuleFederationPlugin } = require('webpack').container;
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const TerserPlugin = require("terser-webpack-plugin");

// const isDev = process.env.NODE_ENV === 'development';

// module.exports = {
//   mode: isDev ? 'development' : 'production',
//   entry: isDev ? './src/index.js' : undefined,
//   output: {
//     publicPath: 'https://golden-gelato-35f8d3.netlify.app/',
//   },
//   optimization: {
//     minimize: true,
//     minimizer: [new TerserPlugin()],
//   },
//   plugins: [
//     new ModuleFederationPlugin({
//       name: 'echo',
//       filename: 'remoteEntry.js',
//       exposes: {
//         './Module': './src/remote-entry.js',
//       },
//       library: { 
//         name: 'echo',
//         type: 'window'
//       },
//       shared: {
//         react: { singleton: false, eager: true },  // Do not share React with the host
//         'react-dom': { singleton: false, eager: true },
//       },
//     }),
//     new HtmlWebpackPlugin({
//       template: path.join(__dirname, "public", "index.html"),
//     }),
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react'],
//           },
//         },
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'],
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".js", ".jsx"],
//   },
//   externals: {
//     react: 'React19', // Use a different global variable for React 18
//     'react-dom': 'ReactDOM19', // Same for ReactDOM
//   },
//   devServer: {
//     port: 3000,
//   },
// };
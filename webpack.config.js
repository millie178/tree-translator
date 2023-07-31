const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
// const css = require('file.css')

module.exports = {
  // webpack5: true,
  //   webpack: (config) => {
  //     config.resolve.fallback = { fs: false };

  //     return config;
  //   },
  entry: {
    popup: './src/popup.jsx',
  },
  // background: './src/background.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      { 
      test: /\.(js|jsx)$/, 
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }, 
    {
      test:/\.css$/,
      use:['style-loader','css-loader']
    }
  ],
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: './src/popup.html',
    filename: 'popup.html',
  }),
    new CopyPlugin({
      patterns: [
        { from: "public"},
      ],
    }),
    new NodePolyfillPlugin(),
],
  resolve: {
    fallback: {
      "fs": false,
      "os": false,
      "path": false,
      "child_process": false
    }
}

};
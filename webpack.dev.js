const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './main.js', // Update this with your main entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname),
    },
    hot: true, // Enable hot module replacement
    open: true, // Automatically open the browser
    port: 8080, // You can change the port if necessary
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './main.html', // Path to your main.html
    }),
    new webpack.HotModuleReplacementPlugin(), // Enable hot reloading plugin
  ]
};

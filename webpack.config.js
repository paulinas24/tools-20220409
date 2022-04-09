const path = require('path');
const HTMLWebpaclPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['./src/main.js', './src/style.css'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
      test: /.css$/, 
      use: [MiniCSSExtractPlugin.loader, 'css-loader'],
    },
    ],
  },
  plugins: [
    new HTMLWebpaclPlugin ({
      template: './src/index.html',
    }), 
    new MiniCSSExtractPlugin(),
  ],
};

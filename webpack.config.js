const path = require('path');
const HTMLWebpaclPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  plugins: [
    new HTMLWebpaclPlugin ({
      template: './src/index.html',
    }), 
  ]
};

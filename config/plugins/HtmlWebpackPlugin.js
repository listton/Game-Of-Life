const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (_path) => new HtmlWebpackPlugin({
  title: 'Game Of Life',
  template: path.resolve(_path, 'app', 'index.html'),
  filename: path.resolve(_path, 'docs', 'index.html'),
});

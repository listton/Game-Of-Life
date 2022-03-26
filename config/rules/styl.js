const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const stylesHandler = MiniCssExtractPlugin.loader;

module.exports = function() {
  return {
    test: /\.styl$/i,
    use: [stylesHandler, 'css-loader', 'postcss-loader', 'stylus-loader'],
  }
};

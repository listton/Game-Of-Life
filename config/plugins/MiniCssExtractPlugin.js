const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => new MiniCssExtractPlugin({
  filename: (env === 'development') ? '[name].css' : '[name].[chunkhash:8].css'
});

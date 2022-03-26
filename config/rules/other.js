const path = require('path');

module.exports = function(_path) {
  return {
    test: /\.(png|ico|jpg|)$/i,
    use: {
      loader: 'file-loader',
      options: {
        context: path.join(_path, 'app', 'assets'),
        name: '[path][name].[hash:8].[ext]'
      }
    }
  };
};

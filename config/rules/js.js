const path = require('path');

module.exports = function(_path) {
  return {
    test: /\.(js)$/i,
    use: {
      loader: 'babel-loader',
      options: {
        configFile: path.join(_path, '.babelrc')
      }
    }
  };
};

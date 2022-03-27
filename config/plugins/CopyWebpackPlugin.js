const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (_path) => new CopyWebpackPlugin({
  patterns: [
    {
      from: path.resolve(_path, 'app', 'img'),
      to: path.resolve(_path, 'docs', 'img')
    }
  ],
});

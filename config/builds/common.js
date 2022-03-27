const path = require('path');

module.exports = function(_path, env) {
  const isDevelopment = env === 'development';

  return {
    entry: path.resolve(_path, 'app', 'js', 'index.js'),

    output: {
      path: path.resolve(_path, 'docs'),
      filename: isDevelopment ? '[name].js' : '[name].[hash:8].js',
      clean: true,
    },

    devServer: {
      port: 8000,
      hot: isDevelopment,
      compress: true,
      clientLogLevel: 'warn',
      contentBase: path.resolve(_path, 'docs'),
      watchContentBase: true,
    },

    plugins: [
      require('../plugins/HtmlWebpackPlugin')(_path),  
      require('../plugins/MiniCssExtractPlugin')(env),
      require('../plugins/CopyWebpackPlugin')(_path)
    ],

    module: {
      rules: [
        {
          oneOf: [
            require('../rules/js')(_path),
            require('../rules/styl')()
          ]
        }
      ],
    },

    resolve: {
      extensions: ['.js'],
    },
  };
}

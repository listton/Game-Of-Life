const { merge } = require('webpack-merge');

const env = process.env.NODE_ENV;
const isDevelopment = env === 'development';

const commonConfig = require('./config/builds/common');
const productionConfig = require('./config/builds/env/production');
const developmentConfig = require('./config/builds/env/development');

const envConfig = isDevelopment ? developmentConfig : productionConfig;

const config = merge(
  commonConfig(__dirname, env),
  envConfig()
);

module.exports = () => {
  return config;
};

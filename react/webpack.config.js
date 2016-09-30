// constants
const ENV_DEV = 'dev';
const ENV_PROD = 'prod';

// handles main vars
const env = process.env.NODE_ENV || ENV_DEV;

// imports config
const config = require('./webpack.config.dev.js'); // TODO env == ENV_DEV ? require('./webpack.config.dev.js') : {};

// webpack config
module.exports = config;
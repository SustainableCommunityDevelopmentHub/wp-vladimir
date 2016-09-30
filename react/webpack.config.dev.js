// requires
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const resolve = require('path').resolve;
const server = require('./webpack.config.dev.server');

// webpack config
module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?' + server.hostUri + ':' + server.port,
    'webpack/hot/only-dev-server',
    resolve('./react/src/index')
  ],
  output: {
    path: resolve('./react/bin'),
    filename: 'bundle.js',
    publicPath: server.hostUri + ':' + server.port + '/'
  },
  module: {
    loaders: [
      // babel
      {
        test: /\.js$/,
        include: [resolve('./react/src')],
        loaders: ['babel']
      },

      // json
      {
        test: /\.json$/,
        loader: 'json',
      },

      // static files
      {
        include: resolve('./static'),
        loader: 'file?name=[name].[ext]',
      },

      // styles
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /^((?!module\.scss).)*\.scss$/,
        loaders: [
            'style',
            'css',
            'resolve-url',
            'sass'
        ]
      },
      {
        test: /\.module\.scss$/,
        loaders: [
            'style',
            'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
            'resolve-url',
            'sass'
        ]
      },

      // images
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url?limit=10000!image-webpack',
      }
    ]
  },
  devtool: 'eval',
  plugins: [
    // module replacement
    new webpack.HotModuleReplacementPlugin(),
    // no errors
    new webpack.NoErrorsPlugin(),
  ],
  postcss: function () {
      return [autoprefixer];
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./src")]
  }
};
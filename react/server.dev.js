var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev');
var serverConfig = require('./webpack.config.dev.server')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  headers: { 'Access-Control-Allow-Origin': '*' }
}).listen(serverConfig.port, serverConfig.host, function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at ' + serverConfig.hostUri + ':' + serverConfig.port);
});
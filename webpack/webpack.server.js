const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const CURRENT_WORKING_DIR = process.cwd();
const node = { __dirname: true, __filename: true };

module.exports = {
  context: path.resolve(CURRENT_WORKING_DIR, 'server'),
  target: 'node',
  entry: {
    index: './index.js'
  },

  externals: [nodeExternals()],
  node,
  output: {
    path: path.resolve('compiled'),
    filename: '[name].js',
    publicPath: '/'
  },
  devServer: {
      historyApiFallback: true,
      hot: true
  },
  resolve: {
    modules: [
      path.resolve(CURRENT_WORKING_DIR, 'server'),
      path.resolve(CURRENT_WORKING_DIR, 'app'),
      path.resolve(CURRENT_WORKING_DIR, 'node_modules')],
    extensions: ['.js', '.jsx', '.css']
  },

  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()]
};



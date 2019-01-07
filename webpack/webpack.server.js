const path = require('path');
const nodeExternals = require('webpack-node-externals');
const autoPreFixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
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
  plugins: []
};



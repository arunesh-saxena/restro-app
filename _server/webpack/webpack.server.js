const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const CURRENT_WORKING_DIR = process.cwd();
const node = { __dirname: true, __filename: true };

module.exports = {
  context: path.resolve(CURRENT_WORKING_DIR, ''),
  target: 'node',
  entry: {
    index: './index.js'
  },

  externals: [nodeExternals()],
  node,
  output: {
    path: path.resolve(CURRENT_WORKING_DIR, 'compiled'),
    filename: '[name].js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    hot: false
  },
  resolve: {
    modules: [
      path.resolve(CURRENT_WORKING_DIR, 'src'),
      path.resolve(CURRENT_WORKING_DIR, '/'),
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
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'uploads/[name].[ext]',
              limit: 10000,
            },
          },
        ],
        include: path.resolve(CURRENT_WORKING_DIR, ''),
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()]
};



const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CURRENT_WORKING_DIR = process.cwd();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './index.html',
    filename: 'index.html',
    inject: 'body',
});

const autoPreFixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    devtool: 'source-map',
    context: path.resolve(CURRENT_WORKING_DIR, 'app'),
    entry: {
        app: './index.jsx',
        style: './styles/app.scss',
        bootstrap: './styles/bootstrap.scss',
    },
    output: {
        path: path.resolve(CURRENT_WORKING_DIR, 'public', 'assets'),
        filename: '[name].js',
        publicPath: '/assets/',
    },
    devServer: {
        historyApiFallback: true,
        hot: false,
    },
    resolve: {
        modules: [
            path.resolve(CURRENT_WORKING_DIR, 'server'),
            path.resolve(CURRENT_WORKING_DIR, 'app'),
            path.resolve(CURRENT_WORKING_DIR, 'node_modules'),
        ],
        extensions: ['.js', '.jsx', '.css'],
    },
    module: {
        rules: [
            {
                test: /.(sass|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: false,
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoPreFixer],
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
                include: path.resolve(CURRENT_WORKING_DIR, 'app/styles'),
            },
            {
                test: /\.js$|\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: 'images/[name].[ext]',
                            limit: 10000,
                        },
                    },
                ],
                include: path.resolve(CURRENT_WORKING_DIR, 'app'),
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'styles/[name].css',
            chunkFilename: '[id].css',
        }),
        new webpack.HotModuleReplacementPlugin(),
        HtmlWebpackPluginConfig,
    ],
};

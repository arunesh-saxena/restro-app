const path = require('path');

const CURRENT_WORKING_DIR = process.cwd();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './index.html',
    filename: 'index.html',
    inject: 'body'
});

const autoPreFixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: 'source-map',
    context: path.resolve(CURRENT_WORKING_DIR, 'app'),
    entry: { app: './index.jsx', style: "./assets/styles/app.scss", bootstrap: './assets/styles/bootstrap.scss' },
    output: {
        path: path.resolve(CURRENT_WORKING_DIR, "public", "assets"),
        filename: '[name].js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
    },
    resolve: {
        modules: [
            path.resolve(CURRENT_WORKING_DIR, 'app'),
            path.resolve(CURRENT_WORKING_DIR, 'node_modules')
        ],
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
            {
                test: /.(sass|scss)$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: [{
                            loader: "css-loader",
                            options: {
                                sourceMap: true
                            }
                        }, {
                            loader: "postcss-loader",
                            options: {
                                plugins: () => [require("autoprefixer")],
                                sourceMap: true
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }]
                    }),
                include: path.resolve(CURRENT_WORKING_DIR, 'app'),
            },
            {
                test: /\.js$|\.jsx$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[path][name].[ext]',
                            limit: 10000
                        },
                    },
                ],
                include: path.resolve(CURRENT_WORKING_DIR, 'app')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({ filename: 'styles/[name].css' }),
        HtmlWebpackPluginConfig
    ]
}
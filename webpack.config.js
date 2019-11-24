/**
 * To handle routes.
 */
const path = require('path');
/**
 * Plugins.
 */
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/**
 * Export the config module for Webpack.
 */
module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader
                    },
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: 'css/[name].css'
        }),
        new HtmlWebpackPlugin({
            title: 'Plugins'
        })
    ]
};
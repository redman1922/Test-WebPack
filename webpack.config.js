const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    entry: './src/main.js',
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'main.[contenthash].js'
    },
    devServer: {
        port: 9000,
        watchFiles: ["./*"],
        open: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\\.(png|jpe?g|gif|mp3)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    // new BundleAnalyzerPlugin(),
    plugins: [
        new HtmlWebpackPlugin({ template: resolve(__dirname, "index.html") }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "src/sound",
                    to: "src/sound",
                    toType: "dir",
                },
            ],
        }),
    ]
};
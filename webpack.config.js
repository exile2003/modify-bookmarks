const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        filename: 'index_bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // assetModuleFilename: 'assets/img/[name][ext]'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                // use: [
                //     {
                //         loader: 'file-loader',
                //     },
                // ],
               type: 'asset/resource'
            }
            // {
            //     test: /\.(js)$/,
            //     use: 'babel-loader'
            // }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery': 'jquery'
        })
    ],
}
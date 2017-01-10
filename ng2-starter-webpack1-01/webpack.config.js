var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

    entry: './src/main.ts',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            { test: /\.component.ts$/, loader: 'ts!angular2-template' },
            { test: /\.ts$/, exclude: /\.component.ts$/, loader: 'ts' },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.css$/, loader: 'raw' }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};
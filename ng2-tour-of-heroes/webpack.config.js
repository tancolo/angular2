var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: './src/main.ts',
    output: {
        path: root('dist'),
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.ts', 'html', 'css']
    },
    module: {
        loaders: [{
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.css$/,
                exclude: root('src', 'app'),
                loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: ['css'] })
            },

            // all css required in src/app files will be merged in js files
            {
                test: /\.css$/,
                include: root('src', 'app'),
                loader: 'raw'
            },

            // support for .html as raw text
            {
                test: /\.html$/,
                loader: 'raw',
                exclude: root('src', 'index.html'),
                include: root('src', 'app')
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractTextPlugin({ filename: 'css/[name].css' })
    ]
};

// Helper functions
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
}
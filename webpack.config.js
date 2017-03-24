var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {

    'entry': './src/main.ts',
    'output': {
        path: 'dist',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {test: /\.ts$/, loader: 'ts-loader'},
            //{test: /\.ts$/,  loader: 'ts'},
            {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
            {test: /\.(woff|woff2|eot|ttf)(\?.*$|$)/, loader: 'file-loader'}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.scss', '.html']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        //new BundleTracker({filename: './webpack-stats.json'}),
        new CopyWebpackPlugin([
            {from: 'src/fonts/font-awesome-4.7.0', to: 'styles/fonts'},
            {from: 'src/styles/font-awesome-4.7.0', to: 'styles/css'},
            {from: 'src/app/landing/landing.component.html', to: 'templates'},
            {from: 'src/app/datetime/datetime-retrieve/datetime-retrieve.component.html', to: 'templates'},
            {from: 'src/app/app.component.html', to: 'templates'},
        ])
    ]
};

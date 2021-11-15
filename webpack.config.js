const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {test: /\.js$/, loader: 'babel-loader'},
            {test: /\.jsx$/, loader: 'babel-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};

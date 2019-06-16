const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCss = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: ['./src/app/index.js'],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [devMode ? 'style-loader' : MiniCss.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCss({
            filename: 'bundle.css'
        })
    ]
};

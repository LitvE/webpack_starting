const path = require('path');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    mode: 'development',
    entry: './home',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build.js',
    },
    watch: NODE_ENV == 'development',
    devtool: NODE_ENV == 'development' ? 'eval' : null,
    plugins: [
        new webpack.DefinePlugin({NODE_ENV: JSON.stringify(NODE_ENV)})
    ],
    // resolve: {
    //     modules: ['node_modules'],
    //     extensions: ['', 'js']
    // },
    // resolveLoader: {
    //     modules: ['node_modules'],
    //     extensions: ['.js', '.json'],
    //     mainFields: ['loader', 'main'],
    // },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            use: {
              loader: 'babel-loader',
            }
          }
        ]
      }
};
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        './public/js/index.js'
    ],
    output: {
        path: __dirname + '/public/build/',
        publicPath: 'build/',
        filename: 'build.js'
    },
    module: {
        rules: [
            { 
                test: /\.vue$/, 
                loader: 'vue-loader' 
            },
            { 
                test: /\.js$/, 
                loader: 'babel-loader', 
                exclude: /node_modules/, 
                options: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                } 
            },
            { 
                test: /\.(jpe?g|png|gif|svg)$/i, 
                loader: 'file-loader' 
            }
        ]
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.js'
        }
    }
};
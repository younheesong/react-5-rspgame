const path = require('path');
const webpack = require('webpack');

module.exports={
    mode:'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.jsx', '.js'],
    },
    entry:{
        app: './client',
    },
    module: {
        rules:[{
            test:/\.jsx?$/, 
            loader:'babel-loader',
            options:{
                presets:[
                    ['@babel/preset-env', {
                        targets:{
                            browsers: ['>5% in KR','last 2 chrome versions']
                        },
                        debug: true,
                    }], 
                    '@babel/preset-react'],
                plugins:['@babel/plugin-proposal-class-properties',
                            'react-hot-loader/babel']
            },
        }],
    },
    plugins: [
       new webpack.LoaderOptionsPlugin({debug:true}), 
    ],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
    },
}
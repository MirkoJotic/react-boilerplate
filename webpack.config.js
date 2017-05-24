const { resolve } = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/index.js',
    output: {
        path: resolve(__dirname, 'static'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            include: resolve(__dirname, 'src'),
            query: {
                presets: ['es2015', 'react', 'react-hmre']
            }
        }]
    },
    plugins: [
        new webpack.NamedModulesPlugin()
    ]
}
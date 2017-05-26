const { resolve } = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/index.js',
    output: {
        path: resolve(__dirname, 'static'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    devServer: {
        proxy: {
            '/**': {
                target: '/index.html',
                secure: false,
                bypass: function(req, res, opt) {
                    if(req.path.indexOf('.css') !== 1) {
                        return '/'
                    }
                    return '/index.html'
                }
            }
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                enforce: 'pre',
                loader: 'eslint-loader',
                options: {
                    emitWarning: true
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                include: resolve(__dirname, 'src'),
                query: {
                    presets: ['es2015', 'react', 'react-hmre']
                }
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin()
    ]
}
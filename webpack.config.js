var path = require('path');

module.exports = {
    context: __dirname + '',
    resolve: {
        root: __dirname + 'app/static'
    },
    entry: {
        app: __dirname + '/app/static/app.js'
    },
    output: {
        path: __dirname + '/public',
        libraryTarget: 'amd',
        filename: 'app.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015'],
                plugins: [
                    'transform-class-properties',
                    'transform-es2015-modules-simple-amd'
                ]
            }
        }]
    }
};

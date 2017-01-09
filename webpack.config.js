var path = require('path');

module.exports = {
    context: path.join(__dirname),
    resolve: {
        root: path.join(__dirname, '/app/static')
    },
    entry: {
        init: path.join(__dirname, '/app/static/init.js')
    },
    output: {
        path: path.join(__dirname, '/app/build'),

        // libraryTarget: 'amd',
        filename: 'init.js'
    },
    devtool: '#inline-source-map',
    module:  {
        loaders: [{
            test:    /\.js$/,
            exclude: /node_modules/,
            loader:  'babel',
            query:   {
                presets: ['es2015'],
                plugins: [
                    'transform-class-properties',
                    'transform-es2015-modules-simple-amd'
                ]
            }
        }]
    }
};
